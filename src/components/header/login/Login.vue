<template>
<div class="login">
    <div class="login__box-default">
        <button
            @click="changeStateLogin"
            class="login__btn js-btn--login"
            type='button'
        >
            Login
        </button>

        <CustomButton
            @click="changeRegPopup"
            :attrBtn="AttrBtnReg"
        >
            Let's go
        </CustomButton>
    </div>
</div>
</template>

<script>
import CustomButton from './../../UI/CustomButton'

export default {
    componemts: {
        CustomButton
    },
    props: ['openRegPopup','openLogPopup'],
    data(){
        return {
            openLogin: this.openLogPopup,
            openReg: this.openRegPopup, 
            AttrBtnReg: {
                type: 'button',
                className: 'btn js-btn--reg',
            }
        }
    },
    methods: {
        changeRegPopup(){
            this.openReg =!this.openReg
            this.$emit('stateRegPopup')
        },
        changeStateLogin(){
            this.openLogin =!this.openLogin
            this.$emit('stateLogPopup') 
        }
        
    }
}
</script>
