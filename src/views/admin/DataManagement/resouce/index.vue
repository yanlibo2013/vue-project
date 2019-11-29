<template>
  <div class="data-resource">
    <!-- <h1>数据资源</h1> -->
    <el-container>
      <el-aside width="200px">
        <h3>数据存储目录</h3>
        <vaside></vaside>
      </el-aside>
      <el-main class="el-main-res">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="共享方式">
            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item label="服务方式">
            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item label="名称">
            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
        <el-table :data="tableData" style="width: 100%" stripe>
          <el-table-column prop="name" label="姓名" width="180">
          </el-table-column>
          <el-table-column prop="address" label="存储方式"> </el-table-column>
          <el-table-column prop="address" label="共享方式"> </el-table-column>
          <el-table-column prop="address" label="服务方式"> </el-table-column>
          <el-table-column prop="address" label="状态"> </el-table-column>
          <el-table-column prop="address" label="服务期限"> </el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <el-button
                @click="handleClick(scope.row)"
                type="text"
                size="small"
                >发布</el-button
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
  </div>
</template>

<script>
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
    vaside
  },
  data: function() {
    return {
      currentPage4: 4,
      formInline: {
        user: "",
        region: ""
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: ""
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: ""
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: ""
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: ""
        }
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
      this.$router.push({ path: "/datamanagment/publish", query: "" });
    }
  }
};
</script>

<style lang="scss">
.data-resource {
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
