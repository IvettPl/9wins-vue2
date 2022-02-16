<template>
    <div class="page-wrapper page-wrapper--casino">
        <BannerSlider :bannerSlider="slidesBanner" />

        <div class="center">
            <Sorting>
                <CatSliderItem
                    :CatSliderItem="item"
                    v-for="item in productList.slides"
                    :key="item.id"
                />
            </Sorting>
        </div>

        <Modal
            modalName="apply-filter"
            addClass="popup--filter"
        >
            <ApplyFilter />
        </Modal>
    </div>
</template>

<script>
    import BannerSlider from '@/components/sliders/bannerSlider/BannerSlider';
    import CatSliderItem from '@/components/sliders/cat-slider/CatSliderItem';
    import Sorting from '@/components/sorting/Sorting';
    import Modal from "@/components/modal/Modal";
    import ApplyFilter from "@/components/sorting/applyFilter/ApplyFilter";

    export default {
        name: 'Casino',
        components: {
            CatSliderItem,
            BannerSlider,
            Sorting,
            Modal,
            ApplyFilter
        },

        computed: {
            slidesBanner() {
                return this.$store.getters.getCasinoSlidesBanner;
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