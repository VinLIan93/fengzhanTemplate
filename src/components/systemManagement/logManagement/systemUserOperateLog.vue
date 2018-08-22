<template>
    <div class="systemUserOperateLog" style="height: 100%; padding: 10px 20px; box-sizing: border-box; background: #fff;">
        <el-form class="queryform" :model="formData" size="small" label-width="80px">
            <el-form-item class="queryitem" label="用户名" prop="logName">
                <el-input v-model="formData.logName" placeholder="请输入用户名称"></el-input>
            </el-form-item>
            <el-form-item class="queryitem" label="操作时间" prop="creatTime">
                <el-date-picker v-model="formData.creatTime" placeholder="请选择操作时间"></el-date-picker>
            </el-form-item>
            <el-button class="querybutton" type="primary" size="small">查询</el-button>
        </el-form>

        <el-table :data="tableData" size="small" border style="margin-top: 10px;" height="calc(100% - 85px)" tooltip-effect="dark">
          <el-table-column label="用户名" prop="userName" align="center" width="200px"></el-table-column>
          <el-table-column label="操作内容" prop="content" align="center"  :show-overflow-tooltip="true"></el-table-column>
          <el-table-column label="操作时间" prop="date" width="200px" align="center"></el-table-column>
        </el-table>
        <el-pagination :total="10" :current-page="1"  layout="total,prev, pager, next, jumper" align="right" style="margin-top: 10px"></el-pagination>
    </div>
</template>

<script>

export default {
    name: 'systemUserOperateLog',
    //注册组件
    components: {},
    //属性传值
    props: {},
    //数据
    data() {
        return {
            formData: {},
            tableData: [
                {userName: '用户一', date: '2018-05-07 14:06:15', content: '发布事件-编辑策略-删除计划-新增用户-发布事件-发布事件-发布事件-发布事件-发布事件-发布事件-发布事件-发布事件-发布事件-发布事件'},
                {userName: '用户一', date: '2018-05-07 14:06:15', content: '发布事件-编辑策略-删除计划-新增用户-发布事件-发布事件-发布事件-发布事件-发布事件-发布事件-发布事件-发布事件-发布事件-发布事件'},
                {userName: '用户一', date: '2018-05-07 14:06:15', content: '发布事件-编辑策略-删除计划-新增用户-发布事件-发布事件-发布事件-发布事件-发布事件-发布事件-发布事件-发布事件-发布事件-发布事件'},
                {userName: '用户一', date: '2018-05-07 14:06:15', content: '发布事件-编辑策略-删除计划-新增用户-发布事件-发布事件-发布事件-发布事件-发布事件-发布事件-发布事件-发布事件-发布事件-发布事件'},
                {userName: '用户一', date: '2018-05-07 14:06:15', content: '发布事件-编辑策略-删除计划-新增用户-发布事件-发布事件-发布事件-发布事件-发布事件-发布事件-发布事件-发布事件-发布事件-发布事件'},
                {userName: '用户一', date: '2018-05-07 14:06:15', content: '发布事件-编辑策略-删除计划-新增用户-发布事件-发布事件-发布事件-发布事件-发布事件-发布事件-发布事件-发布事件-发布事件-发布事件'},
                {userName: '用户一', date: '2018-05-07 14:06:15', content: '发布事件-编辑策略-删除计划-新增用户-发布事件-发布事件-发布事件-发布事件-发布事件-发布事件-发布事件-发布事件-发布事件-发布事件'},
                {userName: '用户一', date: '2018-05-07 14:06:15', content: '发布事件-编辑策略-删除计划-新增用户-发布事件-发布事件-发布事件-发布事件-发布事件-发布事件-发布事件-发布事件-发布事件-发布事件'},
                {userName: '用户一', date: '2018-05-07 14:06:15', content: '发布事件-编辑策略-删除计划-新增用户-发布事件-发布事件-发布事件-发布事件-发布事件-发布事件-发布事件-发布事件-发布事件-发布事件'},
            ]
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
.systemUserOperateLog .queryform{
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.systemUserOperateLog .queryitem, .systemUserOperateLog .querybutton{
    flex-grow: 0;
    flex-shrink: 0;
    margin: 0;
}
.systemUserOperateLog .querybutton{
    margin-left: 10px;
}
</style>


