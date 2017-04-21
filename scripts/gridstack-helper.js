(function($) {
  
  'use strict';
  
  $.fn.addWidget = function() {
    
    var grid = this.data('gridstack');
    
    grid.addWidget.apply(grid, arguments);
    
    return this;
  };
  
})(jQuery);