<template>
    <div class="login">
        <button
            @click="$bus.$emit('open-modal-login')"
            class="btn__login"
            type='button'
        >
            Login
        </button>

        <CustomButton
            @click="$bus.$emit('open-modal-registration')"
            :attrBtn="AttrBtnReg"
        >
            Let's go
        </CustomButton>
    </div>
</template>

<script>
import CustomButton from './../../UI/CustomButton'

export default {
    name: 'Login',
    componemts: {
        CustomButton
    },
    data(){
        return {
            AttrBtnReg: {
                type: 'button',
            }
        }
    }
}
</script>
