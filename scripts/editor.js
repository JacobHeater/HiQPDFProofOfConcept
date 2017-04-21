(function(window, $) {
  
  'use strict';
  
  var SELECTOR_EDITOR = '.editor';
  var SELECTOR_ADD_PAGE = ".selection-pane .selections .selection.add-page";
  
  var editor;
  
  window.setupEditor = setupEditor;
  
  function setupEditor() {
		editor = $(SELECTOR_EDITOR);
    
    var page1 = addPage();
    
    generateWidgets(page1);
    
    var page2 = addPage();
    
    generateWidgets(page2);
  }
  
  function generateWidgets(page) {
    var type = 'img';
    
    for (var x = 0; x < 4; x++) {
			for (var y = 0; y < 4; y++) {
				page.addWidget(generateWidget(type), x, y);
      }
      type = type === 'img' ? 'text' : 'img';
    }
  }
  
  function addPage() {
    var page = createPage();
    editor.append(page);
    return page;
  }
  
  function createPage() {
    var options = {
        cellHeight: '250px',
      	verticalMargin: 10,
      	disableResize: true,
      	disableDrag: true,
      	float: false,
      	width: 4,
      	auto: false
    };
    return $('<div class="page grid-stack" style="page-break-after: always;"></div>')
      			.gridstack(options);
  }
  
})(window, jQuery);
