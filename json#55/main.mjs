
import data from './data.json'

const newData = JSON.parse(JSON.stringify(data))

const biography = newData.users.map(function (item,i){
        return `${item.firstName}, born at ${item.dateOfBirth} - ${item.knowsAs}`
})

biography.forEach(function (item,i){
    console.log(` ${i+1}:${item}`)
})


const names = data.users.map(function (item){
    return item.firstName
})

names.forEach(function (item, i){
    console.log(`name ${i+1} ${item}`)
})