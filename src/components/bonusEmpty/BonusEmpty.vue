<template>
    <div class="bonus-empty">
        <div class="bonus-empty__item">
            <div class="bonus-empty__bg">
                <picture>
                    <img
                        :src="bonusEmpty.imgUrl"
                        :alt="bonusEmpty.imgAlt"
                    >
                </picture>
            </div>
            <div class="bonus-empty__info">
                <p>{{ bonusEmpty.text }}</p>
                <CustomButton
                    :attrBtn="bonusEmpty.btn"
                >
                    {{ bonusEmpty.btnTitle }}
                </CustomButton>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['bonusEmpty']
}
</script>
