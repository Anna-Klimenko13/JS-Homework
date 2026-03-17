$(document).ready(function() {
    // Спочатку робимо перший блок активним
    $('#eval-watches').addClass('active').show();

    $(document).on('change', 'input[name="eval_toggle"]', function() {
        const target = '#eval-' + $(this).val();
        
        // Ховаємо всі блоки і прибираємо клас активності
        $('.eval-content-block').hide().removeClass('active');
        
        // Показуємо потрібний і додаємо клас
        $(target).fadeIn(400).addClass('active').css('display', 'flex');
    });
});
