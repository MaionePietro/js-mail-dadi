let scelta = prompt("Premi 1 per le email, 2 per i dadi");
if(scelta == 1){
    //email
    let arreyEmail = ["pietro@gmail.com", "prova@gmail.com", "test@gmail.com"];

    //inserire email
    personalEmail = prompt("Inserisci la tua email");
    arreyEmail.push(personalEmail);
    //ciclo per cercare l'email
    researchEmail = prompt("Quale email cerchi?");
    for(let i=0 ; i< arreyEmail.length ; i++){
        if(arreyEmail[i]===researchEmail){
            alert("PRESENTE IN MEMORIA");
        }
    }
    console.log('array'+arreyEmail);

}else if(scelta == 2){
    //dati
    for(let i=0 ; i<=1 ; i++){
        //generare numeri random
        let utenteRandom = Math.floor(Math.random()*6);
        console.log('numero utente:'+utenteRandom);
        let pcRandom = Math.floor(Math.random()*6);
        console.log('numero pc:'+pcRandom);
        //comparare i due numeri e stampare
        if(utenteRandom==pcRandom){
            alert('PARI')
        }else if(utenteRandom>pcRandom){
            alert('HAI VINTO')
        }else{
            alert('HAI PERSO')
        }
        i = prompt("Premi 0 per riprovare o 1 per chiudere");
    }
    console.log('fine')
}

/*
const printEmail = document.querySelector('body')
printEmail.innerHTML += ('<h1>Email: '+arreyEmail[i]+'</h1>');
*/