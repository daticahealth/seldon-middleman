function hideAll() {
  $('.content-trigger').removeClass('trigger-current');
  $('.content-trigger').attr('aria-selected','false');
  $('.content-item').addClass('hide');
  $('.content-item').attr('aria-expanded','false');
  // console.log('hideAll')
}
function currentItem(id) {
  hideAll();
  $('#t'+id).addClass('trigger-current');
  $('#c'+id).removeClass('hide');
  $('#t'+id).attr('aria-selected','true');
  $('#c'+id).attr('aria-expanded','true');
}
$(function(){
  $('#t0').hover(function() {
    currentItem(0);
  }),
  $('#t1').hover(function() {
    currentItem(1);
  }),
  $('#t2').hover(function() {
    currentItem(2);
  }),
  $('#t3').hover(function() {
    currentItem(3);
  })
})