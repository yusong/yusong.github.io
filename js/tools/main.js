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
	}		

	setBackgroundSize();

	window.onresize = function() {
		setBackgroundSize();
	};	


});