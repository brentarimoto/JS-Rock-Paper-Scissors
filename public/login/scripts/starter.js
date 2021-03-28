import {createUser, loginUser} from './server.js'

window.addEventListener('DOMContentLoaded',(event)=>{
    const chooseButton = document.querySelector('.buttons')
    chooseButton.addEventListener('mouseup',(event)=>{
        if (event.target.id === 'buttons__create?' || event.target.id === 'buttons__login?' ){
            let option=event.target.id.match(/__(\w+)\?/)[1];

            document.getElementById('buttons__create?').classList.toggle('buttons__button--hidden')
            document.getElementById('buttons__login?').classList.toggle('buttons__button--hidden')

            document.getElementById(`buttons__${option}`).classList.toggle('buttons__button--hidden')
            document.querySelectorAll(`.${option}`).forEach(el=>{
                el.classList.toggle(`${option}--hidden`)
            })
        }
    })

    const createButton = document.getElementById('buttons__create')

    createButton.addEventListener('mouseup', async (event)=>{
        event.preventDefault();
        let email = document.getElementById('create__email').value
        let username = document.getElementById('create__username').value
        let password = document.getElementById('create__password').value

        createUser(email, username, password)
    })

    const loginButton = document.getElementById('buttons__login')

    loginButton.addEventListener('mouseup',(event)=>{
        event.preventDefault();
        let username = document.getElementById('login__username').value
        let password = document.getElementById('login__password').value

        loginUser(username, password)
    })


})