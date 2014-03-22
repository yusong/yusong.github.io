require.config({

	baseUrl : "./js"

});

require(['tools/jquery1.9.min', 
		 './css/bootstrap/js/bootstrap.min.js',		 

		], function(jq, bt) {

	/**
	 * Update background width
	 */
	var setBackgroundSize = function() {
		var height = ( window.innerHeight > 800 ) ? window.innerHeight : 800;
		$('#landing-page').css({'height': height});
		var width = ( window.innerWidth > 640 ) ? window.innerWidth : 640;
		$('#landing-page').css({'width': width});
	}		

	setBackgroundSize();

	window.onresize = function() {
		setBackgroundSize();
	};	


});