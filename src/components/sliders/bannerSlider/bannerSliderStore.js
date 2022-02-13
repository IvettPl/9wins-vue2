export default {
    state() {
        return {
            slideHomeBanners: [
                {
                    id: 1,
                    link: '##',
                    imgUrl: require('@/assets/img/slider/home-slider-1.jpg'),
                    imgAlt: 'Bonus 150'
                },
                {
                    id: 2,
                    link: '##',
                    imgUrl: require('@/assets/img/slider/home-slider-1.jpg'),
                    imgAlt: 'Bonus 150'
                }
            ],
            slideSlotBanners: [
                {
                    id: 1,
                    link: '##',
                    imgUrl: require('@/assets/img/slider/slot-slider-1.jpg'),
                    imgAlt: 'Big Win'
                },
                {
                    id: 2,
                    link: '##',
                    imgUrl: require('@/assets/img/slider/slot-slider-1.jpg'),
                    imgAlt: 'Big Win'
                }
            ],
            slideCasinoBanners: [
                {
                    id: 1,
                    link: '##',
                    imgUrl: require('@/assets/img/slider/casino-slider-1.jpg'),
                    imgAlt: 'Live Casino'
                },
                {
                    id: 2,
                    link: '##',
                    imgUrl: require('@/assets/img/slider/casino-slider-1.jpg'),
                    imgAlt: 'Live Casino'
                }
            ],
            slideGamesBanners: [
                {
                    id: 1,
                    link: '##',
                    imgUrl: require('@/assets/img/slider/games-slider-1.jpg'),
                    imgAlt: 'Virtual Games'
                },
                {
                    id: 2,
                    link: '##',
                    imgUrl: require('@/assets/img/slider/games-slider-1.jpg'),
                    imgAlt: 'Virtual Games'
                }
            ]
        }
    },
    getters: {
        getHomeSlidesBanner(state) {
            return state.slideHomeBanners
        },

        getSlotSlidesBanner(state) {
            return state.slideSlotBanners
        },

        getCasinoSlidesBanner(state) {
            return state.slideCasinoBanners
        },

        getGamesSlidesBanner(state) {
            return state.slideGamesBanners
        }
    }
}