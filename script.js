let input= document.querySelector("#qr-inp");
let GenBtn=document.querySelector('.btn');
let card=document.querySelector('.card');
let qrImg=document.querySelector('#qrImg');
let DownBtn=document.querySelector('#download');
let CloseBtn=document.querySelector('#close');
let container=document.querySelector('#con');

let url="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";


GenBtn.addEventListener('click',()=>{
    if(!input.value){
        alert("Enter the Input")
    }
    else{
        const imgUrl=url+input.value;
        qrImg.setAttribute('src',imgUrl);
        setTimeout(() => {
            card.classList.add('show');
            container.classList.add('opacity');
        }, 200 );
    }

})

DownBtn.addEventListener('click',()=>{
    const imgUrl=url+input.value;
    fetch(imgUrl)
    .then((res)=>res.blob())
    .then((blob)=>{
        const link=document.createElement('a');
        link.href=URL.createObjectURL(blob);
        link.download="qr.jpg";
        link.click();

    })
})

CloseBtn.addEventListener('click',()=>{
    card.classList.remove('show');
    container.classList.remove('opacity');
})