<template>
<swiper
    :loop="true"
    :centeredSlides="true"
    :speed="1000"
    :autoplay='{
        "delay": 3500,
        "disableOnInteraction": false
    }'
    :pagination='{
        "clickable": true
    }'
    :grabCursor="true"
    :effect="'creative'"
    :creativeEffect="{
        prev: {
            shadow: true,
            origin: 'left center',
            translate: ['-5%', 0, -200],
            rotate: [0, 100, 0],
        },
        next: {
            origin: 'right center',
            translate: ['5%', 0, -200],
            rotate: [0, -100, 0],
        },
    }"
    class="banner-slider">
    <swiper-slide  v-for="item in bannerSlider" :key="item.id">
        <a :href="item.link">
            <img :src="item.imgUrl" :alt="item.imgAlt">
        </a>
    </swiper-slide>
</swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue.js';

import 'swiper/swiper.scss';
import 'swiper/modules/pagination/pagination.scss';

import SwiperCore,{Autoplay, Pagination, EffectCreative} from 'swiper';

SwiperCore.use([Autoplay, Pagination, EffectCreative]);

export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    name: 'BannerSlider',
    props: {
        bannerSlider: {
            type: Array
        }
    }
};
</script>
