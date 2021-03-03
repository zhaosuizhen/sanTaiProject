<template>
  <!--产业办---产业发展-->
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
            miniNav:'产业发展',
            qualityInspectionelem:[
                {labelName:'2018发展面积（亩）', prop:'developmentArea2018'},
                {labelName:'2019发展面积（亩）', prop:'developmentArea2019'},
                {labelName:'存活面积（亩）',prop: 'survivalArea'},
                {labelName:'投产面积（亩）',prop: 'operationArea'}
            ]
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
           if(this.$route.path.indexOf("/industrialDevelopment") >= 0){
               this.$router.push({path:'/industrialDevelopmentDetail',query:{type:'detail',toMiniNav:'查看 产业发展',id:rowData.id}})
           }else{
               this.$router.push({path:'/industrialDevelopmentDetail',query:{type:'detail',toMiniNav:'查看 产业发展',id:rowData.id}})
           }
            
        },
        //编辑
        goEdit(rowData){
           if(this.$route.path.indexOf("/industrialDevelopment") >= 0){
               this.$router.push({path:'/industrialDevelopmentDetail',query:{type:'edit',toMiniNav:'编辑 产业发展',id:rowData.id}})
           }else{
               this.$router.push({path:'/industrialDevelopmentDetail',query:{type:'edit',toMiniNav:'编辑 产业发展',id:rowData.id}})
           }
            
        },
        //新增
        add(){
            if(this.$route.path.indexOf("/industrialDevelopment") >= 0){
               this.$router.push({path:'/industrialDevelopmentDetail',query:{type:'add',toMiniNav:'新增 产业发展'}})
           }else{
               this.$router.push({path:'/industrialDevelopmentDetail',query:{type:'add',toMiniNav:'新增 产业发展'}})
           }
        }
    }
}
</script>
<style scoped lang="scss">

</style>