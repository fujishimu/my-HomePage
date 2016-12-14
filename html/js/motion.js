$(document).ready(function() {
  var scrollSpeed = -0.2;
  var imgWidth = 1340;
  var posX = 0;

  //スモッグがループする
  setInterval(function() {
    if(posX >= imgWidth) posX = 0;
    posX += scrollSpeed;
    $('#layerTop').css('background-position', posX + 'px 0px');
  }, 1);
});
