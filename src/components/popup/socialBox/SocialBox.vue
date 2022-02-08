<template>
    <div class="social-box">
        <div class="social-box__label">{{ socialParams.title }}</div>
        <div class="social-box__list">
            <div
                class="social-box__list-item"
                v-for="(item, index) in socialParams.socialList"
                :key="index"
            >
                <a :href="item.link" class="social-box__list-link">
                    <img :src="item.imgUrl" :alt="item.imgAlt">
                </a>
            </div>
        </div>
    </div>
</template>



<script>
export default {
    name: 'SocialBox',
    computed: {
        socialParams() {
            return this.$store.getters.getSocialData;
        }
    }
}
</script>