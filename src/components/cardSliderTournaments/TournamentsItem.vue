<template>
<div class="charitem" :class="itemCard.itemSubClass">
    <div class="charitem__front">
        <div class="charitem__bg">
            <img  :src="itemCard.imgUrl" :alt="itemCard.imgAlt">
        </div>

        <div class="charitem__info">
            <Stiker
                v-if="itemCard.stiker"
                :stikerParams="itemCard.stikerSubClass"
            >
                {{ itemCard.stiker }}
            </Stiker>
        </div>

        <div
            class="charitem__place"
            v-if="itemCard.place"
        >
            {{ itemCard.place }}
        </div>

        <div class="charitem__detalis">
            <div class="charitem__detalis-text">
                <div class="charitem__detalis-title">Pragmatic play championship</div>
                <div class="charitem__detalis-desc">210 players are already in</div>
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
import Stiker from '../UI/Stiker.vue'
export default {
  components: { Stiker },
    name: 'TournamentsItem',
    props: ['itemCard']
}
</script>