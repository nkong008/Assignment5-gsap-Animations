
$(document).ready(function() {
    //jQuerry methods go here 

    gsap.registerPlugin(DrawSVGPlugin);

    //variables
    let paths = $('.flower');
    let rect = $('.building');
    let path = $('.bird');
    let ellipse = $('.circle');
    
    


    //start design 1
    let tl1 = gsap.timeline();
    tl1.from(paths, {duration: 4, autoAlpha: 0, stagger: 0.5, ease: "bounce.out", drawSVG: "1% 100%"}, );
    //end of design 1////

    //start of design 2
    //stagger seprates beginning time for each one
    let tl2 = gsap.timeline();
    tl2.from(rect , {duration: 0.5, autoAlpha: 0, stagger: 0.3, ease: "back.out"}, );
    tl2.fromTo(rect, {stroke: "#FCFC0D", drawSVG: "0%", duration: 6},{duration: 6, drawSVG: "100%", ease: "back.out(1)", stroke:"#36F8FF"}, 1)
    //end of design 2////

    //start of design 3
    let tl3 = gsap.timeline();
    tl3.fromTo(path , {stroke: "#FCFC0D", drawSVG: "0%", duration: 5},{duration: 5, drawSVG: "100%", stroke:"#36F8FF"}, )
    tl3.fromTo(ellipse , {stroke: "#36F8FF", drawSVG: "0%", duration: 5},{duration: 5, drawSVG: "100%", stroke:"#FCFC0D",stagger: 0.5}, 2 )
    //end of design 3

    GSDevTools.create();
    //jQuery ends here////////////////////
})