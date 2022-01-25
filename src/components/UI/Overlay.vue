<template>
    <div
        v-if="isOverlay"
        class="overlay"
        @click="overlayChangeState"
    >

    </div>
</template>

<script>
export default {
    name: 'Overlay',
    props: ['isOverlay'],
    data() {
        return {
            overlayState: this.isOverlay
        }
    },
    methods: {
        overlayChangeState() {
            this.overlayState = !this.overlayState
            this.$emit('overlayState')
        }
    }
}
</script>

<style lang="scss" scoped>
.overlay {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    opacity: 1;
    background-color: rgba(0,0,0,0.8);
    transition: opacity 250ms, visibility 250ms;
    cursor: pointer;
}
</style>
