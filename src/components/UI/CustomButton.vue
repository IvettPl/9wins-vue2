<template>
<button class="btn" :type="attrBtn.type" :class="attrBtn.className">
    <slot></slot>
</button>
</template>

<script>
export default {
    name: 'CustomButton',
    props: {
        attrBtn: {
            type: Object,
            default: () => {
                return {
                    type: 'button',
                }
            }
        }
    }
}
</script>
