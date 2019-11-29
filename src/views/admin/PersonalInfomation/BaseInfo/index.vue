<template>
  <div class="admin-person-info">
    <el-divider content-position="left">个人信息</el-divider>
    <el-form ref="form" :model="form" label-width="150px" class="el-form-pub">
      <el-form-item label="用户名" class="el-form-item">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" class="el-form-item">
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
    title: "个人信息",
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
.admin-person-info {
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
