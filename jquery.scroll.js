var req = function($) {
  $.fn.scroll = function() {
    $('html, body')
      .animate({'scrollTop': this.offset().top}, 'slow', 'swing');
  }
};

// So you can use require.js
(function(req) {
  if (typeof define === 'function' && define.amd) {
    return req(['jQuery'], scroll)
  } else {
    return req(jQuery)
  }
})(req)