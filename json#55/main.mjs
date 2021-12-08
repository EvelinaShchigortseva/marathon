
import data from './data.json'

let newData = JSON.parse(JSON.stringify(data))

let biography = newData.users.map(function (item,i){
    console.log(item)
        return `${item.firstName}, born at ${item.dateOfBirth} - ${item.knowsAs}`
})

biography.forEach(function (item,i){
    console.log(` ${i+1}:${item}`)
})


let names = data.users.map(function (item){
    return item.firstName
})

names.forEach(function (item, i){
    console.log(`name ${i+1} ${item}`)
})