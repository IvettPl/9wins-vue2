<template>
<footer class="footer">
    <PartnersLogoList :partnersLogoListInfo="itemsPayments" />
    <PartnersLogoList :partnersLogoListInfo="itemsProviders" />
    <div class="footer__top">
        <div class="center">
            <Footermenu :footerMenu="menuListFooter" />
        </div>
    </div>
    <Footerinfo :info="footerInfo" />
</footer>
</template>

<script>
import Footermenu from './Footermenu';
import Footerinfo from './Footerinfo';
import PartnersLogoList from '@/components/footer/partnersLogoList/PartnersLogoList'

export default {
    components: {
        Footermenu, Footerinfo, PartnersLogoList
    },
    data(){
        return {
            itemsPayments: {
                title: 'Payments',
                subClass: 'logolist--paycart',
                imgList: [
                    {
                        imgUrl: require('@/assets/img/logos/googlepay.svg'),
                        imgAlt: 'G Pay',
                        subClass: 'logolist__item--googlepay'
                    },
                    {
                        imgUrl:  require('@/assets/img/logos/hdfcbank.svg'),
                        imgAlt: 'HDFC Bank',
                        subClass: 'logolist__item--hdfcbank'
                    },
                    {
                        imgUrl:  require('@/assets/img/logos/visa.svg'),
                        imgAlt: 'VISA',
                        subClass: 'logolist__item--visa'
                    },
                    {
                        imgUrl:  require('@/assets/img/logos/mastercard.svg'),
                        imgAlt: 'Mastercard',
                        subClass: 'logolist__item--mastercard'
                    },
                    {
                        imgUrl:  require('@/assets/img/logos/statebank.svg'),
                        imgAlt: 'State Bank of India',
                        subClass: 'logolist__item--statebank'
                    },
                    {
                        imgUrl:  require('@/assets/img/logos/upi.svg'),
                        imgAlt: 'UPI',
                        subClass: 'logolist__item--upi'
                    },
                    {
                        imgUrl:  require('@/assets/img/logos/icicibank.svg'),
                        imgAlt: 'icici bank',
                        subClass: 'logolist__item--icicibank'
                    },
                    {
                        imgUrl:  require('@/assets/img/logos/rupay.svg'),
                        imgAlt: 'RuPay',
                        subClass: 'logolist__item--rupay'
                    },
                    {
                        imgUrl:  require('@/assets/img/logos/axisbank.svg'),
                        imgAlt: 'Axis Bank',
                        subClass: 'logolist__item--axisbank'
                    },
                    {
                        imgUrl:  require('@/assets/img/logos/yesbank.svg'),
                        imgAlt: 'YES BANK',
                        subClass: 'logolist__item--yesbank'
                    },
                    {
                        imgUrl: require('@/assets/img/logos/bankbaroda.svg'),
                        imgAlt: 'Bank of Baroda',
                        subClass: 'logolist__item--bankbaroda'
                    },
                    {
                        imgUrl:  require('@/assets/img/logos/pnb.svg'),
                        imgAlt: 'pnb',
                        subClass: 'logolist__item--pnb'
                    },
                    {
                        imgUrl:  require('@/assets/img/logos/kotac.svg'),
                        imgAlt: 'kotac',
                        subClass: 'logolist__item--kotac'
                    },
                    {
                        imgUrl:  require('@/assets/img/logos/phonepe.svg'),
                        logoMob: require('@/assets/img/logos/phonepe-mob.svg'),
                        imgAlt: 'PhonePe',
                        subClass: 'logolist__item--phonepe'
                    },
                ]
            },
            itemsProviders: {
              title: 'Game Providers',
              imgList: [
                {
                  imgUrl: require('@/assets/img/logos/thunderkick.svg'),
                  imgAlt: 'Thunderkick'
                },
                {
                  imgUrl: require('@/assets/img/logos/habanero.svg'),
                  imgAlt: 'Habanero'
                },
                {
                  imgUrl: require('@/assets/img/logos/spinomenal.svg'),
                  imgAlt: 'Spinomenal'
                },
                {
                  imgUrl: require('@/assets/img/logos/evolution.svg'),
                  imgAlt: 'Evolution'
                },
                {
                  imgUrl: require('@/assets/img/logos/pushgaming.svg'),
                  imgAlt: 'PUSH GAMING'
                },
                {
                  imgUrl: require('@/assets/img/logos/quickspin.svg'),
                  imgAlt: 'Quickspin'
                },
                {
                  imgUrl: require('@/assets/img/logos/nolimit.svg'),
                  imgAlt: 'Nolimit'
                },
                {
                  imgUrl: require('@/assets/img/logos/netgame.svg'),
                  imgAlt: 'Netgame'
                },
                {
                  imgUrl: require('@/assets/img/logos/netent.svg'),
                  imgAlt: 'Netent'
                },
                {
                  imgUrl: require('@/assets/img/logos/lightingbox.svg'),
                  imgAlt: 'Lighting Box'
                },

                {
                  imgUrl: require('@/assets/img/logos/ezugi.svg'),
                  imgAlt: 'Ezugi'
                },
              ]
            },

            footerInfo: {
                title: 'PLAY HARD',
                text: 'One of the many benefits of playing online casinos is that you can easily track how much you put in and how much you choose in a finer and better way than before. You also immediately see how much profit you get or how much you invest.',
                address: 'www.9winz.com is operated and licensed by Globis N.V., with a company registered under the laws of Curacao under registration number 155962, license Nr. 365/JAZ.',
                logo: require('@/assets/img/logos/logo-footer.png'),
                logoAlt: 'GC'
            }
        }
    },
    computed: {
      menuListFooter() {
        return this.$store.getters.getmenuListFooter;
      }
      
    }
}
</script>
 