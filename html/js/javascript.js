$(document).ready(function() {
  $('.animsition').animsition({
    inClass: 'fade-in-right-sm',
    outClass: 'fade-out-left',
    inDuration: 1000,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target='_blank']):not([href^='#'])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src='loading.svg' />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // 'browser' option allows you to disable the 'animsition' in case the css property in the array is not supported by your browser.
    // The default setting is to disable the 'animsition' in a browser that does not support 'animation-duration'.
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });

  $('#human').animate({
    opacity: '1',
    left: '150'
  }, 1000);
});


// human
var clickCount = 0;
var clickFlg = true;
var angFlg = false;
const angTimer = 60000;
const angInterval = 1000;
$('#human .angry').hide();
$('#human').click(function() {
  if(clickCount == 10) {
    jump();
    $('#human .angry').fadeIn();
    angFlg = true;
    clickCount = 0;
    setInterval(angry(), angInterval);
    setTimeout(function() {
      angFlg = false;
      $('#human .angry').fadeOut();
      console.log("flush angry");
    }, angTimer);
  }else {
    if(!angFlg) step();
  }
});

$('.top-link').click(function() {
  $('#human').animate({
    'left': '-10',
    opacity: '0'
  }, 500);
});

$(function() {
  if(angFlg) setInterval(angry(), angInterval);
});

function jump() {
  $('#human').animate({
    'top': '300'
  }, 100);
  $('#human').animate({
    'top': '410'
  },100);
}

function step() {
  if(clickFlg) {
    clickCount++;
    console.log('clickCount: ' + clickCount);
    clickFlg = false;
    var burubruCnt = 4;
    var burubruWidth = 10;
    for(var i = 0; i < burubruCnt; i++) {
      $('#human').animate({'left': '+=' +burubruWidth}, 70);
      if(i != burubruWidth -1) {
        $('#human').animate({'left': '-=' + burubruWidth}, 70);
      }else {
        $('#human').animate({'left': '-=' + burubruWidth},
        100, function() {clickFlg = true});
      }
      burubruWidth /= 5;
    }
  }
}

function angry() {
  console.log("angry");
  $('#human .angry').animate({
    opacity: '0'
  }, 400);
  $('#human .angry').animate({
    opacity: '1'
  }, 400);
}
