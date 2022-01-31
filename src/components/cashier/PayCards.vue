<template>
    <div class="paycard-list">
        <div
            @click="$store.commit('showcardForm')" 
            class="paycard-list__item" 
            v-for="(item, index) in payCardsList" 
            :key="index">
            <img :src="item.imgUrl" :alt="item.ingAlt">
        </div>
    </div>
</template>

<script>
export default {
    name: 'PayCards',
    props: ['payCardsList']
}
</script>
