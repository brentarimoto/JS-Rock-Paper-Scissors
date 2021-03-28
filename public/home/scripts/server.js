export async function loadPageInfo(username){
    const response = await fetch(`/home/user`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
           username
        })
    })
    let {user} = await response.json();

    if(!response.ok){
        alert(user.message)
    return
    }

    document.querySelector('.account__username').innerHTML = user.username
    document.getElementById('wins').innerHTML = document.getElementById('wins').innerHTML+ user.Records[0].wins
    document.getElementById('losses').innerHTML = document.getElementById('losses').innerHTML+ user.Records[0].losses
    document.getElementById('ties').innerHTML = document.getElementById('ties').innerHTML+ user.Records[0].ties


}
