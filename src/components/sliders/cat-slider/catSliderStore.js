export default {
    state(){
        return {
            sport: {
                id: '1',
                title: 'Sport',
                icn: 'icon-sports_filled',
                link: 'See all',
                linkUrl: '##',
                slides: [
                    {
    
                        imgUrl: require('@/assets/img/slider/sports-slider-1.jpg'),
                        link: '##',
                        imgAlt: 'slide SPORT',
                        linkPlay: '##',
                        linkDemo:'##',
                        btnClassHide: 'btn--grey',
                    },
                    {
                        imgUrl: require('@/assets/img/slider/sports-slider-2.jpg'),
                        link: '##',
                        imgAlt: 'slide SPORT'
                    },
                    {
    
                        imgUrl: require('@/assets/img/slider/sports-slider-3.jpg'),
                        link: '##',
                        imgAlt: 'slide SPORT'
    
                    },
                    {
                        imgUrl: require('@/assets/img/slider/sports-slider-4.jpg'),
                        link: '##',
                        imgAlt: 'slide SPORT'
                    },
    
                    {
                        imgUrl: require('@/assets/img/slider/sports-slider-5.jpg'),
                        link: '##',
                        imgAlt: 'slide SPORT'
                    },
                    {
    
                        imgUrl: require('@/assets/img/slider/sports-slider-6.jpg'),
                        link: '##',
                        imgAlt: 'slide SPORT'
    
                    },
                    {
                        imgUrl: require('@/assets/img/slider/sports-slider-7.jpg'),
                        link: '##',
                        imgAlt: 'slide SPORT'
                    }
                ],
            },
            games:{
                id: '2',
                title: 'Virtual games',
                icn: 'icon-virtual_games',
                link: 'See all',
                linkUrl: '##',
                slides: [
                    {
  
                        imgUrl: require('@/assets/img/slider/sports-slider-1.jpg'),
                        link: '##',
                        imgAlt: 'slide games'
  
                    },
                    {
                        imgUrl: require('@/assets/img/slider/sports-slider-2.jpg'),
                        link: '##',
                        imgAlt: 'slide games'
                    },
                    {
  
                        imgUrl: require('@/assets/img/slider/sports-slider-3.jpg'),
                        link: '##',
                        imgAlt: 'slide games'
  
                    },
                    {
                        imgUrl: require('@/assets/img/slider/sports-slider-4.jpg'),
                        link: '##',
                        imgAlt: 'slide games'
                    },
  
                    {
                        imgUrl: require('@/assets/img/slider/sports-slider-5.jpg'),
                        link: '##',
                        imgAlt: 'slide games'
                    },
                    {
  
                        imgUrl: require('@/assets/img/slider/sports-slider-6.jpg'),
                        link: '##',
                        imgAlt: 'slide games'
  
                    },
                    {
                        imgUrl: require('@/assets/img/slider/sports-slider-7.jpg'),
                        link: '##',
                        imgAlt: 'slide games'
                    }
                ],
            },    

            casino:{
                id: '3',
                title: 'Live casino',
                icn: 'icon-live_casino',
                link: 'See all',
                linkUrl: '##',
                slides: [
                    {
  
                        imgUrl: require('@/assets/img/slider/sports-slider-1.jpg'),
                        link: '##',
                        imgAlt: 'slide casino'
  
                    },
                    {
                        imgUrl: require('@/assets/img/slider/sports-slider-2.jpg'),
                        link: '##',
                        imgAlt: 'slide casino'
                    },
                    {
  
                        imgUrl: require('@/assets/img/slider/sports-slider-3.jpg'),
                        link: '##',
                        imgAlt: 'slide casino'
  
                    },
                    {
                        imgUrl: require('@/assets/img/slider/sports-slider-4.jpg'),
                        link: '##',
                        imgAlt: 'slide casino'
                    },
  
                    {
                        imgUrl: require('@/assets/img/slider/sports-slider-5.jpg'),
                        link: '##',
                        imgAlt: 'slide casino'
                    },
                    {
  
                        imgUrl: require('@/assets/img/slider/sports-slider-6.jpg'),
                        link: '##',
                        imgAlt: 'slide casino'
  
                    },
                    {
                        imgUrl: require('@/assets/img/slider/sports-slider-7.jpg'),
                        link: '##',
                        imgAlt: 'slide casino'
                    }
                ],
            }, 
            slots:{
                id: '4',
                title: 'Slots',
                icn: 'icon-slots',
                link: 'See all',
                linkUrl: '/slots',
                slides: [
                    {
                        imgUrl: require('@/assets/img/slider/sports-slider-1.jpg'),
                        link: '##',
                        imgAlt: 'slide Slots'
  
                    },
                    {
                        imgUrl: require('@/assets/img/slider/sports-slider-2.jpg'),
                        link: '##',
                        imgAlt: 'slide Slots'
                    },
                    {
  
                        imgUrl: require('@/assets/img/slider/sports-slider-3.jpg'),
                        link: '##',
                        imgAlt: 'slide Slots'
  
                    },
                    {
                        imgUrl: require('@/assets/img/slider/sports-slider-4.jpg'),
                        link: '##',
                        imgAlt: 'slide Slots'
                    },
  
                    {
                        imgUrl: require('@/assets/img/slider/sports-slider-5.jpg'),
                        link: '##',
                        imgAlt: 'slide Slots'
                    },
                    {
  
                        imgUrl: require('@/assets/img/slider/sports-slider-6.jpg'),
                        link: '##',
                        imgAlt: 'slide Slots'
  
                    },
                    {
                        imgUrl: require('@/assets/img/slider/sports-slider-7.jpg'),
                        link: '##',
                        imgAlt: 'slide Slots'
                    }
                ],
            },                               
        }
    },
    getters: {
        getSportSliders(state) {
            return state.sport;
        },
        getGamesSliders(state) {
            return state.games;
        },   
        getCasinoSliders(state) {
            return state.casino;
        },    
        getSlotsSliders(state) {
            return state.slots;
        },          
    }
}