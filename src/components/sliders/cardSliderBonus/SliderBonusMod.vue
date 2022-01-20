<template>
<div class="slider-mod" :class="cardParams.modSubClass">
    <div class="center">
        <div class="slider-mod__wrap">
            <div class="slider-mod__title">
                <h2>{{cardParams.title}}</h2>
            </div>

            <a
                v-if="cardParams.link"
                :href="cardParams.link"
                class="slider-mod__link"
            >{{ cardParams.linkTitle }}</a>
        </div>
        <SwiperSlideBonus :sliderParams="cardParams.slides" />

    </div>
</div>
</template>

<script>
import SwiperSlideBonus from  '@/components/sliders/cardSliderBonus/SwiperSlideBonus'


export default {
    name: 'SliderBonusMod',
    components: {
      SwiperSlideBonus
    },
    props: ['cardParams']

}
</script>
