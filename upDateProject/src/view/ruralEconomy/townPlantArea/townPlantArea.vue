<template>
  <!--产业办---各乡镇种植面积-->
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
            miniNav:'各乡镇种植面积',
            qualityInspectionelem:[
                {labelName:'年份', prop:'years'},

                {labelName:'安居(亩)',prop:'aj'},
                {labelName:'北坝(亩)',prop: 'bb'},
                {labelName:'八洞(亩)',prop: 'bd'},
                {labelName:'百顷(亩)',prop: 'bq'},
                {labelName:'断石(亩)',prop: 'ds'},
                {labelName:'东塔(亩)',prop: 'dt'},
                {labelName:'富顺(亩)',prop: 'fs'},
                {labelName:'光辉(亩)',prop: 'gh'},
                {labelName:'古井(亩)',prop: 'gj'},
                {labelName:'观桥(亩)',prop: 'gq'},
                {labelName:'花园(亩)',prop: 'hy'},
                {labelName:'景福(亩)',prop: 'jf'},
                {labelName:'金鼓(亩)',prop: 'jg'},
                {labelName:'菊河(亩)',prop: 'jh'},
                {labelName:'建平(亩)',prop: 'jp'},
                {labelName:'金石(亩)',prop: 'js'},
                {labelName:'建设镇(亩)',prop: 'jsz'},
                {labelName:'建中(亩)',prop: 'jz'},
                {labelName:'凯河(亩)',prop: 'kh'},
                {labelName:'乐安(亩)',prop: 'la'},
                {labelName:'鲁班(亩)',prop: 'lb'},
                {labelName:'柳池(亩)',prop: 'lc'},
                {labelName:'里程镇(亩)',prop: 'lcz'},
                {labelName:'灵兴(亩)',prop: 'lingxing'},
                {labelName:'乐加(亩)',prop: 'lj'},
                {labelName:'老马(亩)',prop: 'lm'},
                {labelName:'龙树(亩)',prop: 'ls'},
                {labelName:'黎曙(亩)',prop: 'lsz'},
                {labelName:'芦溪(亩)',prop: 'lx'},
                {labelName:'立新镇(亩)',prop: 'lxz'},
                {labelName:'刘营(亩)',prop: 'ly'},
                {labelName:'前锋(亩)',prop: 'qf'},
                {labelName:'郪江(亩)',prop: 'qj'},
                {labelName:'秋林(亩)',prop: 'ql'},
                {labelName:'石安(亩)',prop: 'sa'},
                {labelName:'三元(亩)',prop: 'sy'},
                {labelName:'潼川(亩)',prop: 'tc'},
                {labelName:'塔山(亩)',prop: 'ts'},
                {labelName:'万安(亩)',prop: 'wa'},
                {labelName:'新德(亩)',prop: 'xd'},
                {labelName:'幸福(亩)',prop: 'xf'},
                {labelName:'新鲁(亩)',prop: 'xl'},
                {labelName:'西平(亩)',prop: 'xp'},
                {labelName:'新生(亩)',prop: 'xs'},
                {labelName:'下新(亩)',prop: 'xsz'},
                {labelName:'永明(亩)',prop: 'ym'},
                {labelName:'永新(亩)',prop: 'yx'},
                {labelName:'紫河(亩)',prop: 'zh'},
                {labelName:'中太(亩)',prop: 'zt'},
                {labelName:'中新(亩)',prop: 'zx'}
            ]
        }
    },
    components:{
        'Table-list':TableList
    },
    methods:{
        //查看详情
        goDetail(rowData){
           if(this.$route.path.indexOf("/townPlantArea") >= 0){
               this.$router.push({path:'/townPlantAreaDetail',query:{type:'detail',toMiniNav:'查看 各乡镇种植面积',id:rowData.id}})
           }else{
               this.$router.push({path:'/townPlantAreaDetail',query:{type:'detail',toMiniNav:'查看 各乡镇种植面积',id:rowData.id}})
           }
            
        },
        //编辑
        goEdit(rowData){
           if(this.$route.path.indexOf("/townPlantArea") >= 0){
               this.$router.push({path:'/townPlantAreaDetail',query:{type:'edit',toMiniNav:'编辑 各乡镇种植面积',id:rowData.id}})
           }else{
               this.$router.push({path:'/townPlantAreaDetail',query:{type:'edit',toMiniNav:'编辑 各乡镇种植面积',id:rowData.id}})
           }
            
        },
        //新增
        add(){
            if(this.$route.path.indexOf("/townPlantArea") >= 0){
               this.$router.push({path:'/townPlantAreaDetail',query:{type:'add',toMiniNav:'新增 各乡镇种植面积'}})
           }else{
               this.$router.push({path:'/townPlantAreaDetail',query:{type:'add',toMiniNav:'新增 各乡镇种植面积'}})
           }
        }
    }
}
</script>
<style scoped lang="scss">

</style>