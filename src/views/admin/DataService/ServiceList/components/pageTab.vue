<template>
  <div class="tab-page">
    <el-form :inline="true" :model="formInline" class="form-inline">
      <el-form-item label="名称">
        <el-input v-model="formInline.region" placeholder="名称"></el-input>
      </el-form-item>
      <el-form-item label="存储方式">
        <el-input v-model="formInline.user" placeholder="存储方式"></el-input>
      </el-form-item>
      <el-form-item label="状态">
        <el-input v-model="formInline.region" placeholder="状态"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">搜素</el-button>
        <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
      </el-form-item>
    </el-form>

    <el-table :data="tableData" style="width: 100%;">
      <el-table-column label="ID" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="名称" width="180"></el-table-column>
      <el-table-column prop="address" label="存储方式"></el-table-column>
      <el-table-column prop="address" label="共享方式"></el-table-column>
      <el-table-column prop="address" label="服务方式"></el-table-column>
      <el-table-column prop="address" label="状态"></el-table-column>
      <el-table-column label="有效期" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="modifyUser(scope.row)"
            >停止</el-button
          >
          <el-button type="text" size="small" @click="delItem(scope.row.id)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 8, 10, 15]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      style="    text-align: right"
    ></el-pagination>

    <addForm
      :data="{
        dialogFormVisible: addDialogFormVisible,
        formType: formType,
        formData: formData,
        pagination: { pageSize: this.pageSize, currentPage: this.currentPage }
      }"
      @reset="cancel"
      @initData="initData"
      @getTotal="getTotal"
    ></addForm>
  </div>
</template>

<script>
import {
  getUserList,
  delUser,
  modifyUser,
  getAllUserList
} from "@/api/userlist";
import addForm from "./addFrom";
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  watch: {
    data(val) {
      console.log("formData", val.formData);
    }
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
      formData: {},
      formInline: {
        user: "",
        region: ""
      },
      tableData: [],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      currentPage: 1,
      pageSize: 5,
      total: 0
    };
  },
  computed: {
    //...mapState([""])
  },
  mounted() {
    this.initData({ pageSize: this.pageSize, currentPage: this.currentPage });

    this.getTotal();
  },
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
      this.pageSize = val;
      this.initData({ pageSize: this.pageSize, currentPage: this.currentPage });
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
      this.initData({ pageSize: this.pageSize, currentPage: this.currentPage });
    },
    handleCreate(val) {
      this.addDialogFormVisible = true;
      this.formType = val;
      this.formData = {
        name: "",
        address: "",
        date: ""
      };
    },
    cancel(val) {
      this.addDialogFormVisible = false;
      this.formType = val;
    },
    initData(val) {
      getUserList(val).then(res => {
        // if (res.data.length == 0) {
        //   this.initData({
        //     pageSize: this.pageSize,
        //     currentPage: this.currentPage - 1
        //   });
        // }
        this.tableData = res.data;
      });
    },
    delItem(val) {
      delUser(val).then(res => {
        this.initData({
          pageSize: this.pageSize,
          currentPage: this.currentPage
        });
        this.getTotal();
      });
    },
    modifyUser(val) {
      this.addDialogFormVisible = true;
      this.formType = "edit";
      this.formData = _.cloneDeep(val);
      // modifyUser(val).then(res => {
      //   this.initData();
      // });
    },
    getTotal() {
      getAllUserList().then(res => {
        this.total = res.data.length;
      });
    }
  }
};
</script>

<style lang="scss">
.tab-page {
  padding: 10px;
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
