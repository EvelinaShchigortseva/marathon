const serverUrlGender = 'https://api.genderize.io'
const serverUrlNational = 'https://api.nationalize.io'
const serverUrlNationalDecryption = 'https://api.worldbank.org'



function getUrlNationalDecryption(serverUrl,id) {
  return `${serverUrl}/v2/country/${id}?format=json`
}

export async function getGenderByName(firstName){
  const urlGender = `${serverUrlGender}?name=${firstName}`;
  const response = await fetch(urlGender)
  const genderInformation =  await response.json()
  return genderInformation.gender
}

export async function getNationalByName(firstName){
  const urlNational = `${serverUrlNational}?name=${firstName}`;
  const responseNational = await fetch(urlNational)
  const nationalInfo = await responseNational.json()
  const countries = nationalInfo.country.map(item=> item.country_id)
  const country = countries[0]
  const responseDescryption = await fetch(getUrlNationalDecryption(serverUrlNationalDecryption,country))
  const descryptionInfo = await responseDescryption.json()
  return descryptionInfo[1][0].name
}

