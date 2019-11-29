<template>
  <div class="data-set">
    <!-- <h1>数据资源</h1> -->
    <el-container>
      <el-aside width="200px">
        <h3>数据集目录</h3>
        <vaside></vaside>
      </el-aside>
      <el-main class="el-main-res">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="存储方式">
            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item label="状态">
            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item label="名称">
            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">搜素</el-button>
          </el-form-item>
        </el-form>
        <el-table :data="tableData" style="width: 100%" stripe>
          <el-table-column prop="name" label="名称" width="180">
          </el-table-column>
          <el-table-column prop="style" label="存储方式"> </el-table-column>
          <el-table-column prop="quantity" label="数据数量"> </el-table-column>
          <el-table-column prop="state" label="状态"> </el-table-column>
          <el-table-column prop="date" label="有效期"> </el-table-column>

          <el-table-column fixed="right" label="操作" width="200">
            <template slot-scope="scope">
              <el-button
                v-if="scope.row.operation.key == 0"
                disabled
                @click="handleClick(scope.row)"
                type="text"
                size="small"
                >{{ scope.row.operation.value }}</el-button
              >
              <el-button
                v-else
                @click="handleClick(scope.row)"
                type="text"
                size="small"
                >{{ scope.row.operation.value }}</el-button
              >
              <el-button
                @click="showPreDialog(true)"
                type="text"
                size="small"
                >预览</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        >
        </el-pagination>
      </el-main>
    </el-container>
    <preDialog
      :data="{ dialogFormVisible: dialogFormVisible }"
      @showDialog="showPreDialog"
    ></preDialog>
  </div>
</template>

<script>
import preDialog from "./previewDialog/index";
import vaside from "./aside/index";
export default {
  metaInfo: {
    title: "数据资源",
    htmlAttrs: {
      lang: "en",
      amp: true
    }
  },
  components: {
    vaside,
    preDialog
  },
  data: function() {
    return {
      dialogFormVisible: false,
      currentPage4: 4,
      formInline: {
        user: "",
        region: ""
      },
      tableData: [
        {
          name: "name",
          style: "HDFS",
          quantity: "1000",
          state: "已关联",
          date: "201-11-27",
          operation: { key: 0, value: "停止关联" }
        },
        {
          name: "name",
          style: "HDFS",
          quantity: "1000",
          state: "未关联",
          date: "201-11-27",
          operation: { key: 1, value: "关联" }
        }
        // {
        //   date: "2016-05-02",
        //   name: "王小虎",
        //   address: "上海市普陀区金沙江路 1518 弄"
        // },
        // {
        //   date: "2016-05-04",
        //   name: "王小虎",
        //   address: "上海市普陀区金沙江路 1517 弄"
        // },
        // {
        //   date: "2016-05-01",
        //   name: "王小虎",
        //   address: "上海市普陀区金沙江路 1519 弄"
        // },
        // {
        //   date: "2016-05-03",
        //   name: "王小虎",
        //   address: "上海市普陀区金沙江路 1516 弄"
        // }
      ]
    };
  },
  computed: {},
  mounted() {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed: function() {},
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleClick() {
      this.$router.push({ path: "/datamanagment/relate", query: "" });
    },
    showPreDialog(val) {
      this.dialogFormVisible = val;
    }
  }
};
</script>

<style lang="scss">
.data-set {
  @import "./style/index.scss";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #ffffff;
  // padding: 10px;

  .el-main-res {
    padding: 15px;
  }
}
</style>
