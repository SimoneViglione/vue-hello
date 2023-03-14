const header = `<h1> Mi sto complicando la vita hehe </h1>`

const { createApp } = Vue

createApp({
  data() {
    return {
      titolo: header,
      imageSrc: 'https://images.unsplash.com/photo-1678750264116-4d1074c2921c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    }
  }
}).mount('#app')

