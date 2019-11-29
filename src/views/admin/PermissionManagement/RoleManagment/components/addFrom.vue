<template>
  <div class="add-from">
    <el-dialog
      :title="formType == 'add' ? '添加用户' : '编辑用户'"
      :visible.sync="dialogFormVisible"
      v-dialog-drag
    >
      <el-form :model="form">
        <el-form-item label="用户" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色" :label-width="formLabelWidth">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="状态" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="reset">取 消</el-button>
        <el-button type="primary" @click="reset">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
// import _ from "lodash";
export default {
  watch: {
    data(val) {
      this.dialogFormVisible = val.dialogFormVisible;
      this.formType = val.formType;
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
      formType: "add",
      form: {
        name: "",
        company: "",
        phone: "",
        password: ""
      },
      formLabelWidth: "120px",
      options: [
        {
          value: "系统用户",
          label: "系统用户"
        },
        {
          value: "管理员",
          label: "管理员"
        },
        {
          value: "数据消费者",
          label: "数据消费者"
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
    reset() {
      this.$emit("reset", "add");
    }
  }
};
</script>

<style lang="scss"></style>
