<template>
    <swiper
    :slides-per-view="'auto'"
    :spaceBetween="8"
    :breakpoints='{
        768: {
            spaceBetween: 32
        }
    }'
    class="slide-cart__list">
        <swiper-slide
            class="slide-cart__item"
            v-for="(item, index) in sliderParams"
            :key="index"
        >
            <BonusItem :itemCard="item" />
        </swiper-slide>
    </swiper>
</template>

<script>
import BonusItem from './BonusItem'
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue.js';
import 'swiper/swiper.scss';

export default {
    name: 'SwiperSlideBonus',
    components: {
      Swiper,
      SwiperSlide,
      BonusItem
    },
    props: ['sliderParams'],
}
</script>
