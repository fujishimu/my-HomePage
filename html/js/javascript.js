//footer要素を書き換え
$(function() {
  var leftMargin = window.parent.screen.width * 0.05;
  $("#footer").css({
    "left" : leftMargin
  });
});


// textBox
$(document).ready(function() {
  // $("#textBox").fadeIn(1500);
  $("#textBox").css({opacity: "0"}).animate({
    "opacity": "1",
    "marginTop": "20px"
  }, 1500);

  $(".mainContents").hide();
});


var leftFlg = true;

// 要素をクリック
$("#contents .news").click(function() {
  if(leftFlg) {
    toLeft(".news");
    leftFlg = false;
    $("#textBox").css("cursor", "default");
  }
  $(".mainContents.news").show();
});

$("#contents .about").on('click', function() {
  if(leftFlg) {
    toLeft(".about");
    leftFlg = false;
    $("#textBox").css("cursor", "default");
  }
  $(".mainContents.about").show();
});

$("#contents .contact").on("click", function() {
  if(leftFlg) {
    toLeft(".contact");
    leftFlg = false;
    $("#textBox").css("cursor", "default");
  }
  $(".mainContents.contact").show();
});

$("#contents .link").on("click", function() {
  if(leftFlg) {
    toLeft(".link");
    leftFlg = false;
    $("#textBox").css("cursor", "default");
  }
  $(".mainContents.link").show();
});

// 戻るボタンをクリック
$(".backBtn").on("click", function() {
  toLeft("#mainContents");
  $("#contents h3").css("cursor", "pointer");
  leftFlg = true;
  $(".mainContents").fadeOut(2000);
});

// リストをクリックすると左に消えて、その要素内容が出てくる
function toLeft(cont) {
  if(cont == "#mainContents") {  // コンテンツが左へ
    $("#mainContents").animate({
      "left": "70vw",
      opacity: "0"
    }, 1300, "easeInCubic");
    $("#mainContents").fadeOut(2000);

    $("#textBox").delay(500);
    $("#textBox").fadeIn(0);
    $("#textBox").animate({
        "left": "60%",
        opacity: "1"
    }, 1300, "easeOutCubic");
  } else{  // メインメニューが左へ
    $("#textBox").animate({
      opacity: "0",
      "left": "100px",
      "display": "none"
    }, 1300, "easeOutCubic");
    $("#textBox").fadeOut(2000);

    $("#mainContents").delay(600);
    $("#mainContents").fadeIn(0);
    $("#mainContents").animate({
        "left": "150px",
        opacity: "1"
    }, 1300, "easeOutCubic");
  }
}



// human
var clickFlg = true;
$('#human').click(function() {
  if(clickFlg) {
    clickFlg = false;
    var burubruCnt = 4;
    var burubruWidth = 10;
    for(var i = 0; i < burubruCnt; i++) {
      $("#human").animate({"left": "+=" +burubruWidth}, 100);
      if(i != burubruWidth -1) {
        $("#human").animate({"left": "-=" + burubruWidth}, 100);
      }else {
        $("#human").animate({"left": "-=" + burubruWidth},
        100, function() {clickFlg = true});
      }

      burubruWidth /= 5;
    }
  }
});
