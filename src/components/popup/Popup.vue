<template>
    <div
        class="popup"
        @click="$store.commit('closePanel')"
    >
        <div @click.stop class="dialog">
            <button class="btn__close" @click="$store.commit('closePanel')"></button>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default { 
    data(){
        return { 
        }
    },
    methods: {
         
    }
}
</script>
