<template>
    <div class="rolePrvlgCfg" style="height: 100%; padding: 10px 20px; box-sizing: border-box; background: #fff;">
        <el-button type="" size="small" style="margin-bottom: 10px;">返回</el-button>
        <el-button type="primary" size="small" style="margin-bottom: 10px;">保存</el-button>
        <el-table :data="menuTableData" border size="mini" height="calc(100% - 42px)">
            <el-table-column label="菜单" prop="menuName" align="left" width="300px"></el-table-column>
            <el-table-column label="查看" prop="menuUrl" align="center" width="50px">
                <template slot-scope="scope">
                    <el-checkbox></el-checkbox>
                </template>
            </el-table-column>
            <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                    <el-checkbox v-for="btn in scope.row.btnList" :key="btn.btnId" :label="btn.btnName"></el-checkbox>
                </template>
            </el-table-column>
        </el-table>
            
        
    </div>
</template>

<script>

export default {
    name: 'rolePrvlgCfg',
    //注册组件
    components: {},
    //属性传值
    props: {},
    //数据
    data() {
        return {
            menuTableData: [
                {"menuId": "1", "menuName": "集中管控","btnList": []},
                {"menuId": "1", "menuName": "　　中央空调系统","btnList": []},
                {"menuId": "1", "menuName": "　　中央空调编辑","btnList": []},
                {"menuId": "1", "menuName": "　　区域控制","btnList": [{"btnId": "8a8a8bbe5741830c015741c9f61b0099","btnName": "单控","btnAlias": "ctrStrategyBtn", "operate": 1}, {"btnId": "8a8a8bbe5741830c015741c9b45b0097","btnName": "群控","btnAlias": "groupControlBtn","operate": 0}]},
                
            ],
            
            menuDialogVisible: false,
            menuData:{}
        }
    },
    //计算属性
    computed: {},
    //方法
    methods: {},
    //过滤器
    filters: {},
    //生命周期钩子——组件实例刚被创建，组件属性计算之前
    beforeCreate() {},
    //生命周期钩子——组件实例创建完成，属性已绑定，但DOM未生成
    created() {},
    //生命周期钩子——完成了 el 和 data 初始化，模拟编译/挂载之前
    beforeMount() {},
    //生命周期钩子——完成了 el 和 data 初始化，模拟编译/挂载完成
    mounted() {},
    //生命周期钩子——组件更新之前
    beforeUpdate() {},
    //生命周期钩子——组件更新之后
    updated() {},
    //生命周期钩子——组件销毁前调用
    beforeDestroy() {},
    //生命周期钩子——组件销毁后调用
    destroyed() {},
    //侦听器
    watch: {}
    
}
</script>

<style>
.rolePrvlgCfg .el-tabs__content{
    height: calc(100% - 55px);
}
.rolePrvlgCfg .el-tab-pane{
    height:100%;
}
.rolePrvlgCfg th.is-left{
    text-align: center;
}
.rolePrvlgCfg th.is-left .cell{
    margin-left: 0;
}
.rolePrvlgCfg .is-left .cell{
    margin-left: 40px;
}
.rolePrvlgCfg .el-dialog__body{
    padding: 10px 20px 0;
}
.rolePrvlgCfg .el-table__expanded-cell{
    padding: 0;
}
.rolePrvlgCfg .inside th{
    display: none;
}
</style>


