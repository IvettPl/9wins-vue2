<template>
    <div class="checkbox__area">
        <input
            class="checkbox__field"
            :type="checkboxParams.type"
            :id="checkboxParams.id"
            :name="checkboxParams.id"
            :checked="checkboxParams.checked == 1 ? true : false"
        >
        <label
            class="checkbox__label"
            :for="checkboxParams.id"
        >
            {{ checkboxParams.label }}
        </label>
    </div>
</template>


<script>
export default {
    name:'CustomCheckbox',
    props: {
        checkboxParams: {
            type: Object,
            default: function() {
                return {
                    type: 'checkbox'
                }
            }
        }
    }
}
</script>