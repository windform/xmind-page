<template>
    <div>
    <h2 class="logo">简易记账本</h2>
    <el-menu
      default-active="2"
      class="el-menu-vertical-auto"
      background-color="#3d4a5a"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="2" @click="skipLink('/searchBill')">
        <i class="el-icon-menu"></i>
        <span slot="title">账单明细</span>
        <!-- <router-link class="menu-link" to="">账单明细</router-link> -->
      </el-menu-item>
      <el-menu-item index="3" @click="skipLink('/sumType')">
        <i class="el-icon-document"></i>
        <span slot="title">收支统计</span>
        <!-- <router-link class="menu-link" to="/sumType"></router-link> -->
      </el-menu-item>
      <el-menu-item index="4" @click="skipLink('sumCate')">
        <i class="el-icon-setting"></i>
        <span slot="title">分类支出统计</span>
        <!-- <router-link class="menu-link" to="/sumCate"></router-link> -->
      </el-menu-item>
    </el-menu>

    </div>
</template>

<script>
  export default {
    methods: {
        skipLink(link) {
            this.$router.push(link)
        }
    }
  }
</script>
<style scoped>
.logo {
    text-align:center;
    background-color:#49586b;
    margin:0;
    padding: 15px 10px;
    color: #fff;
}

.menu-link,.menu-link:hover,.menu-link:visited,.menu-link:active {
    color: #909399;
    text-decoration:none;
}
.el-menu-vertical-auto {
    border-right: none
}

</style>