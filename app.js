var isRed = false;
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  if(isRed){
    chrome.tabs.executeScript({
      code: 'var s=document.getElementById("div_density_styles");document.head.removeChild(s);'
    });
    isRed = false;
  }else{
    chrome.tabs.executeScript({
      code: 'var s=document.createElement("style");s.id="div_density_styles";s.innerHTML="*,html,body{background:rgba(255,0,0,0.1)!important;}";document.head.appendChild(s);'
    });
    isRed = true;
  }
});