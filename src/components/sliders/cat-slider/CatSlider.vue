<template>
    <div class="slider-mod">
        <div class="center">
            <div class="slider-mod__wrap">

                <div
                    class="slider-mod__title"
                    :class="catSliders.icn"
                >
                    <h2>{{ catSliders.title }}</h2>
                </div>

                <a
                    :href="catSliders.linkUrl"
                    class="slider-mod__link"
                >{{ catSliders.link }}</a>

            </div>
            <CatSliderItems :catSlidersItems="catSliders.slides"  />
        </div>
    </div>
</template>

<script>

import CatSliderItems from './CatSliderItems'



export default {
    components: {
      CatSliderItems
    }, 
    name: ['catSliders'],
    props:['catSliders']
}

</script>

 
