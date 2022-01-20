<template>
<div class="slider-mod slider-mod--tournaments">
    <div class="center">
        <div class="slider-mod__wrap">
            <div class="slider-mod__title">
                <h2>{{cardParams.title}}</h2>
            </div>

            <a
                :href="cardParams.link"
                class="slider-mod__link"
            >{{ cardParams.linkTitle }}</a>
        </div>
        <SwiperSliderTournaments :sliderParams="cardParams.slides" />

    </div>
</div>
</template>

<script>
import SwiperSliderTournaments from  './SwiperSliderTournaments'


export default {
    name: 'SliderTournamentsMod',
    components: {
      SwiperSliderTournaments
    },
    props: ['cardParams']

}
</script>