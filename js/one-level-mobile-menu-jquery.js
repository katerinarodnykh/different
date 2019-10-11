$(document).ready(function() {
    ss.init();
});

var ss = new function() {
    var self = this;

    self.isMobile = $('body').outerWidth() < 480;

    self.init = function() {
        /*Список того что подключаем*/
        self.menu.init();
    };

    this.menu = new function() {
        var that = this;

        var hamburger = $('.js-hamburger'),
            navigation = $('.js-navigation');

        if (self.isMobile) {
            this.init = function() {
                $(hamburger).click(function() {
                    $(hamburger).toggleClass('open');
                    $(navigation).toggleClass('open');
                });
            };
        }
    };
};