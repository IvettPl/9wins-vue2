export default {
    state() {
        return {
            slides: [
                {
                    link: '##',
                    imgUrl: require('@/assets/img/slider/home-slider-1.jpg'),
                    imgx2: require('@/assets/img/slider/home-slider-1@x2.jpg'),
                    imgWebp: require('@/assets/img/slider/home-slider-1.webp'),
                },
                {
                    link: '##',
                    imgUrl: require('@/assets/img/slider/home-slider-1.jpg'),
                    imgx2: require('@/assets/img/slider/home-slider-1@x2.jpg'),
                    imgWebp: require('@/assets/img/slider/home-slider-1.webp'),
                }
            ]
        }
    },
    getters: {
        getslidesBanner(state) {
            return state.slides
        }
    }
}