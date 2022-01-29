<template>
    <div class="tabs"
        :class="`tab-${tabsParams.toggleActiveTab}`"
    >
        <div
            v-if="isShowTab"
            class="tabs__header">
            <div
                v-for="(item, index) in tabsParams.itemsTabsHeader"
                :key="index"
                class="tabs__header-item"
                @click="tabsParams.selectedTab  = item; tabsParams.toggleActiveTab = index + 1"
                :class="{ 'active': tabsParams.selectedTab === item }"
                >
                {{item}}
            </div>
        </div>
        <div class="tabs__content">
            <div class="tabs__content-viewport">
                <div 
                    class="tabs__content-item" 
                    v-for="(item, index) in tabsParams.itemsTabsHeader"
                    :key="index"    
                    >
                    <slot :name="`tab-content-${index + 1}`"></slot>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'Tabs',
    props: ['tabsParams',  'isShowTab'],
    data(){
        return{
            itemsTabWidth: `${100/this.tabsParams.itemsTabsHeader.length}%`,
            tabViewportWidth: `${100*this.tabsParams.itemsTabsHeader.length}%`,
        }
    }

}
</script>

<style lang="scss" scoped>
    .tabs__header-item,
    .tabs__header:before,
    .tabs__content-item {
        width: v-bind(itemsTabWidth);
    }
    .tabs__content-viewport {
        width: v-bind(tabViewportWidth);
    }
</style>
