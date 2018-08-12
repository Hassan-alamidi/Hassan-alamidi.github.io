
var $navBar;
const titleVisibility = new TimelineMax({paused:true});

$(document).ready(()=>{

	$navBar = $('nav');
	$("#navButton").on("click", () => {
    	$navBar.slideToggle();
  	});

  	$(window).resize(function() {
		  //if window with is above 771px then show the full nav bar else hide it
  		if (window.innerWidth > 770) {
			$navBar.show();
  		}else{
			$navBar.hide();
		  }
	});

	//while just setting the animation without a const would have worked I wanted to ensure that calling show or hide title had no effect after the first call
	//so the title is now only toggle 
	titleVisibility.to($('#navbar'),1,{top:-50});
	
});

function hideTitle(){
	titleVisibility.play();
}

function showTitle(){
	titleVisibility.reverse();
}