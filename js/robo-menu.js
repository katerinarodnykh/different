$(document).ready(function() {
    ss.init();
});

var ss = new function() {
    var self = this;

    self.isMobile = $('body').outerWidth() < 961;

    self.init = function() {
        /*Список того что подключаем*/
        self.menu.init();

        $(window).resize(function() {
            self.isMobile = $('body').outerWidth() < 961;
        });
    };

    this.menu = new function() {
        var that = this;

        var hamburger = $('.js-mobile-menu-hamburger'),
            menu = $('.mobile-menu'),
            body = $('.body');

        this.init = function() {
            that.main.init();
            that.main.mobileInit();

            $('.js-submenu').hide().removeClass('open');
            $(hamburger).removeClass('open');
            $(menu).removeClass('open');
            $(body).removeClass('body--scroll');
        };

        this.main = {
            'init'      : function() {
                $(menu).find('ul').find('> li.js-drop-menu').each(function() {
                    if ($(this).find('.js-submenu').length) {
                        $(this).hover(
                            function() {
                                if (!self.isMobile) {
                                    $(this).find('.js-submenu').show().addClass('open');
                                }
                            },
                            function() {
                                if (!self.isMobile) {
                                    $(this).find('.js-submenu').hide().removeClass('open');
                                }
                            }
                        );
                    } else {
                        $(this).off('hover');
                    }
                });
            },
            'mobileInit': function() {
                if (!$(hamburger).hasClass('js-already-init')) {
                    $(hamburger).addClass('js-already-init');
                    $(hamburger).click(function() {
                        $(hamburger).toggleClass('open');
                        $(menu).toggleClass('open');
                        $(body).toggleClass('body--scroll');
                    });

                    $(menu).find('li.js-drop-menu > a').click(function() {
                        var li = $(this).parent(),
                            submenu = $(li).find('.js-submenu');

                        if ($(submenu).hasClass('open')) {
                            $(submenu).hide().removeClass('open');
                        } else {
                            $(submenu).show().addClass('open');
                        }

                        return false;
                    });
                }
            }
        };
    };
};