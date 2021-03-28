export async function createUser(email, username, password){
    const response = await fetch('/user/create', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
           email,
           username,
           password
        })
     })

     const user = await response.json();
     if(response.ok){
        location.replace(`http://localhost:3000/home/${user.username}`)
     } else {
         alert('Username or Email is already in use. Please use a different username or email address. Thank you!')
     }
}

export async function loginUser(username, password){
    const response = await fetch('/user/login', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
           username,
           password
        })
    })

    const user = await response.json();
    if(response.ok){
        location.replace(`http://localhost:3000/home/${user.username}`)
    } else {
        alert(user.message)
    }
}