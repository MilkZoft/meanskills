var device = false;

if (window.screen.height === 1024) {
  device = 'ipad';
} else if (window.screen.height === 736) {
  device = 'iphone6plus';
} else if (window.screen.height === 667) {
  device = 'iphone6';
} else if (window.screen.height === 568) {
  device = 'iphone5';
} else if (window.screen.height === 480) {
  device = 'iphone4';
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
