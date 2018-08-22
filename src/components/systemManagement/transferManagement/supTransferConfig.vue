<template>
    <div class="subTransferLog" style="height: 100%; padding: 10px 20px; box-sizing: border-box; background: #fff;">
        
        <div class="protocol">
            <fieldset class="layui-elem-field" style="padding: 15px 20px 20px">
                <legend>通讯协议</legend>
                <div class="content">
                    <h3>{{protocol}}</h3>                
                    <div class="buttonBar">
                        <el-button v-if="!registered" type="success" @click="registered = !registered">注册</el-button>
                        <el-button v-if="registered" type="danger" @click="registered = !registered">注销</el-button>
                        <el-button v-if="!registered" type="warning" @click="changetpBtn">切换协议</el-button>
                    </div>
                </div>
                
            </fieldset>
        </div>

        <div class="paramconfig">
            <fieldset class="layui-elem-field" style="padding: 15px 20px 20px; height: 100%">
                <legend>参数配置</legend>
                <el-form v-if="openadrConfig" :model="formData" label-width="200px" style="margin-right: 100px;flex-grow: 1;">
                    <el-form-item label="VTN ID" prop="id">
                        <el-input v-model="formData.id"></el-input>
                    </el-form-item>
                    <el-form-item label="轮询周期" prop="cycle">
                        <el-input v-model="formData.id"></el-input>
                    </el-form-item>
                    <el-form-item label="交互连接(2.0a)" prop="link2a">
                        <el-input v-model="formData.id"></el-input>
                    </el-form-item>
                    <el-form-item label="交互连接(2.0b)" prop="link2b">
                        <el-input v-model="formData.id"></el-input>
                    </el-form-item>
                </el-form>

                <el-form v-if="drconfig" :model="formData" label-width="200px" style="margin-right: 100px;flex-grow: 1;">
                    <el-form-item label="UN编码" prop="unId">
                        <el-input v-model="formData.unId"></el-input>
                    </el-form-item>
                    <el-form-item label="轮询周期" prop="pollFreq">
                        <el-input v-model="formData.pollFreq"></el-input>
                    </el-form-item>
                    <el-form-item label="IP地址" prop="UNip">
                        <el-input v-model="formData.UNip"></el-input>
                    </el-form-item>
                    <el-form-item label="IP端口" prop="httpUnServerPort">
                        <el-input v-model="formData.httpUnServerPort"></el-input>
                    </el-form-item>
                    <el-form-item label="交互连接" prop="httpUN">
                        <el-input :value="formData.UNip + ':' + formData.httpUnServerPort" >
                            <template slot="prepend">Http://</template>
                            <template slot="append">/PDRIES</template>
                        </el-input>
                    </el-form-item>
                </el-form>

                <div class="centerBtn">
                    <el-button v-if="!edited" type="primary" plain @click="edited = !edited">启用编辑</el-button>
                    <el-button v-if="edited" type="success"  @click="edited = !edited">应用修改</el-button>
                    <el-button v-if="edited" type="warning" plain @click="edited = !edited">取消</el-button>
                </div>

            </fieldset>
        </div>

        <el-dialog title="切换协议":visible.sync="tpDialogVisible" :close-on-click-modal=false :close-on-press-escape=false width="700px">
            <div class="tpbtn">
                <el-button type="primary" plain @click="changeTP('1')">OpenADR</el-button>
                <el-button type="warning" plain @click="changeTP('2')">DR行标</el-button>
                <el-button type="success" plain @click="changeTP('3')">私有协议</el-button>
            </div>            
        </el-dialog>

    </div>
</template>

<script>

export default {
    name: 'subTransferLog',
    //注册组件
    components: {},
    //属性传值
    props: {},
    //数据
    data() {
        return {
            protocol: 'OpenADR',
            formData: {},
            registered: false,
            edited: false,
            openadrConfig: true,
            drconfig: false,
            customizeconfig: false,
            tpDialogVisible: false            
        }
    },
    //计算属性
    computed: {},
    //方法
    methods: {
        changetpBtn() {
            this.tpDialogVisible = true;
        },
        changeTP(p) {
            let protocol = '';
            if( p == '1') {
                protocol = 'OpenADR'
            }else if( p == '2' ) {
                protocol = 'DR行标'
            }else{
                protocol = '私有协议'
            }
            this.$confirm( '确定切换'+ protocol +'协议？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then( () => {
                if( p == '1') {
                    this.customizeconfig = false                    
                    this.drconfig = false
                    this.openadrConfig = true
                    this.protocol = protocol
                    this.tpDialogVisible = false
                }else if( p == '2' ) {                    
                    this.openadrConfig = false
                    this.customizeconfig = false                    
                    this.drconfig = true
                    this.protocol = protocol
                    this.tpDialogVisible = false
                }else{
                    this.openadrConfig = false
                    this.drconfig = false
                    this.customizeconfig = true  
                    this.protocol = protocol                  
                    this.tpDialogVisible = false
                }
            })
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
.subTransferLog{
    display: flex;
    flex-flow: column;
    justify-content: center;
}
.subTransferLog .protocol{
    flex-shrink: 0;
    flex-grow: 0;
}
.subTransferLog .paramconfig{
    flex-shrink: 0;
    flex-grow: 1;
}
.subTransferLog .layui-elem-field legend {
    margin-left: 20px;
    padding: 0 10px;
    font-weight: 700;
    font-size: 16px;
    color: #4a4a4a!important;
}
.subTransferLog .layui-elem-field{
    padding-right: 20px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
.subTransferLog .content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
}
.subTransferLog .paramconfig .centerBtn{
    width: 100%;
    text-align: center;
}
.subTransferLog .tpbtn{
    display: flex;
    margin-bottom: 20px;
}
.subTransferLog .tpbtn button{
    flex-grow: 1;
    height: 200px;
    font-size: 24px;
}
</style>


