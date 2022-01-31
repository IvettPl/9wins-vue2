<template>
    <div class="page-wrapper page-wrapper--cashier">
        <div class="center"> 
            <Tabs :isShowTab="true" :tabsParams="tabCashierParams">
                <template #tab-content-1>   
                    <div class="tabs__content-title">  Deposit </div>
                    <PayCards v-if="$store.state.depositCard" :payCardsList="payCardsList" />
                    <DepositForm
                        v-if="!$store.state.depositCard"
                        :depositFields="depositFormParams"
                    ></DepositForm>
                </template> 

                <template #tab-content-2>   
                    <div class="tabs__content-title">  Withdrawal </div>
                </template> 

                <template #tab-content-3>  
                    <div class="tabs__content-title">  History </div>
                    <EmptyBox v-if="$store.state.emptyBox"/>
                    <Historylist v-if="!$store.state.emptyBox" :historyParams="historyParams"/>
                </template>                                 
            </Tabs>
        </div>
    </div>
</template>



<script>
import Tabs from '@/components/tabs/Tabs'
import DepositForm from '@/components/cashier/deposit/DepositForm'
import PayCards from '@/components/cashier/PayCards'
import EmptyBox from '@/components/cashier/EmptyBox'
import Historylist from '@/components/cashier/history/Historylist'

export default {
    name: 'Cashier',

    components: {
        Tabs, DepositForm, PayCards, Historylist, EmptyBox
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
            ],
            historyParams:{ 
                statedata: new Date(),
                historyInfoParams: [
                    {
                        imgUrl: require('@/assets/img/logos/mastercard.svg'),
                        imgAlt: 'Mastercard',
                        price: '50.00',
                        data: '08.10.2021',
                        status: 'in process',
                    },
                    {
                        imgUrl: require('@/assets/img/logos/mastercard.svg'),
                        imgAlt: 'Mastercard',
                        price: '50.00',
                        data: '08.10.2021',
                        status: 'in process',
                    }
                ]
            }
        }
    }

}
</script>



<style lang="scss">

</style>