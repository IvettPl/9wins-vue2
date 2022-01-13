<template>
<header class="header">
    <div class="center__header">
        <div class="header__tools">
            <button type="button"  class="header__menu-btn ">               
            </button>
            <HeaderSubmenu />
            <div class="header__search">
                <button type="button" class="search__btn-open"></button>
            </div>
        </div>
        <div class="logo">
            <a href="./">
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
    }
}
</script>


<style lang="scss"> 
    @import './../../assets/style/color-vars';
    @import './header';
</style>
