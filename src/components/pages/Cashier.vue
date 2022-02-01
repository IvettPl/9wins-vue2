<template>
    <div class="page-wrapper page-wrapper--cashier">
        <div class="center">
            <Tabs :isShowTab="true" :tabsParams="tabCashierParams">
                <template #tab-content-1>
                    <div class="content-title">  Deposit </div>
                    <PayCards

                        @click="$store.commit('showcardForm')"
                        v-if="$store.state.depositCard"
                        :payCardsList="payCardsList" />
                    <DepositForm
                        v-if="!$store.state.depositCard"
                        :depositFields="depositFormParams"
                    ></DepositForm>
                </template>

                <template #tab-content-2>
                    <div class="content-title">  Withdrawal </div>
                    <EmptyBox  v-if="$store.state.emptyBoxWithdrawal">
                        <CustomButton
                            @click="$store.state.withdrawalCard = !$store.state.withdrawalCard, $store.state.emptyBoxWithdrawal = !$store.state.emptyBoxWithdrawal"
                            class="btn"
                            type="button"
                        >
                            {{ withdrawalParams.titleBtn}}
                        </CustomButton>
                    </EmptyBox>
                    <PayCards
                        @click="$store.state.showWithdrawalForm = !$store.state.showWithdrawalForm, $store.state.withdrawalCard = !$store.state.withdrawalCard"
                        v-if="$store.state.withdrawalCard"
                        :payCardsList="payCardsList" />
                    <WithdrawalForm
                        v-if="$store.state.showWithdrawalForm"
                        :withdrawalFields="withdrawalParams"
                    ></WithdrawalForm>
                    <Infolist v-if="$store.state.showInfolist" :infolistParams="withdrawalParams.infolist" >
                        <div class="btn__wrap">
                            <CustomButton
                                class="btn"
                                type="button"
                                @click="$store.state.showInfolist = !$store.state.showInfolist, $store.state.withdrawalCard = !$store.state.withdrawalCard"
                            >
                                {{ withdrawalParams.titleBtn}}
                            </CustomButton>
                        </div>
                        <div class="infolist__label">Under consideration:</div>
                    </Infolist>
                </template>

                <template #tab-content-3>
                    <div class="content-title">  History </div>
                    <EmptyBox :paramsBtn="historyParams.titleBtn" v-if="$store.state.emptyBox">
                        <CustomButton
                            class="btn"
                            id="history-deposit"
                            type="button"
                        >
                            {{ historyParams.titleBtn}}
                        </CustomButton>
                    </EmptyBox>
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
import WithdrawalForm from '@/components/cashier/withdrawal/WithdrawalForm'
import Infolist from '@/components/cashier/withdrawal/Infolist'

export default {
    name: 'Cashier',

    components: {
        Tabs, DepositForm, PayCards, Historylist, EmptyBox, WithdrawalForm, Infolist
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
                titleBtn: 'Deposit',
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
            },
            withdrawalParams: {
                titleBtn: 'New request',
                withdrawalAmount: {
                    isValid: true,
                    icnClass: 'icon-clear',
                    type: 'text',
                    id: 'withdrawalAmount',
                    label: 'Withdrawal amount',
                    name: 'withdrawalAmount',
                    placeholder: '0',
                    errorMsg: 'Invalid Withdrawal amount field format'
                },
                cardNumber: {
                    isValid: true,
                    icnClass: 'icon-clear',
                    type: 'text',
                    id: 'cardNumber',
                    label: 'Card number',
                    name: 'cardNumber',
                    placeholder: 'xxxx xxxx xxxx xxxx',
                    errorMsg: 'Invalid Card number field format'
                },
                inputCartName: {
                    isValid: true,
                    icnClass: 'icon-clear',
                    type: 'text',
                    id: 'inputCartName',
                    label: 'Name on card',
                    name: 'inputCartName',
                    placeholder: 'Input cart name',
                    errorMsg: 'Invalid Name on card field format'
                },
                inputExpiryDate: {
                    isValid: true,
                    icnClass: 'icon-clear',
                    type: 'text',
                    id: 'inputExpiryDate',
                    label: 'Expiry date',
                    name: 'inputExpiryDate',
                    placeholder: 'xx/xx',
                    errorMsg: 'Invalid Expiry date format'
                },
                inputSecurityCode: {
                    isValid: true,
                    icnClass: 'icon-clear',
                    type: 'text',
                    id: 'inputSecurityCode',
                    label: 'Security code',
                    name: 'inputSecurityCode',
                    placeholder: '***',
                    errorMsg: 'Invalid Security code format'
                },
                privacyCheckbox: {
                    type: 'checkbox',
                    id: 'rememberCardDetailsg',
                    name: 'rememberCardDetailsg',
                    checked: 0,
                    label: 'Remember card details'
                },
                depositBtn: {
                    type: 'submit',
                },
                infolist: [
                    {
                        status: 'in process',
                        price: '0,00',
                        data: '08.10.2021',
                    },
                    {
                        status: 'in process',
                        price: '50,00',
                        data: '10.10.2021',
                    },
                ]
            }
        }
    }

}
</script>



<style lang="scss">

</style>
