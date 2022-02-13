<template>
    <div class="auth">
        <div class="auth__bonuses">
            <div
                class="auth__bonuses-item"
                v-for="item in authInfo.bonuses"
                :key="item.id"
            >
                <div class="auth__bonuses-sum icon-uniE934">
                    <span>{{ item.sum }}</span>
                </div>
                <div class="auth__bonuses-title">{{ item.title }}</div>
            </div>
        </div>
        <div class="auth__person">
            <div @click="$bus.$emit('open-aside-profile-aside')" class="auth__avatar">
                <img :src="authInfo.avatar" :alt="authInfo.alt">
            </div>
            <a :href="authInfo.link" class="btn">{{ authInfo.linkTitle }}</a>
        </div>
    </div>
</template>



<script>
export default {
    props: ['authInfo']
}
</script>



<style lang="scss">

</style>