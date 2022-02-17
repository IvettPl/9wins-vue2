import { createStore } from 'vuex'
import Deposite from  '@/store/modules/deposite'
import socialDataStore from  '@/components/popup/socialBox/socialDataStore'
import profileMenuStore from  '@/components/profile/profileMenu/profileMenuStore'
import profileAvatarStore from  '@/components/profile/avatar/profileAvatarStore'
import userInfoStore from  '@/components/profile/userInfo/userInfoStore'
import menuListStore from  '@/components/menuList/menuListStore'
import bannerSliderStore from  '@/components/sliders/bannerSlider/bannerSliderStore'
import epicsSliderStore from  '@/components/sliders/epicsSlider/epicsSliderStore'
import cardSliderBonusStore from  '@/components/sliders/cardSliderBonus/cardSliderBonusStore'
import catSliderStore from  '@/components/sliders/cat-slider/catSliderStore'
import cardSliderTournamentsStore from  '@/components/sliders/cardSliderTournaments/cardSliderTournamentsStore'
import headerSubmenuStore from  '@/components/header/submenu/headerSubmenuStore'

import filterProductStore from  '@/components/sorting/filterProductStore'
import applyFilterStore from  '@/components/sorting/applyFilter/applyFilterStore'

import settingsListStore from  '@/components/profile/settingsList/settingsListStore'
import formFieldsStore from  '@/components/profile/formFieldsStore'

import footerStore from  '@/components/footer/footerStore'



export default createStore({
    state: {
        isAuth: true,

        emptyBox: false,
        emptyBoxWithdrawal: true,
        withdrawalCard: false,
        showWithdrawalForm: false,
        showInfolist: false
    },

    getters: {
        getIsAuth(state) {
            return state.isAuth;
        },
    },

    mutations: {
        showcardForm(state){
            state.depositCard = !state.depositCard
        },

        showWithdrawalForm(state){
            state.withdrawalCard = !state.withdrawalCard
        }
    },

    actions: {
    },

    modules: {
        Deposite,

        socialDataStore,

        menuListStore,

        //sliders
        bannerSliderStore, epicsSliderStore, cardSliderBonusStore, catSliderStore, cardSliderTournamentsStore,

        headerSubmenuStore, filterProductStore, applyFilterStore,

        //profile
        settingsListStore, profileMenuStore, profileAvatarStore, userInfoStore, formFieldsStore,

        footerStore
    }
})
