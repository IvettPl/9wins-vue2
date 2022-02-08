<template>
    <div
        class="popup"
        :class="(isOpen ? 'show' : '') + ' ' + addClass" 
        @click="$store.commit('closePanel')"
    >
        <div @click.stop class="dialog">
            <button class="btn__close" @click="$store.commit('closePanel')"></button>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default { 
    name: 'Popup',
    props: {
        popupName: {
            type: String,
            required: true
        },
        addClass: {
            type: String,
            default: ''
        }
    },    
    data(){
        return { 
            isOpen: false
        }
    },
    methods: {
         
    },
    created() {
        this.$bus.$on('open-popup-' + this.popupName, () => {
            this.isOpen = true;
            console.log('open');
        });
    }
}
</script>
