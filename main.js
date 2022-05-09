import btnData from './translate.js';

let lang = localStorage.getItem('lang') === 'ru' ? 'ru' : 'en';

const textarea = document.createElement('textarea');
textarea.className = 'textarea';
textarea.placeholder = '';
document.body.append(textarea);
const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
keyboard.innerHTML = `<div class="first-row"></div>
<div class="second-row"></div>
<div class="third-row"></div>
<div class="fourth-row"></div>
<div class="fifth-row"></div>`;
document.body.append(keyboard);
const backQuote = 192;
const digit1 = 49;
const digit2 = 50;
const digit3 = 51;
const digit4 = 52;
const digit5 = 53;
const digit6 = 54;
const digit7 = 55;
const digit8 = 56;
const digit9 = 57;
const digit0 = 48;
const minus = 189;
const equal = 187;
const backSlash = 220;
const backspace = 8;
const q = 81;
const w = 87;
const e = 69;
const r = 82;
const t = 84;
const y = 89;
const u = 85;
const i = 73;
const o = 79;
const p = 80;
const bracketLeft = 219;
const bracketRight = 221;
const a = 65;
const s = 83;
const d = 68;
const f = 70;
const g = 71;
const h = 72;
const j = 74;
const k = 75;
const l = 76;
const semicolon = 186;
const quote = 222;
const z = 90;
const x = 88;
const c = 67;
const v = 86;
const b = 66;
const n = 78;
const m = 77;
const comma = 188;
const period = 190;
const slash = 191;
const tab = 9;
const caps = 20;
const enter = 13;
const shiftLeft = 16;
const shiftRight = 16;
const space = 32;
const win = 91;
const winRight = 92;
const alt = 18;
const ctrl = 17;
const arrowLeft = 37;
const arrowRight = 39;
const arrowUp = 38;
const arrowDown = 40;
const del = 46;
function initFirstRow() {
  let outFirst = '';
  outFirst = ` <div class="button btn" data = "${backQuote}">${btnData[lang].backquote}</div>
    <div class="button btn" data = "${digit1}">${String.fromCharCode(digit1)}</div>
    <div class="button btn" data = "${digit2}">${String.fromCharCode(digit2)}</div>
    <div class="button btn" data = "${digit3}">${String.fromCharCode(digit3)}</div>
    <div class="button btn" data = "${digit4}">${String.fromCharCode(digit4)}</div>
    <div class="button btn" data = "${digit5}">${String.fromCharCode(digit5)}</div>
    <div class="button btn" data = "${digit6}">${String.fromCharCode(digit6)}</div>
    <div class="button btn" data = "${digit7}">${String.fromCharCode(digit7)}</div>
    <div class="button btn" data = "${digit8}">${String.fromCharCode(digit8)}</div>
    <div class="button btn" data = "${digit9}">${String.fromCharCode(digit9)}</div>
    <div class="button btn" data = "${digit0}">${String.fromCharCode(digit0)}</div>
    <div class="button btn" data = "${minus}">${'-'}</div>
    <div class="button btn" data = "${equal}">${'+'}</div>
    <div class="button btn" data = "${backSlash}">${'|'}</div>
    <div class="button btn" data = "${backspace}">${'←'}</div>`;
  document.querySelector('.first-row').innerHTML = outFirst;
}
initFirstRow();
function initSecondRow() {
  let outSecond = '';
  outSecond = ` <div class="button-tab btn" data = "${tab}">${String.fromCharCode(tab)}Tab</div>
    <div class="button btn" data = "${q}">${btnData[lang].q}</div>
    <div class="button btn" data = "${w}">${btnData[lang].w}</div>
    <div class="button btn" data = "${e}">${btnData[lang].e}</div>
    <div class="button btn" data = "${r}">${btnData[lang].r}</div>
    <div class="button btn" data = "${t}">${btnData[lang].t}</div>
    <div class="button btn" data = "${y}">${btnData[lang].y}</div>
    <div class="button btn" data = "${u}">${btnData[lang].u}</div>
    <div class="button btn" data = "${i}">${btnData[lang].i}</div>
    <div class="button btn" data = "${o}">${btnData[lang].o}</div>
    <div class="button btn" data = "${p}">${btnData[lang].p}</div>
    <div class="button btn" data = "${bracketLeft}">${btnData[lang].bracketLeft}</div>
    <div class="button btn" data = "${bracketRight}">${btnData[lang].bracketRight}</div>
    <div class="button-tab btn" data = "${del}">${'Del'}</div>`;
  document.querySelector('.second-row').innerHTML = outSecond;
}
initSecondRow();

