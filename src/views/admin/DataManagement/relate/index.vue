<template>
  <div class="data-set">
    <!-- <h1>数据资源</h1> -->
    <el-container>
      <el-aside width="200px">
        <h3>数据集目录</h3>
        <vaside></vaside>
      </el-aside>
      <el-main class="el-main-res">
        <el-form ref="form" :model="form" label-width="150px">
          <el-form-item label="数据集">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="数据标签">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="数据类型">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="存储类型">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="数据支持功能">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="增量字段">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="增量字段类型">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="数据编码">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="有效期">
            <el-col :span="11">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="form.date1"
                style="width: 100%;"
              ></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-time-picker
                placeholder="选择时间"
                v-model="form.date2"
                style="width: 100%;"
              ></el-time-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="存储位置">
            <el-button type="primary" size="mini" @click="showPreDialog(true)"
              >选择</el-button
            >
          </el-form-item>
          <el-form-item label="备注">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
          <el-form-item class="el-form-item-last">
            <el-button type="primary" @click="onSubmit">确定</el-button>
            <el-button @click="goBack">取消</el-button>
          </el-form-item>
        </el-form>
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
    title: "数据集关联",
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
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
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
    showPreDialog(val) {
      this.dialogFormVisible = val;
    },
    goBack(){
      this.$router.go(-1);
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

  .el-form-item-last {
    text-align: center;
  }
}
</style>
