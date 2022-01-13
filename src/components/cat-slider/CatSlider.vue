<template>
<div :class="className">
    <div class="center"> 
        <a :href="linkUrl" class="cat-all__link"> {{linkName}}</a>
        <div  class="slider-mod__title">
            <div class="slider-mod__title-box">
                <img :src="icnUrl" :alt="title">
                <h2>
                    {{title}}
                </h2>
            </div>
        </div>
        <SwiperMod />
    </div>    
</div>    
</template>

<script> 

import SwiperMod from './SwiperMod'


export default { 
    components: { 
      SwiperMod
    },
    props: {
        title: {
            type: String,
            defaoult: null
        },
        icnUrl: {
            type: String,
            defaoult: null
        },
        linkName: {
            type: String,
            defaoult: null 
        },
        linkUrl: {
            type: String,
            defaoult: null 
        }, 
        className: {
            type: String,
            defaoult: ''
        }
    },
}
</script>

<style lang="scss">
    @import './../../assets/style/color-vars';
    @import './catSlider.scss'
</style>
