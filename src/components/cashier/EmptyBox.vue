<template>
    <div class="empty-box">
        <div class="empty-box__field">You have no one</div>
        <div class="btn__wrap">
            <slot />
        </div>
    </div>
</template>

<script> 
export default {
    name: 'EmptyBox', 
}
</script>
