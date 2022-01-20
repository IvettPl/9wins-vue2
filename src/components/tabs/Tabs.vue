<template>
    <div class="tabs">
        <div class="tabs__header">
            <div 
                v-for="(item, index) in tabsToggleItem"
                :key="index"
                class="tabs__header-item">
                {{item}}
            </div>
        </div>
        <div class="tabs__content">
            <div class="tabs__content-viewport">
                <slot></slot>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'Tabs',
    props: ['tabsToggleItem']
}
</script>
