<template>
    <div class="page-wrapper page-wrapper--home">
        <BannerSlider />
        <CatSlider  :catSliders="sport" />
        <SliderTournamentsMod v-if="$store.state.isAuth" :cardParams="tournaments" />
        <CatSlider  :catSliders="games" />

        <EpicsSlider v-if="$store.state.isAuth"  :epicItemParams="epicsItems"  />

        <CatSlider  :catSliders="casino" />
        <CatSlider  :catSliders="slots" />

        <SliderBonusMod :cardParams="bonuses" />
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
          bonuses: {
              title: 'Bonuses',
              link: '/bonuses',
              linkTitle: 'See all',
              slides:[
                    {
                        imgUrl: require('@/assets/img/slider/character-1.png'),
                        link: '##',
                        imgAlt: 'Bonuses',
                        stiker: 'Wager',
                        stikerSubClass: 'stiker--orange',

                        detalisTopList: [
                            {
                                title: '500',
                                label: 'min bet',
                                icnClass: 'icon-uniE934'
                            },
                            {
                                title: '5 000',
                                label: 'max bet',
                                icnClass: 'icon-uniE934'
                            },
                            {
                                title: 'x35',
                                label: 'wager'
                            }
                        ],

                        detalisBottomList: [
                            {
                                title: '12:59:59',
                                label: 'до конца'
                            },
                            {
                                title: '60,000',
                                label: 'Rise Fund',
                                icnClass: 'icon-uniE934'
                            }
                        ],

                        frontBtnDetails: {
                            type: 'button',
                            className: 'btn--orange js-detail'
                        },
                        frontBtnDetailsTitle: 'Details',

                        backBtn: {
                            type: 'button',
                            className: 'btn--orange js-detail'
                        },
                        backBtnTitle: 'Ok',
                        backContent: 'Повседневная практика показывает, что реализация намеченных плановых заданий позволяет выполнять важные задания по разработке существенных финансовых и административных условий.',

                        popupLabel: 'Do you want to cancel the bonus?',

                        popupBtnFirst: {
                            type: 'button',
                            className: 'btn--grey'
                        },
                        popupBtnFirstTitle: 'Yes',

                        popupBtnLast: {
                            type: 'button'
                        },
                        popupBtnLastTitle: 'No',
                    },
                    {
                        imgUrl: require('@/assets/img/slider/character-2.png'),
                        link: '##',
                        imgAlt: 'Bonuses',
                        stiker: 'Cashback',
                        stikerSubClass: 'stiker--green',

                        detalisTopList: [
                            {
                                title: '500',
                                label: 'min bet',
                                icnClass: 'icon-uniE934'
                            },
                            {
                                title: '5 000',
                                label: 'max bet',
                                icnClass: 'icon-uniE934'
                            },
                            {
                                title: 'x35',
                                label: 'wager'
                            }
                        ],

                        detalisBottomList: [
                            {
                                title: '12:59:59',
                                label: 'до конца'
                            },
                            {
                                title: '60,000',
                                label: 'Rise Fund',
                                icnClass: 'icon-uniE934'
                            }
                        ],

                        frontBtnDetails: {
                            type: 'button',
                            className: 'btn--orange js-detail'
                        },
                        frontBtnDetailsTitle: 'Details',

                        backBtn: {
                            type: 'button',
                            className: 'btn--orange js-detail'
                        },
                        backBtnTitle: 'Ok',
                        backContent: 'Повседневная практика показывает, что реализация намеченных плановых заданий позволяет выполнять важные задания по разработке существенных финансовых и административных условий.',

                        popupLabel: 'Do you want to cancel the bonus?',

                        popupBtnFirst: {
                            type: 'button',
                            className: 'btn--grey'
                        },
                        popupBtnFirstTitle: 'Yes',

                        popupBtnLast: {
                            type: 'button'
                        },
                        popupBtnLastTitle: 'No',
                    },
                    {
                        imgUrl: require('@/assets/img/slider/character-3.png'),
                        link: '##',
                        imgAlt: 'Bonuses',
                        stiker: 'Freespin',
                        stikerSubClass: 'stiker--blue',

                        detalisTopList: [
                            {
                                title: '500',
                                label: 'min bet',
                                icnClass: 'icon-uniE934'
                            },
                            {
                                title: '5 000',
                                label: 'max bet',
                                icnClass: 'icon-uniE934'
                            },
                            {
                                title: 'x35',
                                label: 'wager'
                            }
                        ],

                        detalisBottomList: [
                            {
                                title: '12:59:59',
                                label: 'до конца'
                            },
                            {
                                title: '60,000',
                                label: 'Rise Fund',
                                icnClass: 'icon-uniE934'
                            }
                        ],

                        frontBtnDetails: {
                            type: 'button',
                            className: 'btn--orange js-detail'
                        },
                        frontBtnDetailsTitle: 'Details',

                        backBtn: {
                            type: 'button',
                            className: 'btn--orange js-detail'
                        },
                        backBtnTitle: 'Ok',
                        backContent: 'Повседневная практика показывает, что реализация намеченных плановых заданий позволяет выполнять важные задания по разработке существенных финансовых и административных условий.',

                        popupLabel: 'Do you want to cancel the bonus?',

                        popupBtnFirst: {
                            type: 'button',
                            className: 'btn--grey'
                        },
                        popupBtnFirstTitle: 'Yes',

                        popupBtnLast: {
                            type: 'button'
                        },
                        popupBtnLastTitle: 'No',
                    },
                    {
                        imgUrl: require('@/assets/img/slider/character-1.png'),
                        link: '##',
                        imgAlt: 'Bonuses',
                        stiker: 'Freebet',
                        itemSubClass: "charitem--rotate",

                        detalisTopList: [
                            {
                                title: '500',
                                label: 'min bet',
                                icnClass: 'icon-uniE934'
                            },
                            {
                                title: '5 000',
                                label: 'max bet',
                                icnClass: 'icon-uniE934'
                            },
                            {
                                title: 'x35',
                                label: 'wager'
                            }
                        ],

                        detalisBottomList: [
                            {
                                title: '12:59:59',
                                label: 'до конца'
                            },
                            {
                                title: '60,000',
                                label: 'Rise Fund',
                                icnClass: 'icon-uniE934'
                            }
                        ],

                        frontBtnDetails: {
                            type: 'button',
                            className: 'btn--orange js-detail'
                        },
                        frontBtnDetailsTitle: 'Details',

                        backBtn: {
                            type: 'button',
                            className: 'btn--orange js-detail'
                        },
                        backBtnTitle: 'Ok',
                        backContent: 'Повседневная практика показывает, что реализация намеченных плановых заданий позволяет выполнять важные задания по разработке существенных финансовых и административных условий.',

                        popupLabel: 'Do you want to cancel the bonus?',

                        popupBtnFirst: {
                            type: 'button',
                            className: 'btn--grey'
                        },
                        popupBtnFirstTitle: 'Yes',

                        popupBtnLast: {
                            type: 'button'
                        },
                        popupBtnLastTitle: 'No',
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
                      desabled: "charitem--disabled",
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
              linkUrl: '/slots',
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
