<template>
<div class="footer__bottom">
    <div class="center">
        <div class="footer__info">
            <div class="footer__info-title">
                {{ info.title }}
            </div>
            <p>
                {{ info.text }}
            </p>
        </div>
        <div class="footer__logo">
            <img :src="info.logo" :alt="info.logoAlt">
        </div>
        <div class="footer__address">
            <p>
                {{ info.address }}
            </p>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        props: ['info']
    }
</script>

<style lang="scss">
    @import './../../assets/style/color-vars';
    @import './footerinfo';
</style>
