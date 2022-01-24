<template>
    <div class="auth">
        <div class="auth__bonuses">
            <div
                class="auth__bonuses-item"
                v-for="(item, index) in auth.bonuses"
                :key="index"
            >
                <div class="auth__bonuses-sum icon-uniE934">
                    <span>{{ item.sum }}</span>
                </div>
                <div class="auth__bonuses-title">{{ item.title }}</div>
            </div>
        </div>
        <div class="auth__person">
            <div class="auth__avatar">
                <img :src="auth.avatar" :alt="auth.alt">
            </div>
            <a :href="auth.link" class="btn">{{ auth.linkTitle }}</a>
        </div>
    </div>
</template>



<script>
export default {
    props: ['auth']
}

</script>



<style lang="scss">

</style>