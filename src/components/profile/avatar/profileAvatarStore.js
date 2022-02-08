export default {
    state() {
        return {
            profileAvatarParams: {
                imgUrl: require("@/assets/img/avatars/avatar.png"),
                imgAlt: 'Avatar'
            },
        }
    },
    getters: {
        getprofileAvatarParams(state) {
            return state.profileAvatarParams;
        }
    }
}