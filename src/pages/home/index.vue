<template>
  <div>
    <!-- <Carousel /> -->
    <Search />
    <el-row>
      <el-col :span="20">
        <Level @getLevel="getLevel"/>
        <Region @getRegion="getRegion"/>
        <div style="width: 95%;">
        <div class="hospital" v-if="hasHospitalArr.length > 0">
          <Card
            class="item"
            v-for="(item, index) in hasHospitalArr"
            :key="index"
            :hospitalInfo="item"
          />
        </div>
        <el-empty v-else description="暂无数据"></el-empty>
        <!-- 分页器 -->
        <el-pagination
          v-model:current-page="pageNo"
          v-model:page-size="pageSize"
          :page-sizes="[10, 20, 30, 40]"
          :background="true"
          layout=" prev, pager, next, jumper, ->, sizes, total"
          :total="total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
      </el-col>
      <el-col :span="4"> 
        <Tip></Tip>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import Carousel from "./carousel/index.vue";
import Tip from "./tip/index.vue";
import Search from "./search/index.vue";
import Level from "./level/index.vue";
import Region from "./region/index.vue";
import Card from "./card/index.vue";
import { ref, onMounted } from "vue";
import { reqHospital } from "@/api/home/index.ts";
import type { Content } from "@/api/home/type";
let pageNo = ref<number>(1);
let pageSize = ref<number>(10);
let total = ref<number>(0);
let hasHospitalArr = ref<Content>([]);
//存储医院等级相应数据
let hostype = ref("");
//存储医院地区相应数据
let districtCode = ref("");

onMounted(async () => {
  getHospitalInfo();
});
async function getHospitalInfo() {
  const res = await reqHospital(
    pageNo.value,
    pageSize.value,
    hostype.value,
    districtCode.value
  );
  if (res.code == 200) {
    hasHospitalArr.value = res.data.content;
    total.value = res.data.totalElements;
  }
}
//分页器下拉菜单发生变化时
function handleSizeChange() {
  getHospitalInfo();
}
//分页器页码发生变化时
function handleCurrentChange() {
  getHospitalInfo();
}
function getLevel(level:string) {
  hostype.value = level
  getHospitalInfo();
}
function getRegion(region:string) {
  districtCode.value = region
  getHospitalInfo();
}
</script>

<style scoped lang="scss">
.hospital {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .item {
    width: 48%;
    margin: 10px 0;
  }
}
</style>
