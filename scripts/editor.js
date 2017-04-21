(function(window, $) {
  
  'use strict';
  
  const SELECTOR_EDITOR = '.editor';
  const SELECTOR_ADD_PAGE = ".selection-pane .selections .selection.add-page";
  
  let editor;
  
  window.setupEditor = setupEditor;
  
  function setupEditor() {
		editor = $(SELECTOR_EDITOR);
    
    let page1 = addPage();
    
    generateWidgets(page1);
    
    let page2 = addPage();
    
    generateWidgets(page2);
  }
  
  function generateWidgets(page) {
    let type = 'img';
    
    for (var x = 0; x < 4; x++) {
			for (var y = 0; y < 4; y++) {
				page.addWidget(generateWidget(type), x, y);
      }
      type = type === 'img' ? 'text' : 'img';
    }
  }
  
  function addPage() {
    let page = createPage();
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
    return $(`<div class="page grid-stack" style="page-break-after: always;"></div>`)
      			.gridstack(options);
  }
  
})(window, jQuery);
