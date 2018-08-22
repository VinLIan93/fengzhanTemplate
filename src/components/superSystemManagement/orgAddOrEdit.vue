<template>
    <div class="orgAddOrEdit">
        <el-form :model="form" :rules="rules" ref="form" status-icon label-width="100px" class="demo-ruleForm" size="small">
            <fieldset class="layui-elem-field">
            <legend>基础信息</legend>
                <el-form-item label="机构名称" prop="orgName">
                <el-input v-model="form.orgName" placeholder="请输入机构名称"></el-input>
                </el-form-item>
                <el-form-item label="机构描述" prop="orgDesc">
                <el-input type="textarea" v-model="form.orgDesc" placeholder="请输入机构描述"></el-input>
                </el-form-item>
                <el-form-item label="所属地区" prop="selectCity">
                <el-cascader expand-trigger="hover" :props="cityProps" :options="cityOptions" v-model="form.selectCity">
                </el-cascader>
                </el-form-item>
                <el-form-item label="详细地址" prop="orgAddress">
                <el-input v-model="form.orgAddress" placeholder="请输入详细地址"></el-input>
                </el-form-item>
                <el-row>
                <el-col :span="12">
                    <el-form-item label="联系人员" prop="contacts">
                    <el-input v-model="form.contacts" placeholder="请输入联系人"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="联系电话" prop="contactsNum">
                    <el-input v-model="form.contactsNum" placeholder="请输入联系电话"></el-input>
                    </el-form-item>
                </el-col>
                </el-row>
                <el-form-item label="用户账号" prop="defaultUserAccount" v-if="defaultUserAccountShow">
                <el-input v-model="form.defaultUserAccount" placeholder="请输入初始用户账号"></el-input>
                </el-form-item>
                <el-row>
                <el-col :span="12">
                    <el-form-item label="建筑面积" prop="builtUpArea">
                    <el-input v-model.number="form.builtUpArea" auto-complete="off">
                        <template slot="append">平方米</template>
                    </el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="办公人数" prop="officePopulation">
                    <el-input v-model.number="form.officePopulation" auto-complete="off">
                        <template slot="append">人</template>
                    </el-input>
                    </el-form-item>
                </el-col>
                </el-row>
                <el-row>
                <el-col :span="12">
                    <el-form-item label="用电分类" prop="elecClassifySelected">
                    <el-select v-model="form.elecClassifySelected" placeholder="请选择" style="width:100%">
                        <el-option v-for="item in elecClassifyList" :key="item.id" :label="item.codeValue" :value="item.id">
                        </el-option>
                    </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="电压等级" prop="volLevelSelected">
                    <el-select v-model="form.volLevelSelected" placeholder="请选择" style="width:100%">
                        <el-option v-for="item in volLevelList" :key="item.id" :label="item.codeValue" :value="item.id">
                        </el-option>
                    </el-select>
                    </el-form-item>
                </el-col>
                </el-row>
            </fieldset>
            <fieldset class="layui-elem-field">
            <legend>行标信息</legend>
                <el-form-item label="un访问地址" prop="unTransportAddress">
                <el-input v-model="form.unTransportAddress" placeholder="请输入un访问地址"></el-input>
                </el-form-item>
            </fieldset>
            <fieldset class="layui-elem-field">
            <legend>登录页</legend>
                <el-form-item label="系统名称" prop="title">
                <el-input v-model="form.title" placeholder="请输入系统名称"></el-input>
                </el-form-item>
                <el-form-item label="url访问地址" prop="acessAdress">
                <el-input v-model="form.acessAdress" placeholder="请输入url访问地址"></el-input>
                </el-form-item>
                <el-form-item label="图片上传" prop="pictureLogoUp">
                <el-upload
                    class="upload-demo"
                    :action="uploadUrl"
                    ref="pictureLogo"
                    list-type="picture"
                    :limit="1"
                    :auto-upload="false"
                    :multiple="false"
                    accept=".png, .jpg, .jpeg"
                    v-model="form.pictureLogoUp">
                    <el-button size="small" type="primary">logo图上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500KB</div>
                    </el-upload>
                </el-form-item>
                <el-form-item label="" prop="pictureBackUp">
                    <el-upload
                    class="upload-demo"
                    ref="pictureBack"
                    :action="uploadUrl"
                    list-type="picture"
                    :limit="1"
                    :auto-upload="false"
                    :multiple="false"
                    accept=".png, .jpg, .jpeg"
                    v-model="form.pictureBackUp">
                    <el-button size="small" type="primary">背景图上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500KB</div>
                    </el-upload>
                </el-form-item>
                <el-form-item label="" prop="pictureFormUp">
                <el-upload
                    class="upload-demo"
                    :action="uploadUrl"
                    ref="pictureForm"
                    list-type="picture"
                    :limit="1"
                    :auto-upload="false"
                    :multiple="false"
                    accept=".png, .jpg, .jpeg"
                    v-model="form.pictureFormUp">
                    <el-button size="small" type="primary">前台图上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500KB</div>
                    </el-upload>
                </el-form-item>
            </fieldset>
        </el-form>
    </div>
</template>


<script>

