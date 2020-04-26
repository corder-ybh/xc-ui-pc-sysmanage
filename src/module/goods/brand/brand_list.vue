<template>
  <div>
    <el-form :model="params" label-width="80px">
      品牌关键字: <el-input v-model="params.key" style="width:100px"></el-input>
      <el-button type="primary" v-on:click="query">查询</el-button>
    </el-form>
    <el-table
      :data="list"
      stripe
      style="width: 100%;">
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="id" label="brand_id"></el-table-column>
      <el-table-column prop="name" label="品牌名称"></el-table-column>
      <el-table-column >
        <template slot-scope="scope">
          <img v-if="scope.row.image" width="102" height="36" :src="scope.row.image">
        </template>
      </el-table-column>
      <el-table-column prop="letter" label="简称"></el-table-column>
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
  import * as goodsApi from '../api/goods'
  export default {
    data() {
      return {
        list: [],
        total: 0,
        params: {
          key: '',
          page:1,
          size: 10
        }
      }
    },

    methods: {
      query:function() {
        goodsApi.brand_list(this.params.page, this.params.size, this.params).then((res) => {
          this.list = res.queryResult.list;
          this.total = res.queryResult.total;
        })
      },

      changePage: function (page) {
        this.params.page = page;
        this.query();
      }
    },
    mounted() {
      this.query();
    },
    created() {
      this.params.page = Number.parseInt(this.$route.query.page || 1);
      this.params.siteId = this.$route.query.siteId || '';
    }
  }
</script>
