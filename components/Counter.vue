<template>
  <div class="text-center">
    <p class="text-8xl large-text count">{{ count }}</p>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    end: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      count: 0,
    };
  },
  mounted() {
    this.startCounter();
  },
  methods: {
    startCounter() {
      const interval = setInterval(() => {
        if (this.count < this.end) {
          this.count++;
          if (this.end - 10 > this.count && this.end > 150) {
            this.count = this.count + 9;
          }
        } else {
          clearInterval(interval);
        }
      }, 10); // Adjust the interval for smoother animation
    },
  },
};
</script>

<style scoped>
.count {
  background-image: linear-gradient(to right, #0bd88f, #01f0fd);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  line-height: 5rem;
  font-weight: 500;
}

.large-text {
  font-size: 5.5rem;
}

@media (max-width: 500px) {
  .large-text {
    font-size: 2.5rem;
  }
}
</style>
