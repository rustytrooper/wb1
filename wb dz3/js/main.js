const cartBtn = document.querySelector('.button-cart');
const cart =document.getElementById('modal-cart');
const btnClose = document.querySelector('.modal-close')

cartBtn.addEventListener('click', (e) => {
   cart.style.display="flex";
})
btnClose.addEventListener('click', (e) =>{
    cart.style.display="none";
})

