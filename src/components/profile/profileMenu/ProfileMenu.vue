<template>
    <nav class="profile-menu">
        <ul class="profile-menu__list">
            <li class="profile-menu__list-item" v-for="(item, index) in profileMenuParams" :key="index">
                <a :href="item.link" class="profile-menu__list-link  " :class="item.icnClass">
                    <span>{{item.title}}</span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    props: ['profileMenuParams']
}
</script>
