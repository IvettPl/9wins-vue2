export default {
    state: () => ({
        tournaments: {
            title: 'Tournaments',
            link: '##',
            linkTitle: 'See all',
            slides: [
                {
                    imgUrl: require('@/assets/img/slider/tornament-char-1.png'),
                    imgAlt: 'Tournaments',
                    stiker: 'Now',
                    place: '324 place',
                    stikerSubClass: 'stiker--opacity',
                    detalisTitle: 'Pragmatic play championship',
                    detalisDesc: '210 players are already in',

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

                    frontBtnTitle: 'More details',
                    frontBtn: {
                        type: 'button',
                        className: 'btn--orange js-detail'
                    },
                    backContent: 'Повседневная практика показывает, что реализация намеченных плановых заданий позволяет выполнять важные задания по разработке существенных финансовых и административных условий.',
                    backBtnTitle: 'Ok',
                    backBtn: {
                        type: 'button',
                        className: 'btn--orange js-ok'
                    },
                },
                {
                    imgUrl: require('@/assets/img/slider/tornament-char-2.png'),
                    imgAlt: 'Tournaments',
                    stiker: 'Now',
                    place: '324 place',
                    stikerSubClass: 'stiker--opacity',
                    detalisTitle: 'Pragmatic play championship',
                    detalisDesc: '210 players are already in',

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

                    frontBtnTitle: 'More details',
                    itemSubClass: "charitem--rotate",
                    frontBtn: {
                        type: 'button',
                        className: 'btn--orange js-detail'
                    },
                    backContent: 'Повседневная практика показывает, что реализация намеченных плановых заданий позволяет выполнять важные задания по разработке существенных финансовых и административных условий.',
                    backBtnTitle: 'Ok',
                    backBtn: {
                        type: 'button',
                        className: 'btn--orange js-ok'
                    },
                },
                {
                    imgUrl: require('@/assets/img/slider/tornament-char-3.png'),
                    imgAlt: 'Tournaments',
                    frontBtnTitle: 'More details',
                    detalisTitle: 'Pragmatic play championship',
                    detalisDesc: '210 players are already in',

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

                    frontBtn: {
                        type: 'button',
                        className: 'btn--orange js-detail'
                    },
                    backContent: 'Повседневная практика показывает, что реализация намеченных плановых заданий позволяет выполнять важные задания по разработке существенных финансовых и административных условий.',
                    backBtnTitle: 'Ok',
                    backBtn: {
                        type: 'button',
                        className: 'btn--orange js-ok'
                    },
                },
                {
                    imgUrl: require('@/assets/img/slider/tornament-char-4.png'),
                    imgAlt: 'Tournaments',
                    frontBtnTitle: 'More details',
                    desabled: "charitem--disabled",
                    detalisTitle: 'Pragmatic play championship',
                    detalisDesc: '210 players are already in',

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

                    frontBtn: {
                        type: 'button',
                        className: 'btn--orange js-detail'
                    },
                    backContent: 'Повседневная практика показывает, что реализация намеченных плановых заданий позволяет выполнять важные задания по разработке существенных финансовых и административных условий.',
                    backBtnTitle: 'Ok',
                    backBtn: {
                        type: 'button',
                        className: 'btn--orange js-ok'
                    },
                }
            ]
      },
    }),
    getters: {
        getTournaments(state){
            return state.tournaments;
        }
    }
}