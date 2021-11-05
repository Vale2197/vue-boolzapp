/* ● Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i
contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo
“mar” rimangono solo Marco e Martina)
 */

const root = new Vue({
    el: "#root",
    data: {
        search:"",
        contacts: [
            {
            name: 'Michele',
            avatar: '_1',
            visible: true,
            messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 16:15:22',
                    text: 'Tutto fatto!',
                    status: 'received'
                    }
                ],
            },
            {
            name: 'Fabio',
            avatar: '_2',
            visible: true,
            messages: [
                    {
                    date: '20/03/2020 16:30:00',
                    text: 'Ciao come stai?',
                    status: 'sent'
                    },
                    {
                    date: '20/03/2020 16:30:55',
                    text: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                    },
                    {
                    date: '20/03/2020 16:35:00',
                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                    }
                ],
            },
            {
            name: 'Samuele',
            avatar: '_3',
            visible: true,
            messages: [
                    {
                    date: '28/03/2020 10:10:40',
                    text: 'La Marianna va in campagna',
                    status: 'received'
                    },
                    {
                    date: '28/03/2020 10:20:10',
                    text: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                    },
                    {
                    date: '28/03/2020 16:15:22',
                    text: 'Ah scusa!',
                    status: 'received'
                    }
                ],
            },
            {
            name: 'Luisa',
            avatar: '_4',
            visible: true,
            messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    text: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    text: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                    }
                ],
            },
            {
            name: 'Pam',
            avatar: '_5',
            visible: true,
            messages: []
            },
            {
            name: 'Michael',
            avatar: '_6',
            visible: true,
            messages: []
            },
            {
            name: 'Angela',
            avatar: '_7',
            visible: true,
            messages: []
            },
            {
            name: 'Kevin',
            avatar: '_8',
            visible: true,
            messages: []
            },
        ],
        
        me: {
            name: 'Vale',
            avatar: '_io',
            visible: true,
            },
        counter: 0,
        mex: "", 
        userMex:"", 
        lastMex:"",
        infoM: false, 
        mexCount: 0,
    },
    methods: {
        contactSelector(i) {
            this.counter = i
        },
        sendMex() {

            let nuovoMex = {
                    date: "now",
                    text: this.mex,
                    status: 'sent'
                    };
            let mexUtente = {
                date: "now",
                text: "ok",
                status: 'received'
            }
            this.contacts[this.counter].messages.splice(this.contacts[this.counter].messages.length, 0, nuovoMex);
            
            setTimeout(() => this.contacts[this.counter].messages.splice(this.contacts[this.counter].messages.length, 0, mexUtente), 1000);
            
        }, 

        infoMessage(i) {
            this.mexCount = i
            if(this.infoM == false) {
                this.infoM = true
            }
            else if (this.infoM == true) {
                this.infoM = false
            }
        },
        
    }, 
   

             
})