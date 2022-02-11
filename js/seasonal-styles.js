/*$("document").ready(function(){
    $('.seasons a').click(function(e){//find all a tags inside class of seasons
        e.preventDefault();//stop default submission
        var season = $(this).attr("href");//contents of href attribute of this element
        alert(season);
    });
});
*/

$('document').ready(function(){
    //$("li.seasons a").css("color","orange");

/*
change pic with an id of logo to season
change pic with an id of wear to clothing
*/


$("li.default a").click(function(e){
    e.preventDefault(); //stops the function from going to the page


  let Default = $(this).attr("href"); //href is the attribute

   $("#wear").attr("src", "images/300x400.png");
   $("#logo").attr("src", "images/four-seasons.gif");
   $("header > h3").css("color","");
   $('html').css('background-color','')

    

     alert("This is so simple!");
});

    $("li.spring a").click(function(e){
        e.preventDefault(); //stops the function from going to the page


      let spring = $(this).attr("href"); //href is the attribute

       $("#wear").attr("src", "images/spring-wear.jpg");
       $("#logo").attr("src", "images/spring.gif");
       $("header > h3").css('color","#2B7129');
       $('html').css('background-color','#2B7129');

        

         alert("Allergy season is back!");
    });


    $("li.summer a").click(function(e){
        e.preventDefault(); //stops the function from going to the page


      let summer = $(this).attr("href"); //href is the attribute

       $("#wear").attr("src", "images/summer-wear.jpg");
       $("#logo").attr("src", "images/summer.gif");
       $("header > h3").css("color",'#EBA52B');
       $('html').css('background-color','#EBA52B');

        

         alert("Wow summer is hot!");
    });

    $("li.fall a").click(function(e){
        e.preventDefault(); //stops the function from going to the page


      let fall = $(this).attr("href"); //href is the attribute

       $("#wear").attr("src", "images/fall-wear.jpg");
       $("#logo").attr("src", "images/fall.gif");
       $("header > h3").css("color",'#A81124');
       $('html').css('background-color','#A81124');

        

         alert("Fall is a time leaves are falling! ");
    });

    $("li.winter a").click(function(e){
        e.preventDefault(); //stops the function from going to the page


      let winter = $(this).attr("href"); //href is the attribute

       $("#wear").attr("src", "images/winter-wear.jpg");
       $("#logo").attr("src", "images/winter.gif");
       $("header > h3").css("color",'#005393');
       $('html').css('background-color','#005393');

        

         alert("Winter is cold ");
    });

});