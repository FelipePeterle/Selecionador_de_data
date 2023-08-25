$(function(){

    let horaescolhaCampo;

    $('input').bind('focus',function(){
        let pos = $(this).offset();
        let width = $(this).width();

        $('.horaescolha').css('left', pos.left + width+5);
        $('.horaescolha').css('top', pos.top);
        $('.horaescolha').show();

        horaescolhaCampo =$(this);

    });

    $('input').bind('blur',function(){
        setTimeout(function(){
            $('.horaescolha').hide();
        }, 200);
    });    

    $('.horaescolha button').bind('click',function(){

        let hora = $(this).html();
        horaescolhaCampo.val(hora);

    });
;
})