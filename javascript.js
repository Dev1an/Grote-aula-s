var w;
function popupFiche(url)
{
	w = window.open( 'http://www.kuleuven.be/lokalen/' + url + '.htm',
	            "Lokalenfiche",
	            "toolbar=yes,location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=900, height=800")
	w.focus();
}
function help(id)
{
    if (typeof w != 'undefined')
    {
        w.opener = window;w.focus();
    }
    else
    {
        var left = (screenW - 400) / 2;
        var top = (screenH - 200) /2;
        var w = window.open( "empty.htm",
            "LOKALENRESERVATIEHELPWINDOW",
            "location=0,scrollbars=yes,toolbar=no, dependent=yes, screenX=0,top="+top+",left="+left+",screenY=0,height=200,resizable=no,width=400,status=yes,menubar=0");

    }
    document.helpForm.help_id.value = id;
    document.helpForm.submit();
}
function normalpointer()
{
	document.body.style.cursor= 'auto';
}
function waitpointer()
{
	document.body.style.cursor= 'wait';
}
function create_ext_link()
   {
       document.forms.lokalenboom.OnInputProcessing.value = "createlink";
       if (aantallok > 0)
       {
           document.forms.lokalenboom.submit();
       }
       else
       {
           alert("U hebt geen lokalen geselecteerd.");
       }
   }
var pw;
