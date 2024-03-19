import { defineStore } from "pinia";
import { reqHospitalDetail, reqHospitalDeparment } from "@/api/hospital";
import type { HosPitalDetail, DeparmentArr } from "@/api/hospital/type";
//定义仓库内部存储数据state的ts类型
interface DetailState {
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
    async getDeparment(hoscode: string) {
      const res = await reqHospitalDeparment(hoscode);
      if (res.code === 200) {
        this.deparmentArr = res.data;
      }
    },
  },
  getters: {},
});

export default useDetailStore;
