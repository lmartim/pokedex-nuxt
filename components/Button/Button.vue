<template>
  <button 
    class="bg-blue-500 px-5 py-3 rounded-lg text-white" 
    v-on="$listeners" 
    v-bind="$attrs"
  >
    {{label}}
  </button>
</template>

<script>
export default {
  props: {
    label: String,
  }
}
</script>
