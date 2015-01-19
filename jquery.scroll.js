jQuery.fn.scroll = function() {
  $('html, body')
    .animate({'scrollTop': function () {
      this.offset().top
    }}, 'slow', 'swing');
}
