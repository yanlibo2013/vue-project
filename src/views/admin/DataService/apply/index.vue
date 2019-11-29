<template>
  <div class="data-servide-apply">
    <!-- <el-divider content-position="left">用户筛选</el-divider> -->

    <el-row>
      <el-col :span="24">
        <div class="grid-content">
          <h3>申请服务列表</h3>
          <el-button type="primary" @click="handleCreate('add')"
            >历史记录</el-button
          >
        </div>
      </el-col>
    </el-row>

    <el-divider class="divider"></el-divider>
    <el-form :inline="true" :model="formInline" class="form-inline">
      <el-form-item label="申请日期">
        <el-input v-model="formInline.region" placeholder="共享方式"></el-input>
      </el-form-item>
      <el-form-item label="服务方式">
        <el-input v-model="formInline.region" placeholder="共享方式"></el-input>
      </el-form-item>
      <el-form-item label="状态">
        <el-input v-model="formInline.region" placeholder="共享方式"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">搜素</el-button>
        <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
      </el-form-item>
    </el-form>

    <el-divider></el-divider>

    <el-table :data="tableData" style="width: 100%;">
      <el-table-column
        prop="name"
        label="数据名称"
        width="180"
      ></el-table-column>
      <el-table-column prop="" label="用户"></el-table-column>
      <el-table-column prop="" label="申请资源"></el-table-column>
      <el-table-column prop="type" label="服务方式"></el-table-column>
      <el-table-column prop="" label="状态"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click="handleClick(scope.row.type)"
            >审核</el-button
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
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
// import _ from "lodash";
export default {
  metaInfo: {
    title: "审批历史记录",
    htmlAttrs: {
      lang: "en",
      amp: true
    }
  },
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
  components: {},
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
          address: "上海市普陀区金沙江路 1518 弄",
          type: "pull"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          type: "push"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          type: "pull"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          type: "pull"
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
      this.addDialogFormVisible = true;
      this.formType = val;
    },
    cancel(val) {
      this.addDialogFormVisible = false;
      this.formType = val;
    },
    handleClick(val) {
      if (val == "pull") {
        this.$router.push({ path: "/customer/dataservice/pull", query: "" });
      }

      if (val == "push") {
        this.$router.push({ path: "/customer/dataservice/push", query: "" });
      }
    }
  }
};
</script>

<style lang="scss">
.data-servide-apply {
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
