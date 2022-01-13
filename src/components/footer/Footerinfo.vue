<template>
<div class="footer__bottom">
    <div class="center">
        <div class="footer__info">
            <div class="footer__info-title">
                {{ info.copy.title }}
            </div>
            <p>
                {{ info.copy.text }}
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
    import {info} from '@/components/footer/footerHelper'

    export default {
        data() {
            return {
                info: info
            }
        }
    }
</script>

<style lang="scss">
    @import './../../assets/style/color-vars';
    @import './footerinfo';
</style>
