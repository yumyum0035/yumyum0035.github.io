//PROMISE!!!
(()=>{

  console.log('Inici');

    const promesa = new Promise( (resolve, reject)=> {

        setTimeout ( ()=>{

            resolve ('Se terminó el Timeout')

        } , 2000)
    });

promesa
    .then( missatge => console.log(missatge))
    .catch (err => console.log(err));

    console.log('Final');

})();

//Versió antiga (dolenta)
(()=>{

  console.log('Inici');

    const promesa = new Promise( function nomFuncio(resolve, reject) {

        setTimeout ( function temporitzador(){

            resolve ('Se terminó el Timeout')

    } , 2000)
});

promesa
    .then( missatge => console.log(missatge))
    .catch (err => console.log(err));


  console.log('Final');
})();