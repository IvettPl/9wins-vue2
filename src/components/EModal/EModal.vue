<template>
  <EModalInner
      :class-name="className"
      v-show="isOpen"
      @keypress.esc="onClose"
      @open-first-modal="onOpen"
      @[closeAllEventName]="onClose"
      @[closeEventName]="onClose" :name="name"
      :is-close-after-click-outside="isCloseAfterClickOutside"
  >
    <template #header>
      <slot name="header"></slot>
    </template>
    <template #body>
      <slot name="body"></slot>
    </template>
    <template #footer>
      <slot name="footer"></slot>
    </template>
  </EModalInner>
</template>

<script>

import EModalInner from "./EModalInner";

export default {
  name: "E-Modal",
  components: {
    EModalInner,
  },
  data() {
    return {
      isOpen: this.forceOpen,
      title: '',
      msg: '',
    }
  },
  props: {
    forceOpen: {
      type: Boolean,
      required: false,
      default: false,
    },
    name: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      required: false,
    },
    defaultTitle: {
      type: String,
      required: false,
      default: '',
    },

    defaultMsg: {
      type: String,
      required: false,
      default: '',
    },

    isCloseAfterClickOutside: {
      type: Boolean,
      required: false,
      default: true,
    }
  },
  computed: {
    closeEventName() {
      return `close-${this.name}`;
    },

    openEventName() {
      return `open-${this.name}`;
    },
    closeAllEventName() {
      return 'close-all';
    }
  },
  methods: {
    onClose() {
      this.isOpen = false;
      document.body.classList.remove('modal-active')
    },

    onOpen(data) {
      this.resetData();
      if (data) {
        const {title, msg} = data;
        this.title = title;
        this.msg = msg;
      }
      this.$bus.$emit(this.closeAllEventName);
      this.isOpen = true;
      document.body.classList.add('modal-active');
    },
    onCloseAll() {
      this.isOpen = false;
    },

    resetData() {
      this.title = '';
      this.msg = '';
    }
  },
  watch: {
    isOpen() {
      if (this.isOpen) {
        document.documentElement.style.overflow = 'hidden'
        return;
      }

      document.documentElement.style.overflow = 'auto';
    }
  },
  mounted() {
    this.$bus.$on(this.openEventName, this.onOpen);
    this.$bus.$on(this.closeEventName, this.onClose);
    this.$bus.$on(this.closeEventName, this.onCloseAll);
  }
}
</script>

<style scoped>

</style>