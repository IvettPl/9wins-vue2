<template>
    <div class="columns">
        <div class="column">
            <slot name="left"></slot>
        </div>
        <div class="column">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Columns',
    }
</script>

<style lang="scss" scoped>

</style>