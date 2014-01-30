// JavaScript Document


/*

	2010-02-16

	PureDOM explorer 3.1

	written by Christian Heilmann (http://icant.co.uk)

	Please refer to the pde homepage for updates: http://www.onlinetools.org/tools/puredom/

	Free for non-commercial use. Changes welcome, but no distribution without 

	the consent of the author.

*/

pde={

	// CSS classes

	pdeClass:'pde',

	hideClass:'hide',

	showClass:'show',

	parentClass:'parent',

	currentClass:'current',

	// images added to the parent links

	openImage:'http://www.csulb.edu/misc/depot/assets/UT/arrow-down.gif',

	closedImage:'http://www.csulb.edu/misc/depot/assets/UT/arrow-side.gif',

	openMessage:'close section',

	closedMessage:'open section',

  // boolean to keep the section with the STRONG open or not.

  keepCurrentOpen:true,

	// boolean to make the parent link collapse the section or not 

	linkParent:false,

	init:function(){

		pde.createClone();

		if(!document.getElementById || !document.createTextNode){return;}
		
		if (document.getElementById("contain_column1") == null){return;} // added by Fred Camba to fix js errors regarding missing element

		//var uls=document.getElementsByTagName('ul');

		// Added by Pritesh to get rid of the class = "pde" in the ULs

		var uls = document.getElementById("contain_column1").getElementsByTagName('ul');

		for(var i=0;i<uls.length;i++){

		var inneruls,parentLI;

			// Commented by Pritesh to get rid of the class = "pde" in the ULs

			

			//if(!pde.cssjs('check',uls[i],pde.pdeClass)){continue;}

			var inneruls=uls[i].getElementsByTagName('ul');

			for(var j=0;j<inneruls.length;j++){

				parentLI=inneruls[j].parentNode;

				/* Get the string text to make it clickable */

				tmp = pde.stripHTML(parentLI.innerHTML);

				/* Delete the text for now and add it later, stored in var tmp */

				parentLI.innerHTML = "<ul>"+inneruls[j].innerHTML+"</ul>";

				//alert(parentLI.innerHTML);				

				if(parentLI.getElementsByTagName('strong')[0]){

					pde.cssjs('add',parentLI,pde.currentClass);

					if(pde.keepCurrentOpen === true){continue;}

				}

				pde.cssjs('add',parentLI,pde.parentClass);

				parentLI.insertBefore(pde.clone.cloneNode(true),parentLI.firstChild);

				//Added by Greg Hosilyk to make the nested menus stay open on sub pages.

				pde.cssjs('add',inneruls[j],pde.hideClass);

                var innerlis=inneruls[j].getElementsByTagName('li');

                for (var g=0;g<innerlis.length;g++){

	                if (document.body.className == innerlis[g].className){

						if (document.body.className != '' && innerlis[g].className != ''){

							//alert('body: ' + document.body.className + ' li: ' + innerlis[g].className);

							if (pde.cssjs('check',inneruls[j],pde.hideClass)){

								pde.cssjs('remove',inneruls[j],pde.hideClass);

								}

							if (!pde.cssjs('check',inneruls[j],pde.showClass)){

								pde.cssjs('add',inneruls[j],pde.showClass);

								parentLI.getElementsByTagName('a')[0].getElementsByTagName('img')[0].src = pde.openImage;

								}

							}

						}

					}

				pde.addEvent(parentLI.getElementsByTagName('a')[0],'click',pde.showhide,false);

				/* Add the clickable text after trimming whitespaces */

				parentLI.getElementsByTagName('a')[0].innerHTML += pde.trim(tmp);

				

				parentLI.getElementsByTagName('a')[0].onclick=function(){return false;} // Safari hack

				if(pde.linkParent){

					pde.addEvent(parentLI.getElementsByTagName('a')[1],'click',pde.showhide,false);

					parentLI.getElementsByTagName('a')[1].onclick=function(){return false;} // Safari hack

				}

				//alert(BrowserDetect.browser);

				//alert(parentLI.getElementsByTagName('a')[0].childNodes[1].childNodes[0]);

				var test = parentLI.getElementsByTagName('a')[0].childNodes[1].childNodes[0];

				if(test){

					//alert(parentLI.getElementsByTagName('a')[0].childNodes[1].childNodes[0].nodeName.toLowerCase());

				if(test.nodeName.toLowerCase() == 'a' ){		

					//alert(parentLI.getElementsByTagName('a')[0].childNodes[1].childNodes.length);	

					var heading_text = parentLI.getElementsByTagName('a')[0].innerHTML.match(/<a[^>]*>[\s\S]+<\/a>/i,""); 

					//alert(heading_text);

					var newheading_text = pde.stripallHTML(heading_text[0]);

					//alert(pde.stripallHTML(heading_text[0]));

					

					/*var oldt = heading_text	;

					var newt = newheading_text	;

					var strReplaceAll = parentLI.getElementsByTagName('a')[0].innerHTML;

					strReplaceAll = strReplaceAll.replace( oldt, newt )*/

					//alert(parentLI.getElementsByTagName('a')[0].innerHTML+"\n\n"+strReplaceAll);

					//alert(pde.stripallHTML());

					//parentLI.getElementsByTagName('a')[0].innerHTML = strReplaceAll;	

					//alert(parentLI.getElementsByTagName('a')[0].innerHTML);

					//parentLI.getElementsByTagName('a')[0].innerHTML = '';

					//parentLI.getElementsByTagName('a')[0].innerHTML += strReplaceAll;

					//alert(parentLI.getElementsByTagName('a')[0].lastChild.nodeName);

					//alert(parentLI.getElementsByTagName('a')[0].childNodes[1].childNodes[0].tagName);

					//parentLI.getElementsByTagName('a')[0].innerHTML = strReplaceAll;

					parentLI.getElementsByTagName('a')[0].childNodes[1].removeChild(parentLI.getElementsByTagName('a')[0].childNodes[1].childNodes[0]);

					

					parentLI.getElementsByTagName('a')[0].childNodes[1].textContent = newheading_text;

					

					//alert(parentLI.getElementsByTagName('a')[0].lastChild.nodeName);

					//alert(parentLI.getElementsByTagName('a')[0].innerHTML+"\n\n"+strReplaceAll);

				}

			}

				

			}

		}

	},

	showhide:function(e){

		var image,message;

		var elm=pde.getTarget(e);

		var ul=elm.parentNode.getElementsByTagName('ul')[0];

		var img=elm.parentNode.getElementsByTagName('img')[0];

		if(pde.cssjs('check',ul,pde.hideClass)){

			message=pde.openMessage;

			image=pde.openImage;

			pde.cssjs('remove',elm.parentNode.getElementsByTagName('ul')[0],pde.hideClass);

			pde.cssjs('add',elm.parentNode.getElementsByTagName('ul')[0],pde.showClass);

		} else {

			message=pde.closedMessage;

			image=pde.closedImage;

			pde.cssjs('remove',elm.parentNode.getElementsByTagName('ul')[0],pde.showClass);

			pde.cssjs('add',elm.parentNode.getElementsByTagName('ul')[0],pde.hideClass);

		}

		img.setAttribute('src',image);

		img.setAttribute('alt',message);

		img.setAttribute('title',message);

		pde.cancelClick(e);

	},
	
	createClone:function(){

		pde.clone=document.createElement('a');

		pde.clone.setAttribute('href','#');

		pde.clone.appendChild(document.createElement('img'));

		pde.clone.getElementsByTagName('img')[0].src=pde.closedImage;

		pde.clone.getElementsByTagName('img')[0].alt=pde.closedMessage;

		pde.clone.getElementsByTagName('img')[0].title=pde.closedMessage;

	},

/* helper methods */

	getTarget:function(e){

		var target = window.event ? window.event.srcElement : e ? e.target : null;

		if (!target){return false;}

		if (target.nodeName.toLowerCase() != 'a'){target = target.parentNode;}

		return target;

	},
	
	cancelClick:function(e){

		if (window.event){

			window.event.cancelBubble = true;

			window.event.returnValue = false;

			return;

		}

		if (e){

			e.stopPropagation();

			e.preventDefault();

		}

	},

	addEvent: function(elm, evType, fn, useCapture){

		if (elm.addEventListener) 

		{

			elm.addEventListener(evType, fn, useCapture);

			return true;

		} else if (elm.attachEvent) {

			var r = elm.attachEvent('on' + evType, fn);

			return r;

		} else {

			elm['on' + evType] = fn;

		}

	},

	cssjs:function(a,o,c1,c2){

		switch (a){

			case 'swap':

				o.className=!pde.cssjs('check',o,c1)?o.className.replace(c2,c1):o.className.replace(c1,c2);

			break;

			case 'add':

				if(!pde.cssjs('check',o,c1)){o.className+=o.className?' '+c1:c1;}

			break;

			case 'remove':

				var rep=o.className.match(' '+c1)?' '+c1:c1;

				o.className=o.className.replace(rep,'');

			break;

			case 'check':

				return new RegExp("(^|\s)" + c1 + "(\s|$)").test(o.className)

			break;

		}

	},

	stripHTML:function(str) {

			//alert(str);

			/*str = str.replace(/<(ul|a)[^>]*\/?>.*<\/(?:\1)>/ig,"");*/

			// Strips everything between <UL> and </UL> including the text content

			str =  str.replace(/<ul[^>]*>[\s\S]+<\/ul>/ig,""); 

			// Strips other tags to get the text content

			//alert(str.match(/<(h[345])\b[^>]*>[\S\s]*?<\/\1>/gi));

			var test = str.match(/<(h[3456])\b[^>]*>[\S\s]*?<\/\1>/gi);

			if( test != null){

				//alert(str);

				str = test.join("");

				//alert(str);

			}

			else{

				//alert(str);

				str = pde.stripallHTML(str);

				//alert('here');

			}

			//str = str.replace(/(<([^>]+)>)/ig,"");

			//alert(str);

			return str;

  

	},	

	stripallHTML:function(str) {

			// Strips all tags to get the text content

			str = str.replace(/(<([^>]+)>)/ig,"");

			return str;

  

	},	

	trim:function(str){

    		return str.replace(/^\s*|\s*$/g,'');

	}

}

pde.addEvent(window, 'load', pde.init, false);