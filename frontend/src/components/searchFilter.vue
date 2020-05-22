<template>
  <div>
      <el-form :inline="true"
               :model="formInline"
               class="demo-form-inline"
               style="margin-top:22px">
        <el-form-item  v-if="haveMonth" label="月份">
          <el-select v-model="formInline.month"
                     placeholder="类型">
            <el-option v-for="item in month"
                       v-bind:key="item.value"
                       :label="item.label"
                       :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item  v-if="haveType" label="类型">
          <el-select v-model="formInline.type"
                     placeholder="类型">
            <el-option v-for="item in type"
                       v-bind:key="item.value"
                       :label="item.label"
                       :value="item.value"></el-option>

          </el-select>
        </el-form-item>
        <el-form-item  v-if="haveCategory" label="分类">
          <el-select v-model="formInline.category"
                     placeholder="分类">
            <el-option v-for="item in category"
                       v-bind:key="item.value"
                       :label="item.label"
                       :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     @click="onSubmit">查询</el-button>
        </el-form-item>
        <!-- <el-button type="primary"
                   @click="onReset">重置</el-button>
        </el-form-item> -->
        <slot></slot>
        
      </el-form>
  </div>
</template>

<script>
export default {
  name: 'searchFilter',
  props: {
    haveMonth: Boolean,
    haveType: Boolean,
    haveCategory: Boolean
  },
  data() {
    return {
      tableData: [],
      month: [
        {
          label: '所有月份',
          value: ''
        },
        {
          label: '一月',
          value: '1'
        },
        {
          label: '二月',
          value: '2'
        },
        {
          label: '三月',
          value: '3'
        },
        {
          label: '四月',
          value: '4'
        },
        {
          label: '五月',
          value: '5'
        },
        {
          label: '六月',
          value: '6'
        },
        {
          label: '七月',
          value: '7'
        },
        {
          label: '八月',
          value: '8'
        },
        {
          label: '九月',
          value: '9'
        },
        {
          label: '十月',
          value: '10'
        },
        {
          label: '十一月',
          value: '11'
        },
        {
          label: '十二月',
          value: '12'
        }
      ],
      type: [
        {
          label: '所有类型',
          value: ''
        },
        {
          label: '支出',
          value: '0'
        },
        {
          label: '收入',
          value: '1'
        }
      ],
      category: [
        {
          label: '所有分类',
          value: ''
        },
        {
          label: '车贷',
          value: '1bcddudhmh'
        },
        {
          label: '车辆保养',
          value: 'hc5g66kviq'
        },
        {
          label: '房贷',
          value: '8s0p77c323'
        },
        {
          label: '房屋租赁',
          value: '0fnhbcle6hg'
        },
        {
          label: '家庭用品',
          value: 'odrjk823mj8'
        },
        {
          label: '交通',
          value: 'bsn20th0k2o'
        },
        {
          label: '旅游',
          value: 'j1h1nohhmmo'
        },
        {
          label: '日常饮食',
          value: '3tqndrjqgrg'
        },
        {
          label: '工资',
          value: 's73ijpispio'
        },
        {
          label: '股票投资',
          value: '1vjj47vpd28'
        },
        {
          label: '基金投资',
          value: '5il79e11628'
        }
      ],
      formInline: {
        month: '1',
        type: '',
        category: ''
      }
    }
  },

  mounted() {
    // this.loadBill()
  },
  methods: {
    loadBill() {
      var params = this.formInline
      this.$http.get('/loadBill', { params: params }).then(response => {
        this.tableData = response.data.data
        this.sendData(this.tableData )
      })
    },
    sendData(data) {
        this.$emit('receiveData',data)
    },
    onSubmit() {
      this.loadBill()
    },
    onReset() {
      this.formInline.month = ''
      this.formInline.type = ''
      this.formInline.category = ''
      this.loadBill()
    }
  }
}
</script>
