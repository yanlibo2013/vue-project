<template>
  <div class="data-pre-dialog">
    <el-dialog
      title="存储目录"
      :visible.sync="dialogFormVisible"
      @closed="closeDialog"
      width="70%"
       v-dialog-drag
    >
      <el-tree
        :data="dataTree"
        show-checkbox
        node-key="id"
        :default-expanded-keys="[2, 3]"
        :default-checked-keys="[5]"
        :props="defaultProps"
      >
      </el-tree>
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
      dialogFormVisible:false,
      dataTree: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1"
            },
            {
              id: 6,
              label: "二级 2-2"
            }
          ]
        },
        {
          id: 3,
          label: "一级 3",
          children: [
            {
              id: 7,
              label: "二级 3-1"
            },
            {
              id: 8,
              label: "二级 3-2"
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
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
