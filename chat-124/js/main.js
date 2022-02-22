import { UI_ELEMENTS, UI_MODALS } from "./UI.js";
import { messageServer, sendRequest, userServer } from "./network.js";
import Cookies from "js-cookie";
import { format } from 'date-fns'




function openModalWindow(element){
    element.classList.add('active')
}

function closeModalWindow(element){
    element.classList.remove('active')
}

if(Cookies.get('token')){
    openModalWindow(UI_MODALS.chat)
    closeModalWindow(UI_MODALS.auth)
    showMessage()
    
    const socket = new WebSocket(`ws://chat1-341409.oa.r.appspot.com/websockets?${Cookies.get('token')}`);


    socket.onopen = function() {
    socket.send(JSON.stringify({
        text: 'тестовый тест',
        }));
    };

    socket.onmessage = function(event) {
    console.log(event.data);
    };
}


UI_ELEMENTS.authForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    const email = {
        email : `${e.target.firstElementChild.nextElementSibling.value}`
    }

    if(email.email){
        sendRequest(userServer, 'POST', email)
        closeModalWindow(UI_MODALS.auth)
        openModalWindow(UI_MODALS.confirm)
    }
})


UI_ELEMENTS.confirmForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    const token = e.target.firstElementChild.nextElementSibling.value;
    Cookies.set('token', `${token}`)

    closeModalWindow(UI_MODALS.confirm)
    openModalWindow(UI_MODALS.chat)
    showMessage()

})


UI_ELEMENTS.buttonSettings.addEventListener('click',(e)=>{
    openModalWindow(UI_MODALS.settings)

    UI_ELEMENTS.settingsForm.addEventListener('submit',(e)=>{
        e.preventDefault()
    
        const name = {
            name: e.target.firstElementChild.firstElementChild.value
        }

        if(name.name){
            sendRequest(userServer, 'PATCH', name)
            closeModalWindow(UI_MODALS.settings)
        }

    })
})

UI_ELEMENTS.messageForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const message = e.target.firstElementChild.value
    if(message){
        const messageText = UI_ELEMENTS.template.content.firstElementChild.firstElementChild
        const messageTime = UI_ELEMENTS.template.content.firstElementChild.firstElementChild.nextElementSibling

        messageText.textContent =  `i: ${message}`
        messageTime.textContent = format(new Date(),'HH:mm' )

        UI_ELEMENTS.messageWindow.append( UI_ELEMENTS.template.content.cloneNode(true))
    }
    UI_ELEMENTS.messageForm.reset()


   
    // fetch('https://chat1-341409.oa.r.appspot.com/api/user/me', {
    //     method: 'GET',
    //     headers: {
    //       'Content-Type': 'application/json;charset=utf-8',
    //       'Authorization': `Bearer ${Cookies.get('token')}`
    //     },
    //   })
    //     .then(response => response.json())
    //     .then(response => console.log(response.name))


})

UI_ELEMENTS.exit.addEventListener('click', (e) =>{
    Cookies.remove('token')
    openModalWindow(UI_MODALS.auth)
})



async function showMessage(){
    const messages = await sendRequest(messageServer, 'GET')
    console.log(messages);
    setMessage(messages)
}
    
function setMessage(messages){
 
    messages.messages.forEach(item => {

       
        const messageText = UI_ELEMENTS.templateInterview.content.firstElementChild.firstElementChild
        const messageTime = UI_ELEMENTS.templateInterview.content.firstElementChild.firstElementChild.nextElementSibling

        const time = format(new Date(item.createdAt),'HH:mm' )
        messageText.textContent =  `${item.username}: ${item.message}`
        messageTime.textContent = `${time}`
        UI_ELEMENTS.messageWindow.append( UI_ELEMENTS.templateInterview.content.cloneNode(true))
    })
      

}


