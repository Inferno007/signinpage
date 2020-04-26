document.querySelector('#auth-login').addEventListener('click',function(){
    document.querySelector('#auth-signup').classList.remove('active');
    document.querySelector('#auth-login').classList.add('active');
})

document.querySelector('#auth-signup').addEventListener('click',function(){
    document.querySelector('#auth-login').classList.remove('active');
    document.querySelector('#auth-signup').classList.add('active');
})

