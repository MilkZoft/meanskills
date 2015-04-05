var device = false;
var deviceWidth  = window.screen.width;
var deviceHeight = window.screen.height;

// Apple devices
if (deviceWidth === 768 && deviceHeight === 1024) {
  device = 'ipad';
} else if (deviceWidth === 414 && deviceHeight === 736) {
  device = 'iphone6plus';
} else if (deviceWidth === 375 && deviceHeight === 667) {
  device = 'iphone6';
} else if (deviceWidth === 320 && deviceHeight === 568) {
  device = 'iphone5';
} else if (deviceWidth === 320 && deviceHeight === 480) {
  device = 'iphone4';
}

// Samsung devices
if (deviceWidth === 854 || deviceHeight === 854) {
  device = 'galaxymega';
}

if (device) {
  var head = document.getElementsByTagName('head')[0];
  var link = document.createElement('link');

  link.rel  = 'stylesheet';
  link.type = 'text/css';
  link.href = '/css/mediaqueries/' + device + '.css';
  link.media = 'all';

  head.appendChild(link);
}
