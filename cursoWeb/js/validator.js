$(document).ready(function() {	

	$("#titulo").on('click',function() {

		var html = '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//ES">'+"<html>"+$('html').html()+"</html>";

				
		$.ajax({
		  type: "GET",
		  url: "https://validator.w3.org/check",
		  data: {fragment:html},
		  
		  success: function(data,textStatus,jqXHR){
		  	console.log(jqXHR);
		  }
		});

	})

})

