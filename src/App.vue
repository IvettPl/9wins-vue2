<template>
<div class="wrapper  ">
    <Aside aside-name="left-aside">
        <Tabs :isShowTab="$store.state.isAuth"  :tabsParams="mainMenuTabs">
            <template #tab-content-1>
                <MenuList :menuListsItem="casinoMenuList"/>
            </template>

            <template #tab-content-2 v-if="$store.state.isAuth">
                <MenuList  :menuListsItem="sportMainMenu" />
            </template>
        </Tabs>
        <div v-if="!$store.state.isAuth" class="aside__footer">
            <Login
                v-if="!$store.state.isAuth"
            />
            <div class="aside__region">
                <img src="@/assets/img/flags/india.svg" alt="India"><span>India</span>
            </div>
        </div>
    </Aside>

    <Aside
        addClass="aside--right"
        aside-name="profile-aside"
    >
        <ProfileArea class="profile-area--start ">
            <ProfileAvatar  />
            <UserInfo />
            <ProfileMenu  />

            <template #profile-area-bottom>
                <div class="profile-area__logout">Log Out</div>
            </template>
        </ProfileArea>

        <ProfileArea class="profile-area--settings">
            <button class="btn__back icon-back"></button>
            <div class="profile-area__title">Settings</div>
            <SettingsList :settingsList="settingsList" />
        </ProfileArea>

        <ProfileArea class="profile-area--confirmpass">
            <button class="btn__back icon-back"></button>
            <div class="profile-area__title">Change password</div>
            <div
                class="form-fields__line"
                v-for="item in inputPass"
                :key="item.id"
            >
                <CustomInput :attrInput="item" />
            </div>
            <div class="btn__wrap">
                <CustomButton
                    :attrBtn="confirmBtnAttrs"
                >Confirm</CustomButton>
            </div>
        </ProfileArea>

        <ProfileArea class="profile-area--personal active">
            <button class="btn__back icon-back"></button>
            <div class="profile-area__title">Personal Information</div>
            <ProfileAvatar  />
            <SettingsList :settingsList="PersonalInfoList" />
        </ProfileArea>

        <ProfileArea class="profile-area--chagename">
            <button class="btn__back icon-back"></button>
            <div class="profile-area__title">Change name</div>
            <div class="form-fields__line">
                <CustomInput :attrInput="nameFieldAttrs" />
            </div>
            <div class="btn__wrap">
                <CustomButton
                    :attrBtn="confirmBtnAttrs"
                >Confirm</CustomButton>
            </div>
        </ProfileArea>

        <ProfileArea class="profile-area--promocode">
            <button class="btn__back icon-back"></button>
            <div class="profile-area__title">Promocodes</div>
            <div class="form-fields__line">
                <CustomInput :attrInput="promoFieldAttrs" />
            </div>
            <div class="btn__wrap">
                <CustomButton
                    :attrBtn="confirmBtnAttrs"
                >Confirm</CustomButton>
            </div>
        </ProfileArea>

        <ProfileArea class="profile-area--adddocs">
            <button class="btn__back icon-back"></button>
            <div class="profile-area__title">Add Documents</div>
            <SettingsList :settingsList="addDocsList" />
        </ProfileArea>

        <ProfileArea class="profile-area--gender">
            <button class="btn__back icon-back"></button>
            <div class="profile-area__title">Select Gender</div>
            <RadioSlider />
        </ProfileArea>

        <ProfileArea class="profile-area--country">
            <button class="btn__back icon-back"></button>
            <div class="profile-area__title">Choose your country</div>
        </ProfileArea>
    </Aside>

    <Header />

    <main>
        <router-view></router-view>
    </main>

    <Footer />

    <Modal
       modalName="registration"
       addClass="popup--reg"
    >
        <Columns>
            <template #left>
                <PopupSlider :popupSlider="regFormParams.slideParams"></PopupSlider>
            </template>
            <template #right>
                <RegForm :formParams="regFormParams" @changeSelected="optionName">
                    <PopupFooter :popupFuterParams="regPopupFooter">
                        <SocialBox  />
                    </PopupFooter>
                </RegForm>
            </template>
        </Columns>
    </Modal>

    <Modal
        modalName="login"
        addClass="popup--login"
    >
        <Columns>
            <template #left>
                <div class="popup-banner">
                    <div class="popup-banner__title">{{ popupBanner.title }}</div>
                    <TournamentsItem  :itemCard="popupBanner.bannerItem"></TournamentsItem>
                </div>
            </template>
            <template #right>
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
                            <SocialBox  />
                        </PopupFooter>
                    </template>
                </LoginForm>
            </template>
        </Columns>
    </Modal>
