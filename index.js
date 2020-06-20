/* global document, setTimeout*/
//وضع عقارب الساعة الثلاثة فى متغيارت
var hhand = document.getElementById("hhand"),
    mhand = document.getElementById("mhand"),
    shand = document.getElementById("shand");

var
    h = document.getElementById("th"),
    m = document.getElementById("tm"),
    s = document.getElementById("ts"),
    v = document.getElementById("tv"),
    t = "";
//دالة الوقت
function timer() {
    'use strict';
    //    دالة سحب الوقت من الجهاز ووضعه فى متغير
    var date = new Date(),
        //    سحب الدقائق والساعات والثوانى ووضعها فى متغيرات منفصلة
        hr = date.getHours(),
        mn = date.getMinutes(),
        sc = date.getSeconds(),
        //    حساب زاوية الدوران اللتى سوف تعطى لكل متغير
        hrd = ((hr % 12) * 30) + 0.5 * mn,
        mnd = (mn * 6) + 0.1 * mn,
        scd = sc * 6;
    if (sc < 10) {
        sc = "0" + sc;
    }
    if (mn < 10) {
        mn = "0" + mn;
    }
    if (hr < 10) {
        hr = "0" + hr;
    }
    if (hr > 12) {
        hr = hr - 12;
        t = "PM";
    }
    //    تغير استايل العقارب بالدوران بناءا على الوقت
    hhand.style.transform = 'rotate(' + hrd + 'deg)';
    mhand.style.transform = 'rotate(' + mnd + 'deg)';
    shand.style.transform = 'rotate(' + scd + 'deg)';
    //    تغير قيمة الحقول بناءا على الوقت
    h.value = ("0" + hr);
    m.value = (mn);
    s.value = (sc);
    v.value = (t);

    //    تكرار الدالة كل ثانية
    setTimeout(timer, 1000);
}
//لتنفيذ الدالة اوتوماتيك دون الحاجة لزرار
timer();

var z = document.getElementsByClassName("clock")[0];
// دالة تغيير شكل الساعة
function changing1() {
    'use strict';
    z.style.background = 'url(img/clock-face-2.png)';
}
function changing2() {
    'use strict';
    z.style.background = 'url(img/clock-face-5.png)';
}
function changing3() {
    'use strict';
    z.style.background = 'url(img/clock_face_smile.jpg)';
}