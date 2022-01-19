<template>
    <div
        :class="'stiker ' + stikerParams"
    >
        <slot></slot>
    </div>
</template>


<script>
export default {
    name: 'Stiker',
    props: {
        stikerParams: {
            type: String,
            default: ''
        }
    }
}
</script>