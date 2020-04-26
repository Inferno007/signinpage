var login = document.querySelector('#auth-login');
var signup = document.querySelector('#auth-signup')

var val1 = 'one';
var val2 = 'two';
function buttonClicked(value){
    if(value===val1){
    signup.classList.remove('active');
    signup.removeEventListener('click',buttonClicked);
    login.classList.add('active');
    }
    else if(value===val2){
    login.classList.remove('active');   
    login.removeEventListener('click',buttonClicked);
    signup.classList.add('active'); 
    }
    //login.classList.remove('active');
    //signup.classList.remove('active');
}

signup.addEventListener('click',buttonClicked('one'));
login.addEventListener('click',buttonClicked('two'));