</div>
</template>

<script>
import Header from '@/components/header/Header'
import Login from '@/components/header/login/Login';
import Footer from '@/components/footer/Footer'
import Tabs from '@/components/tabs/Tabs'
import MenuList from '@/components/menuList/MenuList'
import Aside from '@/components/aside/Aside'

//profile
import ProfileArea from '@/components/profile/ProfileArea'
import ProfileAvatar from '@/components/profile/avatar/ProfileAvatar'
import UserInfo from '@/components/profile/userInfo/UserInfo'
import ProfileMenu from '@/components/profile/profileMenu/ProfileMenu'
import SettingsList from '@/components/profile/settingsList/SettingsList'



import PopupContent from '@/components/popup/popupContent/PopupContent'
import RegForm from '@/components/popup/regForm/RegForm'
import LoginForm from '@/components/popup/loginForm/LoginForm'
import LoginMailFields from '@/components/popup/loginForm/LoginMailFields'
import LoginPhoneFields from '@/components/popup/loginForm/LoginPhoneFields'
import SocialBox from '@/components/popup/socialBox/SocialBox'
import PopupFooter from '@/components/popup/popupFooter/PopupFooter'
import PopupSlider from '@/components/popup/popupSlider/PopupSlider'

import TournamentsItem from '@/components/sliders/cardSliderTournaments/TournamentsItem'

import Modal from "./components/modal/Modal";
import Columns from "./components/columns/Columns";


import {AuthMixin} from "./components/mixin/authMixin";



export default {
    components: {
        Header,
        Login,
        Footer, Tabs,
        MenuList, Aside,

        //profile
        ProfileArea, ProfileAvatar, UserInfo, ProfileMenu, SettingsList,

        //popups
        Modal, Columns, PopupContent, RegForm, LoginForm, SocialBox, PopupFooter, PopupSlider, TournamentsItem,

        //form fields
        LoginMailFields, LoginPhoneFields,

    },

    data(){
        return {
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
                    className: 'btn--green-base',
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

            popupBanner: {
                title: 'New tournament',
                bannerItem: {
                    imgUrl: require('@/assets/img/slider/popup-tournament.png'),
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
                            title: '2,48,74,583',
                            label: 'Rise Fund',
                            icnClass: 'icon-uniE934'
                        }
                    ],

                    frontBtnTitle: 'More details',
                    frontBtn: {
                        type: 'button',
                        className: 'btn--green-base js-detail'
                    },
                    backContent: 'Повседневная практика показывает, что реализация намеченных плановых заданий позволяет выполнять важные задания по разработке существенных финансовых и административных условий.',
                    backBtnTitle: 'Ok',
                    backBtn: {
                        type: 'button',
                        className: 'btn--green-base js-ok'
                    }
                }
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
                    className: 'btn--green-base',
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

            mainMenuTabs: {
                selectedTab: 'Casino',
                toggleActiveTab: 1,
                itemsTabsHeader: [
                    'Casino', 'Sport'
                ],
            },
        }
    },

    mixins: [AuthMixin],

    methods: {
        optionName(option) {
            this.regFormParams.selectPhoneCode.selected = option.name
        },

        changeLoginSelectName(option) {
            this.loginPopupPhoneFields.selectPhoneCode.selected = option.name
        }
    },

    computed: {
        casinoMenuList() {
            return this.$store.getters.getcasinoMainMenu;
        },

        sportMainMenu() {
            return this.$store.getters.getsportMainMenu;
        },

        settingsList() {
            return this.$store.getters.getsettingsList;
        },

        PersonalInfoList() {
            return this.$store.getters.getPersonalInfoList;
        },

        addDocsList() {
            return this.$store.getters.getAddDocsList;
        },

        inputPass() {
            return this.$store.getters.getConfirmPassFields;
        },

        nameFieldAttrs() {
            return this.$store.getters.getChageNameField;
        },

        promoFieldAttrs() {
            return this.$store.getters.getPromoFieldAttrs;
        },

        confirmBtnAttrs() {
            return this.$store.getters.getConfirmBtnAttrs;
        }
    }
}
</script>

<style lang="scss">
    @import './assets/style/color-vars';
</style>