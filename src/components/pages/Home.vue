<template>
    <div class="page-wrapper page-wrapper--home">
        <BannerSlider />
        <CatSlider  :catSliders="sportSliders" />
        <SliderTournamentsMod v-if="isAuth"  />
        <CatSlider  :catSliders="gamesSliders" />

        <EpicsSlider v-if="isAuth"   />

        <CatSlider  :catSliders="casinoSliders" />
        <CatSlider  :catSliders="slotsSliders" />

        <SliderBonusMod   />
    </div>
</template>

<script>
import BannerSlider from '@/components/sliders/bannerSlider/BannerSlider'
import EpicsSlider from '@/components/sliders/epicsSlider/EpicsSlider'
import CatSlider from '@/components/sliders/cat-slider/CatSlider'
import SliderBonusMod from '@/components/sliders/cardSliderBonus/SliderBonusMod'
import SliderTournamentsMod from '@/components/sliders/cardSliderTournaments/SliderTournamentsMod'

export default {
  name: 'Home',
  components: {
    BannerSlider, CatSlider, SliderBonusMod, SliderTournamentsMod, EpicsSlider
  },
  data(){
      return { 
 
      }
  },
  computed: { 
        sportSliders() {
            return this.$store.getters.getSportSliders;
        },
        gamesSliders() {
            return this.$store.getters.getGamesSliders;
        },   
        casinoSliders() {
            return this.$store.getters.getCasinoSliders;
        },   
        slotsSliders() {
            return this.$store.getters.getSlotsSliders;
        }, 
        isAuth() {
            return this.$store.getters.getIsAuth;
        },                            
  }
}
</script>
