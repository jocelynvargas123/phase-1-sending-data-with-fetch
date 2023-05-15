function submitData(name, email){
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: `${name}`,
            email: `${email}`,

        })
    })
    .then(resp => resp.json())
    .then(function (data) {
        const newDiv = document.createElement('div')
        document.querySelector('body').appendChild(newDiv)
        document.querySelector('div').append(data.id)
    })
    .catch(error => document.querySelector('div').append(error))
}