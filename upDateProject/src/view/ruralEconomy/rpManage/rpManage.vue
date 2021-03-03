<template>
  <!--产业办---藤椒经营主体-->
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
            miniNav:'藤椒经营主体',
            qualityInspectionelem:[
                {labelName:'公司名称', prop:'enterpriseName'},
                {labelName:'单位类型',prop: 'unitType'},
                {labelName:'法定代表人',prop: 'legalPerson'},
                {labelName:'注册资本',prop: 'registeredCapital'},
                {labelName:'成立日期',prop: 'establishTime'},
                {labelName:'所属乡镇',prop: 'township'}
            ]
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
           if(this.$route.path.indexOf("/rpManage") >= 0){
               this.$router.push({path:'/rpManageDetail',query:{type:'detail',toMiniNav:'查看 藤椒经营主体',id:rowData.id}})
           }else{
               this.$router.push({path:'/rpManageDetail',query:{type:'detail',toMiniNav:'查看 藤椒经营主体',id:rowData.id}})
           }
            
        },
        //编辑
        goEdit(rowData){
           if(this.$route.path.indexOf("/rpManage") >= 0){
               this.$router.push({path:'/rpManageDetail',query:{type:'edit',toMiniNav:'编辑 藤椒经营主体',id:rowData.id}})
           }else{
               this.$router.push({path:'/rpManageDetail',query:{type:'edit',toMiniNav:'编辑 藤椒经营主体',id:rowData.id}})
           }
            
        },
        //新增
        add(){
            if(this.$route.path.indexOf("/rpManage") >= 0){
               this.$router.push({path:'/rpManageDetail',query:{type:'add',toMiniNav:'新增 藤椒经营主体'}})
           }else{
               this.$router.push({path:'/rpManageDetail',query:{type:'add',toMiniNav:'新增 藤椒经营主体'}})
           }
        }
    }
}
</script>
<style scoped lang="scss">

</style>