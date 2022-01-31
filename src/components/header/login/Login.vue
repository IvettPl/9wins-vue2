<template>
<div class="login">
    <div class="login__box-default">
        <button
            @click="$store.commit('showLogPanel')"
            class="login__btn js-btn--login"
            type='button'
        >
            Login
        </button>

        <CustomButton
            @click="$store.commit('showRegPanel')"
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
    data(){
        return { 
            AttrBtnReg: {
                type: 'button',
                className: 'btn js-btn--reg',
            }
        }
    },
    methods: { 
        
    }
}
</script>
