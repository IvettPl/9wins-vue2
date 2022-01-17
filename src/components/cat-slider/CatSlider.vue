<template>
    <div
        class="slider-mod"
        v-for="item in slides"
        :key="item.id"
    >
        <div class="center">
            <div class="slider-mod__wrap">

                <div
                    class="slider-mod__title"
                    :class="item.icn"
                >
                    <h2>{{ item.title }}</h2>
                </div>

                <a
                    :href="item.linkUrl"
                    class="slider-mod__link"
                >{{ item.link }}</a>

            </div>
            <SwiperMod />
        </div>
    </div>
</template>

<script>

import SwiperMod from './SwiperMod'


export default {
    components: {
      SwiperMod
    },
    data(){
        return {
            slides: [
                {
                    id: '1',
                    title: 'Sport',
                    icn: 'icon-sports_filled',
                    link: 'See all',
                    linkUrl: '##',
                },
                {
                    id: '2',
                    title: 'Virtual games',
                    icn: 'icon-virtual_games',
                    link: 'See all',
                    linkUrl: '##',
                },
                {
                    id: '3',
                    title: 'Live casino',
                    icn: 'icon-live_casino',
                    link: 'See all',
                    linkUrl: '##',
                },
                {
                    id: '4',
                    title: 'Slots',
                    icn: 'icon-slots',
                    link: 'See all',
                    linkUrl: '##',
                }

            ]
        }
    }
}

</script>

<style lang="scss">
    @import './../../assets/style/color-vars';
    @import './catSlider.scss'
</style>
