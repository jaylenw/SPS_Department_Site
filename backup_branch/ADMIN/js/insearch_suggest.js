// JavaScript Document
// customized search box code based on WDC
// http://wdc.csulb.edu

if(document.getElementById){
		/* Comment starts here
		
		Please Note: If something goes wrong with Suggest feature and you need to disable the feature, comment the next line and uncomment the line after.
		So, the new code would look like:
		
		//addEvent(window,'load',load_this)
		addEvent(window,'load',insertSearchBox)		
		
		Comment ends here */
		
		addEvent(window,'load',load_this)
		//addEvent(window,'load',insertSearchBox)
	}
	
	function insertSearchBox(){
		var hanger = document.getElementById('gSearchbox')
		var hanger2 = document.getElementById('mSearchbox')
		if(hanger){
			var formContainer = document.createElement('span')
			var form = buildSearchForm()
			formContainer.appendChild(form)
			hanger.innerHTML = formContainer.innerHTML
		}
		if(hanger2){
			var formContainer = document.createElement('span')
			var form = buildSearchForm2()
			formContainer.appendChild(form)
			hanger2.innerHTML = formContainer.innerHTML
		}
	}
	
	function buildSearchForm(){
	// create the form element
	// IE doesn't seem able to do this properly width DOM, so do it with innerHTML...
	// create the following form: 
	
	//Insearch_sujest for OLD Search
	/*var form = document.createElement('form')
	form.setAttribute('id','searchbox')
	form.setAttribute('action','/search')
	form.setAttribute('method','get')
	var input = document.createElement('span')
	input.innerHTML = '<input type="hidden" name="cx" value="008228339182088589610:7g2hkai1j4c" />'
	form.appendChild(input);
	var input = document.createElement('span')
	input.innerHTML = '<input type="hidden" name="cof" value="FORID:11" />'
	form.appendChild(input);
	var label = document.createElement('span')
	label.innerHTML = '<label class="hidden" for="SiteSearch">Search CSULB</label>'
	form.appendChild(label);
	var input = document.createElement('span')
	input.innerHTML = '<input name="q" class="sitesearchbox" id="SiteSearch" alt="Search CSULB" tabindex="1" onfocus="clearText(this)" size="16" maxlength="120" />'
	form.appendChild(input);
	var input = document.createElement('span')
	input.innerHTML = '<input class="sitesearchbutton" src="http://www.csulb.edu/images/interface/searchbutton_icon.gif" width="45" height="21" alt="Search" tabindex="2" type="image" />'
	form.appendChild(input);
	return form	*/
	//End of Insearch_Sujest for OLD Search
	
	
	//Insert_Sujest for GSA. Comment this out when it is not responding
	
	var form = document.createElement('form')
	form.setAttribute('name','f')
	form.setAttribute('id','searchbox')
	form.setAttribute('action','http://google.calstate.edu/search')
	form.setAttribute('method','get')
	var input = document.createElement('span')
	input.innerHTML = '<input type="hidden" name="access" value="p" />'
	form.appendChild(input);
	var input = document.createElement('span')
	input.innerHTML = '<input type="hidden" name="site" value="csulb" />'
	form.appendChild(input);
	var input = document.createElement('span')
	input.innerHTML = '<input type="hidden" name="output" value="xml_no_dtd" />'
	form.appendChild(input);
	var input = document.createElement('span')
	input.innerHTML = '<input type="hidden" name="client" value="csulb-edu" />'
	form.appendChild(input);
	var input = document.createElement('span')
	input.innerHTML = '<input type="hidden" name="sort" value="date:D:L:d1" />'
	form.appendChild(input);
	var input = document.createElement('span')
	input.innerHTML = '<input type="hidden" name="proxystylesheet" value="csulb-edu" />'
	form.appendChild(input);
	var input = document.createElement('span')
	input.innerHTML = '<input type="hidden" name="oe" value="UTF-8" />'
	form.appendChild(input);
	var label = document.createElement('span')
	label.innerHTML = '<label class="hidden" for="SiteSearch">Search CSULB</label>'
	form.appendChild(label);
	var input = document.createElement('span')
	input.innerHTML = '<input name="q" class="sitesearchbox" id="SiteSearch" alt="Search CSULB" tabindex="1" size="20" maxlength="120" autocomplete = "off" />'
	form.appendChild(input);
	var input = document.createElement('span')
	input.innerHTML = '<input name="btnG" id="btnG" class="sitesearchbutton" src="http://www.csulb.edu/images/interface/LB_btn_srch.gif" width="50" height="20" alt="Search" tabindex="2" type="image" />'
	form.appendChild(input);

return form	

//End of Insert_Sujest for GSA
}


