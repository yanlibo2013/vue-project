<template>
  <div class="data-pub">
    <el-divider content-position="left">数据发布</el-divider>
    <el-form ref="form" :model="form" label-width="80px" class="el-form-pub">
      <el-form-item label="数据集" class="el-form-item">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="服务类型">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="服务方式">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="字段映射">
        <el-button type="primary" size="mini" @click="showDialog(true)"
          >编辑</el-button
        >
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
      <el-form-item class="el-form-item-last">
        <el-button type="primary" @click="onSubmit">确定</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
    <publishDialog
      :data="{ dialogFormVisible: dialogFormVisible }"
      @showDialog="showDialog"
    ></publishDialog>
  </div>
</template>

<script>
import publishDialog from "./dialog/index";
export default {
  metaInfo: {
    title: "数据发布",
    htmlAttrs: {
      lang: "en",
      amp: true
    }
  },
  components: {
    publishDialog
  },
  data: function() {
    return {
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
      dialogFormVisible: false
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
    showDialog(val) {
      this.dialogFormVisible = val;
    }
  }
};
</script>

<style lang="scss">
.data-pub {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #ffffff;
  padding: 10px;

  .el-form-item-last {
    text-align: center;
  }

  .el-form-pub {
    padding: 0 200px 0 200px;
  }
}
</style>
