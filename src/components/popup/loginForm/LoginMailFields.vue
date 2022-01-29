<template>
    <div class="form-fields__box">
        <div class="form-fields__line">
            <CustomInput :attrInput="formFields.inputMail" />
        </div>
        <div class="form-fields__line">
            <CustomInput :attrInput="formFields.inputPass" />
        </div>
        <div class="form-fields__fogotpass">
            {{ formFields.labelFogot }}
            <a :href="formFields.linkFogot">{{ formFields.titleFogot }}</a>
        </div>
    </div>
</template>


<script>
export default {
    name: 'LoginMailFields',
    props: ['formFields']
}
</script>