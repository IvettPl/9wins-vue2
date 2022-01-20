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
            <div class="favorite">
                <input type="checkbox" class="favorite__field icon-popular">
            </div>
            <a :href="item.link">
                <img  :src="item.imgUrl" :alt="item.imgAlt">
            </a>
            <div class="hidden-box">
                <a class="btn"  :href="item.linkPlay"> Play Real </a>
                 <a class="btn btn--grey"  :href="item.linkDemo"  > Demo </a>
            </div>
        </swiper-slide>
    </swiper>

</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue.js';
import 'swiper/swiper.scss';
import CustomButton from '@/components/UI/CustomButton'


export default {
    components: {
      Swiper,
      SwiperSlide,
      CustomButton
    }, 
    props: ['catSlidersItems']
}
</script>

 
