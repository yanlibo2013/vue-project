<template>
  <div class="customer-data-push">
    <el-divider content-position="left">push审批</el-divider>
    <el-form ref="form" :model="form" label-width="150px" class="el-form-pub">
      <el-form-item label="数据消费者" class="el-form-item">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="申请日期" class="el-form-item">
        <el-input v-model="form.name"></el-input>
      </el-form-item>

      <el-form-item label="资源名称" class="el-form-item">
        <el-input v-model="form.name"></el-input>
      </el-form-item>

      <el-form-item label="接入配置" class="el-form-item">
        <el-input v-model="form.name"></el-input>
      </el-form-item>

      <el-form-item label="记录名称" class="el-form-item">
        <el-input v-model="form.name"></el-input>
      </el-form-item>

      <el-form-item label="字段配置">
        <el-button type="primary" size="mini" @click="showDialog(true)"
          >查看</el-button
        >
      </el-form-item>
      <el-form-item label="任务类型" class="el-form-item">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="描述" class="el-form-item">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="接口链接" class="el-form-item">
        <el-input v-model="form.name"></el-input>
      </el-form-item>

      <el-form-item class="el-form-item-last">
        <el-button type="primary" @click="onSubmit">确定</el-button>
        <el-button @click="goBack">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "数据发布",
    htmlAttrs: {
      lang: "en",
      amp: true
    }
  },
  components: {},
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
    },
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss">
.customer-data-push {
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
