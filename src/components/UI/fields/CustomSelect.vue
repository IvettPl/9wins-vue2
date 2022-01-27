<template>
    <div class="select__wrap">
        <label
            class="select__label"
            for="phone-code"
            v-if="params.label"
        >
            {{ params.label }}
        </label>

        <div class="select__area"  :class="{'show': optionsVisible}">
            <div
                class="select__field icon-arrow_bottom"
                @click="optionsVisible = !optionsVisible"
            >
                <span>{{ params.selected }}</span>
            </div>
            <ul class="select__options" v-if="optionsVisible">
                <li
                    @click="seleckOption(option)"
                    class="select__option"
                    v-for="option in params.options"
                    :key="option.value"
                >{{ option.name }}</li>
            </ul>
        </div>
    </div>
</template>


<script>
export default {
    name: 'CustomSelect',
    data(){
        return {
            optionsVisible: false
        }
    },
    props: ['params'],
    methods: {
        seleckOption(option) {
            this.$emit('select', option)
            this.optionsVisible = false
        },
        hideSelect() {
            this.optionsVisible = false
        }
    },
    mounted() {
        document.addEventListener('click', this.hideSelect.bind(this), true)
    },
    beforeDestroy() {
        document.removeEventListener('click', this.hideSelect)
    },
}
</script>