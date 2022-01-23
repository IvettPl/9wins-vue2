<template>
    <div
        v-if="isMenuShow"
        class="overlay">

    </div>
</template>

<script>
export default {
    name: 'Overlay',
    props: ['isMenuShow']
    
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
