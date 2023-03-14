const header = `<h1> Mi sto complicando la vita hehe </h1>`

const { createApp } = Vue

createApp({
  data() {
    return {
      titolo: header,
      imageSrc: 'https://images.unsplash.com/photo-1569081156361-c98e05e7f1e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
    }
  }
}).mount('#app')

