<template>
    <div class="page-wrapper page-wrapper--slots">

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
    name: 'Slots',
    components: {
        CatSliderItem,
        BannerSlider,
        Sorting,
        Modal,
        ApplyFilter
    },
    data() {
        return {
        }
    },
    computed: {
        slidesBanner() {
            return this.$store.getters.getSlotSlidesBanner;
        },

        filterHeader() {
            return this.$store.getters.getFilterHeaderSlots;
        },

        productList() {
            return this.$store.getters.getSlotsSliders;
        }
    }
}
</script>
