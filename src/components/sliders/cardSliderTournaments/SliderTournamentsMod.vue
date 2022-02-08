<template>
<div class="slider-mod slider-mod--tournaments">
    <div class="center">
        <div class="slider-mod__wrap">
            <div class="slider-mod__title">
                <h2>{{tournamentsParams.title}}</h2>
            </div>

            <a
                :href="tournamentsParams.link"
                class="slider-mod__link"
            >{{ tournamentsParams.linkTitle }}</a>
        </div>
        <SwiperSliderTournaments :sliderParams="tournamentsParams.slides" />

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
    computed: {
        tournamentsParams() {
            return this.$store.getters.getTournaments;
        }
    }

}
</script>