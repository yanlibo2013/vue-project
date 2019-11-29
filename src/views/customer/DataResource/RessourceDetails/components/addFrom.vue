<template>
  <div class="add-from">
    <el-dialog
      :title="formType == 'add' ? '新建JDBC数据源' : '编辑JDBC数据源'"
      :visible.sync="dialogFormVisible"
      width="70%"
      custom-class="dialog-custom-class"
       v-dialog-drag
    >
      <el-form :model="form" class="dialog-form">
        <el-form-item label="名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="描述" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="中文名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-divider></el-divider>
        <el-form-item label="数据类型" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="驱动" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="服务器地址或名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="数据库" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="端口" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="batchsize" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-divider></el-divider>
        <el-form-item label="catalog" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="schema" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="其他参数" :label-width="formLabelWidth">
          <el-row>
            <el-col :span="16">
              <el-row v-for="(item, index) in listFiledDefalut" :key="index">
                <el-col :span="11"
                  ><div class="grid-content bg-purple">
                    <el-input
                      v-model="form.name"
                      autocomplete="off"
                      style="margin-right:40px"
                    ></el-input></div
                ></el-col>
                <el-col :span="11"
                  ><div class="grid-content bg-purple-light">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                  </div>
                </el-col>
                <el-col :span="2"></el-col>
              </el-row>
            </el-col>
            <el-col :span="8"
              ><div class="grid-content bg-purple">
                <el-button
                  type="primary"
                  size="mini"
                  style="margin-left:25px"
                  @click="addFiled"
                  >新增</el-button
                >
              </div>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item
          label=""
          :label-width="formLabelWidth"
          v-for="(item, index) in listFiled"
          :key="index"
        >
          <el-row>
            <el-col :span="16">
              <el-col :span="11"
                ><div class="grid-content bg-purple">
                  <el-input
                    v-model="form.name"
                    autocomplete="off"
                    style="margin-right:40px"
                  ></el-input></div
              ></el-col>
              <el-col :span="11"
                ><div class="grid-content bg-purple-light">
                  <el-input v-model="form.name" autocomplete="off"></el-input>
                </div>
              </el-col>
              <el-col :span="2">
                <i
                  class="el-icon-delete"
                  style="margin-left:25px"
                  @click="deleteItem(index)"
                ></i
              ></el-col>
            </el-col>
            <el-col :span="8"
              ><div class="grid-content bg-purple"></div>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="URL" :label-width="formLabelWidth">
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
      listFiledDefalut: [
        {
          left: "",
          right: ""
        }
      ],
      listFiled: []
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
    },
    addFiled() {
      this.listFiled.push({
        left: "",
        right: ""
      });
    },
    deleteItem(val) {
      console.log(" deleteItem(val) {", val);
      this.listFiled = _.filter(_.cloneDeep(this.listFiled), (item, index) => {
        console.log("item", item);
        console.log("index", index);
        return index != val;
      });
    }
  }
};
</script>

<style lang="scss">
.add-from {
  .dialog-custom-class {
    .dialog-form {
      overflow: auto;
      height: 500px;
    }

    .grid-content {
      // display: flex;
      // align-items: center;
      height: 36px;
    }
  }
}
</style>
