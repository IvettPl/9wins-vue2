<template>
    <div class="page-wrapper page-wrapper--games">
        <BannerSlider :bannerSlider="slidesBanner" />

        <div class="center">

            <FilterProducts :headerFilter="filterHeader"></FilterProducts>

            <div class="sorting__content">
                <CatSliderItem :CatSliderItem="item" v-for="item in productList.slides" :key="item.id" />
            </div>
        </div>
    </div>
</template>

<script>
    import BannerSlider from '@/components/sliders/bannerSlider/BannerSlider'
    import FilterProducts from '@/components/filterProducts/FilterProducts'
    import CatSliderItem from '@/components/sliders/cat-slider/CatSliderItem'

    export default {
        name: 'Games',

        components: {
            BannerSlider,
            FilterProducts,
            CatSliderItem
        },

        computed: {
            slidesBanner() {
                return this.$store.getters.getGamesSlidesBanner;
            },

            filterHeader() {
                return this.$store.getters.getFilterHeaderDefault;
            },

            productList() {
                return this.$store.getters.getSlotsSliders;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>