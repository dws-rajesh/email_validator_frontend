      $(window).load(function(){
	         $("#bydomain").click(function(){
	             $(".outer-panel").find("#comanyname-search-field").fadeIn();
	             $("#prospect-search-field").hide();
	             $("#verifyemail-search-field").hide();
	             $("#name-btn").text("By Domain");
	             $(this).hide();
	             $("#bypropect").show();
	             $("#verifyemail").show();
	         });
	         $("#bypropect").click(function(){
	               $(".outer-panel").find("#prospect-search-field").fadeIn();
	              $("#comanyname-search-field").hide();
	              $("#verifyemail-search-field").hide();
	              $("#name-btn").text("By Prospect");
	              $("#bydomain").show();
	              $("#verifyemail").show();
	              $(this).hide();
	         });
	           $("#verifyemail").click(function(){
	            $(".outer-panel").find("#verifyemail-search-field").fadeIn();
	              $("#comanyname-search-field").hide();
	              $("#prospect-search-field").hide();
	               $("#name-btn").text("Verify Email");
	               $("#bydomain").show();
	               $("#bypropect").show();
	               $(this).hide();
	         });
	         $("#flip, #flip2, #flip3").click(function(){
	          $(".validates-email-listing-block").slideToggle("slow");
	      });
	      $(".accordion-panel h3:first").addClass("active");
	      $(".accordion-panel .emlist:not(:first)").hide();
	      $(".accordion-panel h3").click(function(){
	          $(this).next(".emlist").slideToggle("slow")
	          .siblings(".emlist:visible").slideUp("slow");
	          $(this).toggleClass("active");
	          $(this).siblings("h3").removeClass("active");
	      });
	       $('#m-menu').click(function() {
	       $('.sidebar').toggleClass("openside");
	       });
	       $(".tabs-menu a").click(function(event) {
	               event.preventDefault();
	               $(this).parent().addClass("current");
	               $(this).parent().siblings().removeClass("current");
	               var tab = $(this).attr("href");
	               $(".tab-content").not(tab).css("display", "none");
	               $(tab).fadeIn();
	           });
			   $(".close-b a").click(function(){
			   	$(this).parents(".upload-drag-panel").hide();
			});
				$(".gird-ico").click(function(){
			 $(this).parent("li").addClass("current");
			 $(this).parent().siblings("li").removeClass("current");
			 $(".view-area").addClass("grid-tumbnales");
			  $(".view-area").removeClass("list-tumbnales");
			});
			$(".list-view-ico").click(function(){
			 $(this).parents("li").addClass("current");
			 $(this).parent().siblings("li").removeClass("current");
			 $(".view-area").addClass("list-tumbnales");
			  $(".view-area").removeClass("grid-tumbnales");
			});
			$('.ng-binding').click(function(){
				$('.accordion-panel').find(".emlist").removeClass("hello");
				$(this).next('.emlist').addClass('hello');
			});
		
	   });