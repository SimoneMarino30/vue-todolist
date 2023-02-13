// TRACCIA (✔)
// Rifare l'esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// **MILESTONE 1**
// Stampare all'interno di una lista HTML un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// **MILESTONE 2**
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
// **MILESTONE 3**
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
// **Bonus:**
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

// Creo un array di oggetti con due proprietà: ✔
// text, una stringa che indica il testo del todo e ✔
// done, un booleano (true/false) che indica se il todo è stato fatto oppure no ✔
//  creo una lista html per ogni to do ✔
// SE la proprietà done è true: ✔
// visualizzo il testo sbarrato ✔
// creo a fianco di ogni item una "x" che ✔
// SE cliccata rimuove l'item dalla lista ✔
// creare un imput e un button ✔
// SE cliccato, ✔
// il testo viene letto e crea un nuovo todo ✔

// **Bonus:**
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

// VUE START
const { createApp } = Vue;

createApp({
  data() {
    return {
      todoItems: [
        {
          todo: "Fare gli esercizi di Vue",
          done: false,
        },
        {
          todo: "Preparare la cena",
          done: false,
        },
        {
          todo: "Lavare i piatti",
          done: false,
        },
        {
          todo: "Portare fuori il cane",
          done: false,
        },
        {
          todo: "Leggere il libro",
          done: false,
        },
      ],
      newTaskTodo: "",
    };
  },

  methods: {
    addTask() {
      const newTask = {
        todo: this.newTaskTodo,
        done: false,
      };
      this.todoItems.push(newTask);
    },

    completedTask(index) {
      if (!this.todoItems[index].done) {
        this.todoItems[index].done = true;
      } else {
        this.todoItems[index].done = false;
      }
    },

    removeTask(i) {
      this.todoItems.splice(i, 1);
    },
  },
}).mount("#root");
