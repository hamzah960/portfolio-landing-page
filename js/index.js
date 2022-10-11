/*window.onscroll = function() { nav() };

function nav() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById('nav').classList.add('noTransparent');
    }else {
        document.getElementById('nav').classList.remove('noTransparent');
    }
};
*/

$(window).scroll(function() {        /*عند حدوث سكرول داخل الصفحة نفذ الدالة التالية */
    if($(this).scrollTop() >= 200){         /*اذا اصبح السكرول من الاعلى اكبر من 200 نفذ التالي */
        $('#nav').addClass("noTransparent");
    }else {
        $('#nav').removeClass("noTransparent");
    }
});

$(document).ready(function(){  /*عندما يتم تحميل الملفات نفذ التالي */
    $('.circle').circleProgress({
        startAngle: -Math.PI / 2,                          /*نقطة بداية الدائرة بالراديان */
        fill: "#0575e6"                                          /*داخل هذة الخاصية نحدد لون الدائرة */
                                                              /*on لاضافة النسبة المئوية داخل الدائرة نستخدم الدالة  */
    }).on('circle-animation-progress', function(event, progress,stepValue){
        $(this).find('span').html(Math.round(stepValue * 100) + '%')
    });


    $(function(){
        $('.contact-form').validate();
    })
});



document.getElementById('year').innerHTML = new Date().getFullYear();
