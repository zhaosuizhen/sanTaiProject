<template>
  <!--植保站---疾病防治数据-->
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
            miniNav:'疾病防治数据',
            qualityInspectionelem:[
                {labelName:'年份', prop:'year'},
                {labelName:'养殖种类', prop:'breedType'},
                {labelName:'疾病种类', prop:'pestsType'},
                {labelName:'发生率', prop:'incidenceRate'},
                {labelName:'死亡率', prop:'deathRate'},
                {labelName:'治愈率', prop:'cureRate'},
                {labelName:'疫病损失数量', prop:'lossNum'},
            ]
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
           if(this.$route.path.indexOf("/diseaseControlData") >= 0){
               this.$router.push({path:'/diseaseControlDataDetail',query:{type:'detail',toMiniNav:'查看 疾病防治数据',id:rowData.id}})
           }else{
               this.$router.push({path:'/diseaseControlDataDetail',query:{type:'detail',toMiniNav:'查看 疾病防治数据',id:rowData.id}})
           }
            
        },
        //编辑
        goEdit(rowData){
           if(this.$route.path.indexOf("/diseaseControlData") >= 0){
               this.$router.push({path:'/diseaseControlDataDetail',query:{type:'edit',toMiniNav:'编辑 疾病防治数据',id:rowData.id}})
           }else{
               this.$router.push({path:'/diseaseControlDataDetail',query:{type:'edit',toMiniNav:'编辑 疾病防治数据',id:rowData.id}})
           }
            
        },
        //新增
        add(){
            if(this.$route.path.indexOf("/diseaseControlData") >= 0){
               this.$router.push({path:'/diseaseControlDataDetail',query:{type:'add',toMiniNav:'新增 疾病防治数据'}})
           }else{
               this.$router.push({path:'/diseaseControlDataDetail',query:{type:'add',toMiniNav:'新增 疾病防治数据'}})
           }
        }
    }
}
</script>
<style scoped lang="scss">

</style>