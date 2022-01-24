<template>
    <div class="page-wrapper page-wrapper--slots">
        <div class="center">
            <div
                class="tools-panel"
                :class="{'show': seachShow}"
            >
                <SortingList />
                <Search @changeStateField="seachShow = !seachShow" :showField="seachShow" />
                <button
                    type="button"
                    class="btn__filter icon-filter"
                    @click="filterShow = !filterShow"
                ></button>
            </div>
            <ApplyFilter
                @hidePanel="filterShow = !filterShow"
                :openFilterPanel="filterShow"
                :filterBox="filter"
                :attrBtn="applyBtn"
            />
            <div class="sorting__content">
                <CatSliderItem :CatSliderItem="item" v-for="(item, index) in slides" :key="index" />
            </div>
        </div>
    </div>
</template>

<script>
import CatSliderItem from '@/components/sliders/cat-slider/CatSliderItem'
import SortingList from '@/components/sorting/SortingList'
import Search from '@/components/search/Search'
import ApplyFilter from '@/components/applyFilter/ApplyFilter'

export default {
    name: 'Slots',
    components: {
      CatSliderItem, SortingList, Search, ApplyFilter
    },
    data() {
        return {
            seachShow: false,
            filterShow:false,

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
                },
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

            filter: [
                {
                    title: 'Game types',
                    list: [
                        {
                            id: 'live',
                            type: 'radio',
                            name: 'game',
                            checked: true,
                            label: 'Live casino'
                        },
                        {
                            id: 'casino',
                            type: 'radio',
                            name: 'game',
                            label: 'Casino'
                        },
                        {
                            id: 'virtual',
                            type: 'radio',
                            name: 'game',
                            label: 'Virtual'
                        },
                        {
                            id: 'games',
                            type: 'radio',
                            name: 'game',
                            label: 'Skrill games'
                        }
                    ]
                },
                {
                    title: 'Category',
                    list: [
                        {
                            id: 'all',
                            type: 'checkbox',
                            name: 'all',
                            label: 'All'
                        },
                        {
                            id: 'new',
                            type: 'checkbox',
                            name: 'new',
                            label: 'New'
                        },
                        {
                            id: 'popular',
                            type: 'checkbox',
                            name: 'popular',
                            label: 'Popular'
                        },
                        {
                            id: 'favorites',
                            type: 'checkbox',
                            name: 'favorites',
                            label: 'Favorites'
                        }
                    ]
                },
                {
                    title: 'Themes',
                    list: [
                        {
                            id: 'fruits',
                            type: 'checkbox',
                            name: 'fruits',
                            label: 'Fruits'
                        },
                        {
                            id: 'sevens',
                            type: 'checkbox',
                            name: 'sevens',
                            label: '777'
                        },
                        {
                            id: 'vikings',
                            type: 'checkbox',
                            name: 'vikings',
                            label: 'Vikings'
                        },
                        {
                            id: 'animals',
                            type: 'checkbox',
                            name: 'animals',
                            label: 'Animals'
                        }
                    ]
                },
                {
                    title: 'Providers',
                    list: [
                        {
                            id: 'smtennis',
                            type: 'checkbox',
                            name: 'smtennis',
                            img: require('@/assets/img/svg/icn-tennis-small.svg')
                        },
                        {
                            id: 'volleyball',
                            type: 'checkbox',
                            name: 'volleyball',
                            img: require('@/assets/img/svg/icn-voleyball.svg')
                        },
                        {
                            id: 'regby',
                            type: 'checkbox',
                            name: 'regby',
                            img: require('@/assets/img/svg/icn-regby.svg')
                        },
                        {
                            id: 'ufc',
                            type: 'checkbox',
                            name: 'ufc',
                            img: require('@/assets/img/svg/icn-ufc.svg')
                        }
                    ]
                }
            ],

            applyBtn: {
                type: 'button',
                className: 'btn--orange'
            }
        }
    }
}
</script>
