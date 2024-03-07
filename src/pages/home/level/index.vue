<template>
  <div class="level">
    <h1>医院</h1>
    <div class="content">
      <div class="left">等级:</div>
      <ul class="hospital">
        <li class="active">全部</li>
        <li>全部</li>
        <li>全部</li>
        <li>全部</li>
        <li>全部</li>
        <li>全部</li>
      </ul>
    </div>
  </div>
  <template>
  
</template>
</template>

<script setup lang="ts"></script>
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
