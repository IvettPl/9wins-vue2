<template>
<footer class="footer">
    <div class="footer__top">
        <div class="center">
            <Footermenu />
        </div> 
    </div>
    <Footerinfo />
</footer> 
</template>

<script>
import Footermenu from './Footermenu';
import Footerinfo from './Footerinfo';

export default {
    components: {
        Footermenu, Footerinfo
    }    
}
</script>


<style lang="scss">
    @import './../../assets/style/color-vars';
    @import './footer';
</style>

