<template>
    <div class="infolist__wrap">
        <slot />
        <ul class="infolist infolist--counter">
            <li class="infolist__item" v-for="(item, index) in infolistParams" :key="index">
                <div class="infolist__state">{{item.status}}</div>
                <div class="infolist__price">₹ <span>{{item.price}}</span>
                </div>
                <div class="infolist__data">{{item.data}}</div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'Infolist',
    props: ['infolistParams']
}
</script>
