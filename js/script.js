// Seleziono l'output
const outputArray = document.getElementById('randomEmailList')
// console.log(outputArray);

const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

// Creo un nuovo array dove inserirò le email
const emailArray = [];

for(let i=0; i < 10; i++) {
//Richiesta Ajax per generare email
axios.get(endpoint)
    .then(response => {
        const final = response.data.response
        // console.log(response.data.response);

    // Aggiungo le email generate all'array
    emailArray.push(final);

    // Template literal per l'output
    let emailHtml = "";
    emailArray.forEach(function (email, index) {
      emailHtml += `<div>Email n°${index + 1}: ${email}</div>`;
    });

    // // Output in pagina
    outputArray.innerHTML = emailHtml;
    
    })
}


