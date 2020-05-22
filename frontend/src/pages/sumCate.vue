<template>
    <div>
        <SearchFilter ref='searchFilter' :haveMonth="haveMonth" :haveType="haveType" :haveCategory="haveCategory" @receiveData="sumCate"></SearchFilter>
        <el-container>
        <el-table :data="sumCateData"
                  stripe
                  border
                  style="width: 100%"
                  :default-sort = "{prop: 'sumAmount', order: 'descending'}">
        <el-table-column prop="sumCate" width="150"
                           label="分类"></el-table-column>
          <el-table-column prop="sumAmount" sortable
                           label="支出总计"></el-table-column>
        </el-table>
      </el-container>
    </div>
</template>
<script>
import SearchFilter from '../components/searchFilter.vue'
export default {
    name: 'sumCate',
    data() {
        return {
            haveMonth: true,
            haveType: false,
            haveCategory: false,
            sumCateData: [],
        }
    },
    components: {
      SearchFilter
    },
    mounted() {
      this.$refs.searchFilter.loadBill()
    },
    methods: {
        sumCate(arr) {
        // 分类支出统计
        this.sumCateData = [];
        this.$refs.searchFilter.category.slice(1,-3).forEach(item => {
            var sumAmount = 0
            arr.forEach(arrItem => {
                if(arrItem.category == item.label) {
                    sumAmount += parseFloat(arrItem.amount)
                }
            })
            var data = {
                sumCate: item.label,
                sumAmount: sumAmount.toFixed(2)
            }
            this.sumCateData.push(data)
        });
    }
    }
}
</script>