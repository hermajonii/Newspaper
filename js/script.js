var e1=document.getElementById("p");
function pojacaj(e){
    $(e1).css("opacity", "0.8");
    $(e).css("opacity", "1");
    e1=e;
}

$(document).ready(function() {
    $("#prvi").animate({left: "0"},500);
    $("#drugi").animate({left: "0"},800);
    $("#treci").animate({left: "0"},1100);
    $("#desno").animate({right: "0"},2000);
    $("#frmkontakt").animate({right: "0"},2400);
    $(".siva").css("opacity","1");
    $("#frmkontakt").css("opacity","1");
    $(".siva").css("background-color","#9399a1");
    var broj=500;
    $(".horoskopSlike").animate({left: "0"},(broj=broj+200));
    $("marquee .hover").css("transition","1s");
    if( ($(window).height() +50>= $(document).height())){
        $("footer").css("bottom","0px");
        $("footer").css("opacity","1");
    }
});

$(document).scroll(function() {
    if($(window).scrollTop()  + $(window).height() > $(document).height() - 100 ) {
        $("footer").css("bottom","0px");
        $("footer").css("opacity","1");
    }
});

$("#modalniProzor").click(function() {
    $('textarea').val('');
});

// ANIMACIJA NA POČETNOJ
var i = 0;
var txt = 'DOBRO DOŠLI U REPORT NEWS! ';
$(document).ready(  
    function pisi() 
    {
        if (i < txt.length) 
        {
            $("#report").append(txt.charAt(i)) ;
            i++;
            setTimeout(pisi, 300);
        }
        if(i==txt.length)
        {
            i=0;
            $("#report").html(' ');           
        }
});

$(document).scroll(function() {
        if($(window).scrollTop()  ==0) {
            $(".m").css("opacity","1");
        }
        else
        $(".m").css("opacity","0.75");
        
        $(".m").css("transition","1s");
});

$("#modalniProzor").click(function() {
        $('textarea').val('');
});

$(".galerija").hover(
    function() {
        $(this).css("border","1px solid black")
    }, function() {
        $(this).css("border","0px solid black")
    }
);

$("body.horoskop").load(
    $("body.horoskop ul a").hover(
        function() {
            $(this).css("background-color","rgb(226, 113, 187)")
        }, function() {
            $(this).css("background-color","#343a40")
            $("#horoskop").css("background-color","rgb(226, 113, 187)");
        }
    )
);

function vrati(){
    $(window).scrollTop(0);
}

$(document).scroll(function(){
    if($(window).scrollTop()<=50) {
        $(".vrati").css({"margin-bottom": "0px", "opacity": "0.1"});
    }
    else
    $(".vrati").css({"margin-bottom": "0px", "opacity": "1"});
    
    $(".vrati").css("transition","0.6s");
});

$(".prikaziVise").click(function() { 
    if ( $(this).text() == "Prikaži više") { 
        $(this).text("Sakrij"); 
    } else { 
        $(this).text("Prikaži više"); 
    }; 
});

$("[id^='red']").focus(function() {      
    $(this).find('.button').click();
});

$(".galerije").focus(function() {      
    $(this).find('span').click();
});