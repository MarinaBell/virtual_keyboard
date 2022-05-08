let textarea = document.createElement("textarea");
textarea.className = "textarea";
textarea.placeholder = "";
document.body.append(textarea);

let keyboard = document.createElement("div");
keyboard.classList.add("keyboard");
keyboard.innerHTML = `<div class="first-row"></div>
<div class="second-row"></div>
<div class="third-row"></div>
<div class="fourth-row"></div>
<div class="fifth-row"></div>`

document.body.append(keyboard);

let backQuote = 192;
let digit1 = 49;
let digit2 = 50;
let digit3 = 51;
let digit4 = 52;
let digit5 = 53;
let digit6 = 54;
let digit7 = 55;
let digit8 = 56;
let digit9 = 57;
let digit0 = 48;
let minus = 189;
let equal = 187;
let backSlash = 220;
let backspace = 8;

let q = 81;
let w = 87;
let e = 69;
let r = 82;
let t = 84;
let y = 89;
let u = 85;
let i = 73;
let o = 79;
let p = 80;
let bracketLeft = 219;
let bracketRight = 221;

let a = 65;
let s = 83;
let d = 68;
let f = 70;
let g = 71;
let h = 72;
let j = 74;
let k = 75;
let l = 76;
let semicolon = 186;
let quote = 222;

let z = 90;
let x = 88;
let c = 67;
let v = 86;
let b = 66;
let n = 78;
let m = 77;
let quoteleft = 188;
let quoteright = 190;
let slash = 191;
let tab = 9;

let caps = 20;
let enter = 13;
let shiftLeft = 16;
let shiftRight = 16;
let space = 32;
let win = 91;
let winRight = 92;
let alt = 18;
let ctrl = 17;

let arrowLeft = 37;
let arrowRight = 39;
let arrowUp = 38;
let arrowDown = 40;
let del = 46;

// document.onkeypress = function(event) {
//     // keyboard.push(event.charCode);
//     // console.log(keyboard);
//     // console.log(event)
//     firstrowButtons.push(event.charCode);
//     console.log(firstrowButtons);
// }

