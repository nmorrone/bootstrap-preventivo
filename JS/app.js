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

//recupero elemento HTML per il risultato
const resultElement = document.getElementById('result')

/* creo l'array contentente tutti i codici coupon
che l'utente potrebbe inserire per lo sconto */

3
let coupons = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24']

/* una volta creati gli elementi acquisisco i valori che avranno
,in base all'interazione dell'utente con il form, tramite la funzione
submit quando l'utente "invia" i valori */

formElement.addEventListener('submit', function (event) {

    event.preventDefault()

    //recupero i valori inseriti
    let selectedWork = parseInt(workElement.value)

    const numberHours = parseInt(hoursElement.value)

    const coupon = couponElement.value.toUpperCase()

    //verifico funzionamento acquisizione dati
    console.log(selectedWork, numberHours, coupon)


    /* inserisco la condizione per il quale inserisco l'importo
    orario da moltiplicare alle ore per il calcolo, sulla base del
    lavoro scelto dall'utente sul form */
    if (selectedWork === 1) {

        selectedWork = 20.50
    }

    else if (selectedWork === 2) {

        selectedWork = 15.30
    }

    else {

        selectedWork = 33.60
    }

    console.log(selectedWork)

    //calcolo la bozza del prezzo senza coupon
    price = (selectedWork * numberHours).toFixed(2)
    //verifico funzionamento
    console.log(price)

    //inserisco condizione coupon
    if (coupons.includes(coupon)) {

        price = (price - (price / 100 * 25)).toFixed(2)
    }

    console.log(price)

    resultElement.innerHTML = 'Il Prezzo Finale è: <br>' + price

}
)




