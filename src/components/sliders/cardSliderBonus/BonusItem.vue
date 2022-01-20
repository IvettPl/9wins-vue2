<template>
<div class="charitem" :class="{'show': isShow, 'charitem--rotate':isRotate}">
    <div
        class="charitem__popup"
        v-if="itemCard.popupLabel"
    >
        <p>{{ itemCard.popupLabel }}</p>
        <div class="charitem__popup-btns">
            <CustomButton
                :attrBtn="itemCard.popupBtnFirst"
            >
                {{ itemCard.popupBtnFirstTitle }}
            </CustomButton>

            <CustomButton
                @click="isShow = !isShow"
                :attrBtn="itemCard.popupBtnLast"
            >
                {{ itemCard.popupBtnLastTitle }}
            </CustomButton>
        </div>
    </div>

    <div class="charitem__front">

        <div class="charitem__bg">
            <img  :src="itemCard.imgUrl" :alt="itemCard.imgAlt">
        </div>

        <div class="charitem__info">

            <button
                v-if="itemCard.popupLabel"
                @click="isShow = !isShow"
                class="charitem__btn-cancel" type="button"></button>

            <Stiker
                :stikerParams="itemCard.stikerSubClass"
                v-if="itemCard.stiker"
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
                    <div
                        class="charitem__detalis-topitem"
                        v-for="(listItem, index) in itemCard.detalisTopList"
                        :key="index"
                    >
                        <div
                            class="charitem__detalis-title"
                            :class="listItem.icnClass"
                        >
                            <span>{{ listItem.title }}</span>
                        </div>
                        <div class="charitem__detalis-label">{{ listItem.label }}</div>
                    </div>
                </div>
                <div class="charitem__detalis-bottomlist">
                    <div
                        class="charitem__detalis-bottomitem"
                        v-for="(listItem, index) in itemCard.detalisBottomList"
                        :key="index"
                    >
                        <div
                            class="charitem__detalis-title"
                            :class="listItem.icnClass"
                        >
                            <span>{{ listItem.title }}</span>
                        </div>
                        <div class="charitem__detalis-label">{{ listItem.label }}</div>
                    </div>
                </div>
                <div class="btn__wrap">
                    <CustomButton
                        @click="isRotate = !isRotate"
                        :attrBtn="itemCard.frontBtnDetails"
                    >
                        {{ itemCard.frontBtnDetailsTitle }}
                    </CustomButton>

                    <CustomButton
                        v-if="itemCard.frontBtnGet"
                        :attrBtn="itemCard.frontBtnGet"
                    >
                        {{ itemCard.frontBtnGetTitle }}
                    </CustomButton>
                </div>
            </div>
        </div>
    </div>
    <div class="charitem__back">
        <p>{{ itemCard.backContent }}</p>

        <CustomButton
            @click="isRotate = !isRotate"
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
    props: ['itemCard'],
    data(){
        return {
            isShow: false,
            isRotate: false
        }
    }
}
</script>
