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
         deleteTask: false,
         currentList: null,
       }
    },
    methods: {
        setTaskDone(index){
            this.todoList[index].done = !this.todoList[index].done
        },
        setDeleteTask(index){
            console.log(this.value);
            this.todoList.splice(index, 1);
        }
        
    },
}).mount('#app');