<template>
<div class="login-fields">
    <div class="login-field">
        <div class="popup-content__line">
            <CustomInput :attrInput="formFields.inputMail" />
        </div>
        <div class="popup-content__line">
            <CustomInput :attrInput="formFields.inputPass" />
        </div>
        <div class="popup-content__fogotpass">
            {{ formFields.labelFogot }}
            <a :href="formFields.linkFogot">{{ formFields.titleFogot }}</a>
        </div>
    </div>
    <div class="login-field">
        <div class="popup-content__line popup-content__line--phone">
            <CustomSelect
                @select="optionSelect"
                :params="formFields.selectPhoneCode"
            />
            <CustomInput :attrInput="formFields.inputPhone" />
        </div>
        <div class="popup-content__line popup-content__line--verify">
            <CustomInput :attrInput="formFields.inputVerify" />
            <div class="btn__wrap">
                <CustomButton :attrBtn="formFields.getCodeBtn">
                    Get code
                </CustomButton>
            </div>
        </div>
    </div>
</div>
</template>


<script>
export default {
    name: 'LoginFormField',
    props: ['formFields']
}
</script>