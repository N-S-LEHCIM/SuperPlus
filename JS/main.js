


// ---------Responsive-navbar-active-animation-----------
function test(){
	var tabsNewAnim = $('#navbarSupportedContent');
	var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
	var activeItemNewAnim = tabsNewAnim.find('.active');
	var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
	var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
	var itemPosNewAnimTop = activeItemNewAnim.position();
	var itemPosNewAnimLeft = activeItemNewAnim.position();
	$(".hori-selector").css({
		"top":itemPosNewAnimTop.top + "px", 
		"left":itemPosNewAnimLeft.left + "px",
		"height": activeWidthNewAnimHeight + "px",
		"width": activeWidthNewAnimWidth + "px"
	});
	$("#navbarSupportedContent").on("click","li",function(e){
		$('#navbarSupportedContent ul li').removeClass("active");
		$(this).addClass('active');
		var activeWidthNewAnimHeight = $(this).innerHeight();
		var activeWidthNewAnimWidth = $(this).innerWidth();
		var itemPosNewAnimTop = $(this).position();
		var itemPosNewAnimLeft = $(this).position();
		$(".hori-selector").css({
			"top":itemPosNewAnimTop.top + "px", 
			"left":itemPosNewAnimLeft.left + "px",
			"height": activeWidthNewAnimHeight + "px",
			"width": activeWidthNewAnimWidth + "px"
		});
	});
}
$(document).ready(function(){
	setTimeout(function(){ test(); });
});
$(window).on('resize', function(){
	setTimeout(function(){ test(); }, 500);
});
$(".navbar-toggler").click(function(){
	$(".navbar-collapse").slideToggle(300);
	setTimeout(function(){ test(); });
});
// --------------add active class-on another-page move----------
jQuery(document).ready(function($){
	// Get current path and find target link
	var path = window.location.pathname.split("/").pop();

	// Account for home page with empty path
	if ( path == '' ) {
		path = 'index.html';
	}

	var target = $('#navbarSupportedContent ul li a[href="'+path+'"]');
	// Add active class to target link
	target.parent().addClass('active');
});
// ---------Responsive-navbar-active-animation-----------


// jQuery(document).ready(function(event){
//   var isAnimating = false,
//     newLocation = '';
//     firstLoad = false;
  
//   //trigger smooth transition from the actual page to the new one 
//   $('main').on('click', '[data-type="page-transition"]', function(event){
//     event.preventDefault();
//     //detect which page has been selected
//     var newPage = $(this).attr('href');
//     //if the page is not already being animated - trigger animation
//     if( !isAnimating ) changePage(newPage, true);
//     firstLoad = true;
//   });

//   //detect the 'popstate' event - e.g. user clicking the back button
//   $(window).on('popstate', function() {
//   	if( firstLoad ) {
//       /*
//       Safari emits a popstate event on page load - check if firstLoad is true before animating
//       if it's false - the page has just been loaded 
//       */
//       var newPageArray = location.pathname.split('/'),
//         //this is the url of the page to be loaded 
//         newPage = newPageArray[newPageArray.length - 1];

//       if( !isAnimating  &&  newLocation != newPage ) changePage(newPage, false);
//     }
//     firstLoad = true;
// 	});

// 	function changePage(url, bool) {
//     isAnimating = true;
//     // trigger page animation
//     $('body').addClass('page-is-changing');
//     $('.cd-loading-bar').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
//     	loadNewContent(url, bool);
//       newLocation = url;
//       $('.cd-loading-bar').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
//     });
//     //if browser doesn't support CSS transitions
//     if( !transitionsSupported() ) {
//       loadNewContent(url, bool);
//       newLocation = url;
//     }
// 	}

// 	function loadNewContent(url, bool) {
// 		url = ('' == url) ? 'index.html' : url;
//   	var newSection = 'cd-'+url.replace('.html', '');
//   	var section = $('<div class="cd-main-content '+newSection+'"></div>');
  		
//   	section.load(url+' .cd-main-content > *', function(event){
//       // load new content and replace <main> content with the new one
//       $('main').html(section);
//       //if browser doesn't support CSS transitions - dont wait for the end of transitions
//       var delay = ( transitionsSupported() ) ? 1200 : 0;
//       setTimeout(function(){
//         //wait for the end of the transition on the loading bar before revealing the new content
//         ( section.hasClass('cd-about') ) ? $('body').addClass('cd-about') : $('body').removeClass('cd-about');
//         $('body').removeClass('page-is-changing');
//         $('.cd-loading-bar').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
//           isAnimating = false;
//           $('.cd-loading-bar').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
//         });

//         if( !transitionsSupported() ) isAnimating = false;
//       }, delay);
      
//       if(url!=window.location && bool){
//         //add the new page to the window.history
//         //if the new page was triggered by a 'popstate' event, don't add it
//         window.history.pushState({path: url},'',url);
//       }
// 		});
//   }

//   function transitionsSupported() {
//     return $('html').hasClass('csstransitions');
//   }
// });
