<template>
    <div
        @click="closeModal"
        class="popup"
        :class="(isOpen ? 'show' : '') + ' ' + addClass"
    >
        <div @click.stop class="dialog">
            <button class="btn__close" @click="closeModal()" ></button>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Modal',
        props: {
            modalName: {
                type: String,
                required: true
            },
            addClass: {
                type: String,
                default: ''
            }
        },
        data(){
            return {
                isOpen: false
            }
        },
        methods: {
            closeModal() {
                this.isOpen = false;
            }
        },
        created() {
            this.$bus.$on('open-modal-' + this.modalName, () => {
                this.isOpen = true;
                console.log('open');
            });
            // this.$bus.$on('close-modal-' + this.modalName, () => {
            //     this.isOpen = false;
            // });
        }
    }
</script>

<style lang="scss" scoped>

</style>