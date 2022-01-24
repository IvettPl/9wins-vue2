<template>
    <div class="page-wrapper page-wrapper--bonuses">
        <SliderBonusMod v-if="!active.isEmpty" :cardParams="active"></SliderBonusMod>
        <SliderBonusMod v-if="!available.isEmpty" :cardParams="available"></SliderBonusMod>
        <BonusEmpty v-if="active.isEmpty && available.isEmpty" :bonusEmpty="bonusesEmpty" />
    </div>
</template>

<script>
import SliderBonusMod from '@/components/sliders/cardSliderBonus/SliderBonusMod'
import BonusEmpty from '@/components/bonusEmpty/BonusEmpty'

export default {
    name: 'Bonuses',
    components: {
        SliderBonusMod, BonusEmpty
    },
    data() {
        return {
            bonusesEmpty: {
                imgUrl: require('@/assets/img/slider/character-4.png'),
                imgAlt: 'Empty bonuses',
                text: 'You have no bonuses',
                btn: {
                    type: 'button',
                    className: 'btn--orange'
                },
                btnTitle: 'Tournaments'
            },
            active: {
                title: 'Active',
                isEmpty: true,
                slides:[
                    {
                        imgUrl: require('@/assets/img/slider/character-1.png'),
                        link: '##',
                        imgAlt: 'Bonuses',
                        stiker: 'Wager',
                        stikerSubClass: 'stiker--orange',

                        detalisTopList: [
                            {
                                title: '500',
                                label: 'min bet',
                                icnClass: 'icon-uniE934'
                            },
                            {
                                title: '5 000',
                                label: 'max bet',
                                icnClass: 'icon-uniE934'
                            },
                            {
                                title: 'x35',
                                label: 'wager'
                            }
                        ],

                        detalisBottomList: [
                            {
                                title: '12:59:59',
                                label: 'до конца'
                            },
                            {
                                title: '60,000',
                                label: 'Rise Fund',
                                icnClass: 'icon-uniE934'
                            }
                        ],

                        frontBtnDetails: {
                            type: 'button',
                            className: 'btn--orange js-detail'
                        },
                        frontBtnDetailsTitle: 'Details',

                        backBtn: {
                            type: 'button',
                            className: 'btn--orange js-detail'
                        },
                        backBtnTitle: 'Ok',
                        backContent: 'Повседневная практика показывает, что реализация намеченных плановых заданий позволяет выполнять важные задания по разработке существенных финансовых и административных условий.',

                        popupLabel: 'Do you want to cancel the bonus?',

                        popupBtnFirst: {
                            type: 'button',
                            className: 'btn--grey'
                        },
                        popupBtnFirstTitle: 'Yes',

                        popupBtnLast: {
                            type: 'button'
                        },
                        popupBtnLastTitle: 'No',
                    },
                    {
                        imgUrl: require('@/assets/img/slider/character-2.png'),
                        link: '##',
                        imgAlt: 'Bonuses',
                        stiker: 'Wager',
                        stikerSubClass: 'stiker--green',

                        detalisTopList: [
                            {
                                title: '500',
                                label: 'min bet',
                                icnClass: 'icon-uniE934'
                            },
                            {
                                title: '5 000',
                                label: 'max bet',
                                icnClass: 'icon-uniE934'
                            },
                            {
                                title: 'x35',
                                label: 'wager'
                            }
                        ],

                        detalisBottomList: [
                            {
                                title: '12:59:59',
                                label: 'до конца'
                            },
                            {
                                title: '60,000',
                                label: 'Rise Fund',
                                icnClass: 'icon-uniE934'
                            }
                        ],

                        frontBtnDetails: {
                            type: 'button',
                            className: 'btn--orange js-detail'
                        },
                        frontBtnDetailsTitle: 'Details',

                        backBtn: {
                            type: 'button',
                            className: 'btn--orange js-detail'
                        },
                        backBtnTitle: 'Ok',
                        backContent: 'Повседневная практика показывает, что реализация намеченных плановых заданий позволяет выполнять важные задания по разработке существенных финансовых и административных условий.',

                        popupLabel: 'Do you want to cancel the bonus?',

                        popupBtnFirst: {
                            type: 'button',
                            className: 'btn--grey'
                        },
                        popupBtnFirstTitle: 'Yes',

                        popupBtnLast: {
                            type: 'button'
                        },
                        popupBtnLastTitle: 'No',
                    },
                    {
                        imgUrl: require('@/assets/img/slider/character-3.png'),
                        link: '##',
                        imgAlt: 'Bonuses',
                        stiker: 'Wager',
                        stikerSubClass: 'stiker--blue',

                        detalisTopList: [
                            {
                                title: '500',
                                label: 'min bet',
                                icnClass: 'icon-uniE934'
                            },
                            {
                                title: '5 000',
                                label: 'max bet',
                                icnClass: 'icon-uniE934'
                            },
                            {
                                title: 'x35',
                                label: 'wager'
                            }
                        ],

                        detalisBottomList: [
                            {
                                title: '12:59:59',
                                label: 'до конца'
                            },
                            {
                                title: '60,000',
                                label: 'Rise Fund',
                                icnClass: 'icon-uniE934'
                            }
                        ],

                        frontBtnDetails: {
                            type: 'button',
                            className: 'btn--orange js-detail'
                        },
                        frontBtnDetailsTitle: 'Details',

                        backBtn: {
                            type: 'button',
                            className: 'btn--orange js-detail'
                        },
                        backBtnTitle: 'Ok',
                        backContent: 'Повседневная практика показывает, что реализация намеченных плановых заданий позволяет выполнять важные задания по разработке существенных финансовых и административных условий.',

                        popupLabel: 'Do you want to cancel the bonus?',

                        popupBtnFirst: {
                            type: 'button',
                            className: 'btn--grey'
                        },
                        popupBtnFirstTitle: 'Yes',

                        popupBtnLast: {
                            type: 'button'
                        },
                        popupBtnLastTitle: 'No',
                    },
                    {
                        imgUrl: require('@/assets/img/slider/character-1.png'),
                        link: '##',
                        imgAlt: 'Bonuses',
                        stiker: 'Wager',
                        stikerSubClass: 'stiker--red',

                        detalisTopList: [
                            {
                                title: '500',
                                label: 'min bet',
                                icnClass: 'icon-uniE934'
                            },
                            {
                                title: '5 000',
                                label: 'max bet',
                                icnClass: 'icon-uniE934'
                            },
                            {
                                title: 'x35',
                                label: 'wager'
                            }
                        ],

                        detalisBottomList: [
                            {
                                title: '12:59:59',
                                label: 'до конца'
                            },
                            {
                                title: '60,000',
                                label: 'Rise Fund',
                                icnClass: 'icon-uniE934'
                            }
                        ],

                        frontBtnDetails: {
                            type: 'button',
                            className: 'btn--orange js-detail'
                        },
                        frontBtnDetailsTitle: 'Details',

                        backBtn: {
                            type: 'button',
                            className: 'btn--orange js-detail'
                        },
                        backBtnTitle: 'Ok',
                        backContent: 'Повседневная практика показывает, что реализация намеченных плановых заданий позволяет выполнять важные задания по разработке существенных финансовых и административных условий.',

                        popupLabel: 'Do you want to cancel the bonus?',

                        popupBtnFirst: {
                            type: 'button',
                            className: 'btn--grey'
                        },
                        popupBtnFirstTitle: 'Yes',

                        popupBtnLast: {
                            type: 'button'
                        },
                        popupBtnLastTitle: 'No',
                    }

                ]
            },
            available: {
                title: 'Available',
                isEmpty: true,
                slides:[
                    {

                        imgUrl: require('@/assets/img/slider/character-1.png'),
                        link: '##',
                        imgAlt: 'Bonuses',
                        stiker: 'Wager + freebet',
                        stikerSubClass: 'stiker--brown',

                        detalisTopList: [
                            {
                                title: '500',
                                label: 'min bet',
                                icnClass: 'icon-uniE934'
                            },
                            {
                                title: '5 000',
                                label: 'max bet',
                                icnClass: 'icon-uniE934'
                            },
                            {
                                title: 'x35',
                                label: 'wager'
                            }
                        ],

                        detalisBottomList: [
                            {
                                title: '12:59:59',
                                label: 'до конца'
                            },
                            {
                                title: '60,000',
                                label: 'Rise Fund',
                                icnClass: 'icon-uniE934'
                            }
                        ],

                        frontBtnDetails: {
                            type: 'button',
                            className: 'btn--grey'
                        },
                        frontBtnDetailsTitle: 'Details',

                        frontBtnGet: {
                            type: 'button',
                            className: 'btn--orange btn--last'
                        },
                        frontBtnGetTitle: 'Get bonus',

                        backBtnTitle: 'Ok',
                        backBtn: {
                            type: 'button',
                            className: 'btn--orange'
                        },
                        backContent: 'Повседневная практика показывает, что реализация намеченных плановых заданий позволяет выполнять важные задания по разработке существенных финансовых и административных условий.',
                    },
                    {
                        imgUrl: require('@/assets/img/slider/character-2.png'),
                        link: '##',
                        imgAlt: 'Bonuses',
                        stiker: 'Wager',
                        stikerSubClass: 'stiker--orange',

                        detalisTopList: [
                            {
                                title: '500',
                                label: 'min bet',
                                icnClass: 'icon-uniE934'
                            },
                            {
                                title: '5 000',
                                label: 'max bet',
                                icnClass: 'icon-uniE934'
                            },
                            {
                                title: 'x35',
                                label: 'wager'
                            }
                        ],

                        detalisBottomList: [
                            {
                                title: '12:59:59',
                                label: 'до конца'
                            },
                            {
                                title: '60,000',
                                label: 'Rise Fund',
                                icnClass: 'icon-uniE934'
                            }
                        ],

                        frontBtnDetails: {
                            type: 'button',
                            className: 'btn--grey'
                        },
                        frontBtnDetailsTitle: 'Details',

                        frontBtnGet: {
                            type: 'button',
                            className: 'btn--orange btn--last'
                        },
                        frontBtnGetTitle: 'Get bonus',

                        backBtnTitle: 'Ok',
                        backBtn: {
                            type: 'button',
                            className: 'btn--orange js-detail'
                        },
                        backContent: 'Повседневная практика показывает, что реализация намеченных плановых заданий позволяет выполнять важные задания по разработке существенных финансовых и административных условий.',
                    }
                ]
            },
        }
    }
}
</script>