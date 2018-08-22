<template>
    <div class="purviewManagement" style="height: 100%; padding: 10px 20px; box-sizing: border-box; background: #fff;">
        <el-tabs style="font-size: 14px; height: 100%">
            <el-tab-pane label="菜单权限">
                <el-button type="primary" @click="menuDialogVisible = true" size="small" style="margin-bottom: 10px;">新增</el-button>

                <telek-tree-table :tabledata="menuTableData" :namemap="menuNameMap" listname="menuList"></telek-tree-table>

            </el-tab-pane>
            <el-tab-pane label="按钮权限">
                <el-button type="primary" @click="btnDialogVisible = true" size="small" style="margin-bottom: 10px;">新增</el-button>

                <telek-tree-table :tabledata="btnTableData" :namemap="btnNameMap" listname="btnList"></telek-tree-table>
                
            </el-tab-pane>
        </el-tabs>

        <el-dialog title="创建/更新菜单":visible.sync="menuDialogVisible" :close-on-click-modal=false :close-on-press-escape=false width="400px">
            <el-form :model="menuForm" size="small" label-width="80px">
                <el-form-item label="菜单名" prop="menuName" required >
                    <el-input v-model="menuForm.menuName" placeholder="请输入菜单名"></el-input>
                </el-form-item>
                <el-form-item label="父级菜单" prop="menuParent">
                    <el-select v-model="menuForm.menuParent" placeholder="请选择父级菜单" style="width: 100%;">
                        <el-option label="a" value="a"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="排序" prop="menuOrder">
                    <el-input v-model="menuForm.menuOrder" placeholder="请输入菜单排序"></el-input>
                </el-form-item>
                <el-form-item label="图标">
                    <el-select v-model="menuForm.icon" placeholder="选择图标">
                      <el-option value="el-icon-edit" label="编辑" align="center">
                          <i class="el-icon-edit"></i><span style="margin-left: 20px">编辑</span>
                      </el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <span slot="footer">
                <el-button type="primary" size="small" @click="menuDialogVisible = false" :auto-upload="false">确定</el-button>
                <el-button type="" size="small" @click="menuDialogVisible = false">取消</el-button>
            </span>
        </el-dialog>

        <el-dialog title="创建/更新按钮":visible.sync="btnDialogVisible" :close-on-click-modal=false :close-on-press-escape=false width="400px">
            <el-form :model="btnForm" size="small" label-width="80px">
                <el-form-item label="按钮名称" prop="btnName" required >
                    <el-input v-model="btnForm.btnName" placeholder="请输入按钮名称"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer">
                <el-button type="primary" size="small" @click="btnDialogVisible = false" :auto-upload="false">确定</el-button>
                <el-button type="" size="small" @click="btnDialogVisible = false">取消</el-button>
            </span>
        </el-dialog>
        
    </div>
</template>

<script>
import telekTreeTable from '@/components/common/telekTreeTable.vue'

