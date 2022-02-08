export default {
    state(){
        return {
            userInfoParams: {
                id: 2394876452002,
                status: 'Regular',
                link: "cashier",
                userBalance: [
                    {
                        balance: '32,000',
                        balanceTitle: 'Balance'
                    },
                    {
                        balance: '190,000',
                        balanceTitle: 'Bonus'
                    }
                ]
            }, 
        }
    },
    getters: {
        getuserInfoParams(state) {
            return state.userInfoParams;
        }
    }
}