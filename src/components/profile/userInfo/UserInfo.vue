<template>
    <div class="user-info">
        <div class="user-info__id">{{userInfoParams.id}}</div>
        <div class="user-info__status">{{userInfoParams.status}}</div>
        <div class="user-info__bonuses">
            <div class="user-info__bonuses-item" v-for="(item, index) in userInfoParams.userBalance" :key="index">
                <div class="user-info__bonuses-title icon-uniE934">
                    <span>{{item.balance}}</span>
                </div>
                <div class="user-info__bonuses-label">{{item.balanceTitle}}</div>
            </div>
            <router-link :to="userInfoParams.link" class="user-info__bonuses-link"></router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'userInfoParams',
    computed: {
        userInfoParams(){
            return this.$store.getters.getuserInfoParams;
        }
        
    }
}
</script>
