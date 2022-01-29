<template>
    <div class="fixed-payment">
        <div class="fixed-payment__item" v-for="(item, index) in fixedPaymentList" :key="index">
            <CustomButton :attrBtn="item.btnParams" class="icon-uniE934" ><span>{{item.title}}</span></CustomButton>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FixedPayment',
    props: ['fixedPaymentList']
}
</script>

