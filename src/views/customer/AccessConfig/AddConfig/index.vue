<template>
  <div class="customer-data-config">
    <el-row>
      <el-col :span="24">
        <div class="grid-content">
          <h3>接入配置</h3>
          <el-button type="primary" @click="handleCreate('add')"
            >新增</el-button
          >
        </div>
      </el-col>
    </el-row>

    <el-divider></el-divider>
    <el-table :data="tableData" style="width: 100%;" stripe>
      <el-table-column prop="name" label="接入名单"></el-table-column>
      <el-table-column prop="" label="IP白名单"></el-table-column>
      <el-table-column prop="" label="创建时间"></el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="handleCreate('del')"
            >删除</el-button
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
      style="    text-align: right"
    ></el-pagination>

    <addForm
      :data="{ dialogFormVisible: addDialogFormVisible, formType: formType }"
      @reset="cancel"
    ></addForm>
  </div>
</template>

<script>
import addForm from "./components/addFrom";
import { mapGetters, mapActions, mapState } from "vuex";
// import _ from "lodash";
export default {
  watch: {
    // flowData(val) {
    // }
  },
  props: {
    // data: {
    //   type: Object,
    //   default: false
    // }
  },
  components: { addForm },
  data: function() {
    return {
      addDialogFormVisible: false,
      formType: "add",
      formInline: {
        user: "",
        region: ""
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    };
  },
  computed: {
    //...mapState([""])
  },
  mounted() {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed: function() {},
  methods: {
    //...mapActions([""]),
    onSubmit() {
      console.log("submit!");
    },
    resetForm(val) {},
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleCreate(val) {
      // this.addDialogFormVisible = true;
      // this.formType = val;

      if (val == "/customer/resource") {
        this.$router.push({ path: "/customer/resource", query: "" });
      }

      if (val == "/customer/application") {
        this.$router.push({ path: val, query: "" });
      }

      if (val == "add" || val == "edit") {
        this.addDialogFormVisible = true;
        this.formType = val;
      }

      if (val == "del") {
        this.del(val);
      }
    },
    cancel(val) {
      this.addDialogFormVisible = false;
      this.formType = val;
    },
    del(val) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    edit(val) {}
  }
};
</script>

<style lang="scss">
.customer-data-config {
  position: absolute;
  padding: 15px;
  width: 100%;
  background: #ffffff;
  .form-inline {
    padding: 10px 0 20px 0;
    // display: flex;
    // justify-content: space-between;
  }

  .el-divider--horizontal {
    margin-top: 10px !important;
  }

  .grid-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
