$(function() {
  $(window).scroll(function(){
    var scrolltop=$(this).scrollTop();
    if(scrolltop>=120){
      $("#elevator_item").show();
    }else{
      $("#elevator_item").hide();
    }
  });
  $("#elevator").click(function(){
    $("html,body").animate({scrollTop: 0}, 500);
  });
});
