var afbeeldingenRoot = "/sap/public/bsp/SAP/z_style/Images/";
function MM_preloadImages() { //v3.0
	var d=document; 
	if(d.images) { 
		if(!d.MM_p) {
			d.MM_p=new Array();
		}
		var i;
		var j = d.MM_p.length;
		var a = MM_preloadImages.arguments; 
		for(i=0; i<a.length; i++) {
			if (a[i].indexOf("#")!=0) { 
				d.MM_p[j]=new Image; 
				d.MM_p[j++].src= afbeeldingenRoot + a[i];
			}
		}
	}
}
// voor afbeeldingen die niet in de Z_STYLE staan
function MM_preloadImages2() { //v3.0
	var d=document; 
	if(d.images) { 
		if(!d.MM_p) {
			d.MM_p=new Array();
		}
		var i;
		var j = d.MM_p.length;
		var a = MM_preloadImages2.arguments; 
		for(i=0; i<a.length; i++) {
			if (a[i].indexOf("#")!=0) { 
				d.MM_p[j]=new Image; 
				d.MM_p[j++].src=  a[i];
			}
		}
	}
}
function cImage(img,naam) {
	img.src = afbeeldingenRoot + naam;
}
function cImage2(img,naam) {
	img.src =  naam;
}