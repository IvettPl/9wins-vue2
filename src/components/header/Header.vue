<template>
<header class="header">
    <div class="center__header">
        <div class="header__tools">
            <button type="button"  class="header__menu-btn icon-menu">
            </button>
            <HeaderSubmenu :subMenuList="headerSubMenu" />
            <button type="button" class="search__btn icon-search"></button>
            <div class="header__search">

            </div>
        </div>
        <div class="logo">
            <a href="##">
                <img src="@/assets/img/svg/logo.svg" alt="9winz"></a>
        </div>
        <Login />
    </div>
</header>
</template>

<script>
import Login from './login/Login';
import HeaderSubmenu from './submenu/HeaderSubmenu';

export default {
    components: {
        Login, HeaderSubmenu
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
                    link: '##',
                    title: 'Slots'
                }
            ]
        }
    }
}
</script>


<style lang="scss">
    @import './../../assets/style/color-vars';
    @import './header';
</style>
