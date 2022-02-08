<template>
<header class="header">
    <div class="center header__center">

        <div class="header__left">
            <button type="button"

                @click="$bus.$emit('open-aside-left-aside')"
                class="btn__menu icon-menu">
            </button>

            <HeaderSubmenu :subMenuList="headerSubMenu" />

            <button type="button" class="btn__search icon-search"></button>
        </div>

        <div class="logo">
            <router-link to="/">
                <img src="@/assets/img/svg/logo.svg" alt="9winz">
            </router-link>
        </div>

        <div class="header__right">
            <Login
                v-if="!$store.state.isAuth"
            />

            <Auth
                v-if="$store.state.isAuth"
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
    },
    data() {
        return {
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
    }
}
</script>
