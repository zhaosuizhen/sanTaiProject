<template>
  <!--产业办---绿色食品企业产品数据-->
 <div class="doGreenFoodValue pageContent">
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
    name:'doGreenFoodValue',
    data() {
        return {
            miniNav:'绿色食品企业产品数据',
            qualityInspectionelem:[
                {width:200,labelName:'企业名称',prop: 'enterpriseName',},
                {labelName:'乡镇', prop:'township'},
                {labelName:'企业类型', prop:'enterpriseType'},
                {labelName:'企业品牌',prop:'make'},
                {labelName:'企业联系人',prop:'contact'},
                {width:120,labelName:'企业电话',prop:'phone'},
                {labelName:'所有品种',prop:'varieties'},
                {labelName:'认证开始时间',prop:'startTime'},
                {labelName:'认证结束时间',prop:'endTime'}
            ]
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
           // sessionStorage.setItem('currentMenuItem','doGreenFoodValueDetail'); //记录路由
            this.$router.push({path:'/doGreenFoodValueDetail',query:{type:'detail',toMiniNav:'查看 绿色食品企业产品数据',id:rowData.id}})
        },
        //编辑
        goEdit(rowData){
           // sessionStorage.setItem('currentMenuItem','doGreenFoodValueDetail'); //记录路由
            this.$router.push({path:'/doGreenFoodValueDetail',query:{type:'edit',toMiniNav:'编辑 绿色食品企业产品数据',id:rowData.id}})
        },
        //新增
        add(){
           // sessionStorage.setItem('currentMenuItem','doGreenFoodValueDetail'); //记录路由
            this.$router.push({path:'/doGreenFoodValueDetail',query:{type:'add',toMiniNav:'新增 绿色食品企业产品数据'}})
        }
    }
}
</script>
<style scoped lang="scss">

</style>