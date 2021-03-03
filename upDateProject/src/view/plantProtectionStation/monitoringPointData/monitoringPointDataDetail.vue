<template>
<!--质检办---农资信息店-->
    <div id="pigBreeDetail" class="pageContent" v-loading="loading">
        <section class="sectionContent">
            <div class="miniNav">{{miniNav}}</div>
            <el-collapse  v-model="activeNames" @change="handleChange">
                <el-collapse-item name="1">
                    <template slot="title">
                        <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>基础信息</div>
                    </template>
                    <div class="formContent">
                        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                            <el-form-item label="网关名称" prop="getaway" class="formItem">
                                <el-input v-model="ruleForm.getaway" :disabled="urlType" placeholder="请输入网关名称"></el-input>
                            </el-form-item>
                            <el-form-item label="所属测报点" prop="area" class="formItem">
                                <el-input v-model="ruleForm.area" :disabled="urlType" placeholder="请输入所属测报点"></el-input>
                            </el-form-item>
                            <div style="clear:both;"></div>
                            <el-form-item label="虫害种类" prop="pestType" class="formItem">
                                <el-input v-model="ruleForm.pestType" :disabled="urlType" placeholder="请输入虫害种类"></el-input>
                            </el-form-item>
                            <el-form-item label="诱芯持有效期" prop="validity" class="formItem">
                                <el-input v-model="ruleForm.validity" :disabled="urlType" placeholder="请输入诱芯持有效期"></el-input>(天)
                            </el-form-item>
                            <div style="clear:both;"></div>
                            <el-form-item label="降雨量" prop="rainfall" class="formItem">
                                <el-input v-model="ruleForm.rainfall" :disabled="urlType" placeholder="请输入降雨量"></el-input>(mm)
                            </el-form-item>
                            <el-form-item label="风速" prop="windSpeed" class="formItem">
                                <el-input v-model="ruleForm.windSpeed" :disabled="urlType" placeholder="请输入风速m/s"></el-input>(m/s)
                            </el-form-item>
                            <div style="clear:both;"></div>
                            <el-form-item label="土壤温度" prop="soilTemperature" class="formItem">
                                <el-input v-model="ruleForm.soilTemperature" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入土壤温度"></el-input>(℃)
                            </el-form-item>
                            <el-form-item label="光照" prop="illumination" class="formItem">
                                <el-input v-model="ruleForm.illumination" :disabled="urlType" placeholder="请输入光照"></el-input>(Lux)
                            </el-form-item>
                            <el-form-item label="土壤湿度" prop="soilMoisture" class="formItem">
                                <el-input v-model="ruleForm.soilMoisture" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入土壤湿度"></el-input>(%rh)
                            </el-form-item>
                            <div style="clear:both;"></div>
                            <el-form-item label="经度" prop="longitude" class="formItem">
                                <el-input v-model="ruleForm.longitude" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入经度"></el-input>
                            </el-form-item>
                            
                            <el-form-item label="纬度" prop="latitude" class="formItem">
                                <el-input v-model="ruleForm.latitude" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" :disabled="urlType" placeholder="请输入纬度"></el-input>
                            </el-form-item>
                            <div style="clear:both;"></div>
                        </el-form>
                         <el-form :model="ruleForm" status-icon class="demo-ruleForm mapContent">
                             <el-form-item label="地图">
                                <Baidu-map
                                @syncCenterAndZoom='syncCenterAndZoom'
                                @getClickInfo='getClickInfo'
                                ></Baidu-map>
                            </el-form-item>
                         </el-form>
                    </div>
                </el-collapse-item>
            </el-collapse>
            <!--自定义表单组件-->
            <Custom-form v-if="formDate.length>0" :formDate.sync = formDate :type='urlType' @customDatavalueChange='customDatavalueChange'></Custom-form>
            <el-row type='flex' justify="center" class="footrBtnGroup" v-if='!urlType'>
                <el-button  type="primary" class="submitBtnMargin" @click="submit">提交</el-button>
                <el-button @click="cancel">取消</el-button>
            </el-row>
        </section>
        
    </div>
