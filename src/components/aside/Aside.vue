<template>
    <div class="aside">
        <div @click.stop class="aside__panel" :class="{'show': $store.state.stateAsideLeft || $store.state.stateAsideRight}">
            <button @click="$store.commit('closePanel')" type="button" class="btn__close"></button>
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Aside',
    props: { 
    },
    data() {
        return { 
        }
    },
    methods: { 
    }
}
</script>

