// Instaciamos VUE
var app = new Vue({
    //Genereamos los objetos importantes de VUE
    el: '#app',
    data: {
        cal: '',
        value: null
    },
    //Creamos los metodos de las operaciones que se llevaran a cabo
    methods: {
        sumar() {
            this.cal += '+'
        },
        restar() {
            this.cal += '-'
        },
        multiplicacion() {
            this.cal += '*'
        },
        dividir() {
            this.cal += '/'
        },
        //Nos ayuda a seleccionar los numeros que deseemos y con ayuda del for podemos observar del 0 al 9
        setModifier(x) {
            this.cal += x
        },
        calcular() {
            this.value = eval(this.cal)
            this.cal = this.value
        },
        borrar() {
            this.value = null
            this.cal = ''
        },
        key(e) {
            console.log(e.keyCode)
        }
    }
})