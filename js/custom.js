(function($) {

	"use strict";

	/* ----------------------------------------------------------- */
	/*  FUNCTION TO STOP LOCAL AND YOUTUBE VIDEOS IN SLIDESHOW
    /* ----------------------------------------------------------- */

	function stop_videos() {
		var video = document.getElementById("video");
		if (video.paused !== true && video.ended !== true) {
			video.pause();
		}
		$('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	}

	$(document).ready(function() {

		/* ----------------------------------------------------------- */
		/*  STOP VIDEOS
        /* ----------------------------------------------------------- */

		$('.slideshow nav span').on('click', function () {
			stop_videos();
		});

		/* ----------------------------------------------------------- */
		/*  FIX REVEALATOR ISSUE AFTER PAGE LOADED
        /* ----------------------------------------------------------- */

		$(".revealator-delay1").addClass('no-transform');

		/* ----------------------------------------------------------- */
		/*  PORTFOLIO GALLERY
        /* ----------------------------------------------------------- */

		if ($('.grid').length) {
			new CBPGridGallery( document.getElementById( 'grid-gallery' ) );
		}

		/* ----------------------------------------------------------- */
		/*  BUTTONS ANIMATION
        /* ----------------------------------------------------------- */
		function checkSize() {
			if ($( document ).width() > 992) {
				var btn_hover = "";
				$(".btn").each(function() {
					var btn_text = $(this).text();
					$(this).addClass(btn_hover).empty().append("<span data-hover='" + btn_text + "'>" + btn_text + "</span>");
				});
			}
		}
		checkSize();
		window.addEventListener('resize', function () {
			checkSize();
		});

		/* ----------------------------------------------------------- */
		/*  HIDE HEADER WHEN PORTFOLIO SLIDESHOW OPENED
        /* ----------------------------------------------------------- */

		$(".grid figure").on('click', function() {
			$("#navbar-collapse-toggle").addClass('hide-header');
		});

		/* ----------------------------------------------------------- */
		/*  SHOW HEADER WHEN PORTFOLIO SLIDESHOW CLOSED
        /* ----------------------------------------------------------- */

		$(".nav-close").on('click', function() {
			$("#navbar-collapse-toggle").removeClass('hide-header');
		});
		$(".nav-prev").on('click', function() {
			if ($('.slideshow ul li:first-child').hasClass('current')) {
				$("#navbar-collapse-toggle").removeClass('hide-header');
			}
		});
		$(".nav-next").on('click', function() {
			if ($('.slideshow ul li:last-child').hasClass('current')) {
				$("#navbar-collapse-toggle").removeClass('hide-header');
			}
		});

		/* ----------------------------------------------------------- */
		/*  PORTFOLIO DIRECTION AWARE HOVER EFFECT
        /* ----------------------------------------------------------- */

		var item = $(".grid li figure");
		var elementsLength = item.length;
		for (var i = 0; i < elementsLength; i++) {
			$(item[i]).hoverdir();
		}

		/* ----------------------------------------------------------- */
		/*  AJAX CONTACT FORM
        /* ----------------------------------------------------------- */

		$(".contactform").on("submit", function() {
			$(".output_message").text("Sending...");

			var form = $(this);
			$.ajax({
				url: form.attr("action"),
				method: form.attr("method"),
				data: form.serialize(),
				success: function(result) {
					if (result == "success") {
						$(".form-inputs").css("display", "none");
						$(".box p").css("display", "none");
						$(".contactform").find(".output_message").addClass("success");
						$(".output_message").text("Message Sent!");
					} else {
						$(".tabs-container").css("height", "440px");

						$(".contactform").find(".output_message").addClass("error");
						$(".output_message").text("Error Sending!");
					}
				}
			});

			return false;
		});

	});

	$(document).keyup(function(e) {

		/* ----------------------------------------------------------- */
		/*  KEYBOARD NAVIGATION IN PORTFOLIO SLIDESHOW
        /* ----------------------------------------------------------- */
		if (e.keyCode === 27) {
			stop_videos();
			$('.close-content').click();
			$("#navbar-collapse-toggle").removeClass('hide-header');
		}
		if ((e.keyCode === 37) || (e.keyCode === 39)) {
			stop_videos();
		}
	});


})(jQuery);



$(document).ready(function(){
    $("#submit-form").validate({
        errorClass: 'errors',
        rules:{
            name:{
                required:true,
                minlength:4
            },
            email:{
                required:true,
                email:true
            },
            subject:{
                required:true
            },
            message:{
                required:true
            }
        },
        message:{
            name:{
                required:"Enter your name.",
                minlength:"Please enter atleast 4 characters"
            },
            email:{
                required:"Enter your mail id",
                email:"Please enter a valid mail id"
            },
            country:{
                required:"Please select your country"
            },
            message:{
                required:"Please type your message"
            }
        }
    })
})

$("#submit-form").submit((e)=>{
    var isvalid = $("#submit-form").valid();
    if(isvalid){
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbxx1z-EzoG6U-rgXJbin10Z_o1uWx3-_Eun7LlU/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
      
    })
}   
})



















// $("#submit-form").submit((e)=>{
//     e.preventDefault()
//     $.ajax({
//         url:"https://script.google.com/macros/s/AKfycbymkPXE61SYyfpQGKWGFAOk3zxTA9pKRlq9T-j_7aOCggyDFITkRYGh5A/exec",
//         data:$("#submit-form").serialize(),
//         method:"post",
//         success:function (response){
//             alert("Form submitted successfully")
//             window.location.reload()
//             //window.location.href="https://google.com"
//         },
//         error:function (err){
//             alert("Something Error")

//         }
//     })
// })