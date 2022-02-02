<template>
    <div class="login">
        <button
            @click="$store.state.stateAsideLeft = false, $store.commit('showLogPanel')"
            class="btn__login"
            type='button'
        >
            Login
        </button>

        <CustomButton
            @click="$store.state.stateAsideLeft = false, $store.commit('showRegPanel')"
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
