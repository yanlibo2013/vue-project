<template>
  <div class="data-pub-dialog">
    <el-dialog
      title="字段映射"
      :visible.sync="dialogFormVisible"
      @closed="closeDialog"
      width="70%"
       v-dialog-drag
    >
      <el-form :model="form">
        <!-- <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item> -->
        <el-row>
          <el-col :span="12">
            <el-row class="el-row-pub">
              <el-col :span="8"><div class="grid-content ">字段</div></el-col>
              <el-col :span="8"
                ><div class="grid-content ">映射字段</div></el-col
              >
              <el-col :span="8"
                ><div class="grid-content el-row-pub">
                  <el-input style="margin-right:10px"
                    v-model="form.name"
                    autocomplete="off"
                  ></el-input></div
              ></el-col>
            </el-row>
          </el-col>
          <el-col :span="12" class="el-col-pub">
            <el-row>
              <el-col :span="8"><div class="grid-content el-row-pub">字段</div></el-col>
              <el-col :span="8"
                ><div class="grid-content ">映射字段</div></el-col
              >
              <el-col :span="8"
                ><div class="grid-content ">
                  <el-input
                    v-model="form.name"
                    autocomplete="off"
                  ></el-input></div
              ></el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >确 定</el-button
        >
      </div>
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
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px"
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
.data-pub-dialog {
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
