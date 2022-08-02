$(document).ready(function(){
  var introOffset = $("header").innerHeight();
  $("#intro").css("top", introOffset);
  var introHeight = $("#intro").innerHeight();
  var figureOffset = introOffset + introHeight;
  $(".figures").css("marginTop", figureOffset + 50);
  var howOffset = $("#how").offset().top;
  var howHeight = $("#how").innerHeight();
  var asideOffset = howHeight + howOffset ;
  $("aside").css("top", asideOffset);
  var asideHeight = $("aside").innerHeight();
  var footerOffset = asideHeight + asideOffset;
  $("footer").css("top", footerOffset);
  $(".fa-navicon").click(function(){
    $(".menuitem").show();
    $(this).hide();
  });
  $(".fa-close").click(function(){
    $(".menuitem").hide();
    $(".fa-navicon").show();
  });
  $(".fa-angle-down").click(function(){
    $(this).animate({"transform" : "rotate(-180deg)"}, 500);
    $("header ul").slideToggle();
  });
  $("a").click(function(){
    $(".load").css("visibility", "visible");
  });
});

