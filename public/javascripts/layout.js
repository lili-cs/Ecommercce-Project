document.addEventListener('DOMContentLoaded', () => {
    const jwtToken = localStorage.getItem('user');
    const userName = localStorage.getItem('userName');

    const userNameElement = document.getElementById('userName');
    userNameElement.textContent = userName;

    const signup = document.getElementById('signup');
    const login = document.getElementById('login');
    const logout = document.getElementById('logout');
    const cart = document.getElementById('cart');
    const myOrders = document.getElementById('myOrders');
    const allAccounts = document.getElementById('allAccounts');
    allAccounts.style.display = 'none';
    const pendingOrders = document.getElementById('pendingOrders');
    pendingOrders.style.display = 'none';
    
    if(jwtToken){
        signup.style.display = 'none';
        login.style.display = 'none';
        logout.style.display = 'block';
    }
    else{
        signup.style.display = 'block';
        login.style.display = 'block';
        logout.style.display = 'none'; 
        allAccounts.style.display = 'none';
        pendingOrders.style.display = 'none';
    }

    if(userName === 'admin'){
        cart.style.display = 'none';
        myOrders.style.display = 'none';
        allAccounts.style.display = 'block';
        pendingOrders.style.display = 'block';
    }
});

function home(){
    window.location.href = `http://localhost:3000/`;
    // window.open('http://localhost:3000/');
}

function cart(){
    const userName = localStorage.getItem('userName');
    window.location.href = `http://localhost:3000/cart/${userName}`;

    // const jwtToken = localStorage.getItem('user');
    // if(!jwtToken){
    //     window.location.href = `http://localhost:3000/login`;
    //     alert('u are not logged in. plz login first');
    //     return;
    // }

    // fetch(`http://localhost:3000/cart/${userName}`,
    // {
    //     method: 'GET',
    //     headers: {
    //         'JWT': jwtToken
    //     }
    // })
    // .then(res => {
    //     console.log(res);
    //     return res.json();
    // })
    // .then(data => {
    //     alert(data.message);
    // })
    // // .then(data => {
    // //     // const userName = data.userName;
    // //     // window.location.href = `http://localhost:3000/cart/${userName}`;
    // // })
    // .catch(err => console.log(err));
}

function orders(){
    const userName = localStorage.getItem('userName');
    window.location.href = `http://localhost:3000/orders/${userName}`;
}

function login(){
    window.location.href = `http://localhost:3000/login`;
}

function signup(){
    window.location.href = `http://localhost:3000/signup`;
}

function logout(){
    localStorage.removeItem('user');
    localStorage.removeItem('userName');
    window.location.href = `http://localhost:3000/login`;
}

function pendingOrders(){
    window.location.href = `http://localhost:3000/pending-orders`;
    // const jwtToken = localStorage.getItem('user');

    // if(!jwtToken){
    //     window.location.href = `http://localhost:3000/login`;
    //     alert('u are not logged in. plz login first');
    //     return;
    // }

    // fetch('http://localhost:3000/pending-orders',
    // {
    //     method: 'GET',
    //     headers: {
    //         'JWT': jwtToken
    //     }
    // })
    // .then(res => {
    //     console.log(res);
    // })
    // .catch(err => console.log(err));
}

function allAccounts(){
    window.location.href = `http://localhost:3000/users`;
}

