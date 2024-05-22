// reset
'use strict'

/* *************************
        variabili
************************* */

const todoList = [
    {
        text: 'Ripassare cicli, iterazioni e condizioni JavaScript',
        done: null,
    },
    {
        text: 'Studiare VueJS, leggendo attendamente la documentazione.',
        done: null,
    },
    {
        text: 'Fare esercitazioni su tutti gli argomenti affrontati.',
        done: null,
    },
];


/* *************************
    inizializzo oggetto
           vuejs
************************* */

const {createApp} = Vue;

createApp({
    data() {
       return {
         todoList, // array di oggetti
         textArea: '', // campo testo 
       }
    },
    methods: {
        // cliccando sul bottone done cambio il valore di done per aggiungere o rimuovere la classe task-done:
        setTaskDone(index){
            this.todoList[index].done = !this.todoList[index].done
        },
        // cliccando sul bottone delete cancello l'0ggetto nella posizione dell'indice:
        setDeleteTask(index){
            console.log(this.value);
            this.todoList.splice(index, 1);
        },
        // aggiungo il toto all'array permendo il bottone adTask e premendo il tasto enter dalla tastiera:
        setAddTask(){
            console.log(this.textArea);
            if (typeof this.textArea === 'string' && /\S/.test(this.textArea)){
                this.todoList.push({
                    text: this.textArea,
                    done: null,
                });
            };
            this.textArea = '';
        },
        // cancello la textArea cliccando sul bottone Cancel:
        setClearArea(){
            console.log('cancello il contenuto');
            this.textArea = '';
        }
        
    },
}).mount('#app');

console.log(todoList);

/* *************************
           FINE
************************* */
