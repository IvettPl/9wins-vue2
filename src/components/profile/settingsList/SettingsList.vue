<template>
    <ul class="settings-list">
        <li
            v-for="item in settingsList"
            :key="item.id"
            class="settings-list__item"
            :class="[item.icnClass, {'no-empty': !item.isEmpty, 'confirm': item.isConfirm}]"
        >
            <div class="settings-list__item-info">
                <div class="settings-list__item-label">
                    <span v-if="item.labelSmall">
                        {{ item.isEmpty ? item.label  : item.labelSmall }}
                    </span>
                    <span v-else>
                        {{ item.label }}
                    </span>
                </div>

                <div
                    class="settings-list__item-title"
                    v-if="item.title"
                >
                    {{ item.title }}
                </div>

                <div class="settings-list__item-state">
                    {{ item.isConfirm ? item.confirm : item.noConfirm }}
                </div>
            </div>

            <div v-if="item.confirm" class="settings-list__item-status">
                <img
                    v-if="item.isConfirm"
                    src="@/assets/img/svg/icn-exclude.svg"
                    alt=""
                >

                <button v-else class="btn btn--red">Confirm</button>
            </div>
        </li>
        <!-- <li class="settings-list__item icon-popular">
            <div class="settings-list__item-info">
                <div class="settings-list__item-label">
                    <span v-if="labelSmall">{{ isEmpty ? label  : labelSmall }}</span>
                    <span v-else>{{ label }}</span>
                </div>
            </div>
        </li> -->
    </ul>
</template>




<script>
    export default {
        name: 'SettingsList',

        props: {
            settingsList: {
                type: Array
            }
        },

        data() {
            return {
                // isEmpty: true,
                // isConfirm: true,
                // label: 'Enter your name',
                // labelSmall: 'First name',
                // confirm: 'confirm',
                // noConfirm: 'no confirm'
            }
        },

    }
</script>




<style lang="scss" scoped>

</style>