<template>
  <div class="data-apply">
    <!-- <h1>数据资源</h1> -->
    <el-container>
      <el-aside width="200px">
        <h3>数据申请</h3>
        <vaside></vaside>
      </el-aside>
      <el-main class="el-main-res">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="名称">
            <el-input v-model="formInline.user" placeholder="名称"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="访问次数">
                  <span>{{ props.row.name }}</span>
                </el-form-item>
                <el-form-item label="更新时间">
                  <span>{{ props.row.shop }}</span>
                </el-form-item>
                <el-form-item label="数据来源">
                  <span>{{ props.row.id }}</span>
                </el-form-item>
                <el-form-item label="备注">
                  <span>{{ props.row.desc }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column label="数据名称" prop="id"> </el-table-column>
          <!-- <el-table-column label="商品 ID" prop="id"> </el-table-column>
          <el-table-column label="商品名称" prop="name"> </el-table-column>
          <el-table-column label="描述" prop="desc"> </el-table-column> -->
          <el-table-column fixed="right" label="操作" width="150">
            <template slot-scope="scope">
              <el-button
                @click="handleClick(scope.row,'/customer/dataservice/res/apply')"
                type="text"
                size="small"
                >申请</el-button
              >
              <el-button
                @click="handleClick(scope.row,'/customer/dataservice/res/sub')"
                type="text"
                size="small"
                >订阅</el-button
              >
              <el-button
                @click="handleClick(scope.row)"
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
          id: "12987122",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333"
        },
        {
          id: "12987123",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333"
        },
        {
          id: "12987125",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333"
        },
        {
          id: "12987126",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333"
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
    handleClick(row,path) {
      this.$router.push({ path: path, query: "" });
    }
  }
};
</script>

<style lang="scss">
.data-apply {
  @import "./style/index.scss";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #ffffff;
  // padding: 10px;

  .el-main-res {
    padding: 15px;
  }

  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
}
</style>
