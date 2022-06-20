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
     body,
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
    body.classList.remove('BgAnimation');
    stopChecker = 0;
    if(format === 3){
        startBtn.style.display = 'none';
        pauseBtn.style.display = 'block';
    };

    if(format === 4){
        timeHolder = alarmInput.value;
        // console.log(alarmInput.value);
        // if(timeHolder === 0) return;
        if (!timeHolder) return;
        if(timeHolder > 0) {
            startBtn.style.display = 'none';
            pauseBtn.style.visibility = 'hidden';
            resetClassNames();      //обнуляем циферблат
            alarmInputBlock.style.display = 'none';
            clockFace.style.display = 'flex';
            alarmInput.value = '';
        }else return;
    };
});

pauseBtn.addEventListener('click', () => {
    if (format === 3) {
        startBtn.style.display = 'block';
        pauseBtn.style.display = 'none';
        stopChecker = 1;
    }
});

stopBtn.addEventListener('click', () => {
    body.classList.remove('BgAnimation');
    resetClassNames();
    startBtn.style.display = 'block';
    pauseBtn.style.display = 'none';
    stopChecker = 1;

    if(format === 3){
        timeHolder = 0;
    }
    if(format === 4){
        timeHolder = 0;
        alarmInputBlock.style.display = 'block';
        clockFace.style.display = 'none';
        startBtn.style.display = 'block';
        pauseBtn.style.display = 'none';
        alarmInput.focus();
    }
});

clockBtn.addEventListener('click', () => {
    body.classList.remove('BgAnimation');
    format = timeFormatsBlock.children['24hr'].classList.contains('active') ? 1 : 2;
    timeFormatsBlock.style.display = 'flex';
    controlBtnsBlock.style.display = 'none';
    alarmInputBlock.style.display = 'none';
    clockFace.style.display = 'flex';
    alarmInput.value = '';
})

timerBtn.addEventListener('click', () => {
    format = 3;
    timeHolder = 0;
    stopChecker = 1;
    resetClassNames();
    console.log(format, timeHolder, stopChecker);
    timeFormatsBlock.style.display = 'none';
    controlBtnsBlock.style.display = 'block';
    timeAmPmBlock.style.display = 'none';
    clockFace.style.display = 'flex';
    alarmInputBlock.style.display = 'none';
    alarmInput.value = '';
})

counterBtn.addEventListener('click', () => {
    format = 4;
    stopChecker = 1;
    resetClassNames();
    timeFormatsBlock.style.display = 'none';
    controlBtnsBlock.style.display = 'block';
    timeAmPmBlock.style.display = 'none';
    clockFace.style.display = 'none';
    alarmInputBlock.style.display = 'block';
    startBtn.style.display = 'block';
    pauseBtn.style.display = 'none';
    alarmInput.focus();
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

    const time = setTimeObject(hours, minutes, seconds)
    if (format === 1) {
        set24hours(time);
    };
    if (format === 2) {
        timeAmPmBlock.style.display = 'block';  //при переходе из секундомера и обратного отсчета
        set12hours(time, hours);
    };
    if (format === 3 && stopChecker === 0){
        timeHolder++;
        setTimer(timeHolder);
    }
    if (format === 4 && stopChecker === 0){
        timeHolder === 0 ? setAlarm() : setTimer(timeHolder);
        timeHolder--;
    }
}
setInterval(updateTimer, 1000);     //renew vars every 1 second

function setTimeObject(h,m,s) {
    return{
        hoursNumFirst : Math.floor(h / 10),     //1st digit
        hoursNumSecond : h % 10,                   //2nd digit

        minutesNumFirst : Math.floor(m / 10),     //1st digit
        minutesNumSecond : m % 10,                   //2nd digit

        secondsNumFirst : Math.floor(s / 10),     //1st digit
        secondsNumSecond : s % 10,                   //2nd digit
    };
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
    set24hours(time);
}

function setTimer(timeHolder){
    let hours = Math.floor(timeHolder/3600);
    let minutes = Math.floor((timeHolder - hours*3600)/60);
    let seconds = timeHolder - hours*3600 - minutes*60;

    const time = setTimeObject(hours, minutes, seconds);
    set24hours(time);
}

function setAlarm() {
    body.classList.add('BgAnimation');
    resetClassNames();
    stopChecker = 1;
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

