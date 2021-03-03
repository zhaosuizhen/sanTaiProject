<template>
  <!--产业办---监测点数据-->
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
            miniNav:'监测点数据',
            qualityInspectionelem:[
                {labelName:'网关名称', prop:'getaway'},
                {labelName:'虫害种类', prop:'pestType'},
                {labelName:'诱芯持有效期(天)', prop:'validity'},
                {labelName:'风速度(m/s)', prop:'windSpeed'},
                {labelName:'降雨量(mm)',prop: 'rainfall'},
                {labelName:'光照(Lux)',prop: 'illumination'},
                {labelName:'土壤温度(℃)',prop: 'soilTemperature'},
                {labelName:'土壤湿度(%rh)',prop: 'soilMoisture'},
                {labelName:'所属测报点',prop: 'area'}
            ]
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
           if(this.$route.path.indexOf("/monitoringPointData") >= 0){
               this.$router.push({path:'/monitoringPointDataDetail',query:{type:'detail',toMiniNav:'查看 监测点数据',id:rowData.id}})
           }else{
               this.$router.push({path:'/monitoringPointDataDetail',query:{type:'detail',toMiniNav:'查看 监测点数据',id:rowData.id}})
           }
            
        },
        //编辑
        goEdit(rowData){
           if(this.$route.path.indexOf("/monitoringPointData") >= 0){
               this.$router.push({path:'/monitoringPointDataDetail',query:{type:'edit',toMiniNav:'编辑 监测点数据',id:rowData.id}})
           }else{
               this.$router.push({path:'/monitoringPointDataDetail',query:{type:'edit',toMiniNav:'编辑 监测点数据',id:rowData.id}})
           }
            
        },
        //新增
        add(){
            if(this.$route.path.indexOf("/monitoringPointData") >= 0){
               this.$router.push({path:'/monitoringPointDataDetail',query:{type:'add',toMiniNav:'新增 监测点数据'}})
           }else{
               this.$router.push({path:'/monitoringPointDataDetail',query:{type:'add',toMiniNav:'新增 监测点数据'}})
           }
        }
    }
}
</script>
<style scoped lang="scss">

</style>