const UI_Elements = {
    form: document.querySelector('.form'),
    gender: document.querySelector('#gender'),
    national: document.querySelector('#national'),
}

function correctName(name) {
    return name[0].toUpperCase() + name.slice(1).toLowerCase()
}

UI_Elements.form.addEventListener('submit', function (event) {
    event.preventDefault()
    const firstName = correctName(event.target.firstElementChild.value)
    const serverUrlGender = 'https://api.genderize.io'
    const serverUrlNational = 'https://api.nationalize.io'

    const urlGender = `${serverUrlGender}?name=${firstName}`;
    const urlNational = `${serverUrlNational}?name=${firstName}`;


    fetch(urlGender)
        .then(response => response.json())
        .then(data => UI_Elements.gender.textContent = data.gender ? `${data.name} is ${data.gender}`: `invalid name`)

    // if array[0]
    fetch (urlNational)
        .then (response => response.json())
        .then (data => data.country.map(function (item){
            return item.country_id
        }))
        .then (data => UI_Elements.national.textContent= data[0] ? `Country is ${data[0]}` : `Country is undefined`)
})


//if array
// fetch(urlNational)
//     .then(response => response.json())
//     .then( data => data.country.map(function (item){
//         return item.country_id
//     }))
//     .then (data => UI_Elements.national.textContent=`${data}`)
