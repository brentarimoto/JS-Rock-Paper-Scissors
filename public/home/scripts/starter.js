import {loadPageInfo} from './server.js'

window.addEventListener('DOMContentLoaded', async (event)=>{
    let username=document.URL.match(/\/(\w+)\/$/)[1]

    loadPageInfo(username)

    let button = document.getElementById('buttons__play')
    button.addEventListener('mouseup',(event)=>{
        location.replace(`http://localhost:3000/game/${username}`)
    })

    // console.log(document.URL)



})