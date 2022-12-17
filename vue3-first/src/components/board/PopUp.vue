<template>
  <div class="close-image">
    <img src="../../assets/images/error.png" alt="" @click="closePopup" />
  </div>
</template>

<script>
export default {
  emits: ["close-popup"],
  setup(props, context) {
    const closePopup = () => {
      context.emit("close-popup");
    };

    return {
      closePopup,
    };
  },
};
</script>
