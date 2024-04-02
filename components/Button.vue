<template>
  <button
    class="text-vs bg-vsg_light px-10 py-5 rounded-xl font-medium text-sm custom-button"
    :class="type == 'alt' ? 'alternate-button' : ''"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped>
.custom-button {
  font-size: 1rem;
}

.custom-button:hover {
  background-image: linear-gradient(to bottom, #0bd88f, #00c2ff);
  box-shadow: 0px 1px 10px #0bd88f33, 0px 1px 20px #00c2ff33;
}

.alternate-button {
  background: transparent;
  border: 1px solid #0bd88f;
  color: #0bd88f;
}

.alternate-button:hover {
  @apply text-vs;
  border: none;
}
</style>
