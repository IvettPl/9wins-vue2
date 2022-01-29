<template>
    <div class="form-fields__box">
        <div class="form-fields__line form-fields__line--phone">
            <CustomSelect
                @select="optionSelect"
                :params="formFields.selectPhoneCode"
            />
            <CustomInput :attrInput="formFields.inputPhone" />
        </div>
        <div class="form-fields__line form-fields__line--verify">
            <CustomInput :attrInput="formFields.inputVerify" />
            <div class="btn__wrap">
                <CustomButton :attrBtn="formFields.getCodeBtn">
                    Get code
                </CustomButton>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'LoginPhoneFields',
    props: ['formFields'],
    methods: {
        optionSelect(option) {
            this.selected = option.name
            console.log(option.name)
            this.$emit('loginChangeCodePhone', option)
        }
    },
}
</script>