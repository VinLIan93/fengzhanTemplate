<template>
    <div class="roleManagement"  style="height: 100%; padding: 10px 20px; box-sizing: border-box; background: #fff;">
        <div class="page-header">
            <div class="head-button">
                <el-button type="primary" size="small" @click="dialogVisible = true">新增</el-button>
                <el-button type="danger" size="small">删除</el-button>
            </div>
            <el-form class="queryform" :model="formData" size="small" label-width="80px">
                <el-form-item class="queryitem" label="角色名称" prop="roleName">
                    <el-input v-model="formData.roleName" placeholder="请输入角色名称"></el-input>
                </el-form-item>
                <!-- <el-form-item class="queryitem" label="创建时间" prop="createDate">
                    <el-date-picker v-model="formData.createDate" placeholder="请选择创建时间"></el-date-picker>
                </el-form-item> -->
                <el-button class="querybutton" type="primary" size="small">查询</el-button>
            </el-form>
        </div>
        <el-table :data="tableData" size="mini" border height="calc(100% - 75px)" tooltip-effect="dark">
            <el-table-column type="selection" width="50px" align="center"></el-table-column>
            <el-table-column label="角色名称" prop="roleName" align="center"></el-table-column>
            <el-table-column label="描述" prop="roleDec" align="center" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column label="创建时间" prop="createDate" align="center"></el-table-column>
            <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                    <el-button size="mini" plain type="primary" icon="el-icon-edit"></el-button>
                    <el-button size="mini" plain type="success" @click="setPurview">权限配置</el-button>
                </template>
          </el-table-column>
        </el-table>
        <el-pagination :total="10" :current-page="1"  layout="total,prev, pager, next, jumper" align="right" style="margin-top: 10px"></el-pagination>


        <el-dialog title="创建/更新用户" :visible.sync="dialogVisible" :close-on-click-modal=false :close-on-press-escape=false width="400px"> 
			<el-form :model="userData" size="small" label-width="80px">
                <el-form-item label="角色名称" prop="roleName" required >
                    <el-input v-model="userData.roleName" placeholder="请输入账户"></el-input>
                </el-form-item>
                <el-form-item label="描述" prop="roleDec">
                    <el-input type="textarea" v-model="userData.roleDec" placeholder="请输入昵称"></el-input>
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
    name: 'roleManagement',
    //注册组件
    components: {},
    //属性传值
    props: {},
    //数据
    data() {
		return {
            formData: {},
            tableData: [
                {"roleDec":"asdadfasdfadfasdfasdfasdfffffsdddddddddddddddddddddddddddddddddddd","roleName":"asdf","createDate":"2018-01-01 12:01:01"},
                {"roleDec":"asdadfasdfadfasdfasdfasdfffffsdddddddddddddddddddddddddddddddddddd","roleName":"asdf","createDate":"2018-01-01 12:01:01"},
                {"roleDec":"asdadfasdfadfasdfasdfasdfffffsdddddddddddddddddddddddddddddddddddd","roleName":"asdf","createDate":"2018-01-01 12:01:01"},
                {"roleDec":"asdadfasdfadfasdfasdfasdfffffsdddddddddddddddddddddddddddddddddddd","roleName":"asdf","createDate":"2018-01-01 12:01:01"},
                {"roleDec":"asdadfasdfadfasdfasdfasdfffffsdddddddddddddddddddddddddddddddddddd","roleName":"asdf","createDate":"2018-01-01 12:01:01"},
                {"roleDec":"asdadfasdfadfasdfasdfasdfffffsdddddddddddddddddddddddddddddddddddd","roleName":"asdf","createDate":"2018-01-01 12:01:01"},
                {"roleDec":"asdadfasdfadfasdfasdfasdfffffsdddddddddddddddddddddddddddddddddddd","roleName":"asdf","createDate":"2018-01-01 12:01:01"},
                {"roleDec":"asdadfasdfadfasdfasdfasdfffffsdddddddddddddddddddddddddddddddddddd","roleName":"asdf","createDate":"2018-01-01 12:01:01"},
                {"roleDec":"asdadfasdfadfasdfasdfasdfffffsdddddddddddddddddddddddddddddddddddd","roleName":"asdf","createDate":"2018-01-01 12:01:01"},
                {"roleDec":"asdadfasdfadfasdfasdfasdfffffsdddddddddddddddddddddddddddddddddddd","roleName":"asdf","createDate":"2018-01-01 12:01:01"},
                {"roleDec":"asdadfasdfadfasdfasdfasdfffffsdddddddddddddddddddddddddddddddddddd","roleName":"asdf","createDate":"2018-01-01 12:01:01"},
            ],
            dialogVisible: false,
            userData: {}
        }
	},
    //计算属性
    computed: {},
    //方法
    methods: {
        setPurview() {
            this.$router.push('rolePrvlgCfg');
        }
    },
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
    .roleManagement .page-header{
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .roleManagement .page-header .queryform, .roleManagement .page-header .head-button{
        flex-grow: 0;
        flex-shrink: 0;
    }
    
    .roleManagement .queryform{
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    .roleManagement .queryitem, .roleManagement .querybutton{
        flex-grow: 0;
        flex-shrink: 0;
        margin: 0;
    }
    .roleManagement .querybutton{
        margin-left: 10px;
    }
    .roleManagement .el-dialog__body{
        padding: 10px 20px;
    }
    .roleManagement .layui-elem-field {
        margin: 5px 0;
        padding: 10px;
        border-width: 1px;
        border-style: solid;
    }
</style>


