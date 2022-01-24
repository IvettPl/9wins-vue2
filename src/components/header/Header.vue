<template>
<header class="header">
    <div class="center__header">
        <div class="header__tools">
            <button type="button"
                @click="showMenu"
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
            <Login v-if="!isAuth" />
            <Auth v-if="isAuth" :auth="auth" />
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
        openMenu: Boolean,
        isAuth: Boolean
    },
    data() {
        return {
            isOpenMenu: this.openMenu,
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
            auth: {
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
        showMenu(){
            this.isOpenMenu = !this.isOpenMenu;
            this.$emit('showMenuPanel');
        }
    }
}
</script>
