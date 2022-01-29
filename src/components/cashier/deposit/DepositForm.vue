<template>
    <div class="deposit-form">
        <form action="">
            <div class="form-fields__line form-fields__line--column">
                <CustomInput :attrInput="depositFields.depositAmount"></CustomInput>
                <span class="form-fields__warning-label">enrollment time - from 2 to 24 hours</span>
            </div>
            <FixedPayment :fixedPaymentList="fixedPaymentList" />
            <div class="form-fields__line">
                <CustomInput :attrInput="depositFields.inputFirstName"></CustomInput>
            </div>
            <div class="form-fields__line">
                <CustomInput :attrInput="depositFields.inputSurname"></CustomInput>
            </div>
            <div class="form-fields__line">
                <CustomInput :attrInput="depositFields.walletID"></CustomInput>
            </div>

            <div class="btn__wrap">
                <CustomButton
                    :attrBtn="depositFields.depositBtn"
                >deposit</CustomButton>
            </div>
        </form>
    </div>
</template>



<script>
import FixedPayment from "@/components/cashier/deposit/FixedPayment"
export default {
    name: 'DepositForm',
    props: ['depositFields'],
    data(){
        return {
            fixedPaymentList: [
                {
                    title: '500,00',
                    btnParams: {
                        type: 'button',
                        className: 'btn--grey'
                    }
                },
                {
                    title: '1000,00',
                    btnParams: {
                        type: 'button',
                        className: 'btn--grey'
                    }
                },
                {
                    title: '5000,00',
                    btnParams: {
                        type: 'button',
                        className: 'btn--grey'
                    }
                },
            ]
        }
    },
    components: {FixedPayment}
}
</script>



<style lang="scss">

</style>