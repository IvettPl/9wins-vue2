<template>
<div class="charitem__front">
    <div class="charitem__bg">
        <img  :src="itemCard.imgUrl" :alt="itemCard.imgAlt">
    </div>
    <div class="charitem__info">

        <button class="charitem__btn-cancel" type="button"></button>

        <div
            class="stiker"
            :class="itemCard.stikerClass"
        >{{ itemCard.stiker }}</div>

        <div class="charitem__promotion">
            <div class="charitem__promotion-desc">SECOND <span>bonus</span></div>
            <div class="charitem__promotion-title">100%</div>
        </div>

        <div class="charitem__progresbox">
            <progress value="10" max="100"></progress>
            <div class="charitem__progres-bg"></div>
            <div class="charitem__progres-bar"></div>
        </div>

        <div class="charitem__detalis">
            <div class="charitem__detalis-toplist">
                <div class="charitem__detalis-topitem">
                    <div class="charitem__detalis-title icon-uniE934">
                        <span>500</span>
                    </div>
                    <div class="charitem__detalis-label">min bet</div>
                </div>
                <div class="charitem__detalis-topitem">
                    <div class="charitem__detalis-title icon-uniE934">
                        <span>5 000</span>
                    </div>
                    <div class="charitem__detalis-label">max bet</div>
                </div>
                <div class="charitem__detalis-topitem">
                    <div class="charitem__detalis-title">
                        <span>x35</span>
                    </div>
                    <div class="charitem__detalis-label">wager</div>
                </div>
            </div>
            <div class="charitem__detalis-bottomlist">
                <div class="charitem__detalis-bottomitem">
                    <div class="charitem__detalis-title">
                        <span>12:59:59</span>
                    </div>
                    <div class="charitem__detalis-label">до конца</div>
                </div>
                <div class="charitem__detalis-bottomitem">
                    <div class="charitem__detalis-title icon-uniE934">
                        <span>60,000</span>
                    </div>
                    <div class="charitem__detalis-label">Rise Fund</div>
                </div>
            </div>
            <div class="btn__wrap">
                <button class="btn btn--orange js-detail" type="button">Details</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['itemCard']
}
</script>

 