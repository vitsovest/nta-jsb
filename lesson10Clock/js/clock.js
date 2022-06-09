import refs from './refs.js';
 const {h1, h2, m1, m2, s1, s2,
     timeFormatsBlock,
     timeOptionsBlock,
     controlBtnsBlock,
     clockBtn, timerBtn, counterBtn,
     am, pm, timeAmPmBlock,
     alarmInputBlock, alarmInput,
     clockFace,
     startBtn, pauseBtn, stopBtn,
 } = refs;
// console.log(h1, h2, m1, m2, s1, s2);

let format = 1;     //time format 12hrs or 24hrs
let stopChecker = 0;
let timeHolder = 0;

timeFormatsBlock.addEventListener('click', (e) => {
        [...timeFormatsBlock.children].map(span =>
            span.classList.toggle('active'))
        e.target.id === '12hr' ? format = 2 : format = 1;
    });

startBtn.addEventListener('click', () => {
    startBtn.style.display = 'none';
    pauseBtn.style.display = 'block';
    stopChecker = 0;
});

pauseBtn.addEventListener('click', () => {
    startBtn.style.display = 'block';
    pauseBtn.style.display = 'none';
});

stopBtn.addEventListener('click', () => {

});

clockBtn.addEventListener('click', () => {
    format = timeFormatsBlock.children['24hr'].classList.contains('active') ? 1 : 2;
    timeFormatsBlock.style.display = 'flex';
    controlBtnsBlock.style.display = 'none';
    alarmInputBlock.style.display = 'none';
    clockFace.style.display = 'flex';
})

timerBtn.addEventListener('click', () => {
    format = 3;
    timeHolder = 0;
    stopChecker = 1;
    resetClassNames();
    timeFormatsBlock.style.display = 'none';
    controlBtnsBlock.style.display = 'block';
    timeAmPmBlock.style.display = 'none';
    clockFace.style.display = 'flex';
    alarmInputBlock.style.display = 'none';
})

counterBtn.addEventListener('click', () => {
    format = 4;
    timeFormatsBlock.style.display = 'none';
    controlBtnsBlock.style.display = 'block';
    timeAmPmBlock.style.display = 'none';
    clockFace.style.display = 'none';
    alarmInputBlock.style.display = 'block';
})

timeOptionsBlock.addEventListener('click', (e) => {
    // console.log(e.target);
    // console.log([...timeOptionsBlock.children]);
    // [...timeOptionsBlock.children].map(div =>
    //     div.classList.replace())
})

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
        timeAmPmBlock.style.display = 'block';  //при переходе из секундомера и обратного отсчета
        set12hours(time, hours);
    };
    if (format === 3 && stopChecker === 0){
        timeHolder++;
    }
    if (format === 4 && stopChecker === 0){
        timeHolder--;
    }
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

function resetClassNames(){
    [h1, h2, m1, m2, s1, s2].map(node => setClassName(node, 'show0'))
}


updateTimer();