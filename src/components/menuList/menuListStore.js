export default {
    state() {
        return {
            casinoMainMenu: [
                {
                    icnClass: 'icon-bonus',
                    link: '/bonuses',
                    title: 'Bonuses'
                },
                {
                    icnClass: 'icon-tournaments',
                    link: '/tournaments',
                    title: 'Tournaments'
                },
                {
                    icnClass: 'icon-new',
                    link: '/news',
                    title: 'News'
                },
                {
                    icnClass: 'icon-personal-info',
                    link: '/programm',
                    title: 'Loyalty Programm'
                },
                {
                    icnClass: 'icon-slots',
                    link: '/slots',
                    title: 'Slot Casino'
                },
                {
                    icnClass: 'icon-live_casino',
                    link: '/casino',
                    title: 'Live Casino'
                },
                {
                    icnClass: 'icon-table',
                    link: '/skill',
                    title: 'Skill Games'
                }
            ],
            sportMainMenu: [
                {
                    icnClass: 'icon-sports_filled',
                    link: '##',
                    title: 'Крикет'
                },
                {
                    icnClass: 'icon-virtual_games',
                    link: '##',
                    title: 'Киберспорт'
                },
                {
                    icnClass: 'icon-live_casino',
                    link: '##',
                    title: 'Футбол'
                },
                {
                    icnClass: '',
                    link: '##',
                    title: 'Теннис'
                },
                {
                    icnClass: '',
                    link: '##',
                    title: 'Баскетбол'
                },
                {
                    icnClass: '',
                    link: '##',
                    title: 'Настольный теннис'
                },
                {
                    icnClass: '',
                    link: '##',
                    title: 'Волейбол'
                },
                {
                    icnClass: '',
                    link: '##',
                    title: 'Хоккей'
                },
                {
                    icnClass: '',
                    link: '##',
                    title: 'UFC'
                },
                {
                    icnClass: '',
                    link: '##',
                    title: 'Бокс'
                }
            ],
        }
    },
    getters: {
        getcasinoMainMenu(state) {
            return state.casinoMainMenu;
        },
        getsportMainMenu(state) {
            return state.sportMainMenu;
        },
    }
}