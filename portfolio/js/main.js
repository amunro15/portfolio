$(".arrow").on("click",function(e){
  e.preventDefault();
  $("html,body").animate({
    scrollTop: $(".intro").offset().top
  });
});
