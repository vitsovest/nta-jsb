export default {
    h1: document.querySelector('.H1'),
    h2: document.querySelector('.H2'),

    m1: document.querySelector('.M1'),
    m2: document.querySelector('.M2'),

    s1: document.querySelector('.S1'),
    s2: document.querySelector('.S2'),

    timeFormatsBlock: document.querySelector('.Type'),
    timeOptionsBlock: document.querySelector('.TimeOptions'),
    controlBtnsBlock: document.querySelector('.control'),
    timeAmPmBlock: document.querySelector('.Formats'),

    startBtn: document.querySelector('.Start'),
    pauseBtn: document.querySelector('.Pause'),
    stopBtn: document.querySelector('.Stop'),


    body: document.querySelector('body'),

//  AM/PM access
    am: document.getElementById('am'),
    pm: document.getElementById('pm'),

//  clock access
    clockBtn: document.querySelector('[data-title="Time"]'),
    timerBtn: document.querySelector('[data-title="StopWatch"]'),
    counterBtn: document.querySelector('[data-title="CountDown"]'),

    alarmInputBlock: document.querySelector('.AlarmInput'),
    alarmInput: document.querySelector('.AlarmInput input'),
    clockFace: document.querySelector('.Numbers'),
};