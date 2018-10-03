function hideAll() {
  $('.content-item').addClass('hide');
  $('.content-trigger').removeClass('trigger-current');
  // console.log('hideAll')
}
$(function(){
  $('#t0').hover(function() {
    hideAll();
    $('#t0').addClass('trigger-current');
    $('#c0').removeClass('hide');
  }),
  $('#t1').hover(function() {
    hideAll();
    $('#t1').addClass('trigger-current');
    $('#c1').removeClass('hide');
  }),
  $('#t2').hover(function() {
    hideAll();
    $('#t2').addClass('trigger-current');
    $('#c2').removeClass('hide');
  }),
  $('#t3').hover(function() {
    hideAll();
    $('#t3').addClass('trigger-current');
    $('#c3').removeClass('hide');
  })
})