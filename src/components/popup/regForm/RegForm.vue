<template>
    <form action="" @submit.prevent>
        <div class="popup-content__title">{{ formParams.title }}</div>
        <div class="popup-content__form">
            <div class="popup-content__line popup-content__line--phone">
                <CustomSelect
                    @select="optionSelect"
                    :params="formParams.selectPhoneCode"
                />
                <CustomInput :attrInput="formParams.inputPhone" />
            </div>
            <div class="popup-content__line popup-content__line--verify">
                <CustomInput :attrInput="formParams.inputVerify" />
                <div class="btn__wrap">
                    <CustomButton :attrBtn="formParams.getCodeBtn">
                        Get code
                    </CustomButton>
                </div>
            </div>
            <div class="popup-content__line">
                <CustomInput :attrInput="formParams.inputMail" />
            </div>
            <div class="popup-content__line">
                <CustomInput :attrInput="formParams.inputPass" />
            </div>
            <div class="popup-content__line popup-content__line--privacy">
                <CustomCheckbox :checkboxParams="formParams.privacyCheckbox" />
                <div class="btn__wrap">
                    <CustomButton
                        :attrBtn="formParams.registrationBtn"
                    >Registration</CustomButton>
                </div>
            </div>
        </div>
        <slot></slot>
    </form>
</template>



<script>
export default {
    props: ['formParams'],
    methods: {
        optionSelect(option) {
            this.selected = option.name
            this.$emit('changeSelected', option)
        }
    },
}
</script>