const UI_Elements = {
    form: document.querySelector('.form'),
    gender: document.querySelector('#gender'),
    national: document.querySelector('#national'),
}

function correctName(name) {
    return name[0].toUpperCase() + name.slice(1).toLowerCase()
}

function getUrlNationalDecryption(serverUrl,id) {
    return `${serverUrl}/v2/country/${id}?format=json`
}

UI_Elements.form.addEventListener('submit', function (event) {
    event.preventDefault()
    const firstName = correctName(event.target.firstElementChild.value)
    const serverUrlGender = 'https://api.genderize.io'
    const serverUrlNational = 'https://api.nationalize.io'
    const serverUrlNationalDecryption = 'https://api.worldbank.org'


    const urlGender = `${serverUrlGender}?name=${firstName}`;
    const urlNational = `${serverUrlNational}?name=${firstName}`;

    fetch(urlGender)
        .then(response => response.json())
        .then(data => UI_Elements.gender.textContent = data.gender ? `${data.name} is ${data.gender}`: `invalid name`)


    fetch (urlNational)
        .then (response => response.json())
        .then (data => data.country.map(function (item){
            return item.country_id
        }))
        .then (data => data[0] ? data[0] : UI_Elements.national.textContent = 'Country undefined')
        .then (id_country => fetch (getUrlNationalDecryption(serverUrlNationalDecryption,id_country)))
        .then (response => response.json())
        .then (data => UI_Elements.national.textContent = `${data[1][0].name}`)

    UI_Elements.form.reset()

})

