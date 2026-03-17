$(document).ready(function() {
    $('input[name="eval_type_toggle"]').on('change', function() {
        const targetFormId = 'form-' + $(this).val(); // отримуємо watches, jewelry або diamonds
        
        // Ховаємо всі форми
        $('.evaluation__form').hide();
        
        // Показуємо потрібну з ефектом появи
        $('#' + targetFormId).fadeIn(300);
    });
});
