<template>
    <div
        class="popup"
        :class="{'show': popupShow}"
        @click="closePopup"
    >
        <div @click.stop class="dialog">
            <button class="btn__close" @click="closePopup"></button>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: ['popupShow'],
    data(){
        return {
            close: this.closePopup
        }
    },
    methods: {
        closePopup(){
            this.close = !this.close
            this.$emit('hidePopup')
        }
    }
}
</script>
