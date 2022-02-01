<template>
    <div class="withdrawal-form">
        <div class="content-title">Payment details</div>
        <form action="">
            <div class="form-fields__line form-fields__line--column">
                <CustomInput :attrInput="withdrawalFields.withdrawalAmount"></CustomInput> 
            </div> 
            <div class="form-fields__line">
                <CustomInput :attrInput="withdrawalFields.cardNumber"></CustomInput>
            </div>
            <div class="form-fields__line">
                <CustomInput :attrInput="withdrawalFields.inputCartName"></CustomInput>
            </div>
            <div class="form-fields__line form-fields__line--double">
                <CustomInput :attrInput="withdrawalFields.inputExpiryDate"></CustomInput>
                <CustomInput :attrInput="withdrawalFields.inputSecurityCode"></CustomInput>
            </div>
            <div class="form-fields__line">
                <CustomCheckbox :checkboxParams="withdrawalFields.privacyCheckbox" />
            </div>

            <div class="btn__wrap">
                <CustomButton
                    :attrBtn="withdrawalFields.depositBtn"
                >deposit</CustomButton>
            </div>
        </form>
    </div>
</template>



<script> 
export default {
    name: 'WithdrawalForm',
    props: ['withdrawalFields'],
    data(){
        return { 
        }
    }, 
}
</script>



<style lang="scss">

</style>