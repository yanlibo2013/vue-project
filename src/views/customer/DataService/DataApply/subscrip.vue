<template>
  <div class="customer-data-subscrip">
    <el-divider content-position="left">数据订阅</el-divider>
    <el-form :model="form" label-width="150px" class="el-form-pub">
      <el-form-item label="已选择资源" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item label="记录名称" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item label="接入配置" :label-width="formLabelWidth">
        <el-row>
          <el-col :span="16">
            <el-row v-for="(item, index) in listFiledDefalut" :key="index">
              <el-col :span="22"
                ><div class="grid-content bg-purple">
                  <el-input
                    v-model="form.name"
                    autocomplete="off"
                    style="margin-right:40px"
                  ></el-input></div
              ></el-col>
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
      <el-form-item label="交换类型" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="数据源类型" :label-width="formLabelWidth">
        <el-row>
          <el-col :span="16">
            <el-row v-for="(item, index) in listFiledDefalut" :key="index">
              <el-col :span="22"
                ><div class="grid-content bg-purple">
                  <el-input
                    v-model="form.name"
                    autocomplete="off"
                    style="margin-right:40px"
                  ></el-input></div
              ></el-col>
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
            <el-col :span="22"
              ><div class="grid-content bg-purple">
                <el-input
                  v-model="form.name"
                  autocomplete="off"
                  style="margin-right:40px"
                ></el-input></div
            ></el-col>

            <el-col :span="2">
              <i
                class="el-icon-delete"
                style="margin-left:25px"
                @click="deleteItem(index)"
              ></i
            ></el-col>
          </el-col>
          <el-col :span="8"><div class="grid-content bg-purple"></div> </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="备注">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item class="el-form-item-last">
        <el-button type="primary" @click="onSubmit">提交</el-button>
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
      dialogFormVisible: false,
      listFiledDefalut: [
        {
          left: "",
          right: ""
        }
      ],
      listFiled: []
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
.customer-data-subscrip {
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
