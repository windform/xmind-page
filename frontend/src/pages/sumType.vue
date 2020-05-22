<template>
    <div>
        <SearchFilter ref='searchFilter'  :haveMonth="haveMonth" :haveType="haveType" :haveCategory="haveCategory" @receiveData="sum"></SearchFilter>
        <el-container>
        <el-table :data="sumData"
                  stripe
                  border
                  style="width: 100%">
        <el-table-column prop="sumType" width="50"
                           label="类型"></el-table-column>
          <el-table-column prop="sumAmount"
                           label="总计金额"></el-table-column>
        </el-table>
      </el-container>
    </div>
</template>
<script>
import SearchFilter from '../components/searchFilter.vue'
export default {
    name: 'sumType',
    data() {
        return {
            haveMonth: true,
            haveType: false,
            haveCategory: false,
            sumData: [{
                sumType: '收入',
                sumAmount: ''
            },{
                sumType: '支出',
                sumAmount: ''
            }],
        }
    },
    components: {
      SearchFilter
    },
    mounted() {
      this.$refs.searchFilter.loadBill()
    },
    methods: {
        sum(arr) {
            // 收支统计
            var incomeArr = arr.filter(item => {
                return item.type == '收入'
            })
            var expendArr = arr.filter(item => {
                return item.type == '支出'
            })
            this.sumData[0].sumAmount = incomeArr.reduce((acc,current) => acc + parseFloat(current.amount), 0)
            this.sumData[1].sumAmount = expendArr.reduce((acc,current) => acc + parseFloat(current.amount), 0)
            this.sumData[0].sumAmount = this.sumData[0].sumAmount.toFixed(2)
            this.sumData[1].sumAmount = this.sumData[1].sumAmount.toFixed(2)
        },
    }
}
</script>