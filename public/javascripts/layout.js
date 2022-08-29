document.addEventListener('DOMContentLoaded', () => {
    const jwtToken = localStorage.getItem('user');

    const signup = document.getElementById('signup');
    const login = document.getElementById('login');
    const logout = document.getElementById('logout');
    
    if(jwtToken){
        signup.style.display = 'none';
        login.style.display = 'none';
        logout.style.display = 'block';
    }
    else{
        signup.style.display = 'block';
        login.style.display = 'block';
        logout.style.display = 'none'; 
    }
});

function home(){
    window.location.href = `http://localhost:3000/`;
    // window.open('http://localhost:3000/');
}

function cart(){
    const jwtToken = localStorage.getItem('user');
    if(!jwtToken){
        alert('u are not logged in. plz login first');
        window.location.href = `http://localhost:3000/login`;
        return;
    }

    fetch('http://localhost:3000/cart',
    {
        method: 'GET',
        headers: {
            'JWT': jwtToken
        }
    })
    .then(res => res.json())
    .then(data => {
        const userName = data.userName;
        window.location.href = `http://localhost:3000/cart/${userName}`;
    })
    .catch(err => console.log(ree));
    // .then(res => {
    //     if(res.status === 401){
    //         alert('invalid token.plz re-login');
    //         return res.json();
    //     }
    // })
    // .then(data => {
    //     if(data && data.redirect){
    //         window.location.href = `http://localhost:3000${data.redirect}`;

    //         console.log(data);
    //     }

    // })
}

function orders(){
    window.location.href = `http://localhost:3000/orders`;
}

function login(){
    window.location.href = `http://localhost:3000/login`;
}

function signup(){
    window.location.href = `http://localhost:3000/signup`;
}

function logout(){
    localStorage.removeItem('user');
    window.location.href = `http://localhost:3000/login`;
}

