function signup(){
    const userName = document.getElementById('userName').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;

    fetch('http://localhost:3000/signup',
        {
            method: 'POST',
            body: JSON.stringify({
                userName: userName,
                password: password,
                email: email
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);
            window.location.href = `http://localhost:3000${data.redirect}`;
        })
        .catch(err => {
            console.log(err);
        });
}