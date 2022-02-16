<template>
<swiper
    :slides-per-view="'auto'"
    class="filer-products__slide">
        <swiper-slide
            class="filer-products__slide-item"
            v-for="item in headerFilter"
            :key="item.id"
        >
            <div
                class="filer-products__item"
                :class="{'active' : item.selected}"
            >
                {{ item.title }}
            </div>
        </swiper-slide>
    </swiper>
</template>

<script>
    import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue.js';
    import 'swiper/swiper.scss';

    export default {
        name: 'FilterProducts',

        components: {
            Swiper,
            SwiperSlide,
        },

        props: {
            headerFilter: {
                type: Array
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>