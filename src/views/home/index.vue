<script setup lang="ts">
import config from "@/config/index.ts";
console.log("===", "home");
console.log("===", config);
</script>

<template>
  <div class="home-page">首页内容</div>
</template>

<style lang="scss" scoped>
.home-page {
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-weight: 600;
}
</style>