</template>
<script>
import { monitoringPointDataDetail,monitoringPointDataInsert, monitoringPointDataUpdate } from '@/utils/api/plantProtectionStation/monitoringPointData' //植保站---监测点数据
import {townshipOption,} from "@/assets/js/commonOptions";
import {handleCofirm} from '@/utils/messageBox/confirm';
import {getData} from '@/utils/nowTime';
import CustomForm from '@/components/customForm/CustomForm';
import BaiduMap from '@/components/baiduMap/BaiduMap';
import validate from '@/utils/validator'; //检验
export default {
    data() {
        return {
            pickerBeginDateAfter: {
                disabledDate: time => {
                    return time.getTime() > new Date()-8.64e7;
                }
            },
            activeNames: ['1','2'], //默认折叠板全部打开
            nameFlag:[],
            miniNav:'', //左上角导航
            urlType:true, //地址类型  edit--编辑 detail--查看 add-添加
            loading:false, //加载框
            id:'', //数据的id
            formDate:[], //自定义表单数据，传值给子组件
            ruleForm: {
                address:'',//详细地址
                amountNum:'',//存栏量
                basinName:'',//流域名称
                buildUser:'',//创建人
                createTime:'',//创建时间
                environmentalAssessment:'',//是否影响环境评估
                equipment:'',//是否有污粪处理设备
                equipmentNormal:'',//设备是否正常
                farmName:'',//养殖场名称
                forbiddenArea:'',//是否位于禁养区
                mainRivers:'',//位于主要河流
                mobilePhone:'',//移动电话
                outNum:'',//出栏量
                record:'',//是否备案
                stock:'',//畜种
                stockType:'',//养殖种类
                supervisorName:'',//监管人姓名
                supervisorPhone:'',//监管人联系方式
                updateTime:'',//更新时间
                varieties:'',//主要品种

                getaway:'',//网关名称
                registrationDate:'',//注册日期
                area:'',//监测点
                creditCode:'',//统一社会信用代码
                card:'',//身份证号码
                phone:'',//联系电话
                businessScope:'',//经营范围
                postalAdress:'',//通讯地址
                storageAddress:'',//仓储地址
                businessAddress:'',//经营地址
                township:'',//所属乡镇
                longitude:'',//经度
                latitude:'',//纬度
                businessCode:'',//经营范围（代码）
                peopleNum:'',//经营人员数量
                isBranch:'',//有无分支机构
                branchName:'',//分支机构名称
                acceptanceDate:'',//受理时间
                isAllow:'',//是否准予
                decisionDate:'',//决定时间
                licenseNumber:'',//许可证编号
                lienseEffectiveDate:'',//许可证有效日期
            },
            townshipOption:townshipOption, //乡镇
            rules: {
                getaway:[
                      {required: true, message: '请输入网关名称',trigger: 'blur', }
                ],
                registrationDate:[
                    {required: true, message: '请选择注册日期',trigger: 'blur', }
                ],
                township: [
                    { required: true, message: '请选择乡镇',trigger: 'blur' }
                ],
                postalAdress:[
                     { required: true, message: '请输入通讯地址',trigger: 'blur' }
                ],
                storageAddress: [
                    { required: true, message: '请输入仓储地址',trigger: 'blur' }
                ],
                businessAddress: [
                    { required: true, message: '请输入经营地址',trigger: 'blur' }
                ],
                area:[
                    { required: true, message: '请输入监测点',trigger: 'blur' }
                ],
                mobilePhone:[
                    { required: true, message: '请输入移动电话',trigger: 'blur' },
                    {validator: validate.FormValidate.Form().validatePhone,trigger: 'blur'}
                ],
                amountNum:[
                     { required: true, message: '请输入当前存栏量',trigger: 'blur' }
                ],
                address:[
                    { required: true, message: '请输入详细地址',trigger: 'blur' }
                ],
                outNum:[
                    { required: true, message: '请输入年末出栏量',trigger: 'blur'}, 
                ],
                longitude:[
                     { required: true, message: '请输入纬度',trigger: 'blur' }
                ],
                latitude:[
                     { required: true, message: '请输入维度',trigger: 'blur' }
                ],
            },
            enterpriseNameOption:[], //企业名称列表
            timeout:  null
        }
    },
    components:{
        'Custom-form':CustomForm,
        'Baidu-map':BaiduMap
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
            let res = await monitoringPointDataDetail({id:this.id});
             if(res.data.status== 0){
                 console.log(res)
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
        //取消
        cancel(){
            this.$router.go(-1); //返回上一路由
        },
        //提交事件
        async submit(){
            try{
                let valid = await this.$refs.ruleForm.validate();
                if(valid){
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
            this.ruleForm.customDataList = this.formDate;//自定义表单list
            let updateObj = JSON.stringify(this.ruleForm);
            let res = await monitoringPointDataUpdate(updateObj);
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
            let res = await monitoringPointDataInsert(addObj);
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
        },
        //地图获取经纬度
        getClickInfo (e) {
            this.ruleForm.longitude = e.point.lng
            this.ruleForm.latitude = e.point.lat
        },
        //地图缩放
        syncCenterAndZoom (e) {
            const {lng,lat} = e.target.getCenter()
            this.ruleForm.longitude = lng
            this.ruleForm.latitude = lat
            this.zoom = e.target.getZoom()
        },
        handleSelect(item) {
            console.log(item);
        }
    }
}
</script>
<style scoped lang="scss">

</style>