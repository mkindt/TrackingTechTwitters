
var main = function () {
 var count = 0;
 var twitter = new ctwitter.CTwitter();
 twitter.stream("statuses/filter", { track:["best asheville"] }, function (stream){
  stream.on("data", function(tweet) {
   console.log(tweet.text);
    if (count < 10){
     $(".content").append("<p class='tweet'>"+tweet.text+"</p>");
     count = count + 1;
     //$(".content").remove("<p class 'tweet'>"+tweet.text+"</p>");
     //$(".content").append("<img src='"+tweet.profile_image_url+"' />" );
    }
    else {
      $(".tweet:first").slideUp(500, function() {
        $(".tweet:first").remove();
  });
      $(".content").append("<p class='tweet' style='display:none'>"+tweet.text+"</p>");
      $(".tweet:last").slideDown(500);
    }
  });
 });
 console.log(ctwitter);
 console.log("hello!!!!");
 //console.log($);
 $(".content").append("<p>Hello from jQuery...</p>");
 //$(".content").html("<p>Hello from jQuery2...</p>");
 $(".content").append("<p>Hello from jQuery3...</p>");
 $(".content").append("<p id='watch1' style='display:none'>What about this?</p>");
 $("#watch1").slideDown(500, function() {
  //alert("slide down is done");
 });

}

$(document).ready(main);
//main();
