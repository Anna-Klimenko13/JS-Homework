$(document).ready(function() {
    $(document).on('change', 'input[name="eval_toggle"]', function() {
        const targetValue = $(this).val(); 
        const targetId = '#eval-' + targetValue;
        
        // Прячем все блоки
        $('.eval-content-block').hide();
        
        // Показываем нужный (с плавной анимацией)
        $(targetId).fadeIn(400);
    });
});
