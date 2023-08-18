const node = document.querySelector('#theme');
const dark = document.location.href + 'lib/css/dark.css';
const fade = document.location.href + 'lib/css/light.css';

setInterval(()=>{
    // const elem = document.querySelector('.main');
    // elem.classList.add('hidden');
    // if(node.href === dark){node.href = fade;}else{node.href = dark;}
    // setTimeout(()=>{elem.classList.remove('hidden');},3000);
    document.querySelector('body').setAttribute('class','hidden');
    if(node.href === dark){node.href = fade;}else{node.href = dark;}
    setTimeout(()=>{document.querySelector('body').removeAttribute('class');},3000);
},15000);