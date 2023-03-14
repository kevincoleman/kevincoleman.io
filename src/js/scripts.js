function iOS() {
    return /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
  }

function isInstalled() {
    // For iOS
    if(window.navigator.standalone) return true
  
    // For Android
    // if(window.matchMedia('(display-mode: standalone)').matches) return true
  
    // If neither is true, it's not installed
    return false
}