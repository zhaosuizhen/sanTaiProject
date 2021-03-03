<template>
    <div>
        <!--种植业股主页面-->
        <el-breadcrumb separator="/" class="miniNav">
            <el-breadcrumb-item>种植业股</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/seedEnterprise") >= 0'>种子企业备案</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/agriculturalProduction") >= 0'>农业生产条件</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/landLevel") >= 0'>耕地地力等级</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/agriculturalRecycling") >= 0'>农膜覆盖及回收利用情况</el-breadcrumb-item>
            <el-breadcrumb-item  v-if='this.$route.path.indexOf("/agriculturalStoreInfo") >= 0'>农资店信息</el-breadcrumb-item>
        </el-breadcrumb>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name:'plantProtectiveStation',
    data() {
        return {

        }
    }
}
</script>
<style scoped lang="scss">

</style>