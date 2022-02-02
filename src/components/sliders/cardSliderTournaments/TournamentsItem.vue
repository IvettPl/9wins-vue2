<template>
<div class="charitem" :class="[{'charitem--rotate':isRotate}, itemCard.desabled]">
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
                <div class="charitem__detalis-title">{{ itemCard.detalisTitle }}</div>
                <div class="charitem__detalis-desc">{{ itemCard.detalisDesc }}</div>
            </div>

            <div class="charitem__detalis-bottomlist">
                <div
                    class="charitem__detalis-bottomitem"
                    v-for="(item, index) in itemCard.detalisBottomList"
                    :key="index"
                >
                    <div
                        class="charitem__detalis-title"
                        :class="item.icnClass"
                    >
                        <span>{{ item.title }}</span>
                    </div>
                    <div class="charitem__detalis-label">{{ item.label }}</div>
                </div>
            </div>

            <div class="btn__wrap">
                <CustomButton
                    @click="isRotate = !isRotate"
                    :attrBtn="itemCard.frontBtn"
                >
                    {{ itemCard.frontBtnTitle }}
                </CustomButton>
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
import Stiker from '@/components/UI/Stiker.vue'
export default {
  components: { Stiker },
    name: 'TournamentsItem',
    props: ['itemCard'],
    data(){
        return {
            isRotate: false,
        }
    }
}
</script>