#magicmirror

[![Build Status](https://travis-ci.org/sradeiski/magicmirror.svg?branch=master)](https://travis-ci.org/sradeiski/magicmirror) 
[![Dependency Status](https://david-dm.org/sradeiski/magicmirror.svg)](https://david-dm.org/sradeiski/magicmirror) 
[![devDependency Status](https://david-dm.org/sradeiski/magicmirror/dev-status.svg)](https://david-dm.org/sradeiski/magicmirror#info=devDependencies)


Node/AngularJS-based RaspberryPi project inspired by this cool project: https://github.com/MichMich/MagicMirror. 

This project is currently under development. 

## in progress
* Implementing server-side 'calendar' module (with configurable ical url) which returns configurable event metadata sets. (Module responds with the ical file, at the moment.)

## next steps 
* Change setup so the node server already includes the client application in the base route.
* Finish client-side news module.
* Finish client-side calendar module.
* Finish styling 
* Edit motivational lines to some that make sense. (Maybe there is a service out there?)
* Set up small sample mirror on my webspace to show the mirror in action. 
* Write documentation on how to configure the mirror.
* Integrate this: http://codepen.io/FWeinb/pen/oyACz
* Add second HTML page with ability to modify configuration easily and on-the-fly. 
* (Maybe in separate project) Add music player module for magic mirrors with speakers - including another (responsive design) HTML page for controlling music playback. 

## Log

#### March 18th + 19th, 2015
* Created simple server (using expressjs) to handle server calls, thus avoiding SOP problems. 
* Implemented server-side 'news' module (with pre-defined REST resources for a few of my favorite feeds and a generic resource for configurable news feeds).

#### March 15th, 2015
* Restructured the entire project and removed some dependencies along the way.

#### January 19th, 2015
* Winter break is over. Added some styling to give an idea of what things may look like.

#### December 13th, 2014 
* Simple modules 'clock', 'motivational', and 'weather' implemented and their results are displayed on a rudimentary html page. 
* The 'weather' module has been set up, but still work in progress. 

#### December 10th, 2014
* Project start.
