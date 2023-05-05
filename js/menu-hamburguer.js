$(document).ready(() => {
    $(window).resize(() => {
        if ($(window).width() >= 768) {
            $('#bt-hamburguer').css('display', 'none');
            $('#bt-fechar').css('display', 'none');
            $('.menu-principal').css('display', 'flex');
        }
        else  {
            $('#bt-hamburguer').css('display', 'inline');
            $('#bt-fechar').css('display', 'none');
            $('.menu-principal').css('display', 'none');
        }
    });
    // lembra de fazer Window depois de fazer bt para não da erro na abertura da pagina 


    $('#bt-hamburguer').click(() => {
        $('#bt-hamburguer').css('display', 'none');
        $('#bt-fechar').css('display', 'inline');
        $('.menu-principal').css('display', 'flex');

    });
    $('#bt-fechar').click(() => {
        $('#bt-hamburguer').css('display', 'inline');
        $('#bt-fechar').css('display', 'none');
        $('.menu-principal').css('display', 'none');
    })
});