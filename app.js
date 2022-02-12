$(document).ready(function(){
   var ancho = $("#imgs").css("width");
   const largo = $("#imgs").css("height");
    let imagenes = $("#carrete_imgs img");
    $("#btn_slide1").css("background-color","var(--c1)");

    imagenes.css('width',ancho);
    imagenes.css('height',largo);
});

function texto_valor(ancho) {
    let valor='';
    for (let index = 0; index < 15; index++) {
        if (ancho[index]!=null) {
            if (ancho[index]=="p" || ancho[index]=="x") {
                break;
            }else{
               valor+=ancho[index]; 
            }
        }
    }
    return valor;
}

const mover_carrete = ()=>{
    let tit_slide_1 = $("#tit_slide1");
    let tit_slide_2 = $("#tit_slide2");
    let tit_slide_3 = $("#tit_slide3");
    let tit_slide_4 = $("#tit_slide4");

    let carrete =$("#carrete_imgs");
    let ancho = $("#imgs").css("width");

    let var_carrete=parseInt(texto_valor(carrete.css("right")));
    let var_ancho=parseInt(texto_valor(ancho));

    if (var_carrete == 0) {
        carrete.css("right",(var_ancho)+"px");
        tit_slide_1.css("transform","scale(0,0)");
        tit_slide_2.css("transform","scale(1,1)");
        $("#btn_slide2").css("background-color","var(--c1)");
        $("#btn_slide1").css("background-color","rgba(255, 255, 255,.5)");
        $("#btn_slide3").css("background-color","rgba(255, 255, 255,.5)");
        $("#btn_slide4").css("background-color","rgba(255, 255, 255,.5)");
    }else if (var_carrete == var_ancho) {
        carrete.css("right",(var_ancho*2)+"px");
        tit_slide_2.css("transform","scale(0,0)");
        tit_slide_3.css("transform","scale(1,1)");
        $("#btn_slide3").css("background-color","var(--c1)");
        $("#btn_slide1").css("background-color","rgba(255, 255, 255,.5)");
        $("#btn_slide2").css("background-color","rgba(255, 255, 255,.5)");
        $("#btn_slide4").css("background-color","rgba(255, 255, 255,.5)");
    }else if (var_carrete == (var_ancho*2)) {
        carrete.css("right",(var_ancho*3)+"px");
        tit_slide_3.css("transform","scale(0,0)");
        tit_slide_4.css("transform","scale(1,1)");
        $("#btn_slide4").css("background-color","var(--c1)");
        $("#btn_slide1").css("background-color","rgba(255, 255, 255,.5)");
        $("#btn_slide3").css("background-color","rgba(255, 255, 255,.5)");
        $("#btn_slide2").css("background-color","rgba(255, 255, 255,.5)");
    }else if (var_carrete == (var_ancho*3)) {
        carrete.css("right","0px");
        tit_slide_4.css("transform","scale(0,0)");
        tit_slide_1.css("transform","scale(1,1)");
        $("#btn_slide1").css("background-color","var(--c1)");
        $("#btn_slide2").css("background-color","rgba(255, 255, 255,.5)");
        $("#btn_slide3").css("background-color","rgba(255, 255, 255,.5)");
        $("#btn_slide4").css("background-color","rgba(255, 255, 255,.5)");
    }
}
setInterval(mover_carrete,8000);

