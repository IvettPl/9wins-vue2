<template>
    <div class="profile__avatar">
        <img :src="profileAvatarParams.imgUrl" :alt="profileAvatarParams.imgAlt">
    </div>
</template>

<script>
export default {
    props: ['profileAvatarParams']
}
</script>
