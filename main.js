
let textarea = document.createElement("textarea");
textarea.className = "textarea";
textarea.placeholder = "";
document.body.append(textarea);

// let firstrowButtons = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 92];

let backQuote = 96;
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
let minus = 45;
let equal = 61;
let backSlash = 92;
let backspace = 8;

// let secondrowButtons = [113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93];

let q = 113;
let w = 119;
let e = 101;
let r = 114;
let t = 116;
let y = 121;
let u = 117;
let i = 105;
let o = 111;
let p = 112;
let bracketLeft = 91;
let bracketRight = 93;

// let thirdrowButtons = [97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39];

let a = 97;
let s = 115;
let d = 100;
let f = 102;
let g = 103;
let h = 104;
let j = 106;
let k = 107;
let l = 108;
let semicolon = 59;
let quote = 39;

// let fourthrowButtons = [122, 120, 99, 118, 98, 110, 109, 44, 46, 47];
let z = 122;
let x = 120;
let c = 99;
let v = 118;
let b = 98;
let n = 110;
let m = 109;
let quoteleft = 44;
let quoteright = 46;
let slash = 47;
let tab = 9;

let caps = 20;
let enter = 13;
let shiftLeft = 16;
let space = 32;
let win = 91;
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
    outFirst = ` <div class="button btn" data = "${backQuote}">${String.fromCharCode(backQuote)}></div>
    <div class="button btn" data = "${digit1}">${String.fromCharCode(digit1)}></div>
    <div class="button btn" data = "${digit2}">${String.fromCharCode(digit2)}></div>
    <div class="button btn" data = "${digit3}">${String.fromCharCode(digit3)}></div>
    <div class="button btn" data = "${digit4}">${String.fromCharCode(digit4)}></div>
    <div class="button btn" data = "${digit5}">${String.fromCharCode(digit5)}></div>
    <div class="button btn" data = "${digit6}">${String.fromCharCode(digit6)}></div>
    <div class="button btn" data = "${digit7}">${String.fromCharCode(digit7)}></div>
    <div class="button btn" data = "${digit8}">${String.fromCharCode(digit8)}></div>
    <div class="button btn" data = "${digit9}">${String.fromCharCode(digit9)}></div>
    <div class="button btn" data = "${digit0}">${String.fromCharCode(digit0)}></div>
    <div class="button btn" data = "${minus}">${String.fromCharCode(minus)}></div>
    <div class="button btn" data = "${equal}">${String.fromCharCode(equal)}></div>
    <div class="button btn" data = "${backSlash}">${String.fromCharCode(backSlash)}></div>
    <div class="button btn" data = "${backspace}">${String.fromCharCode(backspace)}></div>`

    document.querySelector('.first-row').innerHTML = outFirst;
}
initFirstRow();

function initSecondRow() { 
    let outSecond = ''; 
    outSecond = ` <div class="button-tab btn" data = "${tab}">${String.fromCharCode(tab)}>Tab</div>
    <div class="button btn" data = "${q}">${String.fromCharCode(q)}></div>
    <div class="button btn" data = "${w}">${String.fromCharCode(w)}></div>
    <div class="button btn" data = "${e}">${String.fromCharCode(e)}></div>
    <div class="button btn" data = "${r}">${String.fromCharCode(r)}></div>
    <div class="button btn" data = "${t}">${String.fromCharCode(t)}></div>
    <div class="button btn" data = "${y}">${String.fromCharCode(y)}></div>
    <div class="button btn" data = "${u}">${String.fromCharCode(u)}></div>
    <div class="button btn" data = "${i}">${String.fromCharCode(i)}></div>
    <div class="button btn" data = "${o}">${String.fromCharCode(o)}></div>
    <div class="button btn" data = "${p}">${String.fromCharCode(p)}></div>
    <div class="button btn" data = "${bracketLeft}">${String.fromCharCode(bracketLeft)}></div>
    <div class="button btn" data = "${bracketRight}">${String.fromCharCode(bracketRight)}></div>
    <div class="button-tab btn" data = "${del}">${String.fromCharCode(del)}>Del</div>`

    document.querySelector('.second-row').innerHTML = outSecond;
}
initSecondRow();

