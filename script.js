document.addEventListener('DOMContentLoaded',()=>{

    const users = [
        { username: 'user1', email: 'user1@example.com', password: 'password1' },

    ];
   
    document.getElementById('show-signup').addEventListener('click',()=>{
        document.getElementById('login-form').classList.add('hidden')
        document.getElementById('signup-form').classList.remove('hidden')
    })
    document.getElementById('show-login').addEventListener('click',()=>{
        document.getElementById('signup-form').classList.add('hidden')
        document.getElementById('login-form').classList.remove('hidden')
    })

    document.getElementById('login-button').addEventListener('click',(ev)=>{
        ev.preventDefault();
        const email=document.getElementById('login-email').value;
        const password=document.getElementById('login-password').value;
        const user=users.find(i=>i.email===email&&i.password===password)

        if(user){
            alert('Login successful')
        }else{
            alert('Invalid login credentials')
        }
    });

    document.getElementById('signup-button').addEventListener('click',(ev)=>{
        ev.preventDefault();
        const username=document.getElementById('signup-username').value;
        const email=document.getElementById('signup-email').value;
        const password=document.getElementById('signup-password').value;
        const passwordMatch=document.getElementById('signup-password').value;
   
    if(password != passwordMatch){
        alert('Passwords do not match.');
        return;
    }
    if(users.some(user=>user.email===email)){
        alert('Email already exists')
        return ;
    }

   
    users.push({username,email,password});
    console.log({users});
    alert('User registration completed succesfully');
    // document.getElementById('signup-form').classList.add('hidden');
    // document.getElementById('login-form').classList.remove('hidden');
});

});

