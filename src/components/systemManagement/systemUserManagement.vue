<template>
    <div class="systemUserManagement"  style="height: 100%; padding: 10px 20px; box-sizing: border-box; background: #fff;">
        <div class="page-header">
            <div class="head-button">
                <el-button type="primary" size="small" @click="dialogVisible = true">新增</el-button>
                <el-button type="danger" size="small">删除</el-button>
            </div>
            <el-form class="queryform" :model="formData" size="small" label-width="80px">
                <!-- <el-form-item class="queryitem" label="账号" prop="userName">
                    <el-input v-model="formData.userName" placeholder="请输入账号"></el-input>
                </el-form-item> -->
                <el-form-item class="queryitem" label="用户名" prop="userName">
                    <el-input v-model="formData.userName" placeholder="请输入账号或昵称"></el-input>
                </el-form-item>
                <!-- <el-form-item class="queryitem" label="创建时间" prop="createDate">
                    <el-date-picker v-model="formData.createDate" placeholder="请选择创建时间"></el-date-picker>
                </el-form-item> -->
                <el-button class="querybutton" type="primary" size="small">查询</el-button>
            </el-form>
        </div>
        <el-table :data="tableData" size="mini" border height="calc(100% - 75px)" tooltip-effect="dark">
            <el-table-column type="selection" width="50px" align="center"></el-table-column>
            <el-table-column label="账号" prop="userAccount" align="center"></el-table-column>
            <el-table-column label="昵称" prop="userName" align="center"></el-table-column>
            <el-table-column label="联系方式" prop="tel" :show-overflow-tooltip="true" align="center"></el-table-column>
            <el-table-column label="邮箱" prop="mail" :show-overflow-tooltip="true" align="center"></el-table-column>
            <el-table-column label="所属角色" prop="roleNameList" align="center"></el-table-column>
            <el-table-column label="创建时间" prop="createDate" align="center"></el-table-column>
            <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                    <el-button size="mini" plain type="primary" icon="el-icon-edit"></el-button>
                </template>
          </el-table-column>
        </el-table>
        <el-pagination :total="10" :current-page="1"  layout="total,prev, pager, next, jumper" align="right" style="margin-top: 10px"></el-pagination>


        <el-dialog title="创建/更新用户" :visible.sync="dialogVisible" :close-on-click-modal=false :close-on-press-escape=false width="400px"> 
			<el-form :model="userData" size="small" label-width="70px">
                <el-form-item label="账户" prop="userAccount" required >
                    <el-input v-model="userData.userAccount" placeholder="请输入账户"></el-input>
                </el-form-item>
                <el-form-item label="昵称" prop="userName">
                    <el-input v-model="userData.userName" placeholder="请输入昵称"></el-input>
                </el-form-item>
                <el-form-item label="所属角色" prop="roleNameList">
                    <el-select v-model="userData.roleNameList" placeholder="请选择所属角色" style="width: 100%;">
                        <el-option label="a" value="a"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="联系方式" prop="tel">
                    <el-input v-model="userData.tel" placeholder="请输入联系方式"></el-input>
                </el-form-item>
            </el-form>
			<div slot="footer" class="dialog-footer">
				<el-button size="small" @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" size="small" @click="dialogVisible = false">确 定</el-button>
			</div>
		</el-dialog>
    </div>
</template>

<script>

export default {
    name: 'systemUserManagement',
    //注册组件
    components: {},
    //属性传值
    props: {},
    //数据
    data() {
		return {
            formData: {},
            tableData: [
                {"menuName":"aaaa","userAccount":"aaaa","userName":"asdf","roleNameList":"a","tel":"12333333333","mail":"1234321@1234.com","createDate":"2018-01-01 12:01:01"},
                {"menuName":"aaaa","userAccount":"aaaa","userName":"asdf","roleNameList":"a","tel":"12333333333","mail":"1234321@1234.com","createDate":"2018-01-01 12:01:01"},
                {"menuName":"aaaa","userAccount":"aaaa","userName":"asdf","roleNameList":"a","tel":"12333333333","mail":"1234321@1234.com","createDate":"2018-01-01 12:01:01"},
                {"menuName":"aaaa","userAccount":"aaaa","userName":"asdf","roleNameList":"a","tel":"12333333333","mail":"1234321@1234.com","createDate":"2018-01-01 12:01:01"},
                {"menuName":"aaaa","userAccount":"aaaa","userName":"asdf","roleNameList":"a","tel":"12333333333","mail":"1234321@1234.com","createDate":"2018-01-01 12:01:01"},
                {"menuName":"aaaa","userAccount":"aaaa","userName":"asdf","roleNameList":"a","tel":"12333333333","mail":"1234321@1234.com","createDate":"2018-01-01 12:01:01"},
                {"menuName":"aaaa","userAccount":"aaaa","userName":"asdf","roleNameList":"a","tel":"12333333333","mail":"1234321@1234.com","createDate":"2018-01-01 12:01:01"},
                {"menuName":"aaaa","userAccount":"aaaa","userName":"asdf","roleNameList":"a","tel":"12333333333","mail":"1234321@1234.com","createDate":"2018-01-01 12:01:01"},
                {"menuName":"aaaa","userAccount":"aaaa","userName":"asdf","roleNameList":"a","tel":"12333333333","mail":"1234321@1234.com","createDate":"2018-01-01 12:01:01"},
            ],
            dialogVisible: false,
            userData: {}
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
    .systemUserManagement .page-header{
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .systemUserManagement .page-header .queryform, .systemUserManagement .page-header .head-button{
        flex-grow: 0;
        flex-shrink: 0;
    }
    
    .systemUserManagement .queryform{
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    .systemUserManagement .queryitem, .systemUserManagement .querybutton{
        flex-grow: 0;
        flex-shrink: 0;
        margin: 0;
    }
    .systemUserManagement .querybutton{
        margin-left: 10px;
    }
    .systemUserManagement .el-dialog__body{
        padding: 10px 20px;
    }
    .systemUserManagement .layui-elem-field {
        margin: 5px 0;
        padding: 10px;
        border-width: 1px;
        border-style: solid;
    }
</style>


