$(document).ready(function(){
  $("#zaxis").click(function(){
    window.open("https://yangqingalice.github.io/degreeproject/documentation/");
  });

  $("#youtube").click(function(){
    window.open("https://www.youtube.com/watch?v=XqIHYljYa8E")
  });

  $("#contact").click(function(){
    $("#info").toggle();
  });

  $(".project").click(function(){
    $(this).next().toggle();
  });

  $("#fold").click(function(){
    $(".content").hide();
  });

});
