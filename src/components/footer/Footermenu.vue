<template>
<nav class="footer__nav">
    <ul class="footer__list">
        <li class="footer__list-item" v-for="(item, index) in footerMenu" :key="index">
            <a :href="item.link" class="footer__list-link">
                 {{ item.title }}
            </a>
        </li>
    </ul>
</nav>
</template>
<script>
    export default {
        props: ['footerMenu']
    }
</script>

<style lang="scss">
    @import './../../assets/style/color-vars';
    @import './footermenu';
</style>
