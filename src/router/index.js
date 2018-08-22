import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: { title: '自述文件' },
            children:[
                {
                    path: '/dashboard',
                    component: resolve => require(['../components/page/Dashboard.vue'], resolve),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/table',
                    component: resolve => require(['../components/page/BaseTable.vue'], resolve),
                    meta: { title: '基础表格' }
                },
                {
                    path: '/tabs',
                    component: resolve => require(['../components/page/Tabs.vue'], resolve),
                    meta: { title: 'tab选项卡' }
                },
                {
                    path: '/form',
                    component: resolve => require(['../components/page/BaseForm.vue'], resolve),
                    meta: { title: '基本表单' }
                },
                {
                    // 富文本编辑器组件
                    path: '/editor',
                    component: resolve => require(['../components/page/VueEditor.vue'], resolve),
                    meta: { title: '富文本编辑器' }
                },
                {
                    // markdown组件
                    path: '/markdown',
                    component: resolve => require(['../components/page/Markdown.vue'], resolve),
                    meta: { title: 'markdown编辑器' }    
                },
                {
                    // 图片上传组件
                    path: '/upload',
                    component: resolve => require(['../components/page/Upload.vue'], resolve),
                    meta: { title: '文件上传' }   
                },
                {
                    // vue-schart组件
                    path: '/charts',
                    component: resolve => require(['../components/page/BaseCharts.vue'], resolve),
                    meta: { title: 'schart图表' }
                },
                {
                    // 拖拽列表组件
                    path: '/drag',
                    component: resolve => require(['../components/page/DragList.vue'], resolve),
                    meta: { title: '拖拽列表' }
                },
                {
                    // 系统用户管理页面
                    path: '/systemUserManagement',
                    component: resolve => require(['../components/systemManagement/systemUserManagement.vue'], resolve),
                    meta: { title: '系统日志' }
                },
                {
                    // 权限页面
                    path: '/purviewManagement',
                    component: resolve => require(['../components/systemManagement/purviewManagement.vue'], resolve),
                    meta: { title: '权限管理' }
                },
                {
                    // 角色管理页面
                    path: '/roleManagement',
                    component: resolve => require(['../components/systemManagement/roleManagement.vue'], resolve),
                    meta: { title: '角色管理页' }
                },
                {
                    // 角色管理-权限配置页面
                    path: '/rolePrvlgCfg',
                    component: resolve => require(['../components/systemManagement/rolePrvlgCfg.vue'], resolve),
                    meta: { title: '权限配置' }
                },
                {
                    // 数字字典页面
                    path: '/digitalDictionary',
                    component: resolve => require(['../components/systemManagement/digitalDictionary.vue'], resolve),
                    meta: { title: '数字字典' }
                },
                {
                    // 用户操作日志页面
                    path: '/systemUserOperateLog',
                    component: resolve => require(['../components/systemManagement/logManagement/systemUserOperateLog.vue'], resolve),
                    meta: { title: '用户操作日志' }
                },
                { 
                    // 上级通讯日志页面
                    path: '/supTransferLog',
                    component: resolve => require(['../components/systemManagement/logManagement/supTransferLog.vue'], resolve),
                    meta: { title: '上级通讯日志' }
                },
                { 
                    // 下级通讯日志页面
                    path: '/subTransferLog',
                    component: resolve => require(['../components/systemManagement/logManagement/subTransferLog.vue'], resolve),
                    meta: { title: '下级通讯日志' }
                },
                { 
                    // 上级通讯管理页面
                    path: '/supTransferConfig',
                    component: resolve => require(['../components/systemManagement/transferManagement/supTransferConfig.vue'], resolve),
                    meta: { title: '上级通讯管理' }
                },
                { 
                    // 下级通讯管理页面
                    path: '/subTransferConfig',
                    component: resolve => require(['../components/systemManagement/transferManagement/subTransferConfig.vue'], resolve),
                    meta: { title: '下级通讯管理' }
                },
                {
                    // 机构管理页面
                    path: '/orgManagement',
                    component: resolve => require(['../components/superSystemManagement/orgManagement.vue'], resolve),
                    meta: { title: '机构管理' }
                },
                {
                    // 菜单管理页面
                    path: '/menuManagement',
                    component: resolve => require(['../components/superSystemManagement/menuManagement.vue'], resolve),
                    meta: { title: '菜单管理' }
                },
                {
                    // 系统日志页面
                    path: '/systemLog',
                    component: resolve => require(['../components/superSystemManagement/systemLog.vue'], resolve),
                    meta: { title: '系统日志' }
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
        {
            path: '/404',
            component: resolve => require(['../components/page/404.vue'], resolve)
        },
        {
            path: '/403',
            component: resolve => require(['../components/page/403.vue'], resolve)
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
