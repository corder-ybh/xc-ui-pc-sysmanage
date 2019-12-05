import Home from '@/module/home/page/home.vue';
import page_list from '@/module/cms/page/page_list.vue';
import page_add from '@/module/cms/page/page_add.vue';
import page_edit from '@/module/cms/page/page_edit.vue';

import template_list from '@/module/cms/template/template_list.vue';
import template_edit from '@/module/cms/template/template_edit.vue';

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
    {path: '/cms/template/list', name:'模板列表', component: template_list, hidder:false},
    {path: '/cms/template/edit/:templateId', name:'修改模板', component: template_edit, hidder:false},
  ]
}/*,
  {
    path: '/login',
    component: Login,
    name: 'Login',
    hidden: true
  }*/
]
