(function($) {
$(function() {

  $('div.pool-con').on('click', 'input:not(.radio:not(checked) + label', function() {
    $(this)
      .addClass('radio:not(checked) + label:before').siblings().removeClass('radio:not(checked) + label:before')
      .closest('div.pool-con').find('input').removeClass('radio:not(checked) + label:before').eq($(this).index()).addClass('radio:not(checked) + label:before');
  });

});
})(jQuery);
