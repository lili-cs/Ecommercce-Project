function login(){
    const userName = document.getElementById('userName').value;
    const password = document.getElementById('password').value;

    fetch('http://localhost:3000/login',
        {
            method: 'POST',
            body: JSON.stringify({
                userName: userName,
                password: password
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => {
            if(res.status === 200){
                const token = res.headers.get('jwt');
                localStorage.setItem('user', token);
            }
            return res.json();
        })
        .then(data => {
            console.log(data);
            window.location.href = `http://localhost:3000${data.redirect}`;
            // window.open('http://localhost:3000' + data.redirect);
        })
        .catch(err => {
            console.log(err);
        });
}