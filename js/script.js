// Seleziono l'output
const outputArray = document.getElementById('randomEmailList')
console.log(outputArray);

//Creo l'array dove metterò le email generate
const emailList = [];

const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

//Richiesta Ajax per generare email
axios.get(endpoint);