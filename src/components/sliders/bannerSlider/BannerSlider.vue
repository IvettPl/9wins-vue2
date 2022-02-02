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
    <swiper-slide  v-for="(item, index) in slides" :key="index">
        <a :href="item.link">
            <picture>
                <source :srcset="item.imgWebp" type="image/webp">
                <img :src="item.imgUrl" alt="">
            </picture>
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
    data() {
        return {
            slides: [
                {
                    link: '##',
                    imgUrl: require('@/assets/img/slider/home-slider-1.jpg'),
                    imgx2: require('@/assets/img/slider/home-slider-1@x2.jpg'),
                    imgWebp: require('@/assets/img/slider/home-slider-1.webp'),
                },
                {
                    link: '##',
                    imgUrl: require('@/assets/img/slider/home-slider-1.jpg'),
                    imgx2: require('@/assets/img/slider/home-slider-1@x2.jpg'),
                    imgWebp: require('@/assets/img/slider/home-slider-1.webp'),
                }
            ]
        }
    }
};
</script>
