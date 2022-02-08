<template>
<div class="slider-mod" :class="swiperSlideBonus.modSubClass">
    <div class="center">
        <div class="slider-mod__wrap">
            <div class="slider-mod__title">
                <h2>{{swiperSlideBonus.title}}</h2>
            </div>

            <a
                v-if="swiperSlideBonus.link"
                :href="swiperSlideBonus.link"
                class="slider-mod__link"
            >{{ swiperSlideBonus.linkTitle }}</a>
        </div>
        <SwiperSlideBonus :sliderParams="swiperSlideBonus.slides" />

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
    computed: {
        swiperSlideBonus() {
            return this.$store.getters.bonusesLists;
        }
        
    }

}
</script>