// Temporary Fix ---Folloing code has been modified by Massoud Abedian----
function buildSearchForm2(){
	
	//Following Snippet is for OLD Search Tool
	
	/*var form = document.createElement('form')
	form.setAttribute('id','008228339182088589610:7g2hkai1j4c')
	form.setAttribute('action','/search')
	form.setAttribute('method','get')
	var input = document.createElement('span')
	input.innerHTML = '<input type="hidden" name="cx" value="008228339182088589610:7g2hkai1j4c" />'
	form.appendChild(input);
	var input = document.createElement('span')
	input.innerHTML = '<input type="hidden" name="cof" value="FORID:11" />'
	form.appendChild(input);
	var label = document.createElement('span')
	label.innerHTML = '<label class="hidden" for="SiteSearch">Search CSULB</label>'
	form.appendChild(label);
	var input = document.createElement('span')
	input.setAttribute('class','gCSEtextfield')
	input.innerHTML = '<input name="q" class="sitesearchbox" id="SiteSearch" value="'+getSearchQuery()+'" alt="Search CSULB" tabindex="1" size="16" maxlength="120" />'
	form.appendChild(input);
	var input = document.createElement('span')
	input.innerHTML = '<input class="sitesearchbutton" src="http://www.csulb.edu/images/interface/searchbutton_icon.gif" width="45" height="21" alt="Search" tabindex="2" type="image" />'
	form.appendChild(input);
	return form	*/
	
	
	//End of Code for OLD Seach Tool
	
	
	
	
	//Snippet for GSA 
	var form = document.createElement('form')
	form.setAttribute('name','f2')
	form.setAttribute('id','searchbox2')
	form.setAttribute('action','http://google.calstate.edu/search')
	form.setAttribute('method','get')
	var input = document.createElement('span')
	input.innerHTML = '<input type="hidden" name="access" value="p" />'
	form.appendChild(input);
	var input = document.createElement('span')
	input.innerHTML = '<input type="hidden" name="site" value="csulb" />'
	form.appendChild(input);
	var input = document.createElement('span')
	input.innerHTML = '<input type="hidden" name="output" value="xml_no_dtd" />'
	form.appendChild(input);
	var input = document.createElement('span')
	input.innerHTML = '<input type="hidden" name="client" value="csulb-edu" />'
	form.appendChild(input);
	var input = document.createElement('span')
	input.innerHTML = '<input type="hidden" name="sort" value="date:D:L:d1" />'
	form.appendChild(input);
	var input = document.createElement('span')
	input.innerHTML = '<input type="hidden" name="proxystylesheet" value="csulb-edu" />'
	form.appendChild(input);
	var input = document.createElement('span')
	input.innerHTML = '<input type="hidden" name="oe" value="UTF-8" />'
	form.appendChild(input);
	
	var label = document.createElement('span')
	label.innerHTML = '<label class="hidden" for="SiteSearch2">Search CSULB</label>'
	form.appendChild(label);
	
	var input = document.createElement('span')
	input.setAttribute('class','gCSEtextfield')
	input.innerHTML = '<input name="q" class="sitesearchbox" id="SiteSearch2" alt="Search CSULB" tabindex="1" size="20" maxlength="120" autocomplete = "off" />'
	//input.innerHTML = '<input name="q2" class="sitesearchbox" id="SiteSearch2" value="'+getSearchQuery()+'" alt="Search CSULB" tabindex="1" size="16" maxlength="120" />'
	form.appendChild(input);
	var input = document.createElement('span')
	input.innerHTML = '<input name="btnG" id="btnG" class="sitesearchbutton" src="http://www.csulb.edu/images/interface/LB_btn_srch.gif" width="50" height="20" value="'+getSearchQuery()+'" alt="Search" tabindex="2" type="image" />'
	form.appendChild(input);
	return form	
	
	//End of Snippet for GSA
}

// see http://www.scottandrew.com/weblog/articles/cbs-events
// fails quietly on IE5/MAC
function addEvent(obj, evType, fn, useCapture){
	if (obj.addEventListener){
		obj.addEventListener(evType, fn, useCapture);
		return true;
	} else if (obj.attachEvent){
		var r = obj.attachEvent("on"+evType, fn);
		return r;
//	} else {alert("Handler could not be attached");
	}
}

function getSearchQuery(){
	// get the google search query term
	s = ''
	if(window.location.search){
		var z = window.location.search.split('&')
		for(i=0;i<z.length;i++){
			x = z[i].split('=')
			x[0] = x[0].replace('?','');
			if (x[0]=='q'){ s = x[1]; break;  }
		}
	}
	s = unescape(s.replace(/\+/g,' '))
	// resize the results box 
	/*if(s==''){
		setResultsBoxSize(window.wdc.googleCSE.iFrameWidth,'1em')
	}else{
		setResultsBoxSize(window.wdc.googleCSE.iFrameWidth,window.wdc.googleCSE.iFrameHeight); 
	}*/
	return s
}