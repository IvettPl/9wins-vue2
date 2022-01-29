<template>
<div class="wrapper  ">
    <Aside
        @closePanel="stateAsideLeft = !stateAsideLeft"
        @click="stateAsideLeft = !stateAsideLeft"
        :statePanel="stateAsideLeft"
        :class="{'show ': stateAsideLeft}"
    >
        <Tabs :isShowTab="isAuth" :tabsParams="mainMenuTabs">
            <template #tab-content-1>
                <MenuList :isAuth="isAuth" :menuListsItem="casinoMainMenu" />
            </template>

            <template #tab-content-2 v-if="isAuth">
                <MenuList :isAuth="isAuth" :menuListsItem="sportMainMenu" />
            </template>
        </Tabs>
    </Aside>

    <Aside
        @closePanel="stateAsideRight = !stateAsideRight"
        @click="stateAsideRight = !stateAsideRight"
        :class="{'aside--right show': stateAsideRight}"
        :statePanel="stateAsideRight"
    >
        <ProfileArea class="profile--start">
            <ProfileAvatar :profileAvatarParams="profileAvatarParams" />
            <UserInfo :userInfoParams="userInfoParams" />
            <ProfileMenu :profileMenuParams="profileMenu" />
        </ProfileArea>
    </Aside>

    <Header
        @showLogPopup="logShowPanel = !logShowPanel"
        :logShowPanel="logShowPanel"


        @showRegPopup="regShowPanel = !regShowPanel"
        :regShowPanel="regShowPanel"
        @showPanelRight="stateAsideRight = !stateAsideRight"
        @showPanelLeft="stateAsideLeft = !stateAsideLeft"
        :stateAsideLeft="stateAsideLeft"
        :stateAsideRight="stateAsideRight"
        :isAuth="isAuth"
    />
    <main>
        <router-view></router-view>
    </main>
    <Footer />

    <Popup
        :popupShow="regShowPanel"
        @hidePopup="regShowPanel = !regShowPanel"
        class="popup--reg"
    >
        <PopupContent>
            <template v-slot:left>
                <PopupSlider :popupSlider="regFormParams.slideParams"></PopupSlider>
            </template>

            <template v-slot:right>
                <RegForm :formParams="regFormParams" @changeSelected="optionName">
                    <PopupFooter :popupFuterParams="regPopupFooter">
                        <SocialBox :socialParams="popupSocial"/>
                    </PopupFooter>
                </RegForm>
            </template>
        </PopupContent>
    </Popup>

    <Popup
        :popupShow="logShowPanel"
        @hidePopup="logShowPanel = !logShowPanel"
        class="popup--login"
    >
        <PopupContent>
            <template v-slot:left>

            </template>

            <template v-slot:right>
                <LoginForm :formParams="loginFormParams">
                    <template v-slot:default>
                        <Tabs :isShowTab="true" :tabsParams="loginPopupTabParams">
                            <template #tab-content-1>
                                <LoginMailFields :formFields="loginPopupMailFields" />
                            </template>
                            <template #tab-content-2>
                                <LoginPhoneFields
                                    :formFields="loginPopupPhoneFields"
                                    @loginChangeCodePhone="changeLoginSelectName"
                                />
                            </template>
                        </Tabs>
                    </template>

                    <template v-slot:login-bottom>
                        <PopupFooter :popupFuterParams="loginPopupFooter">
                            <SocialBox :socialParams="popupSocial"/>
                        </PopupFooter>
                    </template>
                </LoginForm>
            </template>
        </PopupContent>
    </Popup>
</div>
</template>

<script>
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import Tabs from '@/components/tabs/Tabs'
import MenuList from '@/components/menuList/MenuList'
import Aside from '@/components/aside/Aside'

import ProfileArea from '@/components/profile/ProfileArea'
import ProfileAvatar from '@/components/profile/avatar/ProfileAvatar'
import UserInfo from '@/components/profile/userInfo/UserInfo'
import ProfileMenu from '@/components/profile/profileMenu/ProfileMenu'
import Popup from '@/components/popup/Popup'

