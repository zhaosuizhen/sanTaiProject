<template>
    <!--农经办---土地承包数据 新增、编辑、详情页面-->
    <div id="landContractDataDetail" class="pageContent" v-loading="loading">
        <section class="sectionContent-40">
            <div class="miniNav">{{miniNav}}</div>
            <el-collapse  v-model="activeNames" @change="handleChange">
                <el-collapse-item name="1">
                    <template slot="title">
                        <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>基本信息</div> <!---->
                    </template>
                    <div class="formContent">
                        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm1" label-width="100px" class="demo-ruleForm">
                            <el-form-item label="年份：" prop="dataYear" class="formItem formSelect">
                                <el-date-picker
                                    v-model="ruleForm.dataYear"
                                    type="year"
                                    :disabled="urlType"
                                    value-format='yyyy'
                                    format='yyyy'
                                    :picker-options="pickerBeginDateAfter"
                                    placeholder="选择年">
                                    </el-date-picker>
                            </el-form-item>  
                            <el-form-item label="乡镇：" prop="township" class="formItem formSelect">
                                <el-select v-model="ruleForm.township" filterable clearable :disabled="urlType" placeholder="请选择">
                                    <el-option
                                    v-for="item in townshipOption"
                                    :key="item.id"
                                    :label="item.name"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-collapse-item>
                <el-collapse-item name="2">
                    <template slot="title">
                        <div><i class="collapseDownIcon" :class="[nameFlag.indexOf('2') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>承包单位信息</div>
                    </template>
                    <div class="formContent">
                        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                            <el-form-item label="权属单位名称：" class="formItem">
                                 <el-input v-model="ruleForm.affiliatedUnit" :disabled="urlType" placeholder="请输入权属单位名称"></el-input>
                            </el-form-item>
                            <el-form-item label="颁发证书数量：" class="formItem">
                                <el-input v-model="ruleForm.certificatesNum" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入颁发证书数量"></el-input>（个）
                            </el-form-item>
                            <div style="clear:both;"></div>
                            <el-form-item label="发包方数量：" class="formItem">
                                <el-input v-model="ruleForm.contractingOut" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入发包方数量"></el-input>（个）
                            </el-form-item>
                        </el-form>
                    </div>
                </el-collapse-item>
                <el-collapse-item name="3">
                    <template slot="title">
                        <div><i class="collapseDownIcon" :class="[nameFlag.indexOf('3') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>承包土地信息</div>
                    </template>
                    <div class="formContent">
                        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                            <el-form-item label="承包地块总数：" class="formItem">
                                 <el-input v-model="ruleForm.contractNum" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入承包地块总数"></el-input> （个）
                            </el-form-item>
                            <el-form-item label="非承包地块总数：" class="formItem">
                                <el-input v-model="ruleForm.noContractNum" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入非承包地块总数"></el-input>（块）
                            </el-form-item>
                            <div style="clear:both;"></div>
                            <el-form-item label="承包地块总面积：" class="formItem">
                                <el-input v-model="ruleForm.contractArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入承包地块总面积"></el-input>（亩）
                            </el-form-item>
                            <el-form-item label="非承包地块总面积：" class="formItem">
                                <el-input v-model="ruleForm.noContractArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入非承包地块总面积"></el-input>（亩）
                            </el-form-item>
                        </el-form>
                    </div>
                </el-collapse-item>
            </el-collapse>
            <!--自定义表单组件-->
            <Custom-form v-if="formDate.length>0" :formDate.sync = formDate :type='urlType' @customDatavalueChange='customDatavalueChange'></Custom-form>
            <el-row type='flex' justify="center" class="footrBtnGroup" v-if="!urlType">
            <el-button  type="primary" class="submitBtnMargin" @click="submit">提交</el-button>
            <el-button >取消</el-button>
        </el-row>
        </section>
        
    </div>