$("#btn_slide1").click(function(){
    let tit_slide_1 = $("#tit_slide1");
    let tit_slide_2 = $("#tit_slide2");
    let tit_slide_3 = $("#tit_slide3");
    let tit_slide_4 = $("#tit_slide4");
    
    let carrete =$("#carrete_imgs");
    let ancho = $("#imgs").css("width");

    let var_carrete=parseInt(texto_valor(carrete.css("right")));
    let var_ancho=parseInt(texto_valor(ancho));

    carrete.css("right","0px");
    tit_slide_1.css("transform","scale(1,1)");
    tit_slide_2.css("transform","scale(0,0)");
    tit_slide_3.css("transform","scale(0,0)");
    tit_slide_4.css("transform","scale(0,0)");
    $("#btn_slide1").css("background-color","var(--c1)");
        $("#btn_slide2").css("background-color","rgba(255, 255, 255,.5)");
        $("#btn_slide3").css("background-color","rgba(255, 255, 255,.5)");
        $("#btn_slide4").css("background-color","rgba(255, 255, 255,.5)");
    
});
$("#btn_slide2").click(function(){
    let tit_slide_1 = $("#tit_slide1");
    let tit_slide_2 = $("#tit_slide2");
    let tit_slide_3 = $("#tit_slide3");
    let tit_slide_4 = $("#tit_slide4");

    let carrete =$("#carrete_imgs");
    let ancho = $("#imgs").css("width");

    let var_carrete=parseInt(texto_valor(carrete.css("right")));
    let var_ancho=parseInt(texto_valor(ancho));

    carrete.css("right",var_ancho+"px");
    tit_slide_1.css("transform","scale(0,0)");
    tit_slide_2.css("transform","scale(1,1)");
    tit_slide_3.css("transform","scale(0,0)");
    tit_slide_4.css("transform","scale(0,0)");
    $("#btn_slide2").css("background-color","var(--c1)");
        $("#btn_slide1").css("background-color","rgba(255, 255, 255,.5)");
        $("#btn_slide3").css("background-color","rgba(255, 255, 255,.5)");
        $("#btn_slide4").css("background-color","rgba(255, 255, 255,.5)");
});
$("#btn_slide3").click(function(){
    let tit_slide_1 = $("#tit_slide1");
    let tit_slide_2 = $("#tit_slide2");
    let tit_slide_3 = $("#tit_slide3");
    let tit_slide_4 = $("#tit_slide4");

    let carrete =$("#carrete_imgs");
    let ancho = $("#imgs").css("width");

    let var_carrete=parseInt(texto_valor(carrete.css("right")));
    let var_ancho=parseInt(texto_valor(ancho));

    carrete.css("right",(var_ancho*2)+"px");
    tit_slide_1.css("transform","scale(0,0)");
    tit_slide_2.css("transform","scale(0,0)");
    tit_slide_3.css("transform","scale(1,1)");
    tit_slide_4.css("transform","scale(0,0)");
    $("#btn_slide3").css("background-color","var(--c1)");
        $("#btn_slide2").css("background-color","rgba(255, 255, 255,.5)");
        $("#btn_slide1").css("background-color","rgba(255, 255, 255,.5)");
        $("#btn_slide4").css("background-color","rgba(255, 255, 255,.5)");
});
$("#btn_slide4").click(function(){
    let tit_slide_1 = $("#tit_slide1");
    let tit_slide_2 = $("#tit_slide2");
    let tit_slide_3 = $("#tit_slide3");
    let tit_slide_4 = $("#tit_slide4");

    let carrete =$("#carrete_imgs");
    let ancho = $("#imgs").css("width");

    let var_carrete=parseInt(texto_valor(carrete.css("right")));
    let var_ancho=parseInt(texto_valor(ancho));

    carrete.css("right",(var_ancho*3)+"px");
    tit_slide_1.css("transform","scale(0,0)");
    tit_slide_2.css("transform","scale(0,0)");
    tit_slide_3.css("transform","scale(0,0)");
    tit_slide_4.css("transform","scale(1,1)");
    $("#btn_slide4").css("background-color","var(--c1)");
        $("#btn_slide2").css("background-color","rgba(255, 255, 255,.5)");
        $("#btn_slide3").css("background-color","rgba(255, 255, 255,.5)");
        $("#btn_slide1").css("background-color","rgba(255, 255, 255,.5)");
});

/*botones de contacto*/
$("#foto_contacto").click(function(){
    var ubicacion_whatsapp = $("#btn_what").css("bottom");
    if(ubicacion_whatsapp == "105px"){
        $("#btn_what").css("bottom","80%");
        $("#btn_face").css("left","80%");
        $("#btn_mail").css("top","80%");
        $("#btn_git").css("right","80%");
    }else{
        $("#btn_git").css("right","105px");
        $("#btn_mail").css("top","105px");
        $("#btn_face").css("left","105px");
        $("#btn_what").css("bottom","105px");
    }
});

