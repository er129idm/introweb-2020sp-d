//we always include this function because it ensures the html loads before the jquery runs
$(document).ready(function(){
    //all the jquery we are writing will go inside of this function
    console.log('this document is loaded and ready')
    
    //grab btn1
    $('#btn1').click(function(){ 
        $('p').fadeOut(2000)//grab the element that will be effected, attach the event
    });
    $('#btn2').click(function(){ 
        $('p').fadeIn(2000)//grab the element that will be effected, attach the event
    });
    
    //build two more buttons
    // attach them to new html elements on your page
    //when the user clicks the button, the element will slide up or down
    
    $('#btn3').click(function(){
        $('h1').slideUp()    
    });
    $('#btn4').click(function(){
        $('h1').slideDown()    
    });
    
    $('#para1').click(function(){
        $(this).hide()
    })
    
    
    
    
    
    
    
})