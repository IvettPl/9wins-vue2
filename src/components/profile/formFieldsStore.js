export default {
    state() {
        return {
            confirmPass: [
                {
                    isValid: true,
                    icnClass: 'icon-eye',
                    type: 'password',
                    id: 'current-pass',
                    label: 'Current',
                    name: 'current-pass',
                    placeholder: 'Enter current password',
                    errorMsg: 'Invalid password format'
                },
                {
                    isValid: true,
                    icnClass: 'icon-eye',
                    type: 'password',
                    id: 'new-pass',
                    label: 'New password',
                    name: 'new-pass',
                    placeholder: 'Choose security password',
                    errorMsg: 'Invalid new password'
                },
                {
                    isValid: true,
                    icnClass: 'icon-eye',
                    type: 'password',
                    id: 'confirm-pass',
                    label: 'Confirm password',
                    name: 'confirm-pass',
                    placeholder: 'Confirm new password',
                    errorMsg: 'Invalid'
                }
            ],

            ChageNameField: {
                isValid: true,
                icnClass: 'icon-clear',
                type: 'text',
                id: 'change-name',
                label: 'First name',
                name: 'change-name',
                placeholder: 'Enter new name',
                errorMsg: 'Invalid name field format'
            },

            promocodeField: {
                isValid: true,
                icnClass: 'icon-clear',
                type: 'text',
                id: 'promocode',
                label: 'Input code',
                name: 'promocode',
                placeholder: 'input received code',
                errorMsg: 'Invalid promocode'
            },

            confirmBtnAttrs: {
                type: 'button',
                className: 'btn--green-base',
            }
        }
    },

    getters: {
        getConfirmPassFields(state) {
            return state.confirmPass
        },

        getChageNameField(state) {
            return state.ChageNameField
        },

        getPromoFieldAttrs(state) {
            return state.promocodeField
        },

        getConfirmBtnAttrs(state) {
            return state.confirmBtnAttrs
        }
    }
}