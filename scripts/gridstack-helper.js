(function($) {
  
  'use strict';
  
  $.fn.addWidget = function() {
    
    let grid = this.data('gridstack');
    
    grid.addWidget(...arguments);
    
    return this;
  };
  
})(jQuery);