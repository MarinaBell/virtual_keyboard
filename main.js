import keysdata from './keys.js';
console.log(keysdata[0][0])
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
const quoteleft = 188;
const quoteright = 190;
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
  outFirst = ` <div class="button btn" data = "${backQuote}">${'`'}</div>
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
    <div class="button btn" data = "${q}">${String.fromCharCode(q)}</div>
    <div class="button btn" data = "${w}">${String.fromCharCode(w)}</div>
    <div class="button btn" data = "${e}">${String.fromCharCode(e)}</div>
    <div class="button btn" data = "${r}">${String.fromCharCode(r)}</div>
    <div class="button btn" data = "${t}">${String.fromCharCode(t)}</div>
    <div class="button btn" data = "${y}">${String.fromCharCode(y)}</div>
    <div class="button btn" data = "${u}">${String.fromCharCode(u)}</div>
    <div class="button btn" data = "${i}">${String.fromCharCode(i)}</div>
    <div class="button btn" data = "${o}">${String.fromCharCode(o)}</div>
    <div class="button btn" data = "${p}">${String.fromCharCode(p)}</div>
    <div class="button btn" data = "${bracketLeft}">${"["}</div>
    <div class="button btn" data = "${bracketRight}">${"]"}</div>
    <div class="button-tab btn" data = "${del}">${'Del'}</div>`;
  document.querySelector('.second-row').innerHTML = outSecond;
}
initSecondRow();

function initThirdRow() {
  let outThird = '';
  outThird = ` <div class="caps-button btn" data = "${caps}">${'Caps Lock'}</div>
    <div class="button btn" data = "${a}">${String.fromCharCode(a)}</div>
    <div class="button btn" data = "${s}">${String.fromCharCode(s)}</div>
    <div class="button btn" data = "${d}">${String.fromCharCode(d)}</div>
    <div class="button btn" data = "${f}">${String.fromCharCode(f)}</div>
    <div class="button btn" data = "${g}">${String.fromCharCode(g)}</div>
    <div class="button btn" data = "${h}">${String.fromCharCode(h)}</div>
    <div class="button btn" data = "${j}">${String.fromCharCode(j)}</div>
    <div class="button btn" data = "${k}">${String.fromCharCode(k)}</div>
    <div class="button btn" data = "${l}">${String.fromCharCode(l)}</div>
    <div class="button btn" data = "${semicolon}">${";"}</div>
    <div class="button btn" data = "${quote}">${'"'}</div>
    <div class="enter-button btn" data = "${enter}">${String.fromCharCode(enter)}Enter</div>`;

  document.querySelector('.third-row').innerHTML = outThird;
}
initThirdRow();

function initFourthRow() {
  let outFourth = '';
  outFourth = ` <div class="shift-tab btn" data = "${shiftLeft}">${'Shift'}</div>
    <div class="button btn" data = "${z}">${String.fromCharCode(z)}</div>
    <div class="button btn" data = "${x}">${String.fromCharCode(x)}</div>
    <div class="button btn" data = "${c}">${String.fromCharCode(c)}</div>
    <div class="button btn" data = "${v}">${String.fromCharCode(v)}</div>
    <div class="button btn" data = "${b}">${String.fromCharCode(b)}</div>
    <div class="button btn" data = "${n}">${String.fromCharCode(n)}</div>
    <div class="button btn" data = "${m}">${String.fromCharCode(m)}</div>
    <div class="button btn" data = "${quoteleft}">${","}</div>
    <div class="button btn" data = "${quoteright}">${"."}</div>
    <div class="button btn" data = "${slash}">${"/"}</div>
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
// console.log(keys);

// keys.forEach(key => {
//   console.log(1);
//   key.onclick = () => {
//     console.log(2);
//     textarea.focus();
//   };
// });

keys.forEach(key => {
  // console.log('Повешен обработчик на кнопку: ' + key.textContent);
  key.addEventListener('click', () => {
    // console.log('Обработчик сработал');
    textarea.focus();
  });

  key.addEventListener('keydown', () => {
    // console.log('Обработчик сработал');
    textarea.focus();
  });
});

// keys.forEach(key =>(key.onclick = () => textarea.focus()));

keys.forEach(key => (key.onclick = () => textarea.focus()));

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
langInfo.innerHTML = `<div class="langInfo">Клавиатура создана в операционной Windows.<br>Для переключения языка - комбинация клавиш Alt+Shift</div>`;
document.body.append(langInfo);

// function changeLanguage() {
//   lang = lang == 'ru'? 'en': 'ru';
//   keysdata.forEach(row => {
//     row.forEach(key => {
//       if (key[`${lang}_char`]) {
//         const key = document.querySelector(`.key-${key.code} .key_main-char`)
//       }

//     })
//   })
// }
