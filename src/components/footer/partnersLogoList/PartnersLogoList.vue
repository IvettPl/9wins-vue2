<template>
<div class="logolist__wrap">
    <div class="center">
        <div class="logolist__title">{{partnersLogoListInfo.title}}</div>
        <div
            class="logolist"
            :class="partnersLogoListInfo.subClass"
        >
            <div
                class="logolist__item"
                v-for="item in partnersLogoListInfo.imgList"
                :key="item.imgAlt"
                :class="item.subClass"
            >
                <img :src="item.imgUrl" :alt="item.imgAlt">
                <img v-if="item.logoMob" :src="item.logoMob" :alt="item.logoAlt">
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['partnersLogoListInfo']

}
</script>

 