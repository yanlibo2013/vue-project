<template>
  <div class="add-from">
    <el-dialog
      :title="formType == 'add' ? '执行列表' : '执行列表'"
      :visible.sync="dialogFormVisible"
      @closed="closedDialog"
      width="70%"
      v-dialog-drag
    >
      <el-form :model="form">
        <el-form-item label="推送日期" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="date" label="推送时间"> </el-table-column>
        <el-table-column prop="name" label="推送位置"> </el-table-column>
        <el-table-column prop="name" label="推送方式"> </el-table-column>
        <el-table-column prop="name" label="数据量"> </el-table-column>
        <el-table-column prop="name" label="周期"> </el-table-column>
        <el-table-column prop="name" label="状态"> </el-table-column>
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
      <div slot="footer" class="dialog-footer">
        <el-button @click="reset">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { addUser, modifyUser } from "@/api/userlist";
// import _ from "lodash";
export default {
  watch: {
    data(val) {
      this.dialogFormVisible = val.dialogFormVisible;
      this.formType = val.formType;
      this.form = val.formData;
    }
  },
  props: {
    data: {
      type: Object,
      default: false
    }
  },
  components: {},
  data: function() {
    return {
      currentPage4: 4,
      dialogFormVisible: false,
      formType: "add",
      form: {
        name: "",
        address: "",
        date: ""
      },
      formLabelWidth: "120px",
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
      ]
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
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {},
    closedDialog() {
      // this.form = {
      //   name: "",
      //   address: "",
      //   date: ""
      // };
    },
    reset() {
      this.$emit("reset", "add");
    },
    submit() {
      if (this.formType == "add") {
        addUser(this.form).then(res => {
          //console.log(res);
          this.$emit("initData", this.data.pagination);
          this.$emit("getTotal");
        });
      } else {
        modifyUser(this.form).then(res => {
          this.$emit("initData", this.data.pagination);
          this.$emit("getTotal");
        });
      }

      this.reset();
    }
  }
};
</script>

<style lang="scss"></style>
