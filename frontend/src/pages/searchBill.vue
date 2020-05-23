<template>
  <div>
    <el-container>
      <SearchFilter ref='searchFilter' :haveMonth="haveMonth" :haveType="haveType" :haveCategory="haveCategory" @receiveData="showData">
           <el-button type="primary"
                   @click="onAdd">新增账单</el-button>
      </SearchFilter>
      </el-container>
      <el-container>
        <el-table :data="tableData"
                  stripe
                  border
                  style="width: 100%;"
                  :height="height"
                  :default-sort = "{prop: 'time', order: 'descending'}">
          <el-table-column prop="time" sortable
                           label="时间"></el-table-column>
          <el-table-column prop="type" sortable
                           label="类型"></el-table-column>
          <el-table-column prop="category" sortable
                           label="分类"></el-table-column>
          <el-table-column prop="amount" sortable
                           label="金额"></el-table-column>
        </el-table>
     </el-container>
        
      
      <el-dialog title="新增账单"
                 :visible.sync="centerDialogVisible"
                 width="30%"
                 center>
        <el-form ref="form"
                 :model="form"
                 :rules="rules"
                 label-width="60px">
          <el-form-item label="时间">
              <el-date-picker style="width:100%" v-model="form.date1" type="datetime" placeholder="选择日期时间"></el-date-picker>
          </el-form-item>
          <el-form-item label="分类">
            <el-select v-model="form.category"
                       style="width:100%"
                       placeholder="请选择分类">
              <el-option v-for="item in category"
                       v-bind:key="item.value"
                       v-if= "item.value != ''"
                       :label="item.label"
                       :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="金额"
                        prop="amount">
            <el-input type="number"
                      v-model.number="form.amount"
                      autocomplete="off"></el-input>
          </el-form-item>
        </el-form>

        <span slot="footer"
              class="dialog-footer">
          <el-button @click="addCancel">取 消</el-button>
          <el-button type="primary" @click="addBill">新增</el-button>
        </span>
      </el-dialog>
  </div>
</template>

<script>
import SearchFilter from '../components/searchFilter.vue'

export default {
  name: 'searchBill',
  data() {
    return {
      centerDialogVisible: false,
      haveMonth: true,
      haveType: false,
      haveCategory: true,
      tableData: [],
      height: (window.innerHeight - 105) + 'px',
      category: [
        {
          label: '所有分类',
          value: '',
          type: ''
        },
        {
          label: '车贷',
          value: '1bcddudhmh',
          type: 0
        },
        {
          label: '车辆保养',
          value: 'hc5g66kviq',
          type: 0
        },
        {
          label: '房贷',
          value: '8s0p77c323',
          type: 0
        },
        {
          label: '房屋租赁',
          value: '0fnhbcle6hg',
          type: 0
        },
        {
          label: '家庭用品',
          value: 'odrjk823mj8',
          type: 0
        },
        {
          label: '交通',
          value: 'bsn20th0k2o',
          type: 0
        },
        {
          label: '旅游',
          value: 'j1h1nohhmmo',
          type: 0
        },
        {
          label: '日常饮食',
          value: '3tqndrjqgrg',
          type: 0
        },
        {
          label: '工资',
          value: 's73ijpispio',
          type: 1
        },
        {
          label: '股票投资',
          value: '1vjj47vpd28',
          type: 1
        },
        {
          label: '基金投资',
          value: '5il79e11628',
          type: 1
        }
      ],
      form: {
        date1: '',
        type: '',
        category: '',
        amount: ''
      },
      rules:{
          date1: [{required: true,type: 'datetime',message: '时间不能为空',trigger: 'change'}],
          category: [{required: true,message: '分类不能为空',trigger: 'change'}],
          amount: [{ required: true, message: '金额不能为空'},{ type: 'number', message: '金额必须为数字'}]
      }
    }
  },
  components: {
      SearchFilter
  },
  mounted() {
      this.$refs.searchFilter.loadBill()
  },
  methods: {
    loadBill() {
      var params = this.formInline
      this.$http.get('/loadBill', { params: params }).then(response => {
        this.tableData = response.data.data
      })
    },
    onSubmit() {
      this.loadBill()
    },
    onReset() {
      this.formInline.month = ''
      this.formInline.type = ''
      this.formInline.category = ''
      this.loadBill()
    },
    getType(cateId) {
        var type = this.category.filter((item) => {
            return item.value == cateId
        })
        return type[0].type
    },
    onAdd() {
      this.centerDialogVisible = true
    },
    addCancel() {
         this.form.date1 = ''
         this.form.type = ''
         this.form.category = ''
         this.form.amount = ''
         this.centerDialogVisible = false
    },
    checkParam() {
        if(this.form.date1 == '') {
            this.$message({
                message: '请选择时间',
                type: 'error'
            });
            return false
        }
         if(this.form.category == '') {
             this.$message({
                message: '请选择分类',
                type: 'error'
            });
            return false
        }
         if(this.form.amount == '') {
             this.$message({
                message: '请填写金额',
                type: 'error'
            });
            return false
        }
        return true
    },
    addBill() {
        var bool = this.checkParam();
        if (!bool) return false
        this.centerDialogVisible = false
        var type = this.getType(this.form.category)
        var data = {
            time: this.form.date1.getTime(),
            type: type,
            category: this.form.category,
            amount: parseFloat(this.form.amount).toFixed(2)
        }
        this.$http.post('/addBill',data).then(() => {
             // this.loadBill();
             this.$refs.searchFilter.loadBill()
        })
    },
    showData(data) {
        this.tableData = data
    }
  }
}
</script>