function initThirdRow() {
  let outThird = '';
  outThird = ` <div class="caps-button btn" data = "${caps}">${'Caps Lock'}</div>
    <div class="button btn" data = "${a}">${btnData[lang].a}</div>
    <div class="button btn" data = "${s}">${btnData[lang].s}</div>
    <div class="button btn" data = "${d}">${btnData[lang].d}</div>
    <div class="button btn" data = "${f}">${btnData[lang].f}</div>
    <div class="button btn" data = "${g}">${btnData[lang].g}</div>
    <div class="button btn" data = "${h}">${btnData[lang].h}</div>
    <div class="button btn" data = "${j}">${btnData[lang].j}</div>
    <div class="button btn" data = "${k}">${btnData[lang].k}</div>
    <div class="button btn" data = "${l}">${btnData[lang].l}</div>
    <div class="button btn" data = "${semicolon}">${btnData[lang].semicolon}</div>
    <div class="button btn" data = "${quote}">${btnData[lang].quote}</div>
    <div class="enter-button btn" data = "${enter}">${String.fromCharCode(enter)}Enter</div>`;

  document.querySelector('.third-row').innerHTML = outThird;
}
initThirdRow();

function initFourthRow() {
  let outFourth = '';
  outFourth = ` <div class="shift-tab btn" data = "${shiftLeft}">${'Shift'}</div>
    <div class="button btn" data = "${z}">${btnData[lang].z}</div>
    <div class="button btn" data = "${x}">${btnData[lang].x}</div>
    <div class="button btn" data = "${c}">${btnData[lang].c}</div>
    <div class="button btn" data = "${v}">${btnData[lang].v}</div>
    <div class="button btn" data = "${b}">${btnData[lang].b}</div>
    <div class="button btn" data = "${n}">${btnData[lang].n}</div>
    <div class="button btn" data = "${m}">${btnData[lang].m}</div>
    <div class="button btn" data = "${comma}">${btnData[lang].comma}</div>
    <div class="button btn" data = "${period}">${btnData[lang].period}</div>
    <div class="button btn" data = "${slash}">${btnData[lang].slash}</div>
    <div class="button btn" data = "${arrowUp}">${'↑'}</div>
    <div class="shift-tab btn right" data = "${shiftRight}">${'Shift'}</div>`;
  document.querySelector('.fourth-row').innerHTML = outFourth;
}
initFourthRow();

function initFifthRow() {
  let outFifth = '';
  outFifth = ` <div class="ctrl-button btn" data = "${ctrl}">${'Ctrl'}</div>
    <div class="ctrl-button btn" data = "${win}">${'Win'}</div>
    <div class="ctrl-button btn" data = "${alt}">${'Alt'}</div>
    <div class="space-tab btn" data = "${space}">${String.fromCharCode(space)}</div>
    <div class="ctrl-button btn right" data = "${alt}">${'Alt'}</div>
    <div class="left btn" data = "${arrowLeft}">${'←'}</div>
    <div class="down btn" data = "${arrowDown}">${'↓'}</div>
    <div class="arrow-right btn" data = "${arrowRight}">${'→'}</div>
    <div class="ctrl-button btn right" data = "${ctrl}">${'Ctrl'}</div>`;
  document.querySelector('.fifth-row').innerHTML = outFifth;
}
initFifthRow();

const keys = document.querySelectorAll('.btn');

keys.forEach(key => {
  key.addEventListener('click', () => {
    textarea.focus();
  });

  key.addEventListener('keydown', () => {
    textarea.focus();
  });
});

keys.forEach(key => (key.onclick = () => textarea.focus()));

function setLocalStorage() {
  localStorage.setItem('lang', lang);

}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  if(localStorage.getItem('lang')) {
    const lang = localStorage.getItem('lang');
    changeLanguage(lang);
  }

}
window.addEventListener('load', getLocalStorage)


function changeLanguage() {
  lang = lang === 'ru'? 'en':'ru';
}

document.onkeydown = function (event) {
  console.log(event.code);
  console.log(event.key);
  console.log(event.keyCode);
  document.querySelectorAll('.btn').forEach((element) => {
    element.classList.remove('active');
  });
  if (event.location === 2) {
    document.querySelector(`.btn[data="${event.keyCode}"].right`)?.classList.add('active');
  } else {
    document.querySelector(`.btn[data="${event.keyCode}"]`)?.classList.add('active');
  }
  if (event.altKey && event.shiftKey && !event.repeat) {
    changeLanguage(lang);
  }
};



document.querySelectorAll('.keyboard .btn').forEach((element) => {
  element.onclick = function (event) {
    document.querySelectorAll('.keyboard .btn').forEach((element) => {
      element.classList.remove('active');
    });
    const code = this.getAttribute('data');
    this.classList.add('active');
  };
});

const langInfo = document.createElement('div');
langInfo.classList.add('langInfo');
langInfo.innerHTML = `<div class="langInfo">Клавиатура создана в операционной Windows.<br>Переключение языка происходит при перезагрузке страницы</div>`;
document.body.append(langInfo);




