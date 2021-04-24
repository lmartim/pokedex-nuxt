<template>
  <button
    class="bg-blue-500 px-5 py-3 rounded-lg text-white"
    v-bind="$attrs"
    v-on="$listeners"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'Button Label',
    },
  },
}
</script>
