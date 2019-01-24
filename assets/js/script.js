( function($) {

    'use strict';

    var extendedClass = 'cfw-menu-extended';

    $('#trigger-menu, .cfw-menu-overlay').on('click', function(){
        $('body').addClass(extendedClass);
    })

    $('.cfw-menu-close').on('click', function (e) {
        e.preventDefault();
        $('body').removeClass(extendedClass);
    })

})(jQuery);