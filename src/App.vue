<template>
<div class="wrapper  ">
    <div
        class="main-menu"
        :class="{'show': isMenuShow}"
    >
        <button class="btn__close"
            @click="isMenuShow = !isMenuShow"
        ></button>
        <Tabs :isAuth="isAuth"  :tabsToggleItem="tabsToggle">
            <MainMenu :isAuth="isAuth" :menuListsItem="menuLists" />
        </Tabs>
    </div>
  <Header @showMenuPanel="isMenuShow = !isMenuShow" :openMenu="isMenuShow"  :isAuth="isAuth" />
  <main>
      <router-view></router-view>
  </main>
  <Footer />
  <Overlay :isMenuShow="isMenuShow" />
</div>
</template>

<script>
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import Tabs from '@/components/tabs/Tabs'
import MainMenu from '@/components/mainMenu/MainMenu'



export default {
  components: {
    Header, Footer, Tabs, MainMenu
  },
    data(){
        return {
            isAuth: true,
            isMenuShow: false,
            tabsToggle: [
                'Casino', 'Sport',
            ],
            menuLists: {
                casino: [
                    {
                        icnClass: 'icon-bonus',
                        link: '/bonuses',
                        title: 'Bonuses'
                    },
                    {
                        icnClass: 'icon-tournaments',
                        link: '##',
                        title: 'Tournaments'
                    },
                    {
                        icnClass: 'icon-new',
                        link: '##',
                        title: 'News'
                    },
                    {
                        icnClass: 'icon-personal-info',
                        link: '##',
                        title: 'Loyalty Programm'
                    },
                    {
                        icnClass: 'icon-slots',
                        link: '##',
                        title: 'Slot Casino'
                    },
                    {
                        icnClass: 'icon-live_casino',
                        link: '##',
                        title: 'Live Casino'
                    },
                    {
                        icnClass: 'icon-table',
                        link: '##',
                        title: 'Skill Games'
                    }
                ],
                sport: [
                    {
                        icnClass: 'icon-sports_filled',
                        link: '##',
                        title: 'Крикет'
                    },
                    {
                        icnClass: 'icon-virtual_games',
                        link: '##',
                        title: 'Киберспорт'
                    },
                    {
                        icnClass: 'icon-live_casino',
                        link: '##',
                        title: 'Футбол'
                    },
                    {
                        icnClass: '',
                        link: '##',
                        title: 'Теннис'
                    },
                    {
                        icnClass: '',
                        link: '##',
                        title: 'Баскетбол'
                    },
                    {
                        icnClass: '',
                        link: '##',
                        title: 'Настольный теннис'
                    },
                    {
                        icnClass: '',
                        link: '##',
                        title: 'Волейбол'
                    },
                    {
                        icnClass: '',
                        link: '##',
                        title: 'Хоккей'
                    },
                    {
                        icnClass: '',
                        link: '##',
                        title: 'UFC'
                    },
                    {
                        icnClass: '',
                        link: '##',
                        title: 'Бокс'
                    }
                ]
            }
        }
    },
    provide() {
        return {
            isAuth: this.isAuth
        }
    }
}
</script>

<style lang="scss">
  @import './assets/style/color-vars';
</style>