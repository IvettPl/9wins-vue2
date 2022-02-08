<template>
<ul class="menu__list">
    <li
        v-for="item in menuListsItem"
        :key="item.title"
        class="menu__list-item"
        @click="$store.commit('showPanelLeft')"
    >
        <router-link :to="item.link" class="menu__list-link" :class="item.icnClass">
            <span>{{item.title}}</span>
        </router-link>
    </li>
</ul>
</template>

<script>
export default {
    name: 'MenuList', 
    props: ['menuListsItem'],

}
</script>
