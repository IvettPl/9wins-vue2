<template>
    <div
        class="apply-filter"
    >
        <div
            class="apply-filter__box"
            v-for="item in applyFilterList"
            :key="item.id"
        >
            <div class="apply-filter__title">{{ item.title }}</div>
            <ApplyFilterList :itemsList="item.fieldsList" />
        </div>
        <div class="btn__wrap">
            <CustomButton :attrBtn="filterBtn" >Apply filters</CustomButton>
        </div>
    </div>
</template>



<script>
import ApplyFilterList from '@/components/sorting/applyFilter/ApplyFilterList'

export default {
    name: 'ApplyFilter',
    components: {
        ApplyFilterList
    },
    // props: ['filterBox', 'attrBtn']

    computed: {
        applyFilterList() {
            return this.$store.getters.getfilterList;
        },

        filterBtn() {
            return this.$store.getters.getApplyFilterBtn;
        }
    }
}
</script>