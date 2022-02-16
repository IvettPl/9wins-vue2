<template>
    <div class="input-box" :class="{'is-error': !attrInput.isValid}">
        <label
            v-if="attrInput.label"
            class="input-box__label"
            :for="attrInput.id"
        >
            {{ attrInput.label }}
        </label>

        <div class="input-box__area"
        >
            <button
                class="btn__input"
                :class="attrInput.icnClass"
            ></button>
            <input
                :id="attrInput.id"
                class="input-box__field input-box__field-text"
                :type="attrInput.type"
                :name="attrInput.name"
                :placeholder="attrInput.placeholder"
            >
        </div>
        <span v-if="attrInput.errorMsg" class="input-box__error">{{attrInput.errorMsg}}</span>
    </div>
</template>


<script>
export default {
    name: 'CustomInput',
    props: {
        attrInput: {
            type: Object,
            default: function() {
                return {
                    type: 'text',
                    icnClass: 'icon-clear',
                    isValid: true,
                }
            }
        }
    }
}
</script>
