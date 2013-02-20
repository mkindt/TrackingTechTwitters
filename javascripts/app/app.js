
var main = function () {
 var count = 0;
 var rows = 0;
 var twitter = new ctwitter.CTwitter();
 twitter.stream("statuses/filter", { track:["segway"] }, function (stream){
  stream.on("data", function(tweet) {
   console.log(tweet.text);
    if (count < 10){
     $(".content").append("<p class='tweet' style='display:none'>"+tweet.text+"</p>");
     $(".tweet:eq("+count+")").fadeIn(1200);
     count = count + 1;
    }
    else {
     if (rows===10){
      rows = 0;
     }
      $(".tweet:eq("+rows+")").fadeOut(600, function() {
       $(".tweet:eq("+rows+")").replaceWith(
        "<p class='tweet' style='display:none'>"+tweet.text+"</p>");
       $(".tweet:eq("+rows+")").fadeIn(600);
       rows = rows + 1;
      });
    }
  });
 });
 console.log(ctwitter);
 console.log("hello!!!!");

 $(".content").append("<h4 id='start1' style='display:none'>Twitter analysis initiated:</h4>");
 $("#start1").slideDown(1500);
}

$(document).ready(main);

