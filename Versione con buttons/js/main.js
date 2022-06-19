/*
Descrizione:
Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’
interno di una lista.
Bonus
Far comparire gli indirizzi email 
solamente quando sono stati tutti generati.
*/

const appVue = new Vue({
    el: '#app',

    data: {
        listaEmail: [],
    },
    
    methods: {
    generateRandomEmail() {
        //svuoto la lista prima di eseguire il ciclo altrimenti il v-if non funziona
        this.listaEmail= [];
        //eseguo il ciclo
        for (let i = 1; i <= 10; i++) {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((axiosResponse) => {
                    this.listaEmail.push(axiosResponse.data.response);
                    })
                }
                console.log(this.listaEmail)            
    },
    // creo la funzione per cancellare la lista
    deleteList() {
        this.listaEmail = [];
    },
}

});

