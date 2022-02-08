<template>
    <div class="profile__avatar">
        <img :src="profileAvatarParams.imgUrl" :alt="profileAvatarParams.imgAlt">
    </div>
</template>

<script>
export default {
    name: 'profileAvatarParams',
    computed: {
        profileAvatarParams(){
            return this.$store.getters.getprofileAvatarParams;
        }
        
    }

}
</script>
