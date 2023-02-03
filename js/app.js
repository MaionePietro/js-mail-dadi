let scelta = prompt("Premi 1 per le email, 2 per i dadi");
if(scelta == 1){
    //email
    let numeroEmail=0;
    let arreyEmail = [];
    numeroEmail = prompt("Quante email devi inserire?");
    console.log(numeroEmail);
    for(let i=0 ; i< numeroEmail ; i++){
        const emailInput = prompt("Inserisci email");
        arreyEmail.push(emailInput);
        console.log('email inserita: '+arreyEmail[i]);
        const printEmail = document.querySelector('body')
        printEmail.innerHTML += ('<h1>Email: '+arreyEmail[i]+'</h1>');
    }

}else if(scelta == 2){
    for(let i=0 ; i<=1 ; i++){
        let utenteRandom = Math.floor(Math.random()*6);
        console.log('numero utente:'+utenteRandom);
        let pcRandom = Math.floor(Math.random()*6);
        console.log('numero pc:'+pcRandom);
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