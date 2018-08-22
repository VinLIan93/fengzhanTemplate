<template>
    <div class="telekTreeTable">
        <div class="treeTable el-table el-table--fit el-table--border el-table--scrollable-y el-table--enable-row-hover el-table--enable-row-transition el-table--small" style="height: calc(100% - 42px)">
            <div class="el-table__header-wrapper">
                <table class="el-table__header" cellspacing="0" cellpadding="0" border="0" style="width: 100%">
                    <thead class="has-gutter">
                        <tr>
                            <th v-for="head in namemap" class="is-center" :width="head.percent">
                                <div class="cell">{{head.name | ifUndefined}}</div>
                            </th>
                            <th class="is-center" width="20%">
                                <div class="cell">操作</div>
                            </th>
                            <th class="gutter" style="width: 17px;"></th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div class="el-table__body-wrapper is-scrolling-none" style="height: calc(100% - 41px)">
                <table v-for="item in tabledata" cellspacing="0" cellpadding="0" border="0" class="el-table__body" style="width: 100%">
                    <tbody>
                        <tr class="el-table__row">
                            <td v-for="(map, index) in namemap" :class=" index == 0 ? 'is-left' : 'is-center' " :width="map.percent">
                                <div class="cell">
                                    <span v-if="index == 0 && item[listname] && item[listname].length > 0">
                                        <i v-show="item.unShowList" class="el-icon-caret-right" @click="item.unShowList = false"></i>
                                        <i v-show="!item.unShowList" class="el-icon-caret-bottom" @click="item.unShowList = true"></i>
                                    </span>
                                    {{item[map.key] | ifUndefined}}
                                </div>
                            </td>                            
                            <td class="is-center" width="20%">
                                <el-button type="primary" plain icon="el-icon-edit" size="mini"></el-button>
                                <el-button type="danger" plain icon="el-icon-delete" size="mini"></el-button>
                            </td>
                        </tr>
                    </tbody>
                    <tbody v-show="!item.unShowList" v-for="child in item[listname]" class="secondList">                                
                        <tr class="el-table__row">
                            <td v-for="(map, index) in namemap" :class=" index == 0 ? 'is-left' : 'is-center' " :width="map.percent">
                                <div class="cell">
                                    <span v-if="index == 0 && child[listname] && child[listname].length > 0">
                                        <i v-show="child.unShowList" class="el-icon-caret-right" @click="child.unShowList = false"></i>
                                        <i v-show="!child.unShowList" class="el-icon-caret-bottom" @click="child.unShowList = true"></i>
                                    </span>
                                    {{child[map.key] | ifUndefined}}
                                </div>
                            </td>                            
                            <td class="is-center" width="20%">
                                <el-button type="primary" plain icon="el-icon-edit" size="mini"></el-button>
                                <el-button type="danger" plain icon="el-icon-delete" size="mini"></el-button>
                            </td>
                        </tr>

                        <tr v-show="!child.unShowList" v-for="third in child[listname]" class="table__row thirdList">
                            <td v-for="(map, index) in namemap" :class=" index == 0 ? 'is-left' : 'is-center' " :width="map.percent">
                                <div class="cell">
                                    {{third[map.key] | ifUndefined}}
                                </div>
                            </td>
                            <td class="is-center" width="20%">
                                <el-button type="primary" plain icon="el-icon-edit" size="mini"></el-button>
                                <el-button type="danger" plain icon="el-icon-delete" size="mini"></el-button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>



        </div>
    </div>
</template>

<script>

export default {
    name: 'telekTreeTable',
    //注册组件
    components: {},
    //属性传值
    props: {
        tabledata: Array,
        namemap: Array,
        listname: String
    },
    //数据
    data() {
		return {}
	},
    //计算属性
    computed: {},
    //方法
    methods: {},
    //过滤器
    filters: {
        ifUndefined(value) {
            if(value === undefined) {
                return '';
            }
            return value;
        }
    },
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
.telekTreeTable{
    height: 100%;
}
.telekTreeTable .secondList .is-left .cell{
    margin-left: 40px;
}
.telekTreeTable .thirdList .is-left .cell{
    margin-left: 80px;
}
</style>


