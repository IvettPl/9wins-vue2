<template>
    <div class="historylist">
        <div
            @click="historyParams.selectedItem = item; "
            class="historylist__item "
            :class="{'show': historyParams.selectedItem === item}"
            v-for="(item, index) in historyParams.historyInfoParams"
            :key="index">
            <div class="historylist__item-header">
                <div class="historylist__item-paylogo">
                    <img :src="item.imgUrl" :alt="item.imgAlt">
                </div>
                <div class="historylist__item-payment">
                    <div class="historylist__item-price">
                        <span>{{item.price}}</span>
                    </div>
                    <div class="historylist__item-data">
                        {{item.data}}
                    </div>
                </div>
                <div class="historylist__item-status">
                    <div class="historylist__item-state">
                        {{item.status}}
                    </div>
                    <div class="historylist__item-statedata">
                        {{localeDate}}
                    </div>
                </div>
            </div>
            <div class="historylist__detalis">
                <div class="historylist__detalis-wrap">
                    <div  class="historylist__detalis-close icon-up"></div>
                    <div class="historylist__detalis-title">Details</div>
                    <div class="historylist__detalis-logo">
                        <img :src="item.imgUrl" :alt="item.imgAlt">
                    </div>
                    <div class="historylist__detalis-info">
                        <div class="historylist__detalis-item">
                            <div class="historylist__detalis-subtitle">
                                Sum:
                            </div>
                            <div class="historylist__detalis-label">
                                <span>{{item.price}}</span>
                            </div>
                        </div>
                        <div class="historylist__detalis-item">
                            <div class="historylist__detalis-subtitle">
                                Request date:
                            </div>
                            <div class="historylist__detalis-label">
                                Request date
                            </div>
                        </div>
                        <div class="historylist__detalis-item">
                            <div class="historylist__detalis-subtitle">
                                Withdrawal date:
                            </div>
                            <div class="historylist__detalis-label">
                                Withdrawal date
                            </div>
                        </div>
                        <div class="historylist__detalis-item">
                            <div class="historylist__detalis-subtitle">
                                Payment method:
                            </div>
                            <div class="historylist__detalis-label">
                                Payment method
                            </div>
                        </div>
                        <div class="historylist__detalis-item">
                            <div class="historylist__detalis-subtitle">
                                Status:
                            </div>
                            <div class="historylist__detalis-label">
                                {{item.status}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Historylist',
    props: ['historyParams'],
    data(){
        return {
            historyShowDetails: false
        }
    },
    computed: {
        localeDate() {
            return (new Date(this.historyParams.statedata)).toLocaleDateString()
        },
    },


}
</script>