function initFirstRow() { 
    let outFirst = ''; 
    outFirst = ` <div class="button btn" data = "${backQuote}">${String.fromCharCode(backQuote)}</div>
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
    <div class="button btn" data = "${minus}">${String.fromCharCode(minus)}</div>
    <div class="button btn" data = "${equal}">${String.fromCharCode(equal)}</div>
    <div class="button btn" data = "${backSlash}">${String.fromCharCode(backSlash)}</div>
    <div class="button btn" data = "${backspace}">${String.fromCharCode(backspace)}</div>`

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
    <div class="button btn" data = "${bracketLeft}">${String.fromCharCode(bracketLeft)}</div>
    <div class="button btn" data = "${bracketRight}">${String.fromCharCode(bracketRight)}</div>
    <div class="button-tab btn" data = "${del}">${String.fromCharCode(del)}Del</div>`

    document.querySelector('.second-row').innerHTML = outSecond;
}
initSecondRow();

function initThirdRow() { 
    let outThird = ''; 
    outThird = ` <div class="caps-button btn" data = "${caps}">${String.fromCharCode(caps)}Caps Lock</div>
    <div class="button btn" data = "${a}">${String.fromCharCode(a)}</div>
    <div class="button btn" data = "${s}">${String.fromCharCode(s)}</div>
    <div class="button btn" data = "${d}">${String.fromCharCode(d)}</div>
    <div class="button btn" data = "${f}">${String.fromCharCode(f)}</div>
    <div class="button btn" data = "${g}">${String.fromCharCode(g)}</div>
    <div class="button btn" data = "${h}">${String.fromCharCode(h)}</div>
    <div class="button btn" data = "${j}">${String.fromCharCode(j)}</div>
    <div class="button btn" data = "${k}">${String.fromCharCode(k)}</div>
    <div class="button btn" data = "${l}">${String.fromCharCode(l)}</div>
    <div class="button btn" data = "${semicolon}">${String.fromCharCode(semicolon)}</div>
    <div class="button btn" data = "${quote}">${String.fromCharCode(quote)}</div>
    <div class="enter-button btn" data = "${enter}">${String.fromCharCode(enter)}Enter</div>`

    document.querySelector('.third-row').innerHTML = outThird;
}
initThirdRow();

function initFourthRow() { 
    let outFourth = ''; 
    outFourth = ` <div class="shift-tab btn" data = "${shiftLeft}">${String.fromCharCode(shiftLeft)}Shift</div>
    
    <div class="button btn" data = "${z}">${String.fromCharCode(z)}</div>
    <div class="button btn" data = "${x}">${String.fromCharCode(x)}</div>
    <div class="button btn" data = "${c}">${String.fromCharCode(c)}</div>
    <div class="button btn" data = "${v}">${String.fromCharCode(v)}</div>
    <div class="button btn" data = "${b}">${String.fromCharCode(b)}</div>
    <div class="button btn" data = "${n}">${String.fromCharCode(n)}</div>
    <div class="button btn" data = "${m}">${String.fromCharCode(m)}</div>
    <div class="button btn" data = "${quoteleft}">${String.fromCharCode(quoteleft)}</div>
    <div class="button btn" data = "${quoteright}">${String.fromCharCode(quoteright)}</div>
    <div class="button btn" data = "${slash}">${String.fromCharCode(slash)}</div>
    <div class="button btn" data = "${arrowUp}">${String.fromCharCode(arrowUp)}</div>
    
    <div class="shift-tab btn right" data = "${shiftRight}">${String.fromCharCode(shiftRight)}Shift</div>`

    document.querySelector('.fourth-row').innerHTML = outFourth;
}
initFourthRow()

function initFifthRow() { 
    let outFifth = ''; 
    outFifth = ` <div class="ctrl-button btn" data = "${ctrl}">${String.fromCharCode(ctrl)}Ctrl</div>
    <div class="ctrl-button btn" data = "${win}">${String.fromCharCode(win)}Win</div>
    <div class="ctrl-button btn" data = "${alt}">${String.fromCharCode(alt)}Alt</div>
    <div class="space-tab btn" data = "${space}">${String.fromCharCode(space)}</div>
    <div class="ctrl-button btn right" data = "${alt}">${String.fromCharCode(alt)}Alt</div>
    <div class="left btn" data = "${arrowLeft}">${String.fromCharCode(arrowLeft)}</div>
    <div class="down btn" data = "${arrowDown}">${String.fromCharCode(arrowDown)}</div>
    <div class="arrow-right btn" data = "${arrowRight}">${String.fromCharCode(arrowRight)}</div>
    <div class="ctrl-button btn right" data = "${ctrl}">${String.fromCharCode(ctrl)}Ctrl</div>`

    document.querySelector('.fifth-row').innerHTML = outFifth;

}
initFifthRow();


document.onkeydown = function(event) {
    console.log(event.code);
    console.log(event.key);
    
    // console.log(event.keyCode);
    document.querySelectorAll(`.btn`).forEach(function(element){
        element.classList.remove('active');

    });

    if(event.location === 2){
        document.querySelector(`.btn[data="${event.keyCode}"].right`)?.classList.add('active')
      }else{
        document.querySelector(`.btn[data="${event.keyCode}"]`)?.classList.add('active')
      }
    // document.querySelector(` .btn[data="${event.keyCode}"]`).classList.add('active')
}

document.querySelectorAll(`.keyboard .btn`).forEach(function(element){
    element.onclick = function(event){
        document.querySelectorAll(`.keyboard .btn`).forEach(function(element){
            element.classList.remove('active');
        });
        let code = this.getAttribute('data');
        this.classList.add('active');
        console.log(code);
    }
    
});