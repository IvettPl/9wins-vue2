<template>
<nav class="footer__nav">
    <ul class="footer__list">
        <li class="footer__list-item" v-for="(item, index) in footerMenuList" :key="index">
            <a :href="item.link" class="footer__list-link">
                 {{ item.title }}
            </a>
        </li>
    </ul>
</nav> 
</template>
<script>
    import {menuListFooter} from '@/components/footer/footerHelper'

    export default {
        data() {
            return {
                footerMenuList: menuListFooter
            }
        }
    }
</script>

<style lang="scss">
    @import './../../assets/style/color-vars';
    @import './footermenu';
</style>


