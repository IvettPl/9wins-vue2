<template>
<div class="wrapper">
  <Header />
  <main>
    <Slider />
    <CatSlider  />
    <CardSlider :cardParams="bonuses" />
  </main>
  <Footer />
</div>
</template>

<script>
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import Slider from '@/components/slider/Slider'
import CatSlider from '@/components/cat-slider/CatSlider'
import CardSlider from '@/components/cat-slider/cardSlider/CardSlider'


export default {
  components: {
    Header, Footer, Slider,CatSlider, CardSlider,
  },
    data(){
        return {
            bonuses: {

              title: 'Bonuses',
              link: '##',
              linkTitle: 'See all',

              slides:[
                  {

                      imgUrl: require('@/assets/img/slider/character-1.png'),
                      link: '##',
                      imgAlt: 'Bonuses',
                      stiker: 'Wager',
                      stikerClass: 'stiker--orange'

                  },
                  {
                      imgUrl: require('@/assets/img/slider/character-2.png'),
                      link: '##',
                      imgAlt: 'Bonuses',
                      stiker: 'Cashback',
                      stikerClass: 'stiker--green'
                  },
                  {

                      imgUrl: require('@/assets/img/slider/character-3.png'),
                      link: '##',
                      imgAlt: 'Bonuses',
                      stiker: 'Freespin',
                      stikerClass: 'stiker--blue'
                  },
                  {
                      imgUrl: require('@/assets/img/slider/character-1.png'),
                      link: '##',
                      imgAlt: 'Bonuses',
                      stiker: 'Freebet',
                  },
              ]
            },
        }
    }
}
</script>

<style lang="scss">
  @import './assets/style/color-vars';
</style>