new Vue({
    el: '#desafio',
    data: {
        valor1: '',
        valor2: ''
    },
    methods: {
        showAlert(){
            alert('Button Clicked')
        },
        showKey(event){
            this.valor2 = event.target.value
        }
    }
})