<template>
    <div
        class="apply-filter"
    >
        <div
            class="apply-filter__box"
            v-for="(itemBox, index) in filterBox"
            :key="index"
        >
            <div class="apply-filter__title">{{ itemBox.title }}</div>
            <ApplyFilterList :itemsList="itemBox.list" />
        </div>
        <div class="btn__wrap">
            <CustomButton :attrBtn="attrBtn" >Apply filters</CustomButton>
        </div>
    </div>
</template>



<script>
import ApplyFilterList from '@/components/applyFilter/ApplyFilterList'

export default {
    name: 'ApplyFilter',
    components: {
        ApplyFilterList
    },
    props: ['filterBox', 'attrBtn']
}
</script>