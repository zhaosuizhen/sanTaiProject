<template>
  <!--产业办---蔬菜发展情况-->
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
            miniNav:'蔬菜发展情况',
            qualityInspectionelem:[
                {labelName:'年份', prop:'year'},
                {labelName:'商品菜地产量(吨)',prop: 'spcdYield'},
                {labelName:'商品菜地播种面积(亩)',prop: 'spcdVegetablesSow'},
                {labelName:'自食菜地播种面积(亩)',prop: 'zscdVegetablesSow'},
                {labelName:'自食菜地产量(吨)',prop: 'zscdYield'}
            ]
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
           if(this.$route.path.indexOf("/vegetableDevelopment") >= 0){
               this.$router.push({path:'/vegetableDevelopmentDetail',query:{type:'detail',toMiniNav:'查看 蔬菜发展情况',id:rowData.id}})
           }else{
               this.$router.push({path:'/vegetableDevelopmentDetail',query:{type:'detail',toMiniNav:'查看 蔬菜发展情况',id:rowData.id}})
           }
            
        },
        //编辑
        goEdit(rowData){
           if(this.$route.path.indexOf("/vegetableDevelopment") >= 0){
               this.$router.push({path:'/vegetableDevelopmentDetail',query:{type:'edit',toMiniNav:'编辑 蔬菜发展情况',id:rowData.id}})
           }else{
               this.$router.push({path:'/vegetableDevelopmentDetail',query:{type:'edit',toMiniNav:'编辑 蔬菜发展情况',id:rowData.id}})
           }
            
        },
        //新增
        add(){
            if(this.$route.path.indexOf("/vegetableDevelopment") >= 0){
               this.$router.push({path:'/vegetableDevelopmentDetail',query:{type:'add',toMiniNav:'新增 蔬菜发展情况'}})
           }else{
               this.$router.push({path:'/vegetableDevelopmentDetail',query:{type:'add',toMiniNav:'新增 蔬菜发展情况'}})
           }
        }
    }
}
</script>
<style scoped lang="scss">

</style>