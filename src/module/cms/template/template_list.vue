<template>
  <div>
    <!--编写页面静态部分，即view部分-->
    <!--查询表单-->
    <el-form :model="params" label-width="80px">
      <el-select v-model="params.siteId" placeholder="请选择站点">
        <el-option
          v-for="item in siteList"
          :key="item.siteId"
          :label="item.siteName"
          :value="item.siteId">
        </el-option>
      </el-select>
      <el-button type="primary" v-on:click="query" size="small">查询</el-button>
      <router-link class="mui-tab-item" :to="{path:'/cms/page/add/',query:{page:this.params.page,siteId:this.params.siteId}}">
        <el-button type="primary">新增模板</el-button>
      </router-link>
    </el-form>
    <el-table
      :data="list"
      stripe
      style="width: 100%">
      <el-table-column type="index" width="60">
      </el-table-column>
      <el-table-column prop="siteId" label="SiteId" width="120">
      </el-table-column>
      <el-table-column prop="templateId" label="模板ID" width="120">
      </el-table-column>
      <el-table-column prop="templateName" label="模板名称" width="150">
      </el-table-column>
      <el-table-column prop="templateFileId" label="模板文件ID" width="250">
      </el-table-column>
      <el-table-column label="操作" width="100">
        <template slot-scope="page">
          <el-button type="text" @click="edit(page.row.templateId)">编辑</el-button>
          <el-button type="text" @click="del(page.row.templateId)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      layout="prev, pager, next"
      :total="total"
      :page-size="params.size"
      :current-page="params.page"
      v-on:current-change="changePage"
      style="float:right">
    </el-pagination>
  </div>
</template>

<script>
  /*编写页面静态部分，即model及vm部分。*/
  import * as cmsApi from '../api/cms'
  export default {
    data() {
      return {
        siteList:[],
        list: [],
        total:0,
        params:{
          siteId:'',
          page:1,
          size:10
        },
      }
    },
    methods:{
      query(){
        // alert('查询')
        //调用服务端的接口
        cmsApi.template_list(this.params.page,this.params.size, this.params).then((res)=>{
          //将res结果数据赋值给数据模型对象
          this.list = res.queryResult.list;
          this.total = res.queryResult.total;
        })

      },
      changePage(page){//形参就是当前页码
        //调用query方法
        // alert(page)
        this.params.page = page;
        this.query()
      },
      edit:function(templateId){
        //打开修改页面
        this.$router.push({
          path:'/cms/template/edit/'+templateId,
          query:{
            page:this.params.page,
            siteId:this.params.siteId
          }
        })
      },
      del:function(pageId) {
      }
    },
    mounted(){
      //当DOM元素渲染完成后调用query
      this.query()
      // 初始化站点列表
      this.siteList = [
        {
          siteId: '5a751fab6abb5044e0d19ea1',
          siteName: '门户主站',
        },
        {
          siteId: '102',
          siteName: '测试站'
        }
      ]
    },
    created() {
      // 从路由上获取参数
      this.params.page = Number.parseInt(this.$route.query.page||1);
      this.params.siteId = this.$route.query.siteId || '';
    }
  }
</script>

<style scoped>

</style>
