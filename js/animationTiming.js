var $window = $(window);
var $resume, $careerPlann;
var resumeTop, resumeBottom;
var careerTop, careerBottom;

$(document).ready(function(){
    $resume = $("#resume");
    $careerPlann = $("#lifeGoals");
    resumeTop = $resume.offset().top;
    careerTop = $careerPlann.offset().top;
    careerBottom = careerTop + $careerPlann.height();

});

$(document).on("scroll", function(){
    var topOfWindow = $window.scrollTop();
    var bottomOfWindow = topOfWindow + $window.height();
    var center = bottomOfWindow / 2;
    if((resumeTop + 100 >= topOfWindow) && (resumeTop + 300 <= bottomOfWindow)){
        
        playResume();
    }else if((careerTop + 100 >= topOfWindow) && (careerTop + 300 <= bottomOfWindow)){
        playTimelineAnimation();
    }
    
    
});




