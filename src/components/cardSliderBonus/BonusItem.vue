<template>
<div class="charitem" :class="itemCard.itemSubClass">
    <div class="charitem__popup">
        <p>Do you want to cancel the bonus?</p>
        <div class="charitem__popup-btns">
            <CustomButton
                :attrBtn="itemCard.popupBtnYes"
            >
                {{ itemCard.popupBtnYesTitle }}
            </CustomButton>

            <CustomButton
                :attrBtn="itemCard.popupBtnNo"
            >
                {{ itemCard.popupBtnNoTitle }}
            </CustomButton>
        </div>
    </div>

    <div class="charitem__front">

        <div class="charitem__bg">
            <img  :src="itemCard.imgUrl" :alt="itemCard.imgAlt">
        </div>

        <div class="charitem__info">

            <button class="charitem__btn-cancel" type="button"></button>

            <Stiker
                :stikerParams="itemCard.stikerSubClass"
            >
                {{ itemCard.stiker }}
            </Stiker>

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
                    <CustomButton
                        :attrBtn="itemCard.frontBtn"
                    >
                        {{ itemCard.frontBtnTitle }}
                    </CustomButton>
                </div>
            </div>
        </div>
    </div>
    <div class="charitem__back">
        <p>Повседневная практика показывает, что реализация намеченных плановых заданий позволяет выполнять важные задания по разработке существенных финансовых и административных условий.</p>

        <CustomButton
            :attrBtn="itemCard.backBtn"
        >
            {{ itemCard.backBtnTitle }}
        </CustomButton>
    </div>
</div>
</template>

<script>
export default {
    name: 'BonusItem',
    props: ['itemCard']
}
</script>
