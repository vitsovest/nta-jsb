import refs from './refs.js';
 const {h1, h2, m1, m2, s1, s2, timeFormatsBlock, clockBtn, timerBtn, counterBtn, am, pm} = refs;
// console.log(h1, h2, m1, m2, s1, s2);

let format = 1;     //time format 12hrs or 24hrs

timeFormatsBlock.addEventListener('click', (e) => {
        [...timeFormatsBlock.children].map(span =>
            span.classList.toggle('active'))
        e.target.id === '12hr' ? format = 2 : format = 1;
    }
)

function updateTimer() {
    let date = new Date();
    // console.log(date);
    let day = date.getDay();     //DayOfWeek
    setDayOfWeek(day);              //call to set active selector to DayOfWeek span
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    const time = {          //make object
        hoursNumFirst : Math.floor(hours / 10),     //1st digit
        hoursNumSecond : hours % 10,                   //2nd digit

        minutesNumFirst : Math.floor(minutes / 10),     //1st digit
        minutesNumSecond : minutes % 10,                   //2nd digit

        secondsNumFirst : Math.floor(seconds / 10),     //1st digit
        secondsNumSecond : seconds % 10,                   //2nd digit

    }
    if (format === 1) {
        set24hours(time);
    };
    if (format === 2) {
        set12hours(time, hours);
    };

    setInterval(updateTimer, 1000);     //renew vars every 1 second
}

function setDayOfWeek(day) {
    document.querySelector(`.WeekDays span:nth-child(${(day + 2) % 7})`).classList.add('active');
}

function set24hours(time) {
    setClassName(h1, `show${time.hoursNumFirst}`);
    setClassName(h2, `show${time.hoursNumSecond}`);
    setClassName(m1, `show${time.minutesNumFirst}`);
    setClassName(m2, `show${time.minutesNumSecond}`);
    setClassName(s1, `show${time.secondsNumFirst}`);
    setClassName(s2, `show${time.secondsNumSecond}`);
}

function set12hours(time, hours) {
    if (hours > 12){
        hours = hours - 12;
        // show AM or PM label
        if (!pm.classList.contains('active')){
            pm.classList.add('active');
            am.classList.remove('active');
        }
        time.hoursNumFirst = Math.floor(hours / 10);     //1st digit
        time.hoursNumSecond = hours % 10;                   //2nd digit
    } else {
        if (!am.classList.contains('active')){
            am.classList.add('active');
            pm.classList.remove('active');
        }
    };
    setClassName(h1, `show${time.hoursNumFirst}`);
    setClassName(h2, `show${time.hoursNumSecond}`);
    setClassName(m1, `show${time.minutesNumFirst}`);
    setClassName(m2, `show${time.minutesNumSecond}`);
    setClassName(s1, `show${time.secondsNumFirst}`);
    setClassName(s2, `show${time.secondsNumSecond}`);
}

function setClassName(node, clasName) {         //
    node.classList.forEach(clasItem =>
        clasItem.includes('show')
        ? node.classList.replace(clasItem, clasName)
        : node.classList.add(clasName));

}


updateTimer();