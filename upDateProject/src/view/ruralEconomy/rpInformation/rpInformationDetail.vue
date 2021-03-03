<template>
    <!----统计局---畜产品产量 添加编辑详情---->
    <div id="liveProductValueDetail"  class="pageContent" v-loading="loading">
        <section class="sectionContent">
            <div class="miniNav">{{miniNav}}</div>
            <el-collapse  v-model="activeNames" @change="handleChange">
                <el-collapse-item name="0">
                    <template slot="title">
                        <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('0') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                            <span>基本信息</span>
                            <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.allData}}</span> 亩</span> -->
                        </div>
                    </template>

                    <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                        <el-form-item label="年份：" prop="year" class="formSelect" style="width:50%;margin-top:10px">
                            <el-date-picker
                                v-model="ruleForm.year"
                                :disabled="urlType"
                                type="year"
                                value-format="yyyy"
                                format="yyyy"
                                :picker-options="pickerBeginDateAfter"
                                placeholder="选择年">
                            </el-date-picker>
                        </el-form-item>  
                    </el-form>
                
                    <el-collapse-item name="1">
                        <template slot="title">
                            <div  class="titleContent">
                                <i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>面积情况</span>
                                <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.guWuData}}</span> 亩</span> -->
                            </div> 
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                               
                                <div style="clear:both;"></div>
                                <el-form-item label="未投产面积" class="formItem">
                                    <el-input v-model="ruleForm.notProduction" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入未投产面积"></el-input> （亩）
                                </el-form-item>
                                <el-form-item label="投产面积" class="formItem">
                                    <el-input v-model="ruleForm.productioned" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入投产面积"></el-input> （亩）
                                </el-form-item>
                                
                            </el-form>
                        </div>
                    </el-collapse-item>
                    <el-collapse-item name="2">
                        <template slot="title">
                            <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('2') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>产量情况</span>
                                <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.douLeiData}}</span> 亩</span> -->
                            </div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                <el-form-item label="鲜重" class="formItem">
                                    <el-input v-model="ruleForm.freshWeight" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入鲜重"></el-input> （公斤）
                                </el-form-item>
                                <el-form-item label="干重" class="formItem">
                                    <el-input v-model="ruleForm.dryWeight" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入干重"></el-input> （公斤）
                                </el-form-item>
                                <el-form-item label="鲜品价格" class="formItem">
                                    <el-input v-model="ruleForm.freshPrice" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入大豆"></el-input> （元/公斤）
                                </el-form-item>
                                <el-form-item label="干品价格" class="formItem">
                                    <el-input v-model="ruleForm.dryPrice" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入其他豆类"></el-input> （元/公斤）
                                </el-form-item>
                            </el-form>
                            <el-collapse v-model="activeNames" @change="handleChange">
                                
                            </el-collapse>
                        </div>
                    </el-collapse-item>
                    <el-collapse-item name="3">
                        <template slot="title">
                            <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('2-1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>加工情况</span>
                                <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.shuLeiData}}</span> 亩</span> -->
                            </div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                <el-form-item label="鲜藤椒产量" class="formItem">
                                    <el-input v-model="ruleForm.freshYield" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入鲜藤椒产量"></el-input> （公斤）
                                </el-form-item>
                                <el-form-item label="产品均价" class="formItem">
                                    <el-input v-model="ruleForm.freshAveragePrice" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入产品均价"></el-input> （元/公斤）
                                </el-form-item>
                                <el-form-item label="干藤椒产量" class="formItem">
                                    <el-input v-model="ruleForm.dryYield" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入干藤椒产量"></el-input> （公斤）
                                </el-form-item>
                                <el-form-item label="产品均价" class="formItem">
                                    <el-input v-model="ruleForm.dryAveragePrice" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入产品均价"></el-input> （元/公斤）
                                </el-form-item>
                                <el-form-item label="藤椒油产量" class="formItem">
                                    <el-input v-model="ruleForm.oilYield" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入藤椒油产量"></el-input> （公斤）
                                </el-form-item>
                                <el-form-item label="产品均价" class="formItem">
                                    <el-input v-model="ruleForm.oilAveragePrice" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入产品均价"></el-input> （元/公斤）
                                </el-form-item>
                                <el-form-item label="保鲜藤椒产量" class="formItem">
                                    <el-input v-model="ruleForm.keepFreshYield" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入保鲜藤椒产量"></el-input> （公斤）
                                </el-form-item>
                                <el-form-item label="产品均价" class="formItem">
                                    <el-input v-model="ruleForm.keepFreshAveragePrice" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入产品均价"></el-input> （元/公斤）
                                </el-form-item>
                            </el-form>
                        </div>
                    </el-collapse-item>
                    <el-collapse-item name="4">
                        <template slot="title">
                            <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('2-1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>销售情况</span>
                                <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.shuLeiData}}</span> 亩</span> -->
                            </div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                <el-form-item label="藤椒销售量" class="formItem">
                                    <el-input v-model="ruleForm.salesVolume" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入藤椒销售量"></el-input> （公斤）
                                </el-form-item>
                                <el-form-item label="销售收入" class="formItem">
                                    <el-input v-model="ruleForm.salesIncome" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入销售收入"></el-input> （万元）
                                </el-form-item>
                                <el-form-item label="藤椒干货销售量" class="formItem">
                                    <el-input v-model="ruleForm.drySalesVolume" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入藤椒干货销售量"></el-input> （公斤）
                                </el-form-item>
                                <el-form-item label="销售收入" class="formItem">
                                    <el-input v-model="ruleForm.drySalesIncome" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入销售收入"></el-input> （万元）
                                </el-form-item>
                                <el-form-item label="调味料销售量" class="formItem">
                                    <el-input v-model="ruleForm.flavoringSalesVolume" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入调味料销售量"></el-input> （公斤）
                                </el-form-item>
                                <el-form-item label="销售收入" class="formItem">
                                    <el-input v-model="ruleForm.flavoringSalesIncome" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入销售收入"></el-input> （万元）
                                </el-form-item>
                            </el-form>
                        </div>
                    </el-collapse-item>
                    <el-collapse-item name="5">
                        <template slot="title">
                            <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('2-1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>产值以及收入</span>
                                <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.shuLeiData}}</span> 亩</span> -->
                            </div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                <el-form-item label="第一产业产值" class="formItem">
                                    <el-input v-model="ruleForm.primaryIndustry" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入第一产业产值"></el-input> （万元）
                                </el-form-item>
                                <el-form-item label="第二产业产值" class="formItem">
                                    <el-input v-model="ruleForm.secondaryIndustry" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入第二产业产值"></el-input> （万元）
                                </el-form-item>
                                <el-form-item label="第三产业产值" class="formItem">
                                    <el-input v-model="ruleForm.tertiaryIndustry" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入第三产业产值"></el-input> （万元）
                                </el-form-item>
                                <el-form-item label="种植人数" class="formItem">
                                    <el-input v-model="ruleForm.plantersNumber" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入种植人数"></el-input> （人）
                                </el-form-item>
                            </el-form>
                        </div>
                    </el-collapse-item>
                    <el-collapse-item name="6">
                        <template slot="title">
                            <div class="titleContent"><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('2-1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>
                                <span>农户收入</span>
                                <!-- <span class="titleRight">合计：<span class="valueStyle">{{ruleForm.shuLeiData}}</span> 亩</span> -->
                            </div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
                                <el-form-item label="家庭销售收入" class="formItem">
                                    <el-input v-model="ruleForm.familySalesIncome" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入家庭销售收入"></el-input> （万元）
                                </el-form-item>
                                <el-form-item label="家庭加工收入" class="formItem">
                                    <el-input v-model="ruleForm.familyMachiningIncome" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入家庭加工收入"></el-input> （万元）
                                </el-form-item>
                                <el-form-item label="运输、销售收入" class="formItem">
                                    <el-input v-model="ruleForm.transportSalesIncome" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入运输、销售收入"></el-input> （万元）
                                </el-form-item>
                                <el-form-item label="劳务收入" class="formItem">
                                    <el-input v-model="ruleForm.labourIncome" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"  :disabled="urlType" placeholder="请输入劳务收入"></el-input> （万元）
                                </el-form-item>
                            </el-form>
                        </div>
                    </el-collapse-item>

                </el-collapse-item>
            </el-collapse>
            <!--自定义表单组件-->
             <Custom-form v-if="formDate.length>0" :formDate.sync = formDate :type='urlType' @customDatavalueChange='customDatavalueChange'></Custom-form>
            <el-row type='flex' justify="center" class="footrBtnGroup" v-if="!urlType">
            <el-button  type="primary" class="submitBtnMargin"  @click="submit">提交</el-button>
            <el-button @click="cancel">取消</el-button>
        </el-row>
        </section>
        
    </div>
</template>
<script>
//统计局---畜产品产量 接口
import { rpInformationDetail,rpInformationUpdate, rpInformationInsert } from '@/utils/api/ruralEconomy/rpInformation' 
import {townshipOption} from "@/assets/js/commonOptions";
import {handleCofirm} from '@/utils/messageBox/confirm';
import {getData} from '@/utils/nowTime';
import CustomForm from '@/components/customForm/CustomForm';
export default {
    name:'liveProductValueDetail',
    data() {
        return {
            pickerBeginDateAfter: {
                disabledDate: time => {
                    return time.getTime() > new Date()-8.64e7;
                }
            },
            activeNames: ['0','1','2','3','4','5','6'], //默认折叠板全部打开
            nameFlag:[],
            miniNav:'', //左上角导航
            id:'', //数据的id
            urlType:true, //地址类型  edit--编辑 detail--查看 add-添加
            loading:false, //加载框
            townshipOption:townshipOption, //乡镇
            formDate:[], //自定义表单数据，传值给子组件
            // valueTotal:0,//总合计
            ruleForm: {
                township:'', //乡镇
                year:'',//年份
                
                notProduction:'',//未投产面积
                productioned:'',//投产面积
                freshWeight:'',//鲜重
                dryWeight:'',//干重
                freshPrice:'',//鲜品价格
                dryPrice:'',//干品价格
                freshYield:'',//鲜藤椒产量
                freshAveragePrice:'',//鲜藤椒均价
                dryYield:'',//干藤椒产量
                dryAveragePrice:'',//干藤椒均价
                oilYield:'',//藤椒油产量
                oilAveragePrice:'',//藤椒油均价
                keepFreshYield:'',//保鲜藤椒产量
                keepFreshAveragePrice:'',//保鲜藤椒均价
                salesVolume:'',//藤椒销售量
                salesIncome:'',//藤椒销售收入
                drySalesVolume:'',//藤椒干货销售量
                drySalesIncome:'',//藤椒干货收入
                flavoringSalesVolume:'',//调味料销售量
                flavoringSalesIncome:'',//调味料销售收入
                primaryIndustry:'',//第一产业
                secondaryIndustry:'',//第二产业
                tertiaryIndustry:'',//第三产业
                plantersNumber:'',//种植人数
                familySalesIncome:'',//家庭销售收入
                familyMachiningIncome:'',//家庭加工收入
                transportSalesIncome:'',//运输销售收入
                labourIncome:'',//劳务收入

                createTime:'',//创建时间
                updateTime:'',//更新时间

                allData:'',//全部总合
                guWuData:'',//谷物总和合
                douLeiData:'',//豆类总和
                shuLeiData:'',//薯类总和

            },
            rules: {
                year: [
                    { required: true, message: '请选择年份',trigger: 'blur' }
                ],
                township: [
                    { required: true, message: '请选择乡镇',trigger: 'blur' }
                ]
            }
        }
    },
    components:{
        'Custom-form':CustomForm
    },
    computed: {
      testDataNew() {
        return JSON.parse(JSON.stringify(this.ruleForm))
      }
    },
    watch:{
        //监听数量变化，进行加减
        testDataNew: {
            handler(newVal) {
                //薯类总和
                this.ruleForm.shuLeiData = newVal.tuberPotato * 1 + newVal.tuberYam * 1
                //豆类总和
                this.ruleForm.douLeiData = newVal.beanAzuki * 1 + newVal.beanMung * 1 + newVal.beanSoya * 1 + newVal.beanOther * 1
                //谷物总和
                this.ruleForm.guWuData = newVal.grainBarley * 1 + newVal.grainBroomcorn * 1 + newVal.grainBuckwheat * 1 +
                 newVal.grainCorn * 1 + newVal.grainMillet * 1 + newVal.grainOat * 1 + newVal.grainRice * 1 +
                  newVal.grainWheatSpring * 1 + newVal.grainWheatWinter * 1 + newVal.grainOther * 1
                //全部总和
                this.ruleForm.allData = this.ruleForm.shuLeiData + this.ruleForm.douLeiData + this.ruleForm.guWuData
           },
          deep: true // 监听这个对象中的每一个属性变化
        },
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
            let res = await rpInformationDetail({id:this.id});
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
            this.ruleForm.updateTime = getData(); //更新时间
            let updateObj = JSON.stringify(this.ruleForm);
            let res = await rpInformationUpdate(updateObj);
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
            let res = await rpInformationInsert(addObj);
             if(res.data.status== 0){
                this.$message({
                    message: '新增成功',
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