<template>
<ul class="main-menu__list">
    <li
        v-for="item in menuListsItem.casino"
        :key="item.title"
        class="main-menu__list-item"
    >
        <router-link :to="item.link" class="main-menu__list-link" :class="item.icnClass">
            <span>{{item.title}}</span>
        </router-link>
    </li>
</ul>
<ul 
    v-if="isAuth"
    class="main-menu__list">
    <li
        v-for="item in menuListsItem.sport"
        :key="item.title"
        class="main-menu__list-item"
        >
        <router-link :to="item.link" class="main-menu__list-link" :class="item.icnClass">
            <span>{{item.title}}</span>
        </router-link>
    </li>
</ul>
</template>

<script>
export default {
    name: 'MainMenu',
    props: ['menuListsItem', 'isAuth'],
}
</script>
