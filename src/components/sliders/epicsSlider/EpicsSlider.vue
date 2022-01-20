<template>
<div class="slider-mod slider-mod--epics">
    <div class="center">
        <swiper

        :slides-per-view="'auto'"
        :spaceBetween="8"
        :breakpoints='{
            768: {
                spaceBetween: 32
            }
        }'
        class="cat-slider">
            <swiper-slide class="epics" v-for="(item, index) in epicItemParams" :key='index'>
                <div class="epics__avatar">
                    <picture>
                        <img :src="item.src" :alt="item.srcAlt">
                    </picture>
                </div>
                <div class="epics__info">
                    <div class="epics__name"> {{item.name}} </div>
                    <div class="epics__title"> {{item.title}} </div>
                    <div class="epics__price"><span> {{item.price}} </span></div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue.js';
import 'swiper/swiper.scss';

export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    props: ['epicItemParams']
}
</script>
