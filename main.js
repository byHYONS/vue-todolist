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

const {createApp} = Vue;

createApp({
    data() {
       return {
         todoList,
         currentList: null,
       }
    },
    methods: {
        
    },
}).mount('#app');