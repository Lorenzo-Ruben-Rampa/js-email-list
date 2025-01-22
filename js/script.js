// Seleziono l'output
const outputArray = document.getElementById('randomEmailList')
console.log(outputArray);

const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

const array = [];

for(let i=0; i < 10; i++) {
//Richiesta Ajax per generare email
axios.get(endpoint)
    .then(response => {
        const final = response.data.response
        // console.log(response.data.response);

    // Aggiungo le email generate all'array
    array.push(final);

    // // Output in pagina
    outputArray.innerText = array;
    
    })
}

console.log(array);


