/* Created By : Dries.Horions@aiv.kuleuven.ac.be */
//de grootte van het scherm ophalen
var screenW = 640, screenH = 480;
if (parseInt(navigator.appVersion)>3)
{
 screenW = screen.width;
 screenH = screen.height;
}
else if (navigator.appName == "Netscape"
    && parseInt(navigator.appVersion)==3
    && navigator.javaEnabled()
   )
{
 var jToolkit = java.awt.Toolkit.getDefaultToolkit();
 var jScreenSize = jToolkit.getScreenSize();
 screenW = jScreenSize.width;
 screenH = jScreenSize.height;
}

var winW, winH;

function getWindowSize()
{
if (parseInt(navigator.appVersion)>3) {
 if (navigator.appName=="Netscape") {
  winW = window.innerWidth;
  winH = window.innerHeight;
 }
 if (navigator.appName.indexOf("Microsoft")!=-1) {
  winW = document.body.offsetWidth;
  winH = document.body.offsetHeight;
 }
}

}
