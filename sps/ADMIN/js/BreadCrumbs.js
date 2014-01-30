// JavaScript Document
// Last Modified: March 29, 2006
// 		by: Frederick Camba
//		Replaced breadcrumbs function all together.

// NOTES: Breadcrumb Links Script, by Nate Baldwin (www.mindpalette.com)
// Modified by Frederick Camba as Parameterized function.
// Removed hideIndex variable and related code.

//-------------------------------------------------------------------------
// SCRIPT FUNCTIONS  (shouldn't need to edit code below)...
//-------------------------------------------------------------------------

// build breadcrumb links...
function BreadCrumbs(homePage,sepChars,linkHome,UToSpace,DToSpace,changeCaps,hideExt) {
var linkHTML = '';
var thisURL = window.location + '';
var urlPair = thisURL.split('//');
if (urlPair.length > 1) thisURL = urlPair[1];
var dirArray = thisURL.split('/');
var linkArray = dirArray.slice(1);
var linkDir = '/';
var currentPage = '';
if (linkHome != '' && linkHome != '/') {
	var thisTest = linkHome.split('//');
	if (thisTest.length > 1) linkHome = thisTest[1];
	startArray = linkHome.split('/');
	var backCount = 0;
	for (var n=0; n<startArray.length; n++) {
		if (startArray[n] == '..') backCount++;
			else break;
		}
	if (backCount > 0) {
		var part1 = dirArray.slice(0, (dirArray.length - backCount - 1));
		var part2 = startArray.slice(backCount);
		startArray = part1.concat(part2);
		} else {
		var newStart = new Array(dirArray[0]);
		for (var n=1; n<startArray.length; n++) {
			var thisTest = (typeof dirArray[n] != "undefined") ? dirArray[n] : false;
			if (thisTest && thisTest == startArray[n]) newStart[n] = startArray[n];
				else break;
			}
		startArray = newStart;
		}
	if (startArray.length > 1) {
		var lastOne = startArray[startArray.length - 1];
		if (lastOne != '') {
			var thisTest = lastOne.split('.');
			if (thisTest.length > 1) startArray[startArray.length - 1] = '';
				else startArray[startArray.length] = '';
			}
		if (homePage == '') homePage = startArray[startArray.length-2];
		linkArray = dirArray.slice(startArray.length - 1);
		if (startArray[0] != '') startArray[0] = "http://"+startArray[0];
		linkDir = startArray.join('/');
		} else linkArray = dirArray.slice(1);
	} else {
	linkArray = dirArray.slice(1);
	if (homePage == '') homePage = dirArray[0];
	}
var backTrack = 1;/*
if (linkArray[linkArray.length - 1] != '') {
	var lastOne = linkArray[linkArray.length - 1];
	var testName = lastOne.split('.');
	if (testName[0] == 'index' || testName[0] == 'default') {
		backTrack = 2;
		currentPage = linkArray[linkArray.length - 2];
		} else if (hideExt) currentPage = testName[0]
		else currentPage = lastOne;
	} else {
	backTrack = 2;
	currentPage = linkArray[linkArray.length - 2];
	}*/
var html = '';
if (linkArray.length >= backTrack) {
	linkArray = linkArray.slice(0, linkArray.length - backTrack);
	var links = new Array();
	if (homePage != '') {
		homePage = MPBCParseText(homePage, UToSpace, DToSpace, changeCaps);
		links[links.length] = '<a href="'+linkDir+'">'+homePage+'</a>';
		}
	var baseDir = linkDir;
	for (var n=0; n<linkArray.length; n++) {
		baseDir += linkArray[n] + '/';
		var thisText = MPBCParseText(linkArray[n], UToSpace, DToSpace, changeCaps);
		links[links.length] = '<a href="'+baseDir+'">'+thisText+'</a>';
		}
	if (currentPage != '') links[links.length] = MPBCParseText(currentPage, UToSpace, DToSpace, changeCaps);
	html = '<div class="mp_backlinks">'+links.join(sepChars)+sepChars+'<span class="bc_pagetitle">'+document.title+'</span>'+'<\/div>';
	}
document.write(html);
}
// parse string through text filters
function MPBCParseText(thisText, UToSpace, DToSpace, changeCaps) {
if (typeof thisText != "undefined" && thisText) {
	if (DToSpace) thisText = MPBCReplaceChar('-', ' ', thisText);
	if (UToSpace) thisText = MPBCReplaceChar('_', ' ', thisText);
	if (changeCaps) thisText = MPBCFixCaps(thisText, changeCaps);
	} else thisText = '';
return thisText;
}
// find and replace single character in string...
function MPBCReplaceChar(oldChar, newChar, thisString) {
var newString = '';

for (var n=0; n<thisString.length; n++) {
	newString += (thisString.charAt(n) == oldChar) ? newChar : thisString.charAt(n);
	}
return newString;
}
// determine changes in capitalization...
function MPBCFixCaps(thisString, changeCaps) {
if (changeCaps == 1) thisString = MPBCUCWords(thisString);
	else if (changeCaps == 2) thisString = thisString.toUpperCase();
	else if (changeCaps == 3) thisString = thisString.toLowerCase();
return thisString;
}
// capitalize the first letter of every word...
function MPBCUCWords(thisString) {
var thisArray = thisString.split(' ');
var newString = '';
for (var n=0; n<thisArray.length; n++) {
	var firstChar = thisArray[n].charAt(0).toUpperCase();
	var theRest = thisArray[n].substring(1, thisArray[n].length);
	newString += firstChar+theRest+' ';
	}
return newString.substring(0, newString.length - 1);
}

//  Hide script from older browsers
// script by http://www.hypergurl.com
 var urlAddress = window.location.toString();
 var pageName = document.title;

 function addToFavorites()
 {
  /*if (window.external)
  {
   window.external.AddFavorite(urlAddress,pageName)
  }
  else
  { 
   alert("Based on your type of browser, Mac users: Option+D or PC Users: CTRL+D");
  }*/
  // Rewritten by Pritesh Shah on 4/9/2007 to support Mozilla Firefox
  if (window.sidebar) { // Mozilla Firefox
		window.sidebar.addPanel(pageName, urlAddress,"");
	} else if( window.external ) { // IE
		window.external.AddFavorite( urlAddress, pageName); }
	 else { 
		alert("Based on your type of browser, Mac users: Option+D or PC Users: CTRL+D"); }
		
 }

// Courtesy of Brenda Coan college of Education
// Added 09-30-2005
function clearText(thefield){
	if (thefield.defaultValue==thefield.value)
	thefield.value = "";
}