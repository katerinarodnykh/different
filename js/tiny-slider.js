$(document).ready(function() {
    tinySlider.init();
});

tinySlider = new function() {
    var that = this;

    this.init = function() {
        $('.js-tiny-slider').each(function(k) {
            that.build(this, k);
        });
    };

    this.build = function(slider, k) {
        var sliderClass = 'js-tiny-slider-' + k,
            sliderSelector = '.' + sliderClass;
        $(slider).addClass(sliderClass);

        var data = $(slider).data();
        var params = {
            //Контейнеры
            container        : data['container']         ? data['container']         : sliderSelector, //селектор контейнера для слайдера
            controlsContainer: data['controlsContainer'] ? data['controlsContainer'] : false, //селектор контейнера для стрелок
            navContainer     : data['navContainer']      ? data['navContainer']      : false, //селектор контейнера для точек

            //Стрелки и точки
            controls  : data['controls']   ? data['controls']   : false, //кнопки
            prevButton: data['prevButton'] ? data['prevButton'] : false, //кнопка пред. слайда
            nextButton: data['nextButton'] ? data['nextButton'] : false, //кнопка след. слайда
            nav       : data['nav']        ? data['nav']        : false, //точки [dots]

            //Основные параметры
            items     : data['items']      ? data['items']      : 1,            //количество видимых элементов слайдов
            slideBy   : data['slideBy']    ? data['slideBy']    : 1,            //на сколько слайдов сдвигать
            startIndex: data['startIndex'] ? data['startIndex'] : false,        //начальный слайд
            autoWidth : data['autoWidth']  ? data['autoWidth']  : false,        //автоматическое определение ширины слайда
            autoHeight: data['autoHeight'] ? data['autoHeight'] : false,        //автоматическое определение высоты слайда,
            fixedWidth: data['fixedWidth'] ? data['fixedWidth'] : false,        //фиксированная ширина слайда
            loop      : data['loop']       ? data['loop']       : false,        //бесконечность прокрутки
            speed     : data['speed']      ? data['speed']      : 300,          //скорость прокрутки
            lazyload  : data['lazyload']   ? data['lazyload']   : false,        //ленивая загрузка
            axis      : data['axis']       ? data['axis']       : 'horizontal', //['horizontal', 'vertical'] горизонтальная/вериткальная прокрутка
            mouseDrag : data['mouseDrag']  ? data['mouseDrag']  : false,        // Прокрутка слайдов путем их перемещения
            touch     : data['touch']      ? data['touch']      : false,        // Ручная прокрутка на телефонах

            //Автопрокрутка
            autoplay            : data['autoplay']             ? data['autoplay']             : false,     //автопрокрутка
            autoplayButtonOutput: data['autoplayButtonOutput'] ? data['autoplayButtonOutput'] : false,     //кнопки для автопрокрутки
            autoplayTimeout     : data['autoplayTimeout']      ? data['autoplayTimeout']      : 5000,      //задержка прокрутки
            autoplayDirection   : data['autoplayDirection']    ? data['autoplayDirection']    : 'forward', //['forward', 'backward'] направленность прокрутки
            autoplayText        : data['autoplayText']         ? data['autoplayText']         : false,     //['start', 'stop'] //текст кнопок прокрутки
            autoplayHoverPause  : data['autoplayHoverPause']   ? data['autoplayHoverPause']   : false,     //остановка при наведении мыши

            //Респонсив
            responsive: data['responsive'] ? data['responsive'] : false //{breakpoint: {key: value, [...]}}}
        };

        tns(params);
        $(slider).removeClass(sliderClass);
    }
};