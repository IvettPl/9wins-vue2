<template>
    <div class="apply-filter__list">
        <div
            class="apply-filter__list-item"
            v-for="(item, index) in itemsList"
            :key="index"
        >
            <input
                class="apply-filter__field"
                :type="item.type"
                :id="item.id"
                :name="item.name"
                :checked="item.checked"
            >
            <label :for="item.id">
                <img v-if="item.img" :src="item.img" :alt="item.name">
                {{ item.label }}
            </label>
        </div>
    </div>
</template>



<script>
export default {
    name: 'ApplyFilterList',
    props: ['itemsList']
}
</script>