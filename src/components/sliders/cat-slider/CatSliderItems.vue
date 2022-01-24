<template>
    <swiper
    :slides-per-view="'auto'"
    :spaceBetween="8"
    :breakpoints='{
        768: {
            spaceBetween: 32
        }
    }'
    class="cat-slider">
        <swiper-slide
            class="cat-slider__item"
            v-for="(item, index) in catSlidersItems"
            :key="index" 
        >
            <CatSliderItem :CatSliderItem='item' />
        </swiper-slide>
    </swiper>

</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue.js';
import 'swiper/swiper.scss';
import CustomButton from '@/components/UI/CustomButton'
import CatSliderItem from './CatSliderItem'


export default {
    components: {
      Swiper,
      SwiperSlide,
      CustomButton,
      CatSliderItem
    }, 
    props: ['catSlidersItems']
}
</script>

 