</template>
<script>
import { landContractDataDetail, landContractDataUpdate,landContractDataInsert } from '@/utils/api/nongJingBan/landContractData'; //农经办---土地承包数据
import {townshipOption,enterpriseTypeOption} from "@/assets/js/commonOptions";
import {handleCofirm} from '@/utils/messageBox/confirm';
import {getData} from '@/utils/nowTime';
import CustomForm from '@/components/customForm/CustomForm';
export default {
    name:'landContractDataDetail',
    data() {
        return {
            pickerBeginDateAfter: {
                disabledDate: time => {
                    return time.getTime() > new Date()-8.64e7;
                }
            },
            activeNames: ['1','2','3'], //默认折叠板全部打开
            nameFlag:[],
            miniNav:'', //左上角导航
            id:'', //数据的id
            urlType:true, //地址类型  edit--编辑 detail--查看 add-添加
            loading:false, //加载框
            formDate:[], //自定义调单传值给子组件
            ruleForm: {
                affiliatedUnit:'',//:'',//权属单位名称
                certificatesNum:'',//	颁发证书数量
                contractArea:'',//承包地块总面积
                contractNum:'',//承包地块总数
                contractingOut:'',//发包方数量
                createTime:'',//创建时间
                dataYear:'',//年份
                isCheck:'0',//是否审核
                isDelete:'0',//是否删除
                noContractArea:'',//非承包地块总面积
                noContractNum:'',//非承包地块总数
                township:'',//乡镇
                updateTime:'',//更新时间
            },
            rules: {
                dataYear: [
                    {required: true, message: '请选择年份',trigger: 'blur', }
                ],
                township: [
                    { required: true, message: '请选择乡镇',trigger: 'blur' }
                ]
            },
            townshipOption:townshipOption, //乡镇
            enterpriseTypeOption:enterpriseTypeOption //企业类型
        }
    },
    components:{
        'Custom-form':CustomForm
    },
    mounted(){
        this.nameFlag = this.activeNames;
        this.urlType = this.$route.query.type == 'detail'?true:false;
        this.miniNav = this.$route.query.toMiniNav; //左上角导航
        this.id = this.$route.query.id; //查看详情数据的id值
        this.initData(); //初始化数据
    },
    methods:{
        //自定义表单数值更改，父组件同步
        customDatavalueChange(data){
            this.formDate = data;
        },
        //折叠版折叠，打开，图标变化
        handleChange(val){
            if(val instanceof Array){
                val.sort();
                this.nameFlag = val
                console.log(this.nameFlag )
            }else{
                this.nameFlag[0] = val
            } 
        },
        //初始化页面数据
        initData(){
            this.getDataDetail(); //调用初始化接口
        },
        //详情接口，获取详情数据
        async getDataDetail(){
            this.loading = true; //显示加载框
            if(this.$route.query.type === 'add'){ // 新增时没有id，将id置空
                this.id = ''
            }
            let res = await landContractDataDetail({id:this.id});
             if(res.data.status== 0){
                this.ruleForm =  res.data.entitys;
                this.formDate =  res.data.entitys.customDataList; //自定义表单数据
            }else if(res.data.status== -1 || res.data.status== 500){
                this.$message({
                    message: res.data.msg,
                    type: 'warning'
                })
            }else if(res.data.status == -2){
                handleCofirm(res.data.msg, 'warning', false).then(() => {
                    window.loginOut();
                })
            }else{
                this.$message({
                    message: '服务器异常，请稍后再试',
                    type: 'warning'
                })
            }
            this.loading = false; //隐藏加载框
        },
        //提交事件
        async submit(){
            try{
                let valid1 = await this.$refs.ruleForm1.validate();
                let valid2 = await this.$refs.ruleForm2.validate();
                if(valid1 && valid2){
                    this.$confirm('确认提交吗？', '提示', {}).then(() => {
                        if(this.$route.query.type === 'add'){
                            this.addData(); //新增数据
                        }else{
                            this.updateData();//更新信息
                        } 
                    })
                }
            }catch(err){
                console.log(err)
            } 
        },
        //编辑接口调用
        async updateData(){
            this.loading = true; //显示加载框
            //删除不需要传值给后端的字段
            delete this.ruleForm.pageSize;
            delete this.ruleForm.currentPage
            delete this.ruleForm.queryStartTime
            delete this.ruleForm.queryEndTime
            delete this.ruleForm.queryKey
            delete this.ruleForm.buildUser
            delete this.ruleForm.checkUser
            this.ruleForm.id = this.id; //数据id
            this.ruleForm.updateTime = getData(); //更新时间
            this.ruleForm.customDataList = this.formDate;//自定义表单list
            let updateObj = JSON.stringify(this.ruleForm);
            let res = await landContractDataUpdate(updateObj);
             if(res.data.status== 0){
                this.$message({
                    message: '编辑成功',
                    type: 'success'
                })
                this.$router.go(-1); //返回上一路由
            }else if(res.data.status== -1 || res.data.status== 500){
                this.$message({
                    message: res.data.msg,
                    type: 'warning'
                })
            }else if(res.data.status == -2){
                handleCofirm(res.data.msg, 'warning', false).then(() => {
                    window.loginOut();
                })
            }else{
                this.$message({
                    message: '服务器异常，请稍后再试',
                    type: 'warning'
                })
            }
            this.loading = false; //隐藏加载框
        },
        //新增数据
        async addData(){
            this.loading = true; //显示加载框
            this.ruleForm.id = this.id; //数据id
            this.ruleForm.updateTime = getData(); //更新时间
            this.ruleForm.createTime = getData(); //创建时间
            this.ruleForm.customDataList = this.formDate;//自定义表单list
            let addObj = JSON.stringify(this.ruleForm);
            let res = await landContractDataInsert(addObj);
             if(res.data.status== 0){
                this.$message({
                    message:'新增成功',
                    type: 'success'
                })
                this.$router.go(-1); //返回上一路由
            }else if(res.data.status== -1 || res.data.status== 500){
                this.$message({
                    message: res.data.msg,
                    type: 'warning'
                })
            }else if(res.data.status == -2){
                handleCofirm(res.data.msg, 'warning', false).then(() => {
                    window.loginOut();
                })
            }else{
                this.$message({
                    message: '服务器异常，请稍后再试',
                    type: 'warning'
                })
            }
            this.loading = false; //隐藏加载框
        }


    }
}
</script>
<style scoped lang="scss">

</style>