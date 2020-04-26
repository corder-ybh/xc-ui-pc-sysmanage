import Home from '@/module/home/page/home.vue'
import brant_list from '@/module/goods/brand/brand_list.vue';

export default [{
  path: '/cms',
  component: Home,
  hidden: false,
  name: 'GOODS',
  children: [
    {path: '/goods/brand/list', name: '品牌列表', component: brant_list, hidden: false}
  ]
}]
