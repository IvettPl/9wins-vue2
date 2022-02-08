export default {
    state(){
        return {
            epicsItems: [
                {
                    src: require('@/assets/img/avatars/evva.png'),
                    srcAlt: 'Evva',
                    name: 'evva***',
                    title: 'EPIC Gladiators',
                    price: '56 000.00'
                },
                {
                    src: require('@/assets/img/avatars/abbdy.png'),
                    srcAlt: 'abbdy',
                    name: 'abbdy***',
                    title: 'EPIC Gladiators',
                    price: '56 000.00'
                },
                {
                    src: require('@/assets/img/avatars/elen.png'),
                    srcAlt: 'elen',
                    name: 'elen***',
                    title: 'EPIC Gladiators',
                    price: '56 000.00'
                },
                {
                    src: require('@/assets/img/avatars/alex.png'),
                    srcAlt: 'alex',
                    name: 'alex***',
                    title: 'EPIC Gladiators',
                    price: '56 000.00'
                },
                {
                    src: require('@/assets/img/avatars/lilu.png'),
                    srcAlt: 'lilu',
                    name: 'lilu***',
                    title: 'EPIC Gladiators',
                    price: '56 000.00'
                },
                {
                    src: require('@/assets/img/avatars/lola.png'),
                    srcAlt: 'lola',
                    name: 'lola***',
                    title: 'EPIC Gladiators',
                    price: '56 000.00'
                }
            ]
        }
    },
    getters:  {
        getepicsLists(state) {
            return state.epicsItems;
        }
    }
}