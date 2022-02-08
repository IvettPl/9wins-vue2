export default {
    state() {
        return {
            socialBlock: {
                title: 'or login via social network',
                socialList: [
                    {
                        link: '##',
                        imgUrl: require('@/assets/img/social/icn-fb.svg'),
                        imgAlt: 'Facebook'
                    },
                    {
                        link: '##',
                        imgUrl: require('@/assets/img/social/icn-google.svg'),
                        imgAlt: 'Google'
                    },
                    {
                        link: '##',
                        imgUrl: require('@/assets/img/social/icn-aa.svg'),
                        imgAlt: 'Aadhaar'
                    }
                ]
            }            
        }
    },
    getters: {
        getSocialData(state){
            return state.socialBlock;
        }
    }
}