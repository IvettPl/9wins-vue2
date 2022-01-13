<template>
<div class="submenu-list">
    <div class="submenu-list__item"  
    v-for="item in submenulist"
    :key="item.id"
    :class="item.subClass ? item.subClass : ''">
        <a href='##' class="submenu-list__link">
            <span class="submenu-list__icn" v-html="item.icn"></span>
            <span class="submenu-list__title">
                {{item.title}}
            </span>
        </a>
    </div>
</div>
</template>

<script>
import {headerMenuList} from '@/components/header/submenu/headerHelpers'
export default {
    data() {
        return {
            submenulist: headerMenuList
        };
    },
}
</script>

<style lang="scss">
    @import './../../../assets/style/color-vars';
    @import './headerSubmenu.scss';
</style>

