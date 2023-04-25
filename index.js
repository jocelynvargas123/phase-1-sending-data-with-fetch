function submitData(name, email) {
    const formData = {
        name : name,
        email : email,
    }

    const dataObject = {
        method: "POST",
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json',
        },
        body: JSON.stringify(formData)
    }

    return fetch('http://localhost:3000/users', dataObject)
    .then((response) => response.json())

    .then(function (data) {
        const newDiv = document.createElement('div')
        document.querySelector('body').appendChild(newDiv)
        document.querySelector('div').innerHTML = data.id
    })
    .catch((e) => {
        return console.log("error")

    })
}
