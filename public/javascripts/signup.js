function signupSubmit(){
    const userName = document.getElementById('userNameInput').value;
    const password = document.getElementById('passwordInput').value;
    const email = document.getElementById('emailInput').value;

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
            alert(data.message);
        })
        .catch(err => {
            console.log(err);
        });
}
