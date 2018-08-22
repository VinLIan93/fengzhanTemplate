<template>
    <div class="digitalDictionary" style="height: 100%; padding: 10px 20px; box-sizing: border-box; background: #fff;">
        <el-tabs style="font-size: 14px; height: 100%">
            <el-tab-pane label="资源类型">
                <el-button type="primary" @click="editDialogVisible = true" size="small" style="margin-bottom: 10px;">新增</el-button>
                <el-table :data="resourceData" border size="mini" height="calc(100% - 42px)">
                    <el-table-column label="资源编号" prop="resourceId" align="center"></el-table-column>
                    <el-table-column label="资源名称" prop="resourceName" align="center"></el-table-column>
                    <el-table-column label="操作" align="center">
                        <template slot-scope="scope">
                            <el-button type="primary" plain icon="el-icon-edit" size="mini"></el-button>
                            <el-button type="danger" plain icon="el-icon-delete" size="mini"></el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="负荷类型">
                <el-button type="primary" size="small" style="margin-bottom: 10px;">新增</el-button>
                <el-table :data="loadData" border size="mini" height="calc(100% - 42px)">                    
                    <el-table-column label="编号" prop="loadId" align="center"></el-table-column>
                    <el-table-column label="负荷类型" prop="loadName" align="center"></el-table-column>
                    <el-table-column label="操作" align="center">
                        <template slot-scope="scope">
                            <el-button type="primary" plain icon="el-icon-edit" size="mini"></el-button>
                            <el-button type="danger" plain icon="el-icon-delete" size="mini"></el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="地区信息"></el-tab-pane>
            <el-tab-pane label="台区信息"></el-tab-pane>
            <el-tab-pane label="线路信息"></el-tab-pane>
        </el-tabs>

        <el-dialog title="新建/更新":visible.sync="editDialogVisible" :close-on-click-modal=false :close-on-press-escape=false width="400px">
            <el-form :model="formData" size="small" label-width="80px">
                <el-form-item label="编号" prop="id" required >
                    <el-input v-model="formData.id" placeholder="请输入菜单名"></el-input>
                </el-form-item>
                <el-form-item label="名称" prop="name">
                    <el-input v-model="formData.name" placeholder="请输入菜单链接"></el-input>
                </el-form-item>                
            </el-form>
            <span slot="footer">
                <el-button type="primary" size="small" @click="editDialogVisible = false" :auto-upload="false">确定</el-button>
                <el-button type="" size="small" @click="editDialogVisible = false">取消</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>

export default {
    name: 'digitalDictionary',
    //注册组件
    components: {},
    //属性传值
    props: {},
    //数据
    data() {
        return {
            resourceData: [
                {"resourceId": "1001001", "resourceName": "F1",},
                {"resourceId": "1001001", "resourceName": "F1",},
                {"resourceId": "1001001", "resourceName": "F1",},
                {"resourceId": "1001001", "resourceName": "F1",},
                {"resourceId": "1001001", "resourceName": "F1",},
                {"resourceId": "1001001", "resourceName": "F1",},
                {"resourceId": "1001001", "resourceName": "F1",},
                {"resourceId": "1001001", "resourceName": "F1",},
                {"resourceId": "1001001", "resourceName": "F1",},
            ],
            loadData: [
                {"loadId": "297e85b2617892e601617893be910004", "loadName": "秒级调减"},
                {"loadId": "297e85b2617892e601617893be910004", "loadName": "分钟级调减"},
                {"loadId": "297e85b2617892e601617893be910004", "loadName": "普通调减"},
                {"loadId": "297e85b2617892e601617893be910004", "loadName": "秒级调增"},
                {"loadId": "297e85b2617892e601617893be910004", "loadName": "分钟级调增"},
                {"loadId": "297e85b2617892e601617893be910004", "loadName": "普通调增"},
            ],
            editDialogVisible: false,
            formData:{},
            fileList2: []
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
.digitalDictionary .el-tabs__content{
    height: calc(100% - 55px);
}
.digitalDictionary .el-tab-pane{
    height:100%;
}
.digitalDictionary th.is-left{
    text-align: center;
}
.digitalDictionary th.is-left .cell{
    margin-left: 0;
}
.digitalDictionary .is-left .cell{
    margin-left: 40px;
}
.digitalDictionary .el-dialog__body{
    padding: 10px 20px 0;
}
.digitalDictionary .el-table__expanded-cell{
    padding: 0;
}
.digitalDictionary .inside th{
    display: none;
}
</style>


