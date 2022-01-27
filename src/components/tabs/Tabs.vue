<template>
    <div class="tabs"
        :class="(toggleTab) ? 'tab-1'  : 'tab-2' "
    >
        <div
            v-if="isAuth || isPopupTab"
            class="tabs__header">
            <div
                v-for="(item, index) in tabsToggleItem"
                :key="index"
                class="tabs__header-item"
                @click="selectedTab  = item; toggleTab = !toggleTab"
                :class="{ 'active': selectedTab === item }"
                >
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
    props: ['tabsToggleItem', 'isAuth', 'isPopupTab'],
    data(){
        return{
            selectedTab: 'Casino',
            toggleTab: true
        }
    }

}
</script>
