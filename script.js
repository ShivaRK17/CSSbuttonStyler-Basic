function getVal() {
    const textin = document.querySelector('#textin').value;
    console.log(textin);
    document.querySelector('.btn').innerText=textin;
}
var colin,bgcol,fonsz,brad,padin,marz;
// console.log(val);
let btn= document.querySelector('.btn');
function getCol() {
    colin = document.querySelector('#colorin').value;
    // console.log(val);
    btn.style.color=colin;
}
function getbgCol() {
    bgcol = document.querySelector('#colorout').value;
    btn.style.backgroundColor=bgcol;
}
function getNum() {
    fonsz = document.querySelector('#numberin').value;
    btn.style.fontSize=fonsz+'px';
}
function getradius() {
    brad = document.querySelector('#radiusin').value;
    // console.log(val);
    btn.style.borderRadius=brad+'px';
}
function getpad() {
    padin = document.querySelector('#paddin').value;
    // console.log(val);
    btn.style.padding=padin+'px';
}
function getmar() {
    marz = document.querySelector('#margin').value;
    // console.log(val);
    btn.style.margin=marz+'px';
}


function alldone() {
    const codin = document.querySelector('.codehere')
    if(codin.innerHTML!=""){
        codin.innerHTML="";
    }
    codin.innerHTML+="color:"+colin+";<br>";
    codin.innerHTML+="background-color:"+bgcol+";<br>";
    codin.innerHTML+="font-size:"+fonsz+"px; <br>"
    codin.innerHTML+="border-radius:"+brad+"px; <br>"
    codin.innerHTML+="padding:"+padin+"px; <br>"
    codin.innerHTML+="margin:"+marz+"px; <br>"
}