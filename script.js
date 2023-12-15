document.addEventListener('DOMContentLoaded',()=>{
//users data
    const users = [
        { username: 'user1', email: 'user1@gmail.com', password: 'password1' },

    ];

    
   // signup/login toggle
    document.getElementById('show-signup').addEventListener('click',()=>{
        document.getElementById('login-form').classList.add('hidden')
        document.getElementById('signup-form').classList.remove('hidden')
    })
    document.getElementById('show-login').addEventListener('click',()=>{
        document.getElementById('signup-form').classList.add('hidden')
        document.getElementById('login-form').classList.remove('hidden')
    })
    //emailformat validation
    function emailValidation(email){
        const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        console.log(regex.test(email))
        return regex.test(email);
    }
    // Login functionality
    document.getElementById('login-button').addEventListener('click',(ev)=>{
        ev.preventDefault();
        const email=document.getElementById('login-email').value;
        const password=document.getElementById('login-password').value;
        //email and password validation
        if(!email || !emailValidation(email)){
            alert('Enter a valid email address')
            return;
        }
        if (!password) {
            alert('Enter your password.');
            return;
        }
     
    const user=users.find(i=>i.email===email&&i.password===password)

        if(user){
            alert('Login successful')
        }else{
            alert('Invalid login credentials')
        }
    });

    //Signup functionality
    document.getElementById('signup-button').addEventListener('click',(ev)=>{
        ev.preventDefault();
        const username=document.getElementById('signup-username').value;
        const email=document.getElementById('signup-email').value;
        const password=document.getElementById('signup-password').value;
        const passwordMatch=document.getElementById('match-password').value;

     // validations
    if (!username) {
            alert('Enter a username.');
            return;
        }
     console.log({password,passwordMatch});
   
    if(password != passwordMatch){
        alert('Passwords do not match.');
        return;
    }
     if(!email || !emailValidation(email)){
        alert('Enter a valid email address')
        return;
    }
    if (!password) {
        alert('Eter your password.');
        return;
    }
 
    //email validatior
    if(users.some(user=>user.email===email)){
        alert('Email already exists')
        return ;
    }

   
    users.push({username,email,password});
    console.log({users});
    alert('User registration completed succesfully');
    document.getElementById('signup-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
});

});

