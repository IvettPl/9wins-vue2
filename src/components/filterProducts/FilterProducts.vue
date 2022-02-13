<template>
    <div class="filer-products">
        <div
            class="filer-products__item"
            v-for="item in headerFilter"
            :key="item.id"
            :class="{'active' : item.selected}"
        >
            {{ item.title }}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FilterProducts',
        props: {
            headerFilter: {
                type: Array
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>