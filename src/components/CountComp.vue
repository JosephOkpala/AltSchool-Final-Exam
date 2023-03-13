<template>
    <div>
    <button @click="incrementcount">Increment</button>
    <button @click="decrementcount">Decrement</button>
    <button @click="resetcount">Reset</button>
    <p>Count is {{ count }}</p>
    </div>
</template>

<script>
export default{
    name : 'CountComp',
    
    data(){
        return{
            count : 0,
        }
    },

    methods:{
        incrementcount(){
            this.count++;
        },
        decrementcount(){
            this.count--;
        },
        resetcount(){
            this.count = 0
        }
    },
};
</script>