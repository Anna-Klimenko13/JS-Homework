$(document).ready(function() {
    $('input[name="eval_toggle"]').on('change', function() {
        const target = '#eval-' + $(this).val();
        
        // Ховаємо всі блоки контенту
        $('.eval-content-block').hide();
        
        // Показуємо потрібний
        $(target).fadeIn(400);
    });
});
