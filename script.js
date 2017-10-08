$(document).ready(function(){
	$(function(){
		$(".creature-nav a").hover(
		function(){
			$(this).animate({
				borderBottomWidth: "2px",
				borderLeftWidth: "2px",
				color: "#303030"
			}, 
			{
				duration: "fast",
				queue: false
			});
		},
		function()
		{
			$(this).animate({
				borderBottomWidth: "0px",
				borderLeftWidth: "0px",
				color: "#FFF"
			}, 
			{
				duration: "fast",
				queue: false
			});
		}
	);
		


	$(".over-content").mouseover(function(){
		$(".creature-content").animate({
			opacity: "1"
		}, 600);
		$(".over-content").css('visibility', 'hidden');
	});

	$(".creature-content").mouseout(function(){
		$(".creature-content").animate({
			opacity: "0"
		}, 200);
		$(".over-content").css('visibility', 'visible');
	});

	// slide out

	var url = $(".next").data("next") + ".html";

	$(".next").on("click", function(){
		$(".creature-img, .creature-title").animate({
			marginLeft: "-120%"
		}, 1000, "swing");

	
		$(".over-content, .next").animate({
			marginTop: "900px"
		}, 1000, "swing", function(){
			location.href = url;
		});
	});

	//slide in
	$(".creature-title").css("marginLeft", "-1200px");
	$(".over-content, .next").css("marginTop", "900px");
	$(".creature-over-img").css("marginLeft", "-1200px");

	$(".crt-img, .creature-title").css("marginLeft", "-1200px");

	$("#ci").css({
    opacity : 0,
    display : "block" // or whateverblock
	}).animate({
    marginLeft: 0,
    opacity   : 1
	}, 2000);

	$(".creature-over-img").animate({
		marginLeft: "10%",
	}, 1000, "swing");
	$(".creature-img").animate({
		marginLeft: "0px",
	}, 1000, "swing");

	$(".creature-title").animate({
		marginLeft: "800px"
	}, 1000, "swing");

	$(".over-content, .next").animate({
		marginTop: "400px"
	}, 1000, "swing");
		
	$(".creature-title").animate({
		marginLeft: "52%"
	}, 1200, "swing");

	$(".over-content, .next").animate({
		marginTop: "22%"
	}, 1000, "swing");
	$("#output").animate({
		left: "0%"}
	, 2000);
	$("#output2").animate({
		left: "0%"}
	, 2000);
			
	$("#output3").animate({
		left: "-1%"}
	, 2000);

	$("#output4").animate({
		left: "-2%"}
	, 2000);

	$("#link1").animate({
		right: "13%"}
	, 1800);

	$("#link2").animate({
		right: "4%"}
	, 1800);

	$("#link3").animate({
		right: "10%"}
	, 1800);

	$("#link4").animate({
		right: "4%"}
	, 1800);

	$("#about-title").animate(function(){
		$("#about-title").slideDown(1500);
	})
		
		$( "#about-front" ).animate(function() {
  		// Handler for .load() called.
  			$(this).slideDown(2000);
		});
 		
 		$("#charh1").each(function() {
		     $(this).fadeIn(3000);
   		 	
		});
 		
		$("#ci").hover(function(){
        	$(this).animate({
		    height: "60%"
		  }, 900);
   		}, function(){
   			$(this).animate({
		    height: "50%"
		  }, 550);
   		});

		$("#about-title").animate({
		left:"5%"
		}, 1000);
		$(".topFloat2").animate({
			top:"30%"
		},1200);
		$(".topFloat").animate({
			top:"45%"
		},1200);
		$("#aboutText").animate({
			top:"60%"
		},1200);
		$("#char-title").animate({
			top:"5%"
		}, 1000);

		$("#charText").animate({
			top:"50%"
		}, 1000);
		$(".topFloat2inverse").animate({
			//top:"0%"
		}, 1000);
		$(".topFloatC2").animate({
			//top:"60%",
			//height:"20%"
		}, 1000);
		$(".crt-img img").animate({
			//top:"60%",
			left:"23%",
			top:"20%"
		}, 1000);
		$("#nightwatch").animate({
			//top:"60%",
			//left:"23%",
			top:"22%"
		}, 1000);
	
	});

	 $('[data-popup-open]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-open');
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
 
        e.preventDefault();
    });
 
    //----- CLOSE
    $('[data-popup-close]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-close');
        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
 
        e.preventDefault();
    });
});