<template>
  <div>
    <el-form   :model="templateForm" label-width="80px" :rules="templateFormRules" ref="templateForm" >
      <el-form-item label="所属站点" prop="siteId">
        <el-select v-model="templateForm.siteId" placeholder="请选择站点">
          <el-option
            v-for="item in siteList"
            :key="item.siteId"
            :label="item.siteName"
            :value="item.siteId">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="模板名称" prop="templateName">
        <el-input v-model="templateForm.templateName" auto-complete="off" ></el-input>
      </el-form-item>

      <el-form-item label="模板文件ID" prop="templateFileId">
        <el-input v-model="templateForm.templateFileId" auto-complete="off" ></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="go_back">返回</el-button>
      <el-button type="primary" @click.native="editSubmit" :loading="addLoading">提交</el-button>
    </div>
  </div>
</template>

<script>
  import * as cmsApi from '../api/cms'
  export default {
    data() {
      return {
        //站点列表
        siteList:[],
        addLoading: false,//加载效果标记
        templateId: '',
        templateForm: {
          templateFileId: '',
          templateName: ''
        },
        templateFormRules: {
          templateFileId: [
            {required:true, message: '请输入模板文件ID', trigger: 'blur'},
          ],
          templateName: [
            {required:true, message: '请输入模板名称', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      go_back() {
        this.$router.push({
          path:'/cms/template/list',
          query:{
            page:this.$route.query.page,
            siteId:this.$route.query.siteId
          }
        });
      },
      /**
       * 编辑页面
       */
      editSubmit() {
        this.$refs.templateForm.validate((valid) => {
          cmsApi.page_edit(this.templateId, this.templateForm).then((res) => {
            console.log(res);
            if (res.success) {
              this.$message({
                message: '修改成功',
                type: 'success'
              });
              // 自动返回
              this.go_back();
            } else {
              this.$message.error("修改失败");
            }
          })
        })
      }
    },
    created:function() {
      // 初始化站点列表
      this.siteList = [
        {
          siteId:'5a751fab6abb5044e0d19ea1',
          siteName:'门户主站'
        },
        {
          siteId: '102',
          siteName: '测试站'
        }
      ];
      // 页面参数通过路由传入，这里通过this.$route.params来获取
      this.templateId=this.$route.params.templateId;

      //根据主键查询页面信息
      cmsApi.template_get(this.templateId).then((res) => {
        console.log(res);
        if(res){
          this.templateForm = res;
        }
      });
    }
  }
</script>

<style scoped>

</style>
