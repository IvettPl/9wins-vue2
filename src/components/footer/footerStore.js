export default  {
    state() {
        return {
            menuListFooter: [
                { link: '##', title: 'Terms & Conditions'},
                { link: '##', title: 'Privacy Policy'},
                { link: '##', title: 'Responsible Gaming'},
                { link: '##', title: 'AML Policy'},
                { link: '##', title: 'FAQ'},
                { link: '##', title: 'About Us'},
                { link: '##', title: 'Affiliate Program'},
                { link: '##', title: 'TeenPaty'},
                { link: '##', title: 'AndarBahar'},
                { link: '##', title: 'Roulettes'},
                { link: '##', title: 'Baccarat'},
                { link: '##', title: 'Dragon Tiger'},
                { link: '##', title: 'Crazy Time'},
                { link: '##', title: 'Pocker'},
                { link: '##', title: 'BlackJack'},
                { link: '##', title: 'Lottery'}
            ],        
        }
    },
    getters: {
        getmenuListFooter(state) {
            return state.menuListFooter;
        }, 
    }
}