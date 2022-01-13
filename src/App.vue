<template>
<div class="wrapper">
  <Header />
  <main>
    <Slider />
    <CatSlider 
      :title='catSlider.sport.title' 
      :linkName="catSlider.sport.linkName" 
      :icnUrl="catSlider.sport.icnUrl"
      :linkUrl="catSlider.sport.linkUrl"
      :altImg="catSlider.sport.altImg"
      :className="catSlider.sport.className"   /> 
     <CatSlider 
      :title='catSlider.games.title' 
      :linkName="catSlider.games.linkName" 
      :icnUrl="catSlider.games.icnUrl"
      :linkUrl="catSlider.games.linkUrl"
      :altImg="catSlider.games.altImg"
      :className="catSlider.games.className"  />     
  </main>
  <Footer />
</div> 
</template>

<script>
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer' 
import Slider from '@/components/slider/Slider'
import CatSlider from '@/components/cat-slider/CatSlider'

export default {
  components: {
    Header, Footer, Slider,CatSlider
  },
  data(){
    return {
      catSlider: {
        sport: {
          title: 'Sport',
          linkName: 'See all',
          icnUrl: require('@/assets/img/svg/icn-sport.svg'), 
          linkUrl: '##',   
          className: 'slider-mod slider-mod--home', 
        },
        games: { 
          title: 'Virtual games',
          linkName: 'See all',
          icnUrl: require('@/assets/img/svg/icn-sport.svg'), 
          linkUrl: '##',   
          className: 'slider-mod slider-mod--home'      
        }
      }
    }
  }
}
</script>

<style lang="scss">
  @import './assets/style/color-vars';
</style> 