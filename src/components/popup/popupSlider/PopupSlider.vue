<template>
<div class="popup-slider__wrap">
    <div class="popup-slider__title">{{ popupSlider.title }}</div>
    <swiper
        :slides-per-view="'auto'"
        :direction="'horizontal'"
        :spaceBetween="16"
        :breakpoints='{
            768: {
                direction: "vertical"
            }
        }'
        class="popup-slider"
    >
        <swiper-slide
            class="popup-slider__item"
            v-for="(item, index) in popupSlider.sliders"
            :key="index"
             :class="item.subClass"
        >
            <div class="popup-slider__img">
                <img
                    :src="item.imgUrl"
                    :alt="item.imgAlt"
                >

                <div class="popup-slider__text">
                    <div class="popup-slider__text-desc" v-html="item.desc"></div>
                    <div class="popup-slider__text-title">{{ item.title }}</div>
                </div>
            </div>
            <div v-if="item.label" class="popup-slider__label">{{ item.label }}</div>
        </swiper-slide>
    </swiper>
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
    props: ['popupSlider']
}
</script>


<style lang="scss">

</style>