"use strict"

//funkcja document ready - wersja skrócona
//$(function () {
//
//    $("#first").css({
//        color: 'red',
//        'background-color': 'green'
//    })
//
//})
//$(function () {
//    var tekstDoKonsoli = $(".p1");
//    wyrzucTextParagrafu();
//
//    function wyrzucTextParagrafu() {
//        console.log(tekstDoKonsoli.text())
//        tekstDoKonsoli.text("to jest zmieniony tekst");
//        console.log(tekstDoKonsoli.text())
//    }
//})

//$(function () {
//    var innyParagraf = $(".p2");
//    innyParagraf.html("to jest <strong>HTML</strong");
//    innyParagraf.append("coś na koncu");
//    innyParagraf.prepend("coś na początku");
//    innyParagraf.after("<p>kolejny paragraf wrzucony z jqery</p>");
//
//    //    $(".strong").remove();
//
//    $("p").css({
//        "font-size": "30px",
//        color: "red"
//    })
//
//})

//
//$(function () {
//
//    var elementP2 = $(".p2").eq(1);
//
//    elementP2.css({
//
//        "background-color": "green"
//    })
//})
//
//
//
//$(function () {
//
//    $("p").addClass(function (index) {
//        return ("paragraf-" + index)
//
//    })
//});



//$(function () {
//
//    $(".p3").click(function () {
//            $(this).css("color", "orange")
//        }
//
//    )
//})
//
//$("#button").on({
//
//    "mouseenter": function () {
//        $(this).css({
//            "color": "green",
//            "background-color": "yellow"
//        });
//    },
//
//    "mouseleave": function () {
//        $(this).css({
//            "color": "blue",
//            "background-color": "red"
//
//        });
//    }
//})

//
//Paragraf i przycisk. Po klikniciu przycisku, paragraf ma sie schowac w przeciagu 3 sekund, a potem pokazac w tym samym czasie


$('.znikacz').click(function () {

    $(this).hide(3000);
    $(this).show(1000);

});






//$('.znikacz').mouseover(function () {
//
//    $('p').show(1000);
//
//});






//h1 (z tłem) i przycisk. To samo tylko z fade in i fade out.

//h2 i przycisk tylko slide up i down









//strong h1
