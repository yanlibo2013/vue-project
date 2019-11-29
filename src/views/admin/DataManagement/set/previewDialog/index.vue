<template>
  <div class="data-pre-dialog">
    <el-dialog
      title="预览"
      :visible.sync="dialogFormVisible"
      @closed="closeDialog"
      width="70%"
       v-dialog-drag
    >
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="name" label="name" width="180">
        </el-table-column>
        <el-table-column prop="address" label="sex"> </el-table-column>
        <el-table-column prop="address" label="age"> </el-table-column>
        <el-table-column prop="address" label="currenttime"> </el-table-column>
        <el-table-column prop="address" label="data duble"> </el-table-column>
        <el-table-column prop="address" label="city"> </el-table-column>
        <el-table-column prop="address" label="Salary"> </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
export default {
  //   metaInfo: {
  //     title: "数据设置",
  //     htmlAttrs: {
  //       lang: "en",
  //       amp: true
  //     }
  //   },
  watch: {
    data(val) {
      console.log("data(val) {", val);
      this.dialogFormVisible = val.dialogFormVisible;
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
      dialogFormVisible: false,
      tableData: [
        {
          name: "王小虎"
        },
        {
          name: "王小虎"
        },
        {
          name: "王小虎"
        },
        {
          name: "王小虎"
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
    cancel() {
      this.$emit("showDialog", false);
    },
    confirm() {
      this.$emit("showDialog", false);
    },
    closeDialog() {
      this.$emit("showDialog", false);
    }
  }
};
</script>

<style lang="scss">
.data-pre-dialog {
  .dialog-footer {
    text-align: center;
  }

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  // .el-row-pub {
  //   margin: 0 5px 0 5px 0!important;
  // }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    // border-radius: 4px;
    min-height: 36px;
    display: flex;
    align-items: center;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
}
</style>
