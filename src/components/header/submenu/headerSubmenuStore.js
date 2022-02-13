export default {
    state() {
        return {
            headerSubMenu: [
                {
                    icn: 'icon-sports_filled',
                    link: '##',
                    title: 'Sports'
                },
                {
                    icn: 'icon-virtual_games',
                    link: 'games',
                    title: 'Virtual games'
                },
                {
                    subClass: 'submenu-list__item--deposite',
                    link: '##',
                    title: 'Deposite'
                },
                {
                    icn: 'icon-live_casino',
                    link: 'casino',
                    title: 'Live casino'
                },
                {
                    icn: 'icon-slots',
                    link: 'slots',
                    title: 'Slots'
                }
            ]
        }
    },

    getters: {
        getSubMenu(state) {
            return state.headerSubMenu
        }
    }
}