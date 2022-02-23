new Vue({
    el: '#desafio',
    data: {
        nome: 'V1ttoV1tto',
        idade: 23,
        imgUrl: 'https://www.comboinfinito.com.br/principal/wp-content/uploads/2021/09/JoJos-Bizarre-Adventure.jpg',
        
    },
    methods: {
        calculoIdade: function(){
            return this.idade *3
        },
        randomNumber: function(){
            return Math.random()
        }
    }
})