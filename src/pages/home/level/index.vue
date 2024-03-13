<template>
  <div class="level">
    <h1>医院</h1>
    <div class="content">
      <div class="left">等级:</div>
      <ul class="hospital">
        <li :class="{ active: activeFlag == '' }" @click="changeLevel('')">
          全部
        </li>
        <li
          v-for="level in levelArr"
          :key="level.value"
          :class="{ active: activeFlag == level.value }"
          @click="changeLevel(level.value)"
        >
          {{ level.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reqHospitalLevelAndRegion } from "@/api/home/index";
import { HospitalLevelAndRegionArr } from "@/api/home/type";

import { onMounted, ref } from "vue";
let levelArr = ref<HospitalLevelAndRegionArr>([]);
let activeFlag = ref("");
onMounted(() => {
  getLevel();
});
async function getLevel() {
  const res = await reqHospitalLevelAndRegion("HosType");
  if (res.code === 200) {
    levelArr.value = res.data;
  }
}
async function changeLevel(level: string) {
  activeFlag.value = level;
  $emit("getLevel", level);
}

let $emit = defineEmits(["getLevel"]);
</script>
<script lang="ts">
export default {
  name: "Level",
};
</script>
<style scoped lang="scss">
.level {
  color: #7f7f7f;
  margin-top: 20px;
  h1 {
    font-weight: 900;
    margin: 10px 0px;
  }
  .content {
    display: flex;
    padding-top: 10px;
    .left {
      margin-right: 10px;
      width: 42px;
    }
    .hospital {
      display: flex;
      li {
        margin-right: 10px;
        &.active {
          color: #55a6fe;
        }
      }
      li:hover {
        color: #55a6fe;
        cursor: pointer;
      }
    }
  }
}
</style>
