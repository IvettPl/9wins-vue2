<template>
<button
    class="btn"
    :type="attrBtn.type"
    :class="attrBtn.className"
    :disabled="attrBtn.disabled == 1 ? true : false"
>
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
