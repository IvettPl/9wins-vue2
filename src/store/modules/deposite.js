export default {
    state() {
        return { 
            payCardsList: [
                {
                    id: '1',
                    imgUrl: require('@/assets/img/logos/mastercard-box.svg'),
                    imgAlt: 'mastercard'
                },
                {
                    id: '2',
                    imgUrl: require('@/assets/img/logos/visa-box.svg'),
                    imgAlt: 'visa'
                },

                {
                    id: '3',
                    imgUrl: require('@/assets/img/logos/yesbank-box.svg'),
                    imgAlt: 'yesbank'
                },

                {
                    id: '4',
                    imgUrl: require('@/assets/img/logos/phonepe.svg'),
                    imgAlt: 'phonepe'
                },
            ],            
        }
    },
    getters: {
        getPayCardsList(state) {
            return state.payCardsList
        },
 
    },
}