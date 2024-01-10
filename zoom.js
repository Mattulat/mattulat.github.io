//Zooming destroys the whole page setup
//we must kill zooming in
$(document).ready(function(){
	$(document).keydown(function(event) {
	    	    if (event.ctrlKey==true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109'  || event.which == '187'  || event.which == '189'  ) ) {
			    alert('sorry but zooming breaks page setup !!!'); 
		event.preventDefault();
		// 107 Num Key  +
		//109 Num Key  -
		//173 Min Key  hyphen/underscor Hey
		// 61 Plus key  +/=
	     }
	});

	$(window).bind('mousewheel DOMMouseScroll', function (event) {
	       if (event.ctrlKey == true) {
           alert('disabling zooming'); 
		   event.preventDefault();
	       }
	});
});
