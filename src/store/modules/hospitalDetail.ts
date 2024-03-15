import { defineStore } from "pinia";
import { reqHospitalDetail } from "@/api/hospital";
import type { HosPitalDetail, DeparmentArr } from "@/api/hospital/type";
//定义仓库内部存储数据state的ts类型
export interface DetailState {
  hospitalInfo: HosPitalDetail;
  deparmentArr: DeparmentArr;
}
//选项式写法
const useDetailStore = defineStore("Detail", {
  state: (): DetailState => {
    return {
      hospitalInfo: {} as HosPitalDetail,
      deparmentArr: [],
    };
  },
  actions: {
    async getHospital(hoscode: string) {
      const res = await reqHospitalDetail(hoscode);
      if (res.code === 200) {
        this.hospitalInfo = res.data;
      }
    },
  },
  getters: {},
});

export default useDetailStore;
