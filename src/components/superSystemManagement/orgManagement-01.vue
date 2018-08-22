<template>
    <div class="orgManagement" style="height: 100%; padding: 10px 20px; box-sizing: border-box; background: #fff;">
        <div class="page-header">
            <el-button type="primary" size="small" @click="dialogVisible = true">新增</el-button>
            <el-button type="danger" size="small">删除</el-button>
        </div>
        <el-table :data="tableData" size="mini" border height="calc(100% - 75px)" tooltip-effect="dark">
            <el-table-column type="index" width="50px"></el-table-column>
            <el-table-column label="机构名称" prop="orgName" align="center"></el-table-column>
            <el-table-column label="机构描述" prop="orgDesc" align="center"></el-table-column>
            <el-table-column label="地址" prop="orgAddress" :show-overflow-tooltip="true" align="center"></el-table-column>
            <el-table-column label="联系人" prop="contacts" align="center"></el-table-column>
            <el-table-column label="联系电话" prop="contactsNum" align="center"></el-table-column>
            <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                    <el-button size="mini" plain type="primary" icon="el-icon-edit"></el-button>
                </template>
          </el-table-column>
        </el-table>
        <el-pagination :total="10" :current-page="1"  layout="total,prev, pager, next, jumper" align="right" style="margin-top: 10px"></el-pagination>


        <el-dialog title="创建/更新机构" :visible.sync="dialogVisible" :close-on-click-modal=false :close-on-press-escape=false width="700px"> 
			<addOrEditAlert ref="addOrEditAlert"></addOrEditAlert>
			<div slot="footer" class="dialog-footer">
				<el-button size="small" @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" size="small" @click="dialogVisible = false">确 定</el-button>
			</div>
		</el-dialog>
    </div>
</template>

<script>

import addOrEditAlert from '@/components/superSystemManagement/orgAddOrEdit.vue'

export default {
    name: 'orgManagement',
    //注册组件
    components: {
        addOrEditAlert: addOrEditAlert,
    },
    //属性传值
    props: {},
    //数据
    data() {
        return {
            tableData: [
                {orgName:"佛山楼宇1", orgDesc:"佛山楼宇1", orgAddress:"滨江区1509号滨江区1509号滨江区1509号滨江区1509号滨江区1509号滨江区1509号滨江区1509号滨江区1509号", contacts:"徐鑫鑫", contactsNum:"18799990000",},
                {orgName:"佛山楼宇1", orgDesc:"佛山楼宇1", orgAddress:"滨江区1509号", contacts:"徐鑫鑫", contactsNum:"18799990000",},
                {orgName:"佛山楼宇1", orgDesc:"佛山楼宇1", orgAddress:"滨江区1509号", contacts:"徐鑫鑫", contactsNum:"18799990000",},
                {orgName:"佛山楼宇1", orgDesc:"佛山楼宇1", orgAddress:"滨江区1509号", contacts:"徐鑫鑫", contactsNum:"18799990000",},
                {orgName:"佛山楼宇1", orgDesc:"佛山楼宇1", orgAddress:"滨江区1509号", contacts:"徐鑫鑫", contactsNum:"18799990000",},
                {orgName:"佛山楼宇1", orgDesc:"佛山楼宇1", orgAddress:"滨江区1509号", contacts:"徐鑫鑫", contactsNum:"18799990000",},
                {orgName:"佛山楼宇1", orgDesc:"佛山楼宇1", orgAddress:"滨江区1509号", contacts:"徐鑫鑫", contactsNum:"18799990000",},
                {orgName:"佛山楼宇1", orgDesc:"佛山楼宇1", orgAddress:"滨江区1509号", contacts:"徐鑫鑫", contactsNum:"18799990000",},
                {orgName:"佛山楼宇1", orgDesc:"佛山楼宇1", orgAddress:"滨江区1509号", contacts:"徐鑫鑫", contactsNum:"18799990000",},
                {orgName:"佛山楼宇1", orgDesc:"佛山楼宇1", orgAddress:"滨江区1509号", contacts:"徐鑫鑫", contactsNum:"18799990000",},
                {orgName:"佛山楼宇1", orgDesc:"佛山楼宇1", orgAddress:"滨江区1509号", contacts:"徐鑫鑫", contactsNum:"18799990000",},
            ],
            dialogVisible: false
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
    .orgManagement .page-header{
        margin-bottom: 10px;
    }
    
    .orgManagement .el-dialog__body{
        padding: 10px 20px;
    }
    .orgManagement .layui-elem-field {
        margin: 5px 0;
        padding: 10px;
        border-width: 1px;
        border-style: solid;
    }
</style>


