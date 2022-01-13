<template>
    <swiper 
    :slides-per-view="'auto'"
    :spaceBetween="4"
    :breakpoints='{
        768: {
            spaceBetween: 32
        }
    }'
    class="cat-slider"> 
        <swiper-slide class="cat-slider__item"  v-for="(item, index) in slides" :key="index" >
            <a   :href="item.link">
                <img  :src="item.imgUrl" :alt="item.imgAlt">
            </a>                       
        </swiper-slide>  
    </swiper>  
   
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue.js'; 
import 'swiper/swiper.scss';   

import {catSliderMod} from './catSliderMod.js'; 

export default {
    components: {
      Swiper,
      SwiperSlide,  
    },   
    props: {
        className: {
            type: String,
            defaoult: '', 
        }, 
    },
    
    data(){
        return { 
            slides: catSliderMod
        }
    }
}
</script>



<style lang="scss">
    @import './../../assets/style/color-vars';
    @import './swiperMod.scss'
</style>
