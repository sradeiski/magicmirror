var express = require('express');
var router = express.Router();
var FeedParser = require('feedparser');
var iconvLite = require('iconv-lite');
var request = require('request');

var readFeed = function (url, response) {
  var feedRequest,
      feedParser,
      getParams,
      headlines,
      handleParseError,
      handleRequestError,
      maybeTranslate;

  feedRequest = request(url);
  feedRequest.setHeader('user-agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36');
  feedRequest.setHeader('accept', 'text/html,application/xhtml+xml,application/rss+xml');
  feedParser = new FeedParser();

  headlines = [];

  handleRequestError = function (error) {
    //TODO ... 
    console.log('Request error: ' + error);
    response.status(500).send(error); 
  };

  handleParseError = function (error) {
    //TODO ... 
    console.log('Parse/encoding error: ' + error);
    response.send(error); 
  };

  getParams = function (str) {
    var params = str.split(';').reduce(function (params, param) {
    var parts = param.split('=').map(function (part) { return part.trim(); });
    if (parts.length === 2) {
      params[parts[0]] = parts[1];
    }
      return params;
    }, {});
    return params;
  };

  maybeTranslate = function (res, charset) {
    var iconvLiteDecode,
        iconvLiteEncode;;
    // Use iconv if its not utf8 already.
    if (!iconvLiteDecode && charset && !/utf-*8/i.test(charset)) {
      try {
        console.log('Found charset: ' + charset);
        iconvLiteDecode = iconvLite.decodeStream(charset);
        iconvLiteEncode = iconvLite.encodeStream('utf8');
        console.log('Converting from charset %s to utf-8', charset);
        iconvLiteDecode.on('error', handleParseError);
        iconvLiteEncode.on('error', handleParseError);
        res = res.pipe(iconvLiteDecode).pipe(iconvLiteEncode);
      } catch(err) {
        res.emit('error', err);
      }
    }
    return res;
  };

  feedRequest.on('error', function (error) {
    handleRequestError(error);
  });

  feedRequest.on('response', function (res) {
    var stream = this;

    if (res.statusCode != 200) {
      return this.emit('error', new Error('Bad status code'));
    } else {
      var charset = getParams(res.headers['content-type'] || '').charset;
      res = maybeTranslate(res, charset);
      stream.pipe(feedParser);      
    }
  });

  feedParser.on('error', function(error) {
    //TODO ... 
    console.log(error);
    response.status(500).send(error); 
  });

  feedParser.on('end', function() {
    response.json(headlines);
  });

  feedParser.on('readable', function() {
    var stream = this,
        meta = this.meta,
        item;

    while (item = stream.read()) {
      headlines.push(item.title);
    }
  });
};

/* GET engadget US news */
router.get('/engadget.com', function(req, res, next) {
  readFeed('http://www.engadget.com/rss.xml', res);
});

/* GET golem news */
router.get('/golem', function(req, res, next) {
  readFeed('http://rss.golem.de/rss.php?feed=ATOM2.0', res);
});

/* GET techcrunch news */
router.get('/techcrunch/all', function(req, res, next) {
  readFeed('http://feeds.feedburner.com/TechCrunch', res);
});

/* GET techcrunch news */
router.get('/techcrunch/mobile', function(req, res, next) {
  readFeed('http://feeds.feedburner.com/Mobilecrunch', res);
});

/* GET custom news, feed url in query param 'feedUrl' */
router.get('/custom', function(req, res, next) {
  readFeed(req.query.feedUrl, res);
});

module.exports = router;
