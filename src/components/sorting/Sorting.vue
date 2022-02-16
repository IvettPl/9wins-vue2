<template>
    <div class="sorting">
        <div class="sorting__header">
            <div class="sorting__search" v-if="isShow">
                <div class="sorting__field-wrap">
                    <CustomInput :attrInput="inputSearch" />
                    <label>enter at least 2 characters</label>
                </div>
                <button
                    type="button"
                    class="btn__filter icon-filter"
                    @click="$bus.$emit('open-modal-apply-filter')"
                ></button>
                <button
                    type="button"
                    class="btn__close"
                    @click="toggleFilter"
                ></button>
            </div>
            <div class="sorting__filter" v-else>
                <FilterProducts :headerFilter="filterHeader" />
                <button
                    type="button"
                    class="btn__search icon-search"
                    @click="toggleFilter"
                ></button>
            </div>
        </div>
        <div class="sorting__content">
            <slot />
        </div>
    </div>
</template>


<script>
import FilterProducts from '@/components/sorting/FilterProducts'

export default {
    name: 'Sorting',

    components: {
        FilterProducts
    },

    data() {
        return {
            isShow: false,
            inputSearch: {
                isValid: true,
                icnClass: 'icon-clear',
                type: 'text',
                id: 'search',
                name: 'search'
            },
        }
    },

    computed: {
        filterHeader() {
            return this.$store.getters.getFilterHeaderSlots;
        },
    },

    methods: {
        toggleFilter() {
            return this.isShow = !this.isShow
        },
    },
}
</script>