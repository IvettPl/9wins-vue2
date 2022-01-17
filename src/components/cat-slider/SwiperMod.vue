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
            v-for="(item, index) in slides"
            :key="index"
        >
            <a :href="item.link">
                <img  :src="item.imgUrl" :alt="item.imgAlt">
            </a>
        </swiper-slide>
    </swiper>

</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue.js';
import 'swiper/swiper.scss';



export default {
    components: {
      Swiper,
      SwiperSlide,
    },

    data(){
        return {
            slides: [
                {

                    imgUrl: require('@/assets/img/slider/sports-slider-1.jpg'),
                    link: '##',
                    imgAlt: 'slide SPORT'

                },
                {
                    imgUrl: require('@/assets/img/slider/sports-slider-2.jpg'),
                    link: '##',
                    imgAlt: 'slide SPORT'
                },
                {

                    imgUrl: require('@/assets/img/slider/sports-slider-3.jpg'),
                    link: '##',
                    imgAlt: 'slide SPORT'

                },
                {
                    imgUrl: require('@/assets/img/slider/sports-slider-4.jpg'),
                    link: '##',
                    imgAlt: 'slide SPORT'
                },

                {
                    imgUrl: require('@/assets/img/slider/sports-slider-5.jpg'),
                    link: '##',
                    imgAlt: 'slide SPORT'
                },
                {

                    imgUrl: require('@/assets/img/slider/sports-slider-6.jpg'),
                    link: '##',
                    imgAlt: 'slide SPORT'

                },
                {
                    imgUrl: require('@/assets/img/slider/sports-slider-7.jpg'),
                    link: '##',
                    imgAlt: 'slide SPORT'
                }
            ]
        }
    }
}
</script>



<style lang="scss">
    @import './../../assets/style/color-vars';
    @import './swiperMod.scss'
</style>
