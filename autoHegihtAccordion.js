(function($){
	$.fn.autoHegihtAccordion = function( options) {
		// set defaults options for header, content, and open
		var defaults = {
            accordionHeader: 'accordion-header',
            accordionContent: 'accordion-content',
            accordionActive: 'current-open-content',
            accordionParentHeight: 'tool-outer-wrapper',
            autoHeight: true,
            activeItem: 1,
            isExtraHeading: true,
            extraHeadingEl: '',
						fixedHeight:false
		};
		var options = $.extend({}, defaults, options);

		$(document).ready(function() {
      // hide all the accordion content
			$('.'+ options.accordionContent).hide();
			//Setting up 100% height to open content
      autoHeightAccordionContent();

      function autoHeightAccordionContent (){

        var extraHeadingHeight = options.isExtraHeading  ?  $('.'+ options.extraHeadingEl).outerHeight() : "",
            parentHeight = $("."+options.accordionParentHeight).outerHeight(),
            accordionHeadingsHeight = $('.'+ options.accordionHeader).outerHeight() * $('.'+ options.accordionHeader).length ,// - accordionHeaderActive.outerHeight(),
            // calc height of content area
            openElHeight = ( (parentHeight - accordionHeadingsHeight) - extraHeadingHeight),

            jQEl = $('.'+options.accordionHeader+'.'+options.accordionActive),
            currentElSibling = jQEl.siblings('.'+options.accordionContent);
						currentElSibling.addClass(options.accordionActive).slideDown({queue: false});


        if(jQEl){
          currentElSibling.stop().animate({
            height : openElHeight,
            queue: false
          });
          currentElSibling.css('overflow', 'auto');
        }
    }

    // click bindings on header
		$('.'+options.accordionHeader).on("click",function(e) {
      var target = $(e.target),
          parentEl = target.parent(),
          isIpad = parentEl.hasClass('.accordion-number'),
          slide = true,
          jQEl = $('.'+options.accordionHeader+'.'+options.accordionActive),
          isExpanded = $(this).hasClass(options.accordionActive),
          currentElSibling = jQEl.siblings('.'+options.accordionContent);

			// find object for the button that has been clicked
      // check if we have already clicked the currently accordion active tab
      if(isExpanded){
        // Add false to slide if content allready open
        slide = (options.fixedHeight) ? false : true;
      }
      // close all the current elements and set slide to true
      // Animation complete.
      currentElSibling.css('overflow-y', 'auto');
      currentElSibling.stop().animate({
          height: 0,
          queue: false
      },function(){

      });

      jQEl.removeClass(options.accordionActive);
      target.removeClass(options.accordionActive);

      //Removing selectd class from active number
      jQEl.parent().find(".accordion-number").removeClass("selected");

      // check the slide value to open it again
      if(slide){
        // make the clicked button accordion active and open
        $(this).addClass(options.accordionActive);
        $(this).siblings('.'+options.accordionContent).addClass(options.accordionActive).slideDown({
          queue: false
        });
        //Setting up 100% height to open content
        autoHeightAccordionContent();
        //Adding selectd class from active number
				debugger
        parentEl.find(".accordion-number").addClass("selected");
      }
			e.preventDefault();
			return false;
	   });
    });
	};
})(jQuery);


$(".secCustomBlock").autoHegihtAccordion({
  accordionHeader: 'accordion-header',
  accordionContent: 'accordion-content',
  accordionActive: 'current-open-content',
  isExtraHeading: false,
  extraHeadingEl:'accordion-header',
	autoHeight: true,
	activeItem: 1
});
