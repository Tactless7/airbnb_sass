(function(){
	'use strict';

	var app = {
		display: false,
		init: function(){
			this.listeners();
		},
		listeners: function(){
			$('#logo').on('click', function(){
				if(app.display === false){
					$('.right-menu').css('display', 'block');
					app.display = true;
				}
				else {
					$('.right-menu').css('display', 'none');
					app.display = false;				
				}
			});
		}
	}
	app.init();
})();