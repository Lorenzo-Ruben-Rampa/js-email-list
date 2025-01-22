// Seleziono l'output
const outputArray = document.getElementById('randomEmailList')
console.log(outputArray);

//Creo l'array dove metterò le email generate
const emailList = [];

const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

//Richiesta Ajax per generare email
axios.get(endpoint)
    .then(response => {
        for(let i=0; i < 10; i++) {
            let randomEmail = emailList[i];
            const result = response.data;
            let email = result.response;
        }
        console.log(email);
    // // Output in pagina
    outputEl.innerText = email;
    })

// console.log(response);

