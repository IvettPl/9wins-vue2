<template>
<div class="game-item">
    <div class="favorite">
        <input type="checkbox" class="favorite__field icon-popular">
    </div>
    <a :href="CatSliderItem.link">
        <img  :src="CatSliderItem.imgUrl" :alt="CatSliderItem.imgAlt">
    </a>
    <div class="hidden-box">
        <a class="btn"  :href="CatSliderItem.linkPlay"> Play Real </a>
            <a class="btn btn--grey"  :href="CatSliderItem.linkDemo"  > Demo </a>
    </div>
</div>
</template>

<script>
export default {
    name: 'CatSliderItem',
    props: ['CatSliderItem']
}
</script>