import PopupContent from '@/components/popup/popupContent/PopupContent'
import RegForm from '@/components/popup/regForm/RegForm'
import LoginForm from '@/components/popup/loginForm/LoginForm'
// import LoginFormFields from '@/components/popup/loginForm/LoginFormFields'
import LoginMailFields from '@/components/popup/loginForm/LoginMailFields'
import LoginPhoneFields from '@/components/popup/loginForm/LoginPhoneFields'
import SocialBox from '@/components/popup/socialBox/SocialBox'
import PopupFooter from '@/components/popup/popupFooter/PopupFooter'
import PopupSlider from '@/components/popup/popupSlider/PopupSlider'




export default {
  components: {
    Header, Footer, Tabs, MenuList, Aside, ProfileArea, ProfileAvatar, UserInfo, ProfileMenu, Popup, PopupContent, RegForm, LoginForm, LoginMailFields, LoginPhoneFields, SocialBox, PopupFooter, PopupSlider
  },
    data(){
        return {
            isAuth: false,
            stateAsideLeft: false,
            stateAsideRight: false,
            regShowPanel: false,
            logShowPanel: false,

            regFormParams: {
                title: 'Registration',
                inputMail: {
                    isValid: true,
                    icnClass: 'icon-clear',
                    type: 'text',
                    id: 'email',
                    label: 'Email',
                    name: 'email',
                    placeholder: 'user@mail.com',
                    errorMsg: 'Invalid mail format'
                },
                inputPass: {
                    isValid: true,
                    icnClass: 'icon-eye',
                    type: 'password',
                    id: 'password',
                    label: 'Password',
                    name: 'password',
                    placeholder: 'password',
                    errorMsg: 'Invalid password format'
                },
                inputVerify: {
                    isValid: true,
                    icnClass: 'icon-clear',
                    type: 'password',
                    id: 'verify',
                    label: 'Verify code',
                    name: 'verify',
                    errorMsg: 'Invalid code'
                },
                inputPhone: {
                    isValid: false,
                    icnClass: 'icon-clear',
                    type: 'text',
                    id: 'phone',
                    label: 'Phone number',
                    name: 'phone',
                    errorMsg: 'Invalid phone number'
                },
                selectPhoneCode: {
                    label: 'Code',
                    selected: '+93',
                    options: [
                        {name: '+93', value: '+93'},
                        {name: '+7', value: '+7'},
                        {name: '+375', value: '+375'},
                    ]
                },
                privacyCheckbox: {
                    type: 'checkbox',
                    id: 'privacy-reg',
                    name: 'privacy-reg',
                    checked: 1,
                    label: 'I have read and agree to the Privacy Policy and Terms and conditions. I confirm that I am of leagal age.'
                },
                getCodeBtn: {
                    type: 'button',
                    className: 'btn--orange',
                    disabled: 1
                },
                registrationBtn: {
                    type: 'submit',
                    disabled: 1
                },
                slideParams: {
                    title: 'Select your bonus',
                    sliders: [
                        {
                            subClass: 'active',
                            imgUrl: require('@/assets/img/slider/popup-bonus-1.png'),
                            imgAlt: 'Play bonus',
                            title: '100%',
                            desc: 'New player <span>bonus</span>',
                            label: 'Min deposit ₹ 700. Max Bonus ₹ 20,000. Wager x30.'
                        },
                        {
                            imgUrl: require('@/assets/img/slider/popup-bonus-2.png'),
                            imgAlt: 'Play bonus',
                            title: '100%',
                            desc: 'New player <span>bonus</span>'
                        },
                        {
                            imgUrl: require('@/assets/img/slider/popup-bonus-3.png'),
                            imgAlt: 'Play bonus',
                            title: '100%',
                            desc: 'New player <span>bonus</span>'
                        }
                    ]
                }
            },

            regPopupFooter: {
                text: 'Already have an account?',
                link: '##',
                linkTitle: 'Login'
            },

            loginFormParams: {
                title: 'Log In',
                loginBtn: {
                    type: 'submit',
                    disabled: 1
                },
            },

            loginPopupMailFields: {
                labelFogot: 'Fogot your password?',
                titleFogot: 'Get recovery link.',
                linkFogot: '##',
                inputMail: {
                    isValid: true,
                    icnClass: 'icon-clear',
                    type: 'text',
                    id: 'LoginEmail',
                    label: 'Email',
                    name: 'email',
                    placeholder: 'user@mail.com',
                    errorMsg: 'Invalid mail format'
                },
                inputPass: {
                    isValid: true,
                    icnClass: 'icon-eye',
                    type: 'password',
                    id: 'LoginPassword',
                    label: 'Password',
                    name: 'password',
                    placeholder: 'password',
                    errorMsg: 'Invalid password format'
                },
            },

            loginPopupPhoneFields: {
                inputVerify: {
                    isValid: true,
                    icnClass: 'icon-clear',
                    type: 'password',
                    id: 'LoginVerify',
                    label: 'Verify code',
                    name: 'verify',
                    errorMsg: 'Invalid code'
                },
                getCodeBtn: {
                    type: 'button',
                    className: 'btn--orange',
                    disabled: 1
                },
                selectPhoneCode: {
                    label: 'Code',
                    selected: '+93',
                    options: [
                        {name: '+93', value: '+93'},
                        {name: '+7', value: '+7'},
                        {name: '+375', value: '+375'},
                    ]
                },
                inputPhone: {
                    isValid: true,
                    icnClass: 'icon-clear',
                    type: 'text',
                    id: 'LoginPhone',
                    label: 'Phone number',
                    name: 'phone',
                    errorMsg: 'Invalid phone number'
                }
            },

            loginPopupTabParams: {
                selectedTab: 'Use email',
                toggleActiveTab: 1,
                itemsTabsHeader: [
                    'Use email', 'Use phone number'
                ],
            },

            loginPopupFooter: {
                text: 'Don’t have an account?',
                link: '##',
                linkTitle: 'Sign Up'
            },

            popupSocial: {
                title: 'or login via social network',
                socialList: [
                    {
                        link: '##',
                        imgUrl: require('@/assets/img/social/icn-fb.svg'),
                        imgAlt: 'Facebook'
                    },
                    {
                        link: '##',
                        imgUrl: require('@/assets/img/social/icn-google.svg'),
                        imgAlt: 'Google'
                    },
                    {
                        link: '##',
                        imgUrl: require('@/assets/img/social/icn-aa.svg'),
                        imgAlt: 'Aadhaar'
                    }
                ]
            },

            profileMenu: [
              {
                  link: '##',
                  icnClass: 'icon-Cashier',
                  title: 'Cashier'
              },
              {
                  link: '##',
                  icnClass: 'icon-bonus',
                  title: 'My Bonus'
              },
              {
                  link: '##',
                  icnClass: 'icon-tournaments',
                  title: 'My Tournaments'
              },
              {
                  link: '##',
                  icnClass: 'icon-code',
                  title: 'Promocodes'
              },
              {
                  link: '##',
                  icnClass: 'icon-personal-info',
                  title: 'Personal Information'
              },
              {
                  link: '##',
                  icnClass: 'icon-settings',
                  title: 'Settings'
              },
            ],

            userInfoParams: {
                id: 2394876452002,
                status: 'Regular',
                link: "##",
                userBalance: [
                    {
                        balance: '32,000',
                        balanceTitle: 'Balance'
                    },
                    {
                        balance: '190,000',
                        balanceTitle: 'Bonus'
                    }
                ]
            },

            profileAvatarParams: {
                imgUrl: require("@/assets/img/avatars/avatar.png"),
                imgAlt: 'Avatar'
            },

            mainMenuTabs: {
                selectedTab: 'Casino',
                toggleActiveTab: 1,
                itemsTabsHeader: [
                    'Casino', 'Sport'
                ],
            },

            casinoMainMenu: [
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

            sportMainMenu: [
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
            ],
        }
    },
    provide() {
        return {
            isAuth: this.isAuth,
        }
    },
    methods: {
        optionName(option) {
            this.regFormParams.selectPhoneCode.selected = option.name
        },

        changeLoginSelectName(option) {
            this.loginPopupPhoneFields.selectPhoneCode.selected = option.name
        }
    }
}
</script>

<style lang="scss">
  @import './assets/style/color-vars';
</style>