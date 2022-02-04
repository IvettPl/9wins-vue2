<template>
    <div class="paycard-list">
        <div 
            @click="toggleBox"
            class="paycard-list__item" 
            v-for="(item) in listPayCard" 
            :key="item.id">
            <img :src="item.imgUrl" :alt="item.imgAlt">
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    name: 'PayCards', 
    props: {
        toggleStateBox: {
            type: Boolean
        }
    },
    data() {
        return {
            stateBox: this.toggleStateBox
        }
    },
    methods: { 
        toggleBox(){
            this.stateBox = !this.stateBox;
            this.$emit('onToggleBox');
        }
    }, 
    computed: {
        listPayCard() {
            return this.$store.getters.getPayCardsList
        }
    }
}
</script>
