<template>
  <div class="wrapper">
    <div class="pokeball" />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.pokeball {
  width: 60px;
  height: 60px;
  background-color: #fff;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  border: 3px solid;
  animation: frames 0.8s linear 0s infinite;
}

.pokeball:after {
  content: '';
  position: absolute;
  width: 60px;
  height: 30px;
  background-color: red;
  border-bottom: 4px solid;
  left: 0;
}

.pokeball:before {
  content: '';
  position: absolute;
  background-color: #fff;
  width: 10px;
  height: 10px;
  border: 4px solid;
  border-radius: 50%;
  bottom: 22px;
  right: 22px;
  z-index: 1;
}

/* AnimationFrames */
@keyframes frames {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
