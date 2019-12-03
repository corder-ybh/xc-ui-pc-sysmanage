import Home from '@/module/home/page/home.vue';
import page_list from '@/module/cms/page/page_list.vue';
import page_add from '@/module/cms/page/page_add.vue';
import page_edit from '@/module/cms/page/page_edit.vue';

export default [{
  path: '/cms',
  component: Home,
  hidden: false,
  name: 'CMS',
  // ,
  // redirect: '/home',
  children: [
    {path: '/cms/page/list', name:'页面列表', component: page_list, hidder: false},
    {path: '/cms/page/add', name:'新增页面', component: page_add, hidder: false},
    {path: '/cms/page/edit/:pageId', name:'修改页面', component: page_edit, hidden: false},
  ]
}/*,
  {
    path: '/login',
    component: Login,
    name: 'Login',
    hidden: true
  }*/
]