export default {
    name: 'orgAddOrEdit',
    //注册组件
    components: {},
    //属性传值
    props: {},
    //数据
    data() {
        return {
            form: {
                orgId: "",
                orgName: "",
                orgDesc: "",
                selectCity: [],
                orgAddress: "",
                contacts: "",
                contactsNum: "",
                defaultUserAccount: "",
                builtUpArea: 1000,
                officePopulation: 100,
                elecClassifySelected: "",
                volLevelSelected: "",
                unTransportAddress: "",
                acessAdress:"",
                title:"",
                pictureFormUp:[],
                pictureBackUp:[],
                pictureLogoUp:[],
            },
            fileList:[0,0,0],
            sum:0,
            flag:0,
            uploadUrl: "aaa",
            rules: {
                orgName: [{
                    required: true,
                    message: '请输入机构名称',
                    trigger: 'blur'
                }, {
                    min: 1,
                    max: 15,
                    message: '长度限制在 1 到 15 个字符',
                    trigger: 'blur'
                }, {
                    // validator: checkOrgName,
                    trigger: 'blur'
                }],
                orgDesc: [{
                    min: 0,
                    max: 150,
                    message: '长度限制在 0 到 150 个字符',
                    trigger: 'blur'
                }, {
                    // validator: checkOrgDesc,
                    trigger: 'blur'
                }],
                selectCity: [{
                    required: true,
                    message: '请选择所属地区',
                    trigger: 'blur'
                }],
                orgAddress: [{
                    required: true,
                    message: '请输入详细地址',
                    trigger: 'blur'
                }, {
                    min: 1,
                    max: 30,
                    message: '长度限制在 1 到 30 个字符',
                    trigger: 'blur'
                }, {
                    // validator: checkOrgAddress,
                    trigger: 'blur'
                }],
                contacts: [{
                    required: true,
                    message: '请输入联系人',
                    trigger: 'blur'
                }, {
                    min: 1,
                    max: 15,
                    message: '长度限制在 1 到 15 个字符',
                    trigger: 'blur'
                }, {
                    // validator: checkContacts,
                    trigger: 'blur'
                }],
                contactsNum: [{
                    required: true,
                    message: '请输入联系电话',
                    trigger: 'blur'
                }, {
                    // validator: checkContactsNum,
                    trigger: 'blur'
                }],
                builtUpArea: [{
                    required: true,
                    message: '请输入建筑面积',
                    trigger: 'blur'
                }, {
                    // validator: checkBuiltUpArea,
                    trigger: 'blur'
                }],
                officePopulation: [{
                    required: true,
                    message: '请输入办公人数',
                    trigger: 'blur'
                }, {
                    // validator: checkOfficePopulation,
                    trigger: 'blur'
                }],
                defaultUserAccount: [{
                    required: true,
                    message: '请输入初始用户账号',
                    trigger: 'blur'
                }, {
                    min: 1,
                    max: 15,
                    message: '长度限制在 1 到 15 个字符',
                    trigger: 'blur'
                }, {
                    // validator: checkDefaultUserAccount,
                    trigger: 'blur'
                }],
                unTransportAddress: [{
                    required: true,
                    message: '请输入un访问地址',
                    trigger: 'blur'
                }, {
                    min: 1,
                    max: 15,
                    message: '长度限制在 1 到 15 个字符',
                    trigger: 'blur'
                }, {
                    // validator: checkUnTransportAddress,
                    trigger: 'blur'
                }],
                title: [{
                    required: true,
                    message: '请输入系统名称',
                    trigger: 'blur'
                }, {
                    min: 1,
                    max: 15,
                    message: '长度限制在 1 到 15 个字符',
                    trigger: 'blur'
                }, {
                    // validator: checkTitle,
                    trigger: 'blur'
                }],
                acessAdress: [{
                    required: true,
                    message: '请输入url访问地址',
                    trigger: 'blur'
                }, {
                    min: 1,
                    max: 30,
                    message: '长度限制在 1 到 30 个字符',
                    trigger: 'blur'
                }, {
                    // validator: checkAcessAdress,
                    trigger: 'blur'
                }],
                // pictureLogoUp: [{
                //   required: true,
                //   message: '请选择logo图片',
                //   trigger: 'blur'
                // }],
                // pictureBackUp: [{
                //   required: true,
                //   message: '请选择背景图片',
                //   trigger: 'blur'
                // }],
                // pictureFormUp: [{
                //   required: true,
                //   message: '请选择前台图片',
                //   trigger: 'blur'
                // }],
            },
            cityProps: {
                value: 'id',
                label: 'name',
                children: 'city',
            },
            cityOptions: [],
            defaultUserAccountShow: true,
            groupId: "",
            selectCity: [],
            elecClassifyList: [],
            volLevelList: [],
            codeList:[],
            logoAdress:"hems_logo",
            backgroundAdress:"login_bg_0",
            foregroundAdress:"login_bg_3",
			
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
    .orgAddOrEdit .layui-elem-field legend {
        margin-left: 20px;
        padding: 0 10px;
        font-weight: 700;
        font-size: 16px;
        color: #4a4a4a!important;
    }
    
</style>

