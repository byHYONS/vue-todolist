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

const keyEnter = addEventListener('keypress', function(e) {
    console.log(e.key);
    
    return e.key;
});



const {createApp} = Vue;

createApp({
    data() {
       return {
         todoList,
         textArea: '',
       }
    },
    methods: {
        setTaskDone(index){
            this.todoList[index].done = !this.todoList[index].done
        },
        setDeleteTask(index){
            console.log(this.value);
            this.todoList.splice(index, 1);
        },
        setAddTask(){
            console.log(this.textArea);
            this.todoList.push({
                text: this.textArea,
                done: null,
            })
            this.textArea = '';
        },
        setClearArea(){
            console.log('cancello il contenuto');
            this.textArea = '';
        }
        
    },
}).mount('#app');

console.log(todoList);