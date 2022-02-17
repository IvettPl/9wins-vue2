<template>
    <div class="form-fields__group" :class="gender =='female' ? 'second' : ''">
        <div class="form-fields__line">
            <input id="male" class="field__gender" type="radio" value="male" v-model="gender" checked>
            <label for="male">Male</label>
        </div>
        <div class="form-fields__line">
            <input id="female" class="field__gender" type="radio" value="female" v-model="gender">
            <label for="female">Female</label>
        </div>
    </div>
</template>


<script>
export default {
    name: 'RadioSlider',

    data() {
        return {
            gender: null,
        }
    }
}
</script>