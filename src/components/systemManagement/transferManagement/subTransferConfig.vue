<template>
    <div class="subTransferConfig"  style="height: 100%; padding: 10px 20px; box-sizing: border-box; background: #fff;">
        <div class="page-header">
            <div class="head-button">
                <el-button type="primary" size="small" @click="dialogVisible = true">新增</el-button>
                <el-button type="danger" size="small">删除</el-button>
            </div>
            <el-form class="queryform" :model="formData" size="small" label-width="80px">
                <el-form-item class="queryitem" label="用户名" prop="userAccount">
                        <el-input v-model="formData.userAccount" placeholder="请输入账号"></el-input>
                </el-form-item>
                <el-form-item class="queryitem" label="支持协议" prop="tp">
                        <el-input v-model="formData.tp" placeholder="请输入昵称"></el-input>
                </el-form-item>
                <el-form-item class="queryitem" label="注册状态" prop="isregistered">
                    <el-select v-model="formData.isregistered">
                        <el-option :value="true" label="注册"></el-option>
                        <el-option :value="false" label="未注册"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item class="queryitem" label="在线状态" prop="isonline">
                    <el-select v-model="formData.isonline">
                        <el-option :value="true" label="在线"></el-option>
                        <el-option :value="false" label="离线"></el-option>
                    </el-select>
                </el-form-item>
                <el-button class="querybutton" type="primary" size="small">查询</el-button>
            </el-form>
        </div>
        <el-table :data="tableData" size="mini" border height="calc(100% - 75px)" tooltip-effect="dark">
            <el-table-column type="selection" width="50px" align="center"></el-table-column>
            <el-table-column label="用户名" prop="userAccount" align="center"></el-table-column>
            <el-table-column label="支持协议" prop="tp" align="center"></el-table-column>
            <el-table-column label="注册状态" prop="isregistered" :show-overflow-tooltip="true" align="center">
                <template slot-scope="scope">
                    <span v-if="scope.row.isregistered">注册</span>
                    <span v-if="!scope.row.isregistered">未注册</span>
                </template>
            </el-table-column>
            <el-table-column label="在线状态" prop="isonline" align="center">
                <template slot-scope="scope">
                    <span v-if="scope.row.isonline">在线</span>
                    <span v-if="!scope.row.isonline">离线</span>
                </template>
            </el-table-column>
            <!-- <el-table-column label="创建时间" prop="createDate" align="center"></el-table-column> -->
            <el-table-column label="操作" align="center" width="250px">
                <template slot-scope="scope">
                    <el-button v-if="scope.row.isregistered" size="mini" plain type="danger" @click="scope.row.isregistered = false">注销</el-button>
                    <el-button v-if="!scope.row.isregistered" size="mini" plain type="success" @click="scope.row.isregistered = true">注册</el-button>
                    <el-button v-if="!scope.row.isregistered" size="mini" plain type="primary">编辑</el-button>
                    <el-button size="mini" plain type="info">详情</el-button>
                </template>
          </el-table-column>
        </el-table>
        <el-pagination :total="10" :current-page="1"  layout="total,prev, pager, next, jumper" align="right" style="margin-top: 10px"></el-pagination>


        <el-dialog title="新建/编辑下级通讯协议" :visible.sync="dialogVisible" :close-on-click-modal=false :close-on-press-escape=false width="400px"> 
			<el-form :model="tpData" size="small" label-width="70px">
                <el-form-item label="用户名" prop="userAccount" required >
                    <el-input v-model="tpData.userAccount" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="支持协议" prop="tp">
                    <el-select v-model="tpData.tp" placeholder="" style="width:100%">
                        <el-option value="1" label="OpenADR"></el-option>
                        <el-option value="2" label="DR行标"></el-option>
                        <el-option value="3" label="私有协议"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item v-if="tpData.tp == '1'" label="VTN ID" prop="id">
                    <el-input v-model="tpData.id" placeholder="请输入VTN ID"></el-input>
                </el-form-item>
                <el-form-item v-if="tpData.tp == '1'" label="轮询周期" prop="tel">
                    <el-input v-model="tpData.tel" placeholder="请输入联系方式"></el-input>
                </el-form-item>
                <el-form-item v-if="tpData.tp == '1'" label="交互链接(2.0a)" prop="a" label-width="105px">
                    <el-input v-model="tpData.a" placeholder="请输入链接地址"></el-input>
                </el-form-item>
                <el-form-item v-if="tpData.tp == '1'" label="交互链接(2.0b)" prop="b" label-width="105px">
                    <el-input v-model="tpData.b" placeholder="请输入链接地址"></el-input>
                </el-form-item>

                <el-form-item v-if="tpData.tp == '2'" label="UN编码" prop="id">
                    <el-input v-model="tpData.id" placeholder="请输入UN编码"></el-input>
                </el-form-item>
                <el-form-item v-if="tpData.tp == '2'" label="轮询周期" prop="tel">
                    <el-input v-model="tpData.tel" placeholder="请输入轮询周期"></el-input>
                </el-form-item>
                <el-form-item v-if="tpData.tp == '2'" label="IP地址" prop="ip">
                    <el-input v-model="tpData.ip" placeholder="请输入IP地址"></el-input>
                </el-form-item>
                <el-form-item v-if="tpData.tp == '2'" label="端口号" prop="sort">
                    <el-input v-model="tpData.sort" placeholder="请输入端口号"></el-input>
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
    name: 'subTransferConfig',
    //注册组件
    components: {},
    //属性传值
    props: {},
    //数据
    data() {
		return {
            formData: {},
            tableData: [
                {"userAccount":"aaaa","tp":"OpenADR","isregistered": true,"isonline":true},
                {"userAccount":"aaaa","tp":"OpenADR","isregistered": false,"isonline":true},
                {"userAccount":"aaaa","tp":"OpenADR","isregistered": true,"isonline":true},
                {"userAccount":"aaaa","tp":"OpenADR","isregistered": true,"isonline":false},
                {"userAccount":"aaaa","tp":"OpenADR","isregistered": false,"isonline":true},
                {"userAccount":"aaaa","tp":"OpenADR","isregistered": false,"isonline":true},
                {"userAccount":"aaaa","tp":"OpenADR","isregistered": false,"isonline":false},
                {"userAccount":"aaaa","tp":"OpenADR","isregistered": true,"isonline":true},
                {"userAccount":"aaaa","tp":"OpenADR","isregistered": true,"isonline":true},
                // {"userAccount":"aaaa","tp":"OpenADR","isregistered": true,"isonline":true},
            ],
            dialogVisible: false,
            tpData: {}
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
    .subTransferConfig .page-header{
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .subTransferConfig .page-header .head-button{
        flex-grow: 0;
        flex-shrink: 0;
    }    
    .subTransferConfig .page-header .queryform{
        flex-shrink: 1;
        flex-grow: 0;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    .subTransferConfig .queryitem{
        flex-grow: 0;
        flex-shrink: 1;
        margin: 0;
    }
    .subTransferConfig .querybutton{
        flex-grow: 0;
        flex-shrink: 0;
        margin: 0;
    }
    .subTransferConfig .querybutton{
        margin-left: 10px;
    }
    .subTransferConfig .el-dialog__body{
        padding: 10px 20px;
    }
    .subTransferConfig .layui-elem-field {
        margin: 5px 0;
        padding: 10px;
        border-width: 1px;
        border-style: solid;
    }
</style>


