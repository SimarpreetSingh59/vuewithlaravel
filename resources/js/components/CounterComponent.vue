<script>
    export default{
        data: () => {
            return{
                counter: 0
            }
        },
        methods: {
            incremnet () {
                this.counter++
            },
            decrement () {
                if(this.counter > 0){
                    this.counter--
                }
            }
        }
    }

</script>

<template>
    <div>
        <p>Count - {{counter}}</p>
        <button v-on:click.prevent="incremnet" >Increment</button>
        <button v-on:click.prevent="decrement" >Decrement</button>
    </div>
</template>