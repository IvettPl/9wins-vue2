export default {
    state() {
        return {
            filterHeaderDefault: [
                {
                    id: 1,
                    title: 'All (360)',
                    selected: true
                },
                {
                    id: 2,
                    title: 'Favourites (7)'
                },
                {
                    id: 3,
                    title: 'Popular (20)'
                },
                {
                    id: 4,
                    title: 'New (11)'
                }
            ],
            filterHeaderSlots: [
                {
                    id: 1,
                    title: 'All (360)',
                    selected: true
                },
                {
                    id: 2,
                    title: 'Favourites (7)'
                },
                {
                    id: 3,
                    title: 'Popular (20)'
                },
                {
                    id: 4,
                    title: 'New (11)'
                },
                {
                    id: 5,
                    title: 'Live (146)'
                },
                {
                    id: 6,
                    title: 'Table (986)'
                },
                {
                    id: 7,
                    title: 'Megaways (56)'
                },
                {
                    id: 8,
                    title: 'Slots (210)'
                },
                {
                    id: 9,
                    title: 'Jackpots (14)'
                },
            ]
        }
    },

    getters: {
        getFilterHeaderDefault(state) {
            return state.filterHeaderDefault
        },

        getFilterHeaderSlots(state) {
            return state.filterHeaderSlots
        }
    }
}