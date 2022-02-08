export default {
    state() {
        return {
            profileMenu: [
                {
                    link: '##',
                    icnClass: 'icon-Cashier',
                    title: 'Cashier'
                },
                {
                    link: '##',
                    icnClass: 'icon-bonus',
                    title: 'My Bonus'
                },
                {
                    link: '##',
                    icnClass: 'icon-tournaments',
                    title: 'My Tournaments'
                },
                {
                    link: '##',
                    icnClass: 'icon-code',
                    title: 'Promocodes'
                },
                {
                    link: '##',
                    icnClass: 'icon-personal-info',
                    title: 'Personal Information'
                },
                {
                    link: '##',
                    icnClass: 'icon-settings',
                    title: 'Settings'
                },
              ],
        }
    },
    getters: {
        profileMenuList(state) {
            return state.profileMenu;
        }
    }
}