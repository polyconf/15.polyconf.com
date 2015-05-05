$(document).ready(function(){
	

	// MENU OVERLAY

	$("nav#overlay").hide();
	$("#menu-link").click(function(){
		$("nav#overlay").fadeIn();			
	})  
	$("nav#overlay a, #close-menu-link").click(function(){
		$("nav#overlay").fadeOut();
	})  

	$("header").css("min-height",$(window).height());


	if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){

/*
		$(".fixed").each(function(i,e){
			
			$(this).css("min-height",$(window).height());
			$(this)
			.find("section.content")
			.css("min-height",$(window).height())
			.attr({
				"data-anchor-target":"#"+$(this).attr("id"),
				"data-bottom-top":"opacity: 1",
				"data-top-bottom":"opacity: 1"
			})
			
			$(this)
			.find(".text")
			.attr({
				"data-anchor-target":"#"+$(this).attr("id"),
				"data-bottom-top":"top: 70%",
				"data-top-bottom":"top: 30%"
			})
	
		
		});
	
		$(".static").each(function(i,e){
//			$(this).css("min-height",$(window).height());
		})


*/

	  var s = skrollr.init({
			forceHeight: false
		});

	}


  $(".agenda .event .long").hide();
	
});