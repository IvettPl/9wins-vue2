<template>
<div class="submenu-list">
    <div class="submenu-list__item"
    v-for="item in subMenuList"
    :key="item.title"
    :class="item.subClass">
        <router-link :to="item.link" class="submenu-list__link" :class="item.icn">
            <span class="submenu-list__title">
                {{item.title}}
            </span>
        </router-link>
    </div>
</div>
</template>

<script>
export default {
    props: ['subMenuList']
}
</script>

 