function initThirdRow() { 
    let outThird = ''; 
    outThird = ` <div class="caps-button btn" data = "${caps}">${String.fromCharCode(caps)}>Caps Lock</div>
    <div class="button btn" data = "${a}">${String.fromCharCode(a)}></div>
    <div class="button btn" data = "${s}">${String.fromCharCode(s)}></div>
    <div class="button btn" data = "${d}">${String.fromCharCode(d)}></div>
    <div class="button btn" data = "${f}">${String.fromCharCode(f)}></div>
    <div class="button btn" data = "${g}">${String.fromCharCode(g)}></div>
    <div class="button btn" data = "${h}">${String.fromCharCode(h)}></div>
    <div class="button btn" data = "${j}">${String.fromCharCode(j)}></div>
    <div class="button btn" data = "${k}">${String.fromCharCode(k)}></div>
    <div class="button btn" data = "${l}">${String.fromCharCode(l)}></div>
    <div class="button btn" data = "${semicolon}">${String.fromCharCode(semicolon)}></div>
    <div class="button btn" data = "${quote}">${String.fromCharCode(quote)}></div>
    <div class="enter-button btn" data = "${shiftLeft}">${String.fromCharCode(shiftLeft)}>Enter</div>`

    document.querySelector('.third-row').innerHTML = outThird;
}
initThirdRow();

function initFourthRow() { 
    let outFourth = ''; 
    outFourth = ` <div class="shift-tab btn" data = "${shiftLeft}">${String.fromCharCode(shiftLeft)}>Shift</div>
    
    <div class="button btn" data = "${z}">${String.fromCharCode(z)}></div>
    <div class="button btn" data = "${x}">${String.fromCharCode(x)}></div>
    <div class="button btn" data = "${c}">${String.fromCharCode(c)}></div>
    <div class="button btn" data = "${v}">${String.fromCharCode(v)}></div>
    <div class="button btn" data = "${b}">${String.fromCharCode(b)}></div>
    <div class="button btn" data = "${n}">${String.fromCharCode(n)}></div>
    <div class="button btn" data = "${m}">${String.fromCharCode(m)}></div>
    <div class="button btn" data = "${quoteleft}">${String.fromCharCode(quoteleft)}></div>
    <div class="button btn" data = "${quoteright}">${String.fromCharCode(quoteright)}></div>
    <div class="button btn" data = "${slash}">${String.fromCharCode(slash)}></div>
    <div class="button btn" data = "${arrowUp}">${String.fromCharCode(arrowUp)}></div>
    
    <div class="shift-tab btn" data = "${shiftLeft}">${String.fromCharCode(shiftLeft)}>Shift</div>`

    document.querySelector('.fourth-row').innerHTML = outFourth;
}
initFourthRow()

function initFifthRow() { 
    let outFifth = ''; 
    outFifth = ` <div class="ctrl-button btn" data = "${ctrl}">${String.fromCharCode(ctrl)}>Ctrl</div>
    <div class="ctrl-button btn" data = "${win}">${String.fromCharCode(win)}>Win</div>
    <div class="ctrl-button btn" data = "${alt}">${String.fromCharCode(alt)}>Alt</div>
    <div class="space-tab btn" data = "${space}">${String.fromCharCode(space)}></div>
    <div class="ctrl-button btn" data = "${alt}">${String.fromCharCode(alt)}>Alt</div>
    <div class="left btn" data = "${arrowLeft}">${String.fromCharCode(arrowLeft)}></div>
    <div class="down btn" data = "${arrowDown}">${String.fromCharCode(arrowDown)}></div>
    <div class="right btn" data = "${arrowRight}">${String.fromCharCode(arrowRight)}></div>
    <div class="ctrl-button btn" data = "${ctrl}">${String.fromCharCode(ctrl)}>Ctrl</div>`

    document.querySelector('.fifth-row').innerHTML = outFifth;

}
initFifthRow();

// document.onkeypress = function(event) {
//     console.log(event.code);
//     console.log(event.keyCode);
//     document.querySelectorAll(`.button`).forEach(function(element){
//         element.classList.remove('active');
//     });
   
//     document.querySelector(`.button[data="${event.keyCode}"]`).classList.add('active')
    
// }

document.onkeypress = function(event) {
    console.log(event.code);
    console.log(event.keyCode);
    document.querySelectorAll(`.btn`).forEach(function(element){
        element.classList.remove('active');
    });
    // document.querySelector(`.keyboard .button[data="${event.keyCode}"]`).classList.add('active')
    document.querySelector(` .btn[data="${event.keyCode}"]`).classList.add('active')
}

document.querySelectorAll(`.keyboard .button`).forEach(function(element){
    element.onclick = function(event){
        document.querySelectorAll(`.keyboard .button`).forEach(function(element){
            element.classList.remove('active');
        });
        let code = this.getAttribute('data');
        this.classList.add('active');
        console.log(code);
    }
    
});