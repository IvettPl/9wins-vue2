<template>
    <div class="aside"
         @click="closeAside"
         :class="(isOpen ? 'show' : '') + ' ' + addClass" >
        <div @click.stop class="aside__panel"
             :class="{'show': isOpen}">
            <button @click="closeAside()" type="button" class="btn__close"></button>
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Aside',
    props: {
        asideName: {
            type: String,
            required: true
        },
        addClass: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            isOpen: false
        }
    },
    methods: {
        closeAside() {
            this.isOpen = false;
        }
    },
    mounted() {
        this.$bus.$on('open-aside-' + this.asideName, () => {
            this.isOpen = true;
            console.log('open');
        });

        this.$bus.$on('toggle-aside-' + this.asideName, () => {
            this.isOpen = !this.isOpen;
        });

        this.$bus.$on('close-aside-' + this.asideName, () => {
            this.isOpen = false;
        });
    }
}
</script>

