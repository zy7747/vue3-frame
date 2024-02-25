<!--  -->
<template>
  <div class="">
    <el-button type="primary" @click="add">Primary</el-button>
    <el-button type="primary" :icon="Edit" circle />
    <div>{{ $t("app.video") }}</div>
    <vxe-button status="primary" content="主要颜色"></vxe-button>
    <svg-icon :name="'app-哔哩哔哩'" class="svgIcon" />
  </div>
</template>

<script lang="ts" setup>
import { Edit } from "@element-plus/icons-vue";
import { useUserStore } from "@/store/user";
const userStore = useUserStore();

function add() {
  Service();
  userStore.login({
    loginType: "account",
    account: "visitor",
    password: "a123456",
  });
}
</script>

<style lang="scss" scoped></style>
