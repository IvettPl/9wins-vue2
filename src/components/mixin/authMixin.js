import { mapGetters, mapActions } from "vuex";

export const AuthMixin = {
    data() {
        return {

        }
    },
    computed: {
        auth() {
            return this.$store.getters.getIsAuth;
        }
    },
    methods: {

    }
}