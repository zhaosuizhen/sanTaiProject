<template>
  <!--产业办---粮食作物产量-->
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
            miniNav:'粮食作物产量',
            qualityInspectionelem:[
                {labelName:'年份', prop:'dataYear'},
                {labelName:'谷物（吨）', prop:'grainTotalYield'},
                {labelName:'豆类（吨）',prop: 'beanTotalYield'},
                {labelName:'薯类（吨）', prop:'tubersTotalYield'}
            ]
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
           if(this.$route.path.indexOf("/rearBusinessEntity") >= 0){
               this.$router.push({path:'/yieldFoodPlantDetail',query:{type:'detail',toMiniNav:'查看 粮食作物产量',id:rowData.id}})
           }else{
               this.$router.push({path:'/yieldFoodPlantDetail',query:{type:'detail',toMiniNav:'查看 粮食作物产量',id:rowData.id}})
           }
            
        },
        //编辑
        goEdit(rowData){
           if(this.$route.path.indexOf("/rearBusinessEntity") >= 0){
               this.$router.push({path:'/yieldFoodPlantDetail',query:{type:'edit',toMiniNav:'编辑 粮食作物产量',id:rowData.id}})
           }else{
               this.$router.push({path:'/yieldFoodPlantDetail',query:{type:'edit',toMiniNav:'编辑 粮食作物产量',id:rowData.id}})
           }
            
        },
        //新增
        add(){
            if(this.$route.path.indexOf("/rearBusinessEntity") >= 0){
               this.$router.push({path:'/yieldFoodPlantDetail',query:{type:'add',toMiniNav:'新增 粮食作物产量'}})
           }else{
               this.$router.push({path:'/yieldFoodPlantDetail',query:{type:'add',toMiniNav:'新增 粮食作物产量'}})
           }
        }
    }
}
</script>
<style scoped lang="scss">

</style>