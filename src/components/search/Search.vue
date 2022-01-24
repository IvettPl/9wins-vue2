<template>
    <div class="search icon-back">
        <input type="text" id="search" class="field search__field" name="search">
        <button
            type="button"
            class="btn__search icon-search"
            @click="changeVisiblyField"
        ></button>
    </div>
</template>



<script>
export default {
    name: 'Search',
    props: {
        showField: Boolean
    },
    data() {
        return {
            // changeVisiblyField: this.showField
            toggleField: this.showField
        }
    },
    methods: {
        changeVisiblyField() {
            this.toggleField = !this.toggleField
            this.$emit('changeStateField')
        }
    }
}
</script>