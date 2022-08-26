function submitData(name, email) {

    let data = {
        name: name,
        email: email
    };

    let userData = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(data),
    };


    return fetch('http://localhost:3000/users', userData)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            document.body.innerHTML = object["id"];
            console.log(object);
        })
        .catch(function (error) {
            document.body.innerHTML = error.message
        })
}




