$(document).ready(function () {
    // .click
    $('#btn1').click(function () {
        $('#para1').html('Clicked!');
    });

    // .fadeIn
    $('#btn2').click(function () {
        var fontsize= "30px";
        $('#para2')
        .css('font-size' , fontsize)
        .fadeIn(3000).next();
        
    });

    // .fadeOut
    $('#btn3').click(function () {
        var fontsizefadeout='35px';
        $('#para3')
        .css('font-size',fontsizefadeout)
        .fadeOut(3000).fadeIn(3000);
    });

    // .addClass in console
    $('#btn4').click(function () {
        $('#para4').addClass('highlight');
    });
    // .append
    $('#btn5').click(function () {
        var inputValue = $('#appendInput').val();
        $('#para5').append('<span>'+" " + inputValue + '</span>');
        $('#appendInput').val('').show();
    });
    // .html
    $('#btn6').click(function () {
        $('#para6').html('Changed using .html');
    });

    // .text
    $('#btn7').click(function () {
        $('#para7').text('Changed using .text');
    });

    // .val
    $('#btn8').click(function () {
        var inputValue = $('#inputField').val();
        $('#para8').html('Value: ' + inputValue);
    });

    // .hide .show
    $('#btn9').click(function () {
    
        var colorShow='green';

        $('#para9').hide(3000).css('color', colorShow).show(3000);
    });

    // 

    // .slideDown
    $('#btn11').click(function () {
        $('#para11').slideDown(3000).slideUp(3000);
    });
});
