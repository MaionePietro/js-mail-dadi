let scelta = prompt("Premi 1 per le email, 2 per i dadi");
if(scelta == 1){
    //email
    let arreyEmail = ["pietro@gmail.com", "prova@gmail.com", "test@gmail.com"];
    //inserire email
    personalEmail = prompt("Inserisci la tua email");
    arreyEmail.push(personalEmail)
    console.log('array'+arreyEmail);
    //inserire l'email da cercare
    researchEmail = prompt("Quale email cerchi?");
    let risultato = arreyEmail.includes(researchEmail);
    console.log(risultato); 
    //condizione per verificare presenza email
    let printEmail = document.querySelector('body');
    if(risultato==true){
        printEmail.innerHTML = ('<h1>Email: '+researchEmail+' è presente</h1>');
    }else{
        printEmail.innerHTML = ('<h1>Email: '+researchEmail+' non è presente</h1>');
    }
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