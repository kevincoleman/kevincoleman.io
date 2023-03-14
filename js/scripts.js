function iOS() {
    return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(navigator.platform)
    // iPad on iOS 13 detection
    || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  }

function isInstalled() {
    // For iOS
    if(window.navigator.standalone) return true
  
    // For Android
    // if(window.matchMedia('(display-mode: standalone)').matches) return true
  
    // If neither is true, it's not installed
    return false
}