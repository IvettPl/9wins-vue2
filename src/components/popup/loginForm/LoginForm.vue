<template>
    <form action="" @submit.prevent>
        <div class="popup-content__wrap">
            <div class="popup-content__top">
                <div class="popup-content__title">{{ formParams.title }}</div>
                <slot></slot>
                <div class="btn__wrap">
                    <CustomButton :attrBtn="formParams.loginBtn">
                        Log in
                    </CustomButton>
                </div>
            </div>
            <slot name="login-bottom"></slot>
        </div>
    </form>
</template>


<script>
export default {
    props: ['formParams'],
}
</script>