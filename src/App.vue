<template>
<div class="wrapper wrapper--reg">
  <Header />
  <main>
    <Slider />
    <CatSlider  :catSliders="sport" />
    <SliderTournamentsMod :cardParams="tournaments" />
    <CatSlider  :catSliders="games" />

    <EpicsSlider  :epicItemParams="epicsItems"  />

    <CatSlider  :catSliders="casino" />
    <CatSlider  :catSliders="slots" />

    <SliderBonusMod :cardParams="bonuses" />
  </main>
  <Footer />
</div>
</template>

<script>
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import Slider from '@/components/slider/Slider'
import EpicsSlider from '@/components/epicsSlider/EpicsSlider'
import CatSlider from '@/components/cat-slider/CatSlider'
import SliderBonusMod from '@/components/cardSliderBonus/SliderBonusMod'
import SliderTournamentsMod from '@/components/cardSliderTournaments/SliderTournamentsMod'


export default {
  components: {
    Header, Footer, Slider,CatSlider, SliderBonusMod, SliderTournamentsMod, EpicsSlider
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
                        stikerSubClass: 'stiker--orange',
                        frontBtnTitle: 'Details',
                        frontBtn: {
                            type: 'button',
                            className: 'btn--orange js-detail'
                        },
                        backBtnTitle: 'Ok',
                        backBtn: {
                            type: 'button',
                            className: 'btn--orange js-detail'
                        },
                        popupBtnYesTitle: 'Yes',
                        popupBtnYes: {
                            type: 'button',
                            className: 'btn--grey js-yes'
                        },
                        popupBtnNoTitle: 'No',
                        popupBtnNo: {
                            type: 'button',
                            className: 'js-no'
                        }
                    },
                    {
                        imgUrl: require('@/assets/img/slider/character-2.png'),
                        link: '##',
                        imgAlt: 'Bonuses',
                        stiker: 'Cashback',
                        stikerSubClass: 'stiker--green',
                        itemSubClass: "show",
                        frontBtnTitle: 'Details',
                        frontBtn: {
                            type: 'button',
                            className: 'btn--orange js-detail'
                        },
                        backBtnTitle: 'Ok',
                        backBtn: {
                            type: 'button',
                            className: 'btn--orange js-detail'
                        },
                        popupBtnYesTitle: 'Yes',
                        popupBtnYes: {
                            type: 'button',
                            className: 'btn--grey js-yes'
                        },
                        popupBtnNoTitle: 'No',
                        popupBtnNo: {
                            type: 'button',
                            className: 'js-no'
                        }
                    },
                    {

                        imgUrl: require('@/assets/img/slider/character-3.png'),
                        link: '##',
                        imgAlt: 'Bonuses',
                        stiker: 'Freespin',
                        stikerSubClass: 'stiker--blue',
                        frontBtnTitle: 'Details',
                        frontBtn: {
                            type: 'button',
                            className: 'btn--orange js-ok'
                        },
                        backBtnTitle: 'Ok',
                        backBtn: {
                            type: 'button',
                            className: 'btn--orange js-ok'
                        },
                        popupBtnYesTitle: 'Yes',
                        popupBtnYes: {
                            type: 'button',
                            className: 'btn--grey js-yes'
                        },
                        popupBtnNoTitle: 'No',
                        popupBtnNo: {
                            type: 'button',
                            className: 'js-no'
                        }
                    },
                    {
                        imgUrl: require('@/assets/img/slider/character-1.png'),
                        link: '##',
                        imgAlt: 'Bonuses',
                        stiker: 'Freebet',
                        itemSubClass: "charitem--rotate",
                        frontBtnTitle: 'Details',
                        frontBtn: {
                            type: 'button',
                            className: 'btn--orange js-ok'
                        },
                        backBtnTitle: 'Ok',
                        backBtn: {
                            type: 'button',
                            className: 'btn--orange js-ok'
                        },
                        popupBtnYesTitle: 'Yes',
                        popupBtnYes: {
                            type: 'button',
                            className: 'btn--grey js-yes'
                        },
                        popupBtnNoTitle: 'No',
                        popupBtnNo: {
                            type: 'button',
                            className: 'js-no'
                        }
                    },
                ]
            },
            tournaments: {
                title: 'Tournaments',
                link: '##',
                linkTitle: 'See all',
                slides: [
                    {
                        imgUrl: require('@/assets/img/slider/tornament-char-1.png'),
                        imgAlt: 'Tournaments',
                        stiker: 'Now',
                        place: '324 place',
                        stikerSubClass: 'stiker--opacity',
                        frontBtnTitle: 'More details',
                        frontBtn: {
                            type: 'button',
                            className: 'btn--orange js-detail'
                        },
                        backBtnTitle: 'Ok',
                        backBtn: {
                            type: 'button',
                            className: 'btn--orange js-ok'
                        },
                    },
                    {
                        imgUrl: require('@/assets/img/slider/tornament-char-2.png'),
                        imgAlt: 'Tournaments',
                        stiker: 'Now',
                        place: '324 place',
                        stikerSubClass: 'stiker--opacity',
                        frontBtnTitle: 'More details',
                        itemSubClass: "charitem--rotate",
                        frontBtn: {
                            type: 'button',
                            className: 'btn--orange js-detail'
                        },
                        backBtnTitle: 'Ok',
                        backBtn: {
                            type: 'button',
                            className: 'btn--orange js-ok'
                        },
                    },
                    {
                        imgUrl: require('@/assets/img/slider/tornament-char-3.png'),
                        imgAlt: 'Tournaments',
                        frontBtnTitle: 'More details',
                        frontBtn: {
                            type: 'button',
                            className: 'btn--orange js-detail'
                        },
                        backBtnTitle: 'Ok',
                        backBtn: {
                            type: 'button',
                            className: 'btn--orange js-ok'
                        },
                    },
                    {
                        imgUrl: require('@/assets/img/slider/tornament-char-4.png'),
                        imgAlt: 'Tournaments',
                        frontBtnTitle: 'More details',
                        itemSubClass: "charitem--disabled",
                        frontBtn: {
                            type: 'button',
                            className: 'btn--orange js-detail'
                        },
                        backBtnTitle: 'Ok',
                        backBtn: {
                            type: 'button',
                            className: 'btn--orange js-ok'
                        },
                    }
                ]
            },
            sport: {
                id: '1',
                title: 'Sport',
                icn: 'icon-sports_filled',
                link: 'See all',
                linkUrl: '##',
                slides: [
                    {

                        imgUrl: require('@/assets/img/slider/sports-slider-1.jpg'),
                        link: '##',
                        imgAlt: 'slide SPORT',
                        linkPlay: '##',
                        linkDemo:'##',
                        btnClassHide: 'btn--grey',
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
                ],
            },
            games:{
                id: '2',
                title: 'Virtual games',
                icn: 'icon-virtual_games',
                link: 'See all',
                linkUrl: '##',
                slides: [
                    {

                        imgUrl: require('@/assets/img/slider/sports-slider-1.jpg'),
                        link: '##',
                        imgAlt: 'slide games'

                    },
                    {
                        imgUrl: require('@/assets/img/slider/sports-slider-2.jpg'),
                        link: '##',
                        imgAlt: 'slide games'
                    },
                    {

                        imgUrl: require('@/assets/img/slider/sports-slider-3.jpg'),
                        link: '##',
                        imgAlt: 'slide games'

                    },
                    {
                        imgUrl: require('@/assets/img/slider/sports-slider-4.jpg'),
                        link: '##',
                        imgAlt: 'slide games'
                    },

                    {
                        imgUrl: require('@/assets/img/slider/sports-slider-5.jpg'),
                        link: '##',
                        imgAlt: 'slide games'
                    },
                    {

                        imgUrl: require('@/assets/img/slider/sports-slider-6.jpg'),
                        link: '##',
                        imgAlt: 'slide games'

                    },
                    {
                        imgUrl: require('@/assets/img/slider/sports-slider-7.jpg'),
                        link: '##',
                        imgAlt: 'slide games'
                    }
                ],
            },
            casino:{
                id: '3',
                title: 'Live casino',
                icn: 'icon-live_casino',
                link: 'See all',
                linkUrl: '##',
                slides: [
                    {

                        imgUrl: require('@/assets/img/slider/sports-slider-1.jpg'),
                        link: '##',
                        imgAlt: 'slide casino'

                    },
                    {
                        imgUrl: require('@/assets/img/slider/sports-slider-2.jpg'),
                        link: '##',
                        imgAlt: 'slide casino'
                    },
                    {

                        imgUrl: require('@/assets/img/slider/sports-slider-3.jpg'),
                        link: '##',
                        imgAlt: 'slide casino'

                    },
                    {
                        imgUrl: require('@/assets/img/slider/sports-slider-4.jpg'),
                        link: '##',
                        imgAlt: 'slide casino'
                    },

                    {
                        imgUrl: require('@/assets/img/slider/sports-slider-5.jpg'),
                        link: '##',
                        imgAlt: 'slide casino'
                    },
                    {

                        imgUrl: require('@/assets/img/slider/sports-slider-6.jpg'),
                        link: '##',
                        imgAlt: 'slide casino'

                    },
                    {
                        imgUrl: require('@/assets/img/slider/sports-slider-7.jpg'),
                        link: '##',
                        imgAlt: 'slide casino'
                    }
                ],
            },
            slots:{
                id: '4',
                title: 'Slots',
                icn: 'icon-slots',
                link: 'See all',
                linkUrl: '##',
                slides: [
                    {
                        imgUrl: require('@/assets/img/slider/sports-slider-1.jpg'),
                        link: '##',
                        imgAlt: 'slide Slots'

                    },
                    {
                        imgUrl: require('@/assets/img/slider/sports-slider-2.jpg'),
                        link: '##',
                        imgAlt: 'slide Slots'
                    },
                    {

                        imgUrl: require('@/assets/img/slider/sports-slider-3.jpg'),
                        link: '##',
                        imgAlt: 'slide Slots'

                    },
                    {
                        imgUrl: require('@/assets/img/slider/sports-slider-4.jpg'),
                        link: '##',
                        imgAlt: 'slide Slots'
                    },

                    {
                        imgUrl: require('@/assets/img/slider/sports-slider-5.jpg'),
                        link: '##',
                        imgAlt: 'slide Slots'
                    },
                    {

                        imgUrl: require('@/assets/img/slider/sports-slider-6.jpg'),
                        link: '##',
                        imgAlt: 'slide Slots'

                    },
                    {
                        imgUrl: require('@/assets/img/slider/sports-slider-7.jpg'),
                        link: '##',
                        imgAlt: 'slide Slots'
                    }
                ],
            },
            epicsItems: [
                {
                    src: require('@/assets/img/avatars/evva.png'),
                    srcAlt: 'Evva',
                    name: 'evva***',
                    title: 'EPIC Gladiators',
                    price: '56 000.00'
                },
                {
                    src: require('@/assets/img/avatars/abbdy.png'),
                    srcAlt: 'abbdy',
                    name: 'abbdy***',
                    title: 'EPIC Gladiators',
                    price: '56 000.00'
                },
                {
                    src: require('@/assets/img/avatars/elen.png'),
                    srcAlt: 'elen',
                    name: 'elen***',
                    title: 'EPIC Gladiators',
                    price: '56 000.00'
                },
                {
                    src: require('@/assets/img/avatars/alex.png'),
                    srcAlt: 'alex',
                    name: 'alex***',
                    title: 'EPIC Gladiators',
                    price: '56 000.00'
                },
                {
                    src: require('@/assets/img/avatars/lilu.png'),
                    srcAlt: 'lilu',
                    name: 'lilu***',
                    title: 'EPIC Gladiators',
                    price: '56 000.00'
                },
                {
                    src: require('@/assets/img/avatars/lola.png'),
                    srcAlt: 'lola',
                    name: 'lola***',
                    title: 'EPIC Gladiators',
                    price: '56 000.00'
                }
            ]
        }
    }
}
</script>

<style lang="scss">
  @import './assets/style/color-vars';
</style>