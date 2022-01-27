<template>
<header class="header">
    <div class="center__header">
        <div class="header__tools">
            <button type="button"
                @click="showAside"
                class="header__menu-btn icon-menu">
            </button>
            <HeaderSubmenu :subMenuList="headerSubMenu" />
            <button type="button" class="btn__search icon-search"></button>
            <div class="header__search">

            </div>
        </div>
        <div class="logo">
            <router-link to="/">
                <img src="@/assets/img/svg/logo.svg" alt="9winz"></router-link>
        </div>
        <div class="right-column">
            <Login
                @stateLogPopup="openLogPanel"
                :openLogPopup="logShowPanel"
                
                @stateRegPopup="openRegPanel"
                :openRegPopup="regShowPanel"
                v-if="!isAuth"
            />
            <Auth
                @changeStateProfile="toggleProfile"
                :profile="stateAsideRight"
                v-if="isAuth"
                :authInfo="authInfo"
            />
        </div>

    </div>
</header>
</template>

<script>
import Auth from './auth/Auth';
import Login from './login/Login';
import HeaderSubmenu from './submenu/HeaderSubmenu';

export default {
    components: {
        Auth, Login, HeaderSubmenu
    },
    props: {
        stateAside: Boolean,
        stateAsideRight: Boolean,
        regShowPanel: Boolean,
        logShowPanel: Boolean
    },
    inject: ['isAuth'],
    data() {
        return {
            stateLogin: this.login,
            stateRegPanel: this.regShowPanel,
            toggleAside: this.stateAside,
            toggleRightAside: this.stateAsideRight,
            headerSubMenu: [
                {
                    icn: 'icon-sports_filled',
                    link: '##',
                    title: 'Sports'
                },
                {
                    icn: 'icon-virtual_games',
                    link: '##',
                    title: 'Virtual games'
                },
                {
                    subClass: 'submenu-list__item--deposite',
                    link: '##',
                    title: 'Deposite'
                },
                {
                    icn: 'icon-live_casino',
                    link: '##',
                    title: 'Live casino'
                },
                {
                    icn: 'icon-slots',
                    link: 'slots',
                    title: 'Slots'
                }
            ],
            authInfo: {
                avatar: require('@/assets/img/avatars/avatar.png'),
                alt: 'Avatar',
                link: '##',
                linkTitle: 'Deposit',
                bonuses: [
                    {sum: '32,000', title: 'Balance'},
                    {sum: '190,000', title: 'Bonus'},
                ]
            }
        }
    },
    methods: {
        showAside(){
            this.toggleAside = !this.toggleAside;
            this.$emit('showPanelLeft');
        },
        toggleProfile(){
            this.toggleRightAside = !this.toggleRightAside;
            this.$emit('showPanelRight');
        },
        openRegPanel(){
            this.stateRegPanel =!this.stateRegPanel
            this.$emit('showRegPopup')
        },
        openLogPanel(){ 
            this.stateLogin =!this.stateLogin
            this.$emit('showLogPopup')
        }
    }
}
</script>
