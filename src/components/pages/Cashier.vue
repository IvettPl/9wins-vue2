<template>
    <div class="page-wrapper page-wrapper--cashier">
        <div class="center"> 
            <Tabs :isShowTab="true" :tabsParams="tabCashierParams">
                <template #tab-content-1>   
                    <PayCards :payCardsList="payCardsList" />
                    <DepositForm
                        :depositFields="depositFormParams"
                    ></DepositForm>
                </template> 

                <template #tab-content-2>   
2
                </template> 

                <template #tab-content-3>   
3
                </template>                                 
            </Tabs>
        </div>
    </div>
</template>



<script>
import Tabs from '@/components/tabs/Tabs'
import DepositForm from '@/components/cashier/deposit/DepositForm'
import PayCards from '@/components/cashier/PayCards'

export default {
    name: 'Cashier',

    components: {
        Tabs, DepositForm, PayCards
    },

    data() {
        return { 
            tabCashierParams: { 
                selectedTab: 'Deposit',
                toggleActiveTab: 1,
                itemsTabsHeader: [
                    'Deposit', 'Withdrawal', 'History'
                ],
            },
            depositFormParams: {
                depositAmount: { 
                    isValid: true,
                    icnClass: 'icon-clear',
                    type: 'text',
                    id: 'depositAmount',
                    label: 'Deposit amount ( min 100 max 50 000)',
                    name: 'depositAmount',
                    placeholder: '0',
                    errorMsg: 'Invalid Deposit amount field format'
                },
                inputFirstName: {
                    isValid: true,
                    icnClass: 'icon-clear',
                    type: 'text',
                    id: 'FirstName',
                    label: 'First Name',
                    name: 'first-name',
                    placeholder: 'First Name',
                    errorMsg: 'Invalid first name field format'
                },
                inputSurname: {
                    isValid: true,
                    icnClass: 'icon-clear',
                    type: 'text',
                    id: 'Surname',
                    label: 'Surname',
                    name: 'surname',
                    placeholder: 'Surname',
                    errorMsg: 'Invalid surname field format'
                },     
                walletID: {
                    isValid: true,
                    icnClass: 'icon-clear',
                    type: 'text',
                    id: 'walletID',
                    label: 'Wallet ID',
                    name: 'walletID',
                    placeholder: 'Wallet ID',
                    errorMsg: 'Invalid Wallet ID field format'
                },
                depositBtn: {
                    type: 'submit',
                }            
            },
            payCardsList: [
                {
                    imgUrl: require('@/assets/img/logos/mastercard-box.svg'),
                    ingAlt: 'mastercard'
                },
                {
                    imgUrl: require('@/assets/img/logos/visa-box.svg'),
                    ingAlt: 'visa'
                },
                
                {
                    imgUrl: require('@/assets/img/logos/yesbank-box.svg'),
                    ingAlt: 'yesbank'
                },
                
                {
                    imgUrl: require('@/assets/img/logos/phonepe.svg'),
                    ingAlt: 'phonepe'
                },
            ]
        }
    }

}
</script>



<style lang="scss">

</style>