<!-- example/App.vue -->
<template>
  <ui-button :size="btnSize" @click="sizeTrigger"
    >点击改变大小的VueButton</ui-button
  >
</template>

<script>
export default {
  data() {
    return {
      btnSize: "mini",
    };
  },
  methods: {
    sizeTrigger: function() {
      this.btnSize = this.btnSize === "mini" ? "large" : "mini";
    },
  },
};
</script>