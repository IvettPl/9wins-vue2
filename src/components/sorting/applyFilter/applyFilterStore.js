export default {
    state() {
        return {
            filterList: [
                {
                    title: 'Game types',
                    fieldsList: [
                        {
                            type: 'radio',
                            id: 'live-casino',
                            name: 'game-types',
                            label: 'Live casino',
                            checked: true
                        },
                        {
                            type: 'radio',
                            id: 'casino',
                            name: 'game-types',
                            label: 'Casino'
                        },
                        {
                            type: 'radio',
                            id: 'virtual',
                            name: 'game-types',
                            label: 'Virtual'
                        },
                        {
                            type: 'radio',
                            id: 'skrill-games',
                            name: 'game-types',
                            label: 'Skrill games'
                        },
                    ]
                },
                {
                    title: 'Category',
                    fieldsList: [
                        {
                            type: 'checkbox',
                            id: 'all',
                            name: 'all',
                            label: 'All',
                            checked: true
                        },
                        {
                            type: 'checkbox',
                            id: 'new',
                            name: 'new',
                            label: 'New'
                        },
                        {
                            type: 'checkbox',
                            id: 'popular',
                            name: 'popular',
                            label: 'Popular'
                        },
                        {
                            type: 'checkbox',
                            id: 'favorites',
                            name: 'favorites',
                            label: 'Favorites'
                        },
                    ]
                },
                {
                    title: 'Themes',
                    fieldsList: [
                        {
                            type: 'checkbox',
                            id: 'fruits',
                            name: 'fruits',
                            label: 'Fruits',
                            checked: true
                        },
                        {
                            type: 'checkbox',
                            id: 'seven',
                            name: 'seven',
                            label: '777'
                        },
                        {
                            type: 'checkbox',
                            id: 'vikings',
                            name: 'vikings',
                            label: 'Vikings'
                        },
                        {
                            type: 'checkbox',
                            id: 'animals',
                            name: 'animals',
                            label: 'Animals'
                        },
                    ]
                },
                {
                    title: 'Providers',
                    fieldsList: [
                        {
                            type: 'checkbox',
                            id: 'table-tennis',
                            name: 'table-tennis',
                            img: require('@/assets/img/svg/icn-tennis-small.svg'),
                            checked: true
                        },
                        {
                            type: 'checkbox',
                            id: 'voleyball',
                            name: 'voleyball',
                            img: require('@/assets/img/svg/icn-voleyball.svg'),
                        },
                        {
                            type: 'checkbox',
                            id: 'regby',
                            name: 'regby',
                            img: require('@/assets/img/svg/icn-regby.svg'),
                        },
                        {
                            type: 'checkbox',
                            id: 'ufc',
                            name: 'ufc',
                            img: require('@/assets/img/svg/icn-ufc.svg'),
                        },
                    ]
                }
            ],

            applyFilterBtn: {
                type: 'button',
                className: 'btn--green-base'
            }
        }
    },

    getters: {
        getfilterList(state) {
            return state.filterList
        },

        getApplyFilterBtn(state) {
            return state.applyFilterBtn
        }
    }
}