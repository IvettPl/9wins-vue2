<template>
    <div class="aside">
        <div @click.stop class="aside__panel" :class="{'show': statePanel}">
            <button @click="closeAside" type="button" class="btn__close"></button>
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Aside',
    props: {
        statePanel: Boolean
    },
    data() {
        return {
            changeStatePanel: this.statePanel
        }
    },
    methods: {
        closeAside() {
            this.changeStatePanel = !this.changeStatePanel
            this.$emit('closePanel')
        }
    }
}
</script>

