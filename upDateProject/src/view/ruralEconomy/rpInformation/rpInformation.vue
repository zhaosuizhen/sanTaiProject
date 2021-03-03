<template>
  <!--产业办---藤椒基本信息-->
 <div class="doAgriculturalOutputValue pageContent">
        <section class="sectionContent">
            <Table-list 
                :tableKey='qualityInspectionelem' 
                @goDetail='goDetail' 
                @goEdit='goEdit'
                @add='add'
                :miniNav="miniNav"
            ></Table-list>
        </section>
    </div>
</template>
<script>
import TableList from '@/components/tableList/TableList';
export default {
    name:'doAgriculturalOutputValue',
    data() {
        return {
            miniNav:'藤椒基本信息',
            qualityInspectionelem:[
                {labelName:'年份', prop:'year'},
                {labelName:'种植面积（亩）', prop:'plantingArea'},
                {labelName:'产量（公斤）',prop: 'yieldInfo'},
                {labelName:'加工产量（公斤）',prop: 'processingOutput'},
                {labelName:'销售量（公斤）',prop: 'salesVolume'},
                {labelName:'农户收入（万元）',prop: 'incomeOfFarmers'},
            ]
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
           if(this.$route.path.indexOf("/rpInformation") >= 0){
               this.$router.push({path:'/rpInformationDetail',query:{type:'detail',toMiniNav:'查看 藤椒基本信息',id:rowData.id}})
           }else{
               this.$router.push({path:'/rpInformationDetail',query:{type:'detail',toMiniNav:'查看 藤椒基本信息',id:rowData.id}})
           }
            
        },
        //编辑
        goEdit(rowData){
           if(this.$route.path.indexOf("/rpInformation") >= 0){
               this.$router.push({path:'/rpInformationDetail',query:{type:'edit',toMiniNav:'编辑 藤椒基本信息',id:rowData.id}})
           }else{
               this.$router.push({path:'/rpInformationDetail',query:{type:'edit',toMiniNav:'编辑 藤椒基本信息',id:rowData.id}})
           }
            
        },
        //新增
        add(){
            if(this.$route.path.indexOf("/rpInformation") >= 0){
               this.$router.push({path:'/rpInformationDetail',query:{type:'add',toMiniNav:'新增 藤椒基本信息'}})
           }else{
               this.$router.push({path:'/rpInformationDetail',query:{type:'add',toMiniNav:'新增 藤椒基本信息'}})
           }
        }
    }
}
</script>
<style scoped lang="scss">

</style>