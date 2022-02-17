export default {
    state() {
        return {
            settingsList: [
                {
                    id: 1,
                    isEmpty: true,
                    icnClass: 'icon-popular',
                    label: 'Change password?'
                },
                {
                    id: 2,
                    isEmpty: true,
                    icnClass: 'icon-popular',
                    label: 'Connect social networks'
                }
            ],

            personalInfoList: [
                {
                    id: 1,
                    isEmpty: false,
                    isConfirm: false,
                    icnClass: 'icon-persona',
                    label: 'Enter your name',
                    labelSmall: 'First name',
                    title: 'Aarav',
                },
                {
                    id: 2,
                    isEmpty: false,
                    icnClass: 'icon-persona',
                    label: 'Enter your last name',
                    labelSmall: 'Title',
                    title: 'Devi',
                },
                {
                    id: 3,
                    isEmpty: false,
                    isConfirm: true,
                    icnClass: 'icon-email',
                    label: 'Enter email',
                    labelSmall: 'Email',
                    title: 'aarav@mail.com',
                    confirm: 'confirm',
                    noConfirm: 'no confirm'
                },
                {
                    id: 4,
                    isEmpty: false,
                    isConfirm: false,
                    icnClass: 'icon-phone',
                    label: 'Enter phone number',
                    labelSmall: 'Phone',
                    title: '+91 11 23016754',
                    confirm: 'confirm',
                    noConfirm: 'no confirm'
                },
                {
                    id: 5,
                    isEmpty: true,
                    icnClass: 'icon-documents',
                    label: 'Add documents'
                },
                {
                    id: 6,
                    isEmpty: false,
                    icnClass: 'icon-gender',
                    label: 'Select Gender',
                    labelSmall: 'Gender',
                    title: 'Male',
                },
                {
                    id: 7,
                    isEmpty: true,
                    icnClass: 'icon-city',
                    label: 'Select your city',
                    labelSmall: 'City',
                    title: 'Indore',
                },
                {
                    id: 8,
                    isEmpty: true,
                    icnClass: 'icon-home',
                    label: 'Add adress',
                    labelSmall: 'Adress',
                    title: 'Madhya Pradesh 452002',
                },
                {
                    id: 9,
                    isEmpty: true,
                    icnClass: 'icon-Earth',
                    label: 'Select country',
                    labelSmall: 'Your country',
                    title: 'India',
                },
                {
                    id: 10,
                    isEmpty: false,
                    icnClass: 'icon-number',
                    label: 'Player ID',
                    labelSmall: 'Player ID',
                    title: '2394876452002',
                }
            ],

            settingsList: [
                {
                    id: 1,
                    isEmpty: false,
                    isConfirm: false,
                    icnClass: 'icon-popular',
                    labelSmall: 'Add',
                    title: 'Card',
                },
                {
                    id: 2,
                    isEmpty: false,
                    isConfirm: false,
                    icnClass: 'icon-popular',
                    labelSmall: 'Add',
                    title: 'Bank statem',
                }
            ],
        }
    },

    getters: {
        getsettingsList(state) {
            return state.settingsList
        },

        getPersonalInfoList(state) {
            return state.personalInfoList
        },

        getAddDocsList(state) {
            return state.settingsList
        }
    }
}