export default {
    name: 'purviewManagement',
    //注册组件
    components: {
        telekTreeTable,
    },
    //属性传值
    props: {},
    //数据
    data() {
        return {
            inputMenuData: [{"menuId":"40285601528240bb015282509a9b0000","menuName":"集中管控","menuUrl":"","parentId":"","menuOrder":1,"unShowList":false,"menuList":[{"menuId":"40285601528240bb015282509a9b0000","menuName":"集中管控子集","menuUrl":"","parentId":"","menuOrder":1,"unShowList":false,"menuList":[{"menuId":"8a8a8a0663ba1b930163d2adf48f0120","menuName":"中央空调系统","menuUrl":"/kontiao","parentId":"40285601528240bb015282509a9b0000","menuOrder":2},{"menuId":"8a8a8bd263f793a90163f7c1ba930017","menuName":"中央空调编辑","menuUrl":"/kontiaoedit","parentId":"40285601528240bb015282509a9b0000","menuOrder":3},{"menuId":"40285601528240bb015282509a9b0005","menuName":"区域控制","menuUrl":"/areaControl","parentId":"40285601528240bb015282509a9b0000","menuOrder":5}]}]},{"menuId":"40285601528240bb015282509a9b0001","menuName":"节能策略","menuUrl":"","parentId":"","menuOrder":2,"menuList":[{"menuId":"40285601528240bb015282509a9b0006","menuName":"策略控制","menuUrl":"/strategyControl","parentId":"40285601528240bb015282509a9b0001","menuOrder":6},{"menuId":"40285601528240bb015282509a9b0007","menuName":"策略管理","menuUrl":"/strategyManage","parentId":"40285601528240bb015282509a9b0001","menuOrder":7},{"menuId":"40285601528240bb015282509a9b0008","menuName":"策略模板","menuUrl":"/strategyTemplate","parentId":"40285601528240bb015282509a9b0001","menuOrder":8}]},{"menuId":"297e85b261877fbf0161880151f80059","menuName":"分路用电","menuUrl":"","parentId":"","menuOrder":3,"menuList":[{"menuId":"8a8a8bd261d4fe090161d50db8000065","menuName":"实时用电数据","menuUrl":"/RTElecData","parentId":"297e85b261877fbf0161880151f80059","menuOrder":1},{"menuId":"8a8a8bd261db05530161db0bd70d000a","menuName":"日用电数据","menuUrl":"/dayElecDetail","parentId":"297e85b261877fbf0161880151f80059","menuOrder":2},{"menuId":"8a8a8bd261db12780161db2208a5000a","menuName":"月用电数据","menuUrl":"/monthElecDetail","parentId":"297e85b261877fbf0161880151f80059","menuOrder":3},{"menuId":"8a8a8bd261db12780161db22b923000b","menuName":"年用电数据","menuUrl":"/yearElecDetail","parentId":"297e85b261877fbf0161880151f80059","menuOrder":4},{"menuId":"8a8a8a0664f834db0164f98b928600eb","menuName":"能耗报表下载","menuUrl":"/elecPowerInfoList","parentId":"297e85b261877fbf0161880151f80059","menuOrder":8}]},{"menuId":"297e85b2618284ea016182b87165000c","menuName":"用电分析","menuUrl":"","parentId":"","menuOrder":4,"menuList":[{"menuId":"297e85b2618284ea016182bee07d005a","menuName":"三相不平衡度分析","menuUrl":"/threePhasePmbalanceAnalysis","parentId":"297e85b2618284ea016182b87165000c","menuOrder":1},{"menuId":"297e85b261835fc60161845f97150074","menuName":"分时电量分析","menuUrl":"/PVTimeElecAnalysis","parentId":"297e85b2618284ea016182b87165000c","menuOrder":2},{"menuId":"8a8a8bcd6183f2190161845f3c050058","menuName":"电量分析","menuUrl":"/electricAnalysis","parentId":"297e85b2618284ea016182b87165000c","menuOrder":3},{"menuId":"297e85b261835fc601618475b59900cb","menuName":"用电构成分析","menuUrl":"/elecPowerConstituteAnalysis","parentId":"297e85b2618284ea016182b87165000c","menuOrder":5},{"menuId":"297e85b261877fbf016187b0f48e0003","menuName":"监测点对比分析","menuUrl":"/meterAssetComparativeAnalysis","parentId":"297e85b2618284ea016182b87165000c","menuOrder":6},{"menuId":"8a8a8bd26205645b016205843cc8000a","menuName":"负荷分析","menuUrl":"/loadAnalysis","parentId":"297e85b2618284ea016182b87165000c","menuOrder":7},{"menuId":"8a8a8a0664f834db01650e4eec110a79","menuName":"能耗报表下载","menuUrl":"/elecPowerInfoList","parentId":"297e85b2618284ea016182b87165000c","menuOrder":8}]},{"menuId":"40285601528240bb015282509a9b0003","menuName":"需求响应","menuUrl":"","parentId":"","menuOrder":7,"menuList":[{"menuId":"4028b8815ec6816c015ec7272be3105d","menuName":"响应事件管理","menuUrl":"/drEventList","parentId":"40285601528240bb015282509a9b0003","menuOrder":2},{"menuId":"4028b8815ec6816c015ec728c228105f","menuName":"参与响应电器","menuUrl":"/adrDeviceList","parentId":"40285601528240bb015282509a9b0003","menuOrder":3},{"menuId":"4028b8815ec6816c015ec72821b0105e","menuName":"参与响应计划","menuUrl":"/optPlanList","parentId":"40285601528240bb015282509a9b0003","menuOrder":4},{"menuId":"4028b8815ec6816c015ec72af48e1061","menuName":"负荷集成商查询","menuUrl":"/loadIntegratorList","parentId":"40285601528240bb015282509a9b0003","menuOrder":5},{"menuId":"4028b8815ec6816c015ec72a01561060","menuName":"负荷数据上报","menuUrl":"/drDataReport","parentId":"40285601528240bb015282509a9b0003","menuOrder":6},{"menuId":"8a8a8bb3606e552d01606e57abce0006","menuName":"控制策略说明","menuUrl":"/drTacticOverview","parentId":"40285601528240bb015282509a9b0003","menuOrder":7},{"menuId":"8a8a8b6a6168e5f4016169049bca0003","menuName":"注册","menuUrl":"/venRegister","parentId":"40285601528240bb015282509a9b0003","menuOrder":8},{"menuId":"8a8a8bcf648c4a8401648c4d37d80001","menuName":"实时电价管理","menuUrl":"/realtimeElePriceManage","parentId":"40285601528240bb015282509a9b0003","menuOrder":9},{"menuId":"8a8a8a066402a8af016415eaa4df004c","menuName":"行标注册","menuUrl":"/dnRegister","parentId":"40285601528240bb015282509a9b0003","menuOrder":100}]},{"menuId":"8a8a8bcf6492ea20016492eb7da30001","menuName":"策略中心","menuUrl":"","parentId":"","menuOrder":7,"menuList":[{"menuId":"8a8a8bcf649111a7016491966b920008","menuName":"控制指令","menuUrl":"/realtimeElePriceControl","parentId":"8a8a8bcf6492ea20016492eb7da30001","menuOrder":1},{"menuId":"8a8a8bcf649111a7016491972b200009","menuName":"策略管理","menuUrl":"/realtimeElePriceStrategy","parentId":"8a8a8bcf6492ea20016492eb7da30001","menuOrder":2}]},{"menuId":"8a8a8bba59398ebf015939982fa80009","menuName":"费用中心","menuUrl":"","parentId":"","menuOrder":8,"menuList":[{"menuId":"8a8a8bc959c90c360159c90def9e0001","menuName":"费用总览","menuUrl":"/chargeOverview","parentId":"8a8a8bba59398ebf015939982fa80009","menuOrder":1},{"menuId":"8a8a8bbd59aae05d0159aae1e3b80002","menuName":"费用配置","menuUrl":"/tariffAllocation","parentId":"8a8a8bba59398ebf015939982fa80009","menuOrder":2},{"menuId":"8a8a8bc959c90c360159c90e90730002","menuName":"资费说明","menuUrl":"/tariffDescription","parentId":"8a8a8bba59398ebf015939982fa80009","menuOrder":3},{"menuId":"8a8a8bc459b0dbdb0159b0dcc1be0001","menuName":"费用报表下载","menuUrl":"/elecFeesInfoList","parentId":"8a8a8bba59398ebf015939982fa80009","menuOrder":4}]},{"menuId":"297e85b2617889c50161789054eb0021","menuName":"档案管理","menuUrl":"","parentId":"","menuOrder":11,"menuList":[{"menuId":"297e85b2617892e601617893be910004","menuName":"表计档案管理","menuUrl":"/meterAssetFileMng","parentId":"297e85b2617889c50161789054eb0021","menuOrder":1}]},{"menuId":"8a8a8a0665466e0b0165470b84b80034","menuName":"admin","menuUrl":"","parentId":"","menuOrder":11,"menuList":[]},{"menuId":"297e85b26179109801617946d1aa003c","menuName":"报警中心","menuUrl":"","parentId":"","menuOrder":12,"menuList":[{"menuId":"297e85b2617910980161795bca6b0041","menuName":"设备报警管理","menuUrl":"/deviceAlarmMng","parentId":"297e85b26179109801617946d1aa003c","menuOrder":1},{"menuId":"297e85b261791098016179697bf90094","menuName":"报警设置","menuUrl":"/alarmSettings","parentId":"297e85b26179109801617946d1aa003c","menuOrder":2},{"menuId":"297e85b261835fc6016183ea02990014","menuName":"设备报警分析","menuUrl":"/deviceAlarmAnalysis","parentId":"297e85b26179109801617946d1aa003c","menuOrder":3}]},{"menuId":"8a8a8bcd6182e6300161834d26a60006","menuName":"统计报表","menuUrl":"","parentId":"","menuOrder":15,"menuList":[{"menuId":"8a8a8bcd6182e6300161835108c00007","menuName":"抄见电量日报表","menuUrl":"/electricityDailyList","parentId":"8a8a8bcd6182e6300161834d26a60006","menuOrder":1}]},{"menuId":"8a8a8bba59203b600159203cbc2b0001","menuName":"后台管理","menuUrl":"","parentId":"","menuOrder":17,"menuList":[{"menuId":"8a8a8bba59203b600159203d0eb30002","menuName":"用户操作","menuUrl":"/usermenuOrder","parentId":"8a8a8bba59203b600159203cbc2b0001","menuOrder":1},{"menuId":"8a8a8bba59203b600159203da6f50004","menuName":"系统异常","menuUrl":"/systemException","parentId":"8a8a8bba59203b600159203cbc2b0001","menuOrder":3},{"menuId":"8a8a8bba59203b600159203e3c3f0006","menuName":"菜单配置","menuUrl":"/configurePermissions","parentId":"8a8a8bba59203b600159203cbc2b0001","menuOrder":5},{"menuId":"8a8a8b05593dfc4501593dfd92400001","menuName":"后门","menuUrl":"/backdoor","parentId":"8a8a8bba59203b600159203cbc2b0001","menuOrder":6}]},{"menuId":"8a8a8bcf6361c7fb016361cf305e000b","menuName":"实证效果分析","menuUrl":"","parentId":"","menuOrder":22,"menuList":[{"menuId":"8a8a8bcf6361c7fb016361cf6b4e000c","menuName":"实证设备功能指标分析","menuUrl":"","parentId":"8a8a8bcf6361c7fb016361cf305e000b","menuOrder":1},{"menuId":"8a8a8bcf6361c7fb016361cf9e9b000d","menuName":"实证设备性能指标分析","menuUrl":"/developing","parentId":"8a8a8bcf6361c7fb016361cf305e000b","menuOrder":2},{"menuId":"8a8a8bcf6361c7fb016361cfe615000e","menuName":"实证效果对比","menuUrl":"/developing","parentId":"8a8a8bcf6361c7fb016361cf305e000b","menuOrder":3}]},{"menuId":"8a8a8bcf6361c7fb016361d00c36000f","menuName":"实证资源管理","menuUrl":"","parentId":"","menuOrder":23,"menuList":[{"menuId":"8a8a8bcf6361c7fb016361d0418e0010","menuName":"实证设备管理","menuUrl":"/drResourceMng","parentId":"8a8a8bcf6361c7fb016361d00c36000f","menuOrder":1}]},{"menuId":"8a8a8bcf6361c7fb016361d069ad0011","menuName":"实证安全防护","menuUrl":"","parentId":"","menuOrder":24,"menuList":[{"menuId":"8a8a8bcf6361c7fb016361d09ca90012","menuName":"实证通讯安全配置","menuUrl":"/DRIndustryStandardParamConfig","parentId":"8a8a8bcf6361c7fb016361d069ad0011","menuOrder":1},{"menuId":"8a8a8bcf6361c7fb016361d0e2f60013","menuName":"实证设备运行阈值配置","menuUrl":"/loadThresholdMsgMng","parentId":"8a8a8bcf6361c7fb016361d069ad0011","menuOrder":2}]},{"menuId":"8a8a8bcf6361c7fb016361cd2a600005","menuName":"电量偏差管理","menuUrl":"","parentId":"","menuOrder":25,"menuList":[{"menuId":"8a8a8bcf6361c7fb016361cd72ef0006","menuName":"目标电量设置","menuUrl":"/targetPowerSetting","parentId":"8a8a8bcf6361c7fb016361cd2a600005","menuOrder":1},{"menuId":"8a8a8bcf6361c7fb016361cda2ee0007","menuName":"实际电量监测","menuUrl":"/actualPowerMonitoring","parentId":"8a8a8bcf6361c7fb016361cd2a600005","menuOrder":2},{"menuId":"8a8a8bcf6361c7fb016361cdde360008","menuName":"电量偏差控制策略","menuUrl":"/elecDeviationControlStrategy","parentId":"8a8a8bcf6361c7fb016361cd2a600005","menuOrder":3},{"menuId":"8a8a8bcf6361c7fb016361ce19fe0009","menuName":"电量偏差分析","menuUrl":"/elecDeviationAnalysis","parentId":"8a8a8bcf6361c7fb016361cd2a600005","menuOrder":4}]},{"menuId":"40285601528240bb015282509a9b0004","menuName":"系统管理","menuUrl":"","parentId":"","menuOrder":222,"menuList":[{"menuId":"40285601528240bb015282509a9b0012","menuName":"用户管理","menuUrl":"/userManagement","parentId":"40285601528240bb015282509a9b0004","menuOrder":1},{"menuId":"40285601528240bb015282509a9b0013","menuName":"角色管理","menuUrl":"/roleInfoList","parentId":"40285601528240bb015282509a9b0004","menuOrder":2},{"menuId":"40285601528240bb015282509a9b0011","menuName":"机构管理","menuUrl":"/orgManagement","parentId":"40285601528240bb015282509a9b0004","menuOrder":4},{"menuId":"40285601528240bb015282509a9b000f","menuName":"分组管理","menuUrl":"/groupManagement","parentId":"40285601528240bb015282509a9b0004","menuOrder":5},{"menuId":"40285601528240bb015282509a9b0010","menuName":"设备管理","menuUrl":"/appUserManagement","parentId":"40285601528240bb015282509a9b0004","menuOrder":6},{"menuId":"8a8a8bba59203b600159203de8940005","menuName":"报表管理","menuUrl":"/energyPaper","parentId":"40285601528240bb015282509a9b0004","menuOrder":7},{"menuId":"8a8a8bbf6149a9b3016149b69ec80002","menuName":"虚拟设备管理","menuUrl":"/deviceManagement","parentId":"40285601528240bb015282509a9b0004","menuOrder":8},{"menuId":"8a8a8be156b6457a0156b6688db20003","menuName":"联系人管理","menuUrl":"/contactManagement","parentId":"40285601528240bb015282509a9b0004","menuOrder":9},{"menuId":"8a8a8a045f5cb1f3015f5cbd3082000b","menuName":"第三方设备管理","menuUrl":"/thirdAppMng","parentId":"40285601528240bb015282509a9b0004","menuOrder":11},{"menuId":"8a8a8bae62427e64016242800ee30003","menuName":"统计数据下载","menuUrl":"/anlyDataOverview","parentId":"40285601528240bb015282509a9b0004","menuOrder":12},{"menuId":"8a8a8a06653bfe9f01653c0dbca40008","menuName":"菜单配置","menuUrl":"/menuConfig","parentId":"40285601528240bb015282509a9b0004","menuOrder":15}]}],
            menuTableData: [],
            menuNameMap: [
                {name: '菜单名', key: 'menuName', percent: '20%'},
				{name: '菜单链接', key: 'menuUrl', percent: '25%'},
				{name: '菜单图标', key: 'menuIcon', percent: '20%'},
				{name: '排序', key: 'menuName', percent: '15%'},
            ],

            inputBtnData: [{"menuId":"297e85b2617892e601617893be910004","btnName":"表计档案管理","btnList":[{"btnId":"8a8a8a045f7b435a015f7b60f72a00d1","btnName":"中断","btnAlias":"interruptedEventBtn","btnUrl":"/drEventDetail.jsp","menuId":"297e85b2617892e601617893be910004","btnMethod":"","btnDwrmethod":""}]},{"menuId":"40285601528240bb015282509a9b0005","btnName":"区域控制","btnList":[{"btnId":"8a8a8bbe5741830c015741c9f61b0099","btnName":"单控","btnAlias":"ctrStrategyBtn","btnUrl":"","menuId":"40285601528240bb015282509a9b0005","btnMethod":"","btnDwrmethod":""},{"btnId":"8a8a8bbe5741830c015741c9b45b0097","btnName":"群控","btnAlias":"groupControlBtn","btnUrl":"","menuId":"40285601528240bb015282509a9b0005","btnMethod":"","btnDwrmethod":""}]},{"menuId":"40285601528240bb015282509a9b0006","btnName":"策略控制","btnList":[{"btnId":"8a8a8b9b574b33fb01574b3cadf70033","btnName":"查看策略的详情","btnAlias":"lookStrategyDetailBtn","btnUrl":"","menuId":"40285601528240bb015282509a9b0006","btnMethod":"","btnDwrmethod":""},{"btnId":"8a8a8b9b574b33fb01574b3d083b0034","btnName":"策略控制","btnAlias":"ctrStrategyBtn","btnUrl":"","menuId":"40285601528240bb015282509a9b0006","btnMethod":"controlTactic","btnDwrmethod":""}]},{"menuId":"40285601528240bb015282509a9b0007","btnName":"策略管理","btnList":[{"btnId":"40285601528240bb01528251b32303d0","btnName":"新增策略","btnAlias":"addStrategyBtn","btnUrl":"/strategyAdd.jsp","menuId":"40285601528240bb015282509a9b0007","btnMethod":"saveSceneTactics,saveTimmingTactics","btnDwrmethod":""},{"btnId":"40285601528240bb01528251b32303d2","btnName":"编辑策略","btnAlias":"editStrategyBtn","btnUrl":"/strategyAdd.jsp","menuId":"40285601528240bb015282509a9b0007","btnMethod":"saveSceneTactics,saveTimmingTactics","btnDwrmethod":""},{"btnId":"8a8a8b9b574b887701574b9216570004","btnName":"查看策略","btnAlias":"checkStrategyBtn","btnUrl":"/strategyAdd.jsp","menuId":"40285601528240bb015282509a9b0007","btnMethod":"","btnDwrmethod":""},{"btnId":"40285601528240bb01528251b32303d1","btnName":"删除策略","btnAlias":"delStrategyBtn","btnUrl":"","menuId":"40285601528240bb015282509a9b0007","btnMethod":"delTacticsByIds","btnDwrmethod":""}]},{"menuId":"40285601528240bb015282509a9b0008","btnName":"策略模板","btnList":[{"btnId":"40285601528240bb01528251b32303d4","btnName":"删除模板","btnAlias":"delTemplateBtn","btnUrl":"","menuId":"40285601528240bb015282509a9b0008","btnMethod":"delTacticsTemplateByIds","btnDwrmethod":""},{"btnId":"40285601528240bb01528251b32303d3","btnName":"新增模板","btnAlias":"addTemplateBtn","btnUrl":"/templateAdd.jsp","menuId":"40285601528240bb015282509a9b0008","btnMethod":"saveOrUpdateTacticsTemp","btnDwrmethod":""},{"btnId":"40285601528240bb01528251b32303d5","btnName":"编辑模板","btnAlias":"templateOrgEditBtn","btnUrl":"/templateAdd.jsp","menuId":"40285601528240bb015282509a9b0008","btnMethod":"","btnDwrmethod":""}]},{"menuId":"40285601528240bb015282509a9b000f","btnName":"分组管理","btnList":[{"btnId":"40285601528240bb01528251b32303d8","btnName":"编辑分组","btnAlias":"editGroupBtn","btnUrl":"/groupEdit.jsp","menuId":"40285601528240bb015282509a9b000f","btnMethod":"saveOrUpdateGroup","btnDwrmethod":""},{"btnId":"8a8a8b9b57463ded0157464d54ed0013","btnName":"同步至云端","btnAlias":"commitToCloudBtn","btnUrl":"","menuId":"40285601528240bb015282509a9b000f","btnMethod":"","btnDwrmethod":""},{"btnId":"40285601528240bb01528251b32303d7","btnName":"删除分组","btnAlias":"delGroupBtn","btnUrl":"","menuId":"40285601528240bb015282509a9b000f","btnMethod":"deleteGroup","btnDwrmethod":""},{"btnId":"8a8a8b9b574a23b101574a3eb92000ac","btnName":"一键分配设备","btnAlias":"distributionEquipmentBtn","btnUrl":"","menuId":"40285601528240bb015282509a9b000f","btnMethod":"","btnDwrmethod":""},{"btnId":"40285601528240bb01528251b32303d6","btnName":"新增分组","btnAlias":"addGroupBtn","btnUrl":"/groupAdd.jsp","menuId":"40285601528240bb015282509a9b000f","btnMethod":"saveOrUpdateGroup","btnDwrmethod":""},{"btnId":"40285601528240bb01528251b32303d9","btnName":"设备分配","btnAlias":"deviceAllocBtn","btnUrl":"/deviceAllocation.jsp","menuId":"40285601528240bb015282509a9b000f","btnMethod":"addGroupDevice","btnDwrmethod":""}]},{"menuId":"40285601528240bb015282509a9b0010","btnName":"设备管理","btnList":[{"btnId":"40285601528240bb01528251b32303e6","btnName":"删除赫马账户","btnAlias":"delAppUserBtn","btnUrl":"","menuId":"40285601528240bb015282509a9b0010","btnMethod":"deleteHemsUser","btnDwrmethod":""},{"btnId":"8a8a8b9b574576a10157459fb14e003d","btnName":"查看用户电器","btnAlias":"hemsUserDetailBtn","btnUrl":"","menuId":"40285601528240bb015282509a9b0010","btnMethod":"","btnDwrmethod":""},{"btnId":"40285601528240bb01528251b32303e7","btnName":"修改赫马账户","btnAlias":"hemsUserEditBtn","btnUrl":"/appUserAdd.jsp","menuId":"40285601528240bb015282509a9b0010","btnMethod":"updateHemsUser","btnDwrmethod":""},{"btnId":"40285601528240bb01528251b32303da","btnName":"添加赫马账户","btnAlias":"addAppUserBtn","btnUrl":"/appUserAdd.jsp","menuId":"40285601528240bb015282509a9b0010","btnMethod":"saveHemsUser","btnDwrmethod":""},{"btnId":"40285601528g40bb01528251b32303d0","btnName":"查看全部电器","btnAlias":"hemsAppBtn","btnUrl":"/appManagement.jsp","menuId":"40285601528240bb015282509a9b0010","btnMethod":"queryUserApp","btnDwrmethod":""}]},{"menuId":"40285601528240bb015282509a9b0011","btnName":"机构管理","btnList":[{"btnId":"4028b88164f459450164f46d95f0004e","btnName":"机构菜单配置","btnAlias":"menuConfig","btnUrl":"","menuId":"40285601528240bb015282509a9b0011","btnMethod":"","btnDwrmethod":""},{"btnId":"40285601528240bb01528251b32303dc","btnName":"编辑机构","btnAlias":"editOrgBtn","btnUrl":"/orgAdd.jsp","menuId":"40285601528240bb015282509a9b0011","btnMethod":"saveOrUpdateOrg","btnDwrmethod":""},{"btnId":"40285601528240bb01528251b32303dd","btnName":"机构绑定","btnAlias":"orgBinding","btnUrl":"/binding.jsp","menuId":"40285601528240bb015282509a9b0011","btnMethod":"saveOrUpdateCollectionRel","btnDwrmethod":""},{"btnId":"40285601528240bb01528251b32303db","btnName":"新增机构","btnAlias":"addOrgBtn","btnUrl":"/orgAdd.jsp","menuId":"40285601528240bb015282509a9b0011","btnMethod":"saveOrUpdateOrg","btnDwrmethod":""},{"btnId":"40285601528240bb01528251b32303e8","btnName":"删除机构","btnAlias":"delOrgBtn","btnUrl":"","menuId":"40285601528240bb015282509a9b0011","btnMethod":"deleteOrg","btnDwrmethod":""}]},{"menuId":"40285601528240bb015282509a9b0012","btnName":"用户管理","btnList":[{"btnId":"40285601528240bb01528251b32303de","btnName":"新增用户","btnAlias":"addUserBtn","btnUrl":"/userManagement.jsp","menuId":"40285601528240bb015282509a9b0012","btnMethod":"saveOrUpdateUser","btnDwrmethod":""},{"btnId":"40285601528240bb01528251b32303e0","btnName":"编辑用户","btnAlias":"editUserBtn","btnUrl":"/userManagement.jsp","menuId":"40285601528240bb015282509a9b0012","btnMethod":"saveOrUpdateUser","btnDwrmethod":""},{"btnId":"40285601528240bb01528251b32303df","btnName":"删除用户","btnAlias":"delUserBtn","btnUrl":"/userManagement.jsp","menuId":"40285601528240bb015282509a9b0012","btnMethod":"deleteUser","btnDwrmethod":""}]},{"menuId":"40285601528240bb015282509a9b0013","btnName":"角色管理","btnList":[{"btnId":"40285601528240bb01528251b32303e1","btnName":"新增角色","btnAlias":"addRoleBtn","btnUrl":"/roleAddOrEdit.jsp","menuId":"40285601528240bb015282509a9b0013","btnMethod":"saveOrUpdateRole","btnDwrmethod":""},{"btnId":"40285601528240bb01528251b32303e3","btnName":"编辑角色","btnAlias":"editRoleBtn","btnUrl":"/roleAddOrEdit.jsp","menuId":"40285601528240bb015282509a9b0013","btnMethod":"saveOrUpdateRole","btnDwrmethod":""},{"btnId":"40285601528240bb01528251b32303e2","btnName":"删除角色","btnAlias":"delRoleBtn","btnUrl":"","menuId":"40285601528240bb015282509a9b0013","btnMethod":"delRoleById","btnDwrmethod":""},{"btnId":"40285601528240bb01528251b32303e5","btnName":"权限配置","btnAlias":"prvlgConfigBtn","btnUrl":"/rolePrvlgCfg.jsp","menuId":"40285601528240bb015282509a9b0013","btnMethod":"saveRolePrvlg","btnDwrmethod":""}]},{"menuId":"4028b8815ec6816c015ec7272be3105d","btnName":"响应事件管理","btnList":[{"btnId":"8a8a8bae5eccc1d5015ecce126c90003","btnName":"详情","btnAlias":"detailViewButton","btnUrl":"/drEventDetail.jsp","menuId":"4028b8815ec6816c015ec7272be3105d","btnMethod":"","btnDwrmethod":""},{"btnId":"8a8a8a045f7b435a015f7b6135fe00d2","btnName":"撤销","btnAlias":"revokedEventBtn","btnUrl":"/drEventDetail.jsp","menuId":"4028b8815ec6816c015ec7272be3105d","btnMethod":"","btnDwrmethod":""},{"btnId":"8a8a8bcd6182b2ed016182dd72050006","btnName":"中断","btnAlias":"interruptedEventBtn","btnUrl":"/drEventDetail.jsp","menuId":"4028b8815ec6816c015ec7272be3105d","btnMethod":"","btnDwrmethod":""}]},{"menuId":"4028b8815ec6816c015ec72821b0105e","btnName":"参与响应计划","btnList":[{"btnId":"8a8a8a045f5cb1f3015f5cc033060061","btnName":"删除","btnAlias":"delPlan","btnUrl":"","menuId":"4028b8815ec6816c015ec72821b0105e","btnMethod":"","btnDwrmethod":""},{"btnId":"8a8a8a045f5cb1f3015f5cbfffcf0060","btnName":"新增","btnAlias":"addPlan","btnUrl":"","menuId":"4028b8815ec6816c015ec72821b0105e","btnMethod":"","btnDwrmethod":""}]},{"menuId":"4028b8815ec6816c015ec72a01561060","btnName":"负荷数据上报","btnList":[{"btnId":"8a8a8a045f5cb1f3015f5cf0ac260094","btnName":"可削减上报比率","btnAlias":"configBtn","btnUrl":"/drDataReport.jsp","menuId":"4028b8815ec6816c015ec72a01561060","btnMethod":"","btnDwrmethod":""}]},{"menuId":"4028b8815ec6816c015ec72af48e1061","btnName":"负荷集成商查询","btnList":[{"btnId":"8a8a8bae5ecc12f5015eccbb3927000d","btnName":"合约查看","btnAlias":"viewBtn","btnUrl":"/contractDetail.jsp","menuId":"4028b8815ec6816c015ec72af48e1061","btnMethod":"","btnDwrmethod":""}]},{"menuId":"8a8a8a045f5cb1f3015f5cbd3082000b","btnName":"第三方设备管理","btnList":[{"btnId":"8a8a8a045f5cb1f3015f5cbde8b3000c","btnName":"下载模板","btnAlias":"downloadTempBtn","btnUrl":"","menuId":"8a8a8a045f5cb1f3015f5cbd3082000b","btnMethod":"downloadThirdAppTemp","btnDwrmethod":""},{"btnId":"8a8a8a045f5cb1f3015f5cbe2dc4000d","btnName":"上传","btnAlias":"uploadTempBtn","btnUrl":"","menuId":"8a8a8a045f5cb1f3015f5cbd3082000b","btnMethod":"uploadThirdAppTemp","btnDwrmethod":""},{"btnId":"8a8a8a045f5cb1f3015f5cbe72cf000e","btnName":"删除","btnAlias":"delBtn","btnUrl":"","menuId":"8a8a8a045f5cb1f3015f5cbd3082000b","btnMethod":"delThirdApp","btnDwrmethod":""}]},{"menuId":"8a8a8bba59203b600159203de8940005","btnName":"报表管理","btnList":[{"btnId":"8a8a8bba59203b6001592042faaa0008","btnName":"配置联系人","btnAlias":"queryContactBtn","btnUrl":"/addEmailByType.jsp","menuId":"8a8a8bba59203b600159203de8940005","btnMethod":"","btnDwrmethod":""}]},{"menuId":"8a8a8bba59203b600159203e3c3f0006","btnName":"菜单配置","btnList":[{"btnId":"8a8a8bba59203b6001592044dcb1000c","btnName":"编辑菜单","btnAlias":"editMenuBtn","btnUrl":"/addOrUpdateMenu.jsp","menuId":"8a8a8bba59203b600159203e3c3f0006","btnMethod":"","btnDwrmethod":""},{"btnId":"8a8a8bba59203b6001592045460f000d","btnName":"新增按钮","btnAlias":"addButtonBtn","btnUrl":"/addOrUpdateButton.jsp","menuId":"8a8a8bba59203b600159203e3c3f0006","btnMethod":"saveOrUpdateButton","btnDwrmethod":""},{"btnId":"8a8a8bba59203b600159204770ac0010","btnName":"删除按钮","btnAlias":"delButtonBtn","btnUrl":"","menuId":"8a8a8bba59203b600159203e3c3f0006","btnMethod":"deleteAllMenu","btnDwrmethod":""},{"btnId":"8a8a8bba59203b600159204591c6000e","btnName":"删除菜单","btnAlias":"delMenuBtn","btnUrl":"","menuId":"8a8a8bba59203b600159203e3c3f0006","btnMethod":"deleteAllButton","btnDwrmethod":""},{"btnId":"8a8a8bba59203b60015920472a8f000f","btnName":"编辑按钮","btnAlias":"editButtonBtn","btnUrl":"/addOrUpdateButton.jsp","menuId":"8a8a8bba59203b600159203e3c3f0006","btnMethod":"","btnDwrmethod":""},{"btnId":"8a8a8bba59203b6001592047fd7b0011","btnName":"新增菜单","btnAlias":"addMenuBtn","btnUrl":"/addOrUpdateMenu.jsp","menuId":"8a8a8bba59203b600159203e3c3f0006","btnMethod":"saveOrUpdateMenu","btnDwrmethod":""}]},{"menuId":"8a8a8bbd59aae05d0159aae1e3b80002","btnName":"费用配置","btnList":[{"btnId":"8a8a8bbd59aae05d0159aae2dc0c0003","btnName":"电价方案新增","btnAlias":"addPlanBtn","btnUrl":"/tariffPlan.jsp","menuId":"8a8a8bbd59aae05d0159aae1e3b80002","btnMethod":"","btnDwrmethod":""}]},{"menuId":"8a8a8bc459b0dbdb0159b0dcc1be0001","btnName":"费用报表下载","btnList":[{"btnId":"8a8a8bc459b0dbdb0159b0ddc2880002","btnName":"报表下载","btnAlias":"downFeesFileBtn","btnUrl":"","menuId":"8a8a8bc459b0dbdb0159b0dcc1be0001","btnMethod":"downloadElecFeesReport","btnDwrmethod":""}]},{"menuId":"8a8a8bcf6361c7fb016361cd72ef0006","btnName":"目标电量设置","btnList":[{"btnId":"8a8a8bcf6361c7fb016361d3ca120017","btnName":"调整目标量","btnAlias":"editBtn","btnUrl":"","menuId":"8a8a8bcf6361c7fb016361cd72ef0006","btnMethod":"","btnDwrmethod":""}]},{"menuId":"8a8a8bcf6361c7fb016361cdde360008","btnName":"电量偏差控制策略","btnList":[{"btnId":"8a8a8bcf6361c7fb016361d450510018","btnName":"策略启用","btnAlias":"adjustBtn","btnUrl":"","menuId":"8a8a8bcf6361c7fb016361cdde360008","btnMethod":"","btnDwrmethod":""}]},{"menuId":"8a8a8bcf6361c7fb016361d0418e0010","btnName":"实证设备管理","btnList":[{"btnId":"8a8a8bcf6361c7fb016361d29d250014","btnName":"新增","btnAlias":"addBtn","btnUrl":"","menuId":"8a8a8bcf6361c7fb016361d0418e0010","btnMethod":"","btnDwrmethod":""},{"btnId":"8a8a8bcf6361c7fb016361d2e3780015","btnName":"编辑","btnAlias":"editBtn","btnUrl":"","menuId":"8a8a8bcf6361c7fb016361d0418e0010","btnMethod":"","btnDwrmethod":""},{"btnId":"8a8a8bcf6361c7fb016361d34b960016","btnName":"删除","btnAlias":"deleteBtn","btnUrl":"","menuId":"8a8a8bcf6361c7fb016361d0418e0010","btnMethod":"","btnDwrmethod":""}]},{"menuId":"8a8a8be156b6457a0156b6688db20003","btnName":"联系人管理","btnList":[{"btnId":"8a8a8b9b574a747c01574aba311a0008","btnName":"编辑联系人","btnAlias":"editContactBtn","btnUrl":"/addOrUpdateContact.jsp","menuId":"8a8a8be156b6457a0156b6688db20003","btnMethod":"","btnDwrmethod":""},{"btnId":"8a8a8b9b574149b101574150a0890050","btnName":"删除联系人","btnAlias":"delContactBtn","btnUrl":"","menuId":"8a8a8be156b6457a0156b6688db20003","btnMethod":"","btnDwrmethod":""},{"btnId":"8a8a8b9b574149b10157414eb1e60006","btnName":"新增联系人","btnAlias":"addContactBtn","btnUrl":"/addOrUpdateContact.jsp","menuId":"8a8a8be156b6457a0156b6688db20003","btnMethod":"","btnDwrmethod":""}]}],
            btnTableData: [],
            btnNameMap: [
                {name: '父级菜单名 / 按钮名', key: 'btnName', percent: '20%'},
				{name: '按钮别名', key: 'btnAlias', percent: '15%'},
				{name: '按钮链接', key: 'btnUrl', percent: '20%'},
				{name: '按钮方法', key: 'btnMethod', percent: '25%'},
            ],

            menuDialogVisible: false,
            btnDialogVisible: false,
            menuForm:{},
            btnForm: {},
            btnMenuList: [],
            fileList2: [],
            expand: 'index'
        }
    },
    //计算属性
    computed: {},
    //方法
    methods: {
        arrObjRecSetParam,
        

    },
    //过滤器
    filters: {},
    //生命周期钩子——组件实例刚被创建，组件属性计算之前
    beforeCreate() {},
    //生命周期钩子——组件实例创建完成，属性已绑定，但DOM未生成
    created() {
    },
    //生命周期钩子——完成了 el 和 data 初始化，模拟编译/挂载之前
    beforeMount() {},
    //生命周期钩子——完成了 el 和 data 初始化，模拟编译/挂载完成
    mounted() {
        this.menuTableData = JSON.parse( this.arrObjRecSetParam(this.inputMenuData, 'menuList', 'unShowList', false) );
        this.btnTableData = JSON.parse( this.arrObjRecSetParam(this.inputBtnData, 'btnList', 'unShowList', false) );
        
    },
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

//用递归的方法给确定结构的多级数组对象添加给定属性,返回修改后数组的JSON字符串。
function arrObjRecSetParam (arry, listName, param, value) {
    let val = value === undefined ? null : value;
    for (let item of arry) {
        if( item[param] === undefined ) {
            item[param] = val
        }
        if(item[listName] !== undefined && item[listName] instanceof Array) {
            arrObjRecSetParam (item[listName], listName, param, value);
        }
    }
    return JSON.stringify( arry );
}


</script>

<style>
.purviewManagement .el-tabs__content{
    height: calc(100% - 55px);
}
.purviewManagement .el-tab-pane{
    height:100%;
}
.purviewManagement .secondList .is-left .cell{
    margin-left: 40px;
}
.purviewManagement .thirdList .is-left .cell{
    margin-left: 80px;
}
.purviewManagement .el-dialog__body{
    padding: 10px 20px 0;
}
.purviewManagement .el-table__expanded-cell{
    padding: 0;
}
.purviewManagement .inside th{
    display: none;
}
</style>


