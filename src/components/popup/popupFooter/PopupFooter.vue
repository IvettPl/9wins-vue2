<template>
    <div class="popup-content__footer">
        <slot></slot>
        <div class="popup-content__restore">
            <p>
                {{ popupFuterParams.text }}
                <a :href="popupFuterParams.link">{{ popupFuterParams.linkTitle }}</a>
            </p>
        </div>
    </div>
</template>


<script>
export default {
    name: 'PopupFooter',
    props: ['popupFuterParams']
}
</script>