console.log('Bootstrap - Preventivo')
console.log('Benvenuto')

//annotazioni utili
/* l'utente inserisci il tipo di lavoro, il cui prezzo orario varia
in base a quello scelto, inserisce il quantitativo di ore e chiede di
ricevere un preventivo*/
/*N.B. può utilizzare un codice coupon per ricevere un eventuale sconto */

let price = 0

//recupero l'elemento html del form per la funzione successiva

const formElement = document.getElementById('preventivo')

//recupero tutti gli elementi html che mi servono
//e creo le costanti che successivamente utilizzerò

const workElement = document.getElementById('work')

const hoursElement = document.getElementById('number')

const couponElement = document.getElementById('coupon')

/* una volta creati gli elementi acquisisco i valori che avranno
,in base all'interazione dell'utente con il form, tramite la funzione
submit quando l'utente "invia" i valori */

formElement.addEventListener('submit', function (event) {

    event.preventDefault()

    //recupero i valori inseriti
    const selectedWork = workElement.value

    const numberHours = hoursElement.value

    const coupon = couponElement.value

    //verifico funzionamento acquisizione dati
    console.log(selectedWork, numberHours, coupon)






})



