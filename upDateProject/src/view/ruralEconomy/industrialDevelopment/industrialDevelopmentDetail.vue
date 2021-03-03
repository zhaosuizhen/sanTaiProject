<template>
<!--农经股---藤椒经营主体-->
    <div id="pigBreeDetail" class="pageContent" v-loading="loading">
        <section class="sectionContent">
            <div class="miniNav">{{miniNav}}</div>
            <el-collapse  v-model="activeNames" @change="handleChange">
                <el-collapse-item name="1">
                    <template slot="title">
                        <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>基础信息</div>
                    </template>

                    <el-collapse-item name="1-1">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>鲁班</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="lb2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.lb2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="lb2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.lb2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="lbSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.lbSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="lbOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.lbOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-2">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>刘营</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="ly2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.ly2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="ly2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.ly2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="lySurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.lySurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="lyOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.lyOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-3">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>黎曙镇</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="lsz2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.lsz2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="lsz2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.lsz2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="lszSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.lszSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="lszOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.lszOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-4">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>老马</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="lmz2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.lmz2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="lmz2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.lmz2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="lmzSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.lmzSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="lmzOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.lmzOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-5">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>金石镇</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="jsz2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.jsz2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="jsz2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.jsz2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="jszSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.jszSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="jszOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.jszOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-6">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>建中</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="jz2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.jz2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="jz2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.jz2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="jzSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.jzSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="jzLyOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.jzLyOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-7">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>光辉镇</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="ghz2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.ghz2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="ghz2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.ghz2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="ghzSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.ghzSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="ghzOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.ghzOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-8">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>富顺镇</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="fsz2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.fsz2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="fsz2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.fsz2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="fszSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.fszSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="fszOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.fszOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-9">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>郪江镇</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="hjz2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.hjz2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="hjz2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.hjz2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="hjzSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.hjzSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="hjzOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.hjzOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-10">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>宝泉乡</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="bqx2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.bqx2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="bqx2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.bqx2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="bqxSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.bqxSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="bqxOperationArea	" class="formItem">
                                    <el-input v-model="ruleForm.bqxOperationArea	" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-11">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>百顷镇</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="bqz2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.bqz2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="bqz2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.bqz2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="bqzSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.bqzSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="bqzOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.bqzOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-12">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>安居镇</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="ajz2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.ajz2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="ajz2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.ajz2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="ajzSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.ajzSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="ajzOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.ajzOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-13">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>古井镇</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="gjz2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.gjz2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="gjz2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.gjz2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="gjzSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.gjzSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="gjzOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.gjzOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-14">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>东塔镇</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="dtz2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.dtz2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="dtz2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.dtz2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="dtzSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.dtzSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="dtzOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.dtzOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-15">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>断石乡</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="dsx2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.dsx2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="dsx2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.dsx2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="dsxSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.dsxSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="dsxOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.dsxOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-16">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>观桥镇</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="gqz2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.gqz2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="gqz2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.gqz2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="gqzSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.gqzSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="gqzOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.gqzOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-17">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>金鼓</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="jg2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.jg2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="jg2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.jg2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="jgSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.jgSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="jgOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.jgOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-18">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>菊河镇</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="jhz2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.jhz2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="jhz2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.jhz2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="jhzSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.jhzSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="jhzOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.jhzOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-19">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>里程镇</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="lcz2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.lcz2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="lcz2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.lcz2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="lczSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.lczSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="lczOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.lczOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-20">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>灵兴镇</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="lxz2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.lxz2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="lxz2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.lxz2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="lxzSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.lxzSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="lxzOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.lxzOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-21">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>乐安镇</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="laz2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.laz2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="laz2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.laz2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="lazSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.lazSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="lazOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.lazOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-22">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>建平</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="jp2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.jp2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="jp2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.jp2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="jpSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.jpSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="jpOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.jpOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-23">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>八洞镇</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="bdz2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.bdz2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="bdz2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.bdz2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="bdzSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.bdzSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="bdzOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.bdzOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-24">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>秋林镇</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="qlz2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.qlz2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="qlz2019DevelopmentArea	" class="formItem">
                                    <el-input v-model="ruleForm.qlz2019DevelopmentArea	" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="qlzSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.qlzSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="qlzOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.qlzOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-25">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>柳池镇</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="lc2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.lc2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="lc2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.lc2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="lcSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.lcSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="lcOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.lcOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-26">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>三元</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="sy2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.sy2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="sy2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.sy2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="sySurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.sySurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="syOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.syOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-27">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>乐加</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="lj2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.lj2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="lj2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.lj2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="ljSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.ljSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="ljOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.ljOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-28">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>花园镇</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="hyz2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.hyz2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="hyz2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.hyz2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="hyzSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.hyzSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="hyzOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.hyzOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-29">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>建设镇</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="jsx2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.jsx2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="jsx2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.jsx2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="jsxSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.jsxSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="jsxOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.jsxOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-30">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>玉林镇</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="ylz2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.ylz2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="ylz2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.ylz2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="ylzSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.ylzSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="ylzOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.ylzOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-31">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>塔山镇</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="tsz2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.tsz2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="tsz2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.tsz2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="tszSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.tszSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="tszOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.tszOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-32">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>石安镇</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="sax2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.sax2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="sax2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.sax2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="saxSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.saxSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="saxOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.saxOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-33">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>龙树</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="ls2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.ls2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="ls2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.ls2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="lsSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.lsSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="lsOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.lsOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-34">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>西平镇</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="xpz2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.xpz2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="xpz2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.xpz2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="xpzSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.xpzSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="xpzOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.xpzOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-35">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>双乐乡</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="slx2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.slx2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="slx2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.slx2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="slxSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.slxSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="slxOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.slxOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-36">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>新生镇</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="xsz2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.xsz2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="xsz2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.xsz2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="xszSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.xszSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="xszOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.xszOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-37">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>新鲁镇</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="xlz2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.xlz2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="xlz2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.xlz2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="xlzSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.xlzSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="xlzOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.xlzOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-38">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>曙光乡</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="sgx2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.sgx2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="sgx2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.sgx2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="sgxSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.sgxSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="sgxOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.sgxOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-39">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>万安镇</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="waz2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.waz2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="waz2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.waz2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="wazSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.wazSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="wazOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.wazOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-40">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>芦溪镇</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="lxx2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.lxx2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="lxx2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.lxx2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="lxxSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.lxxSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="lxxOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.lxxOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-41">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>中太镇</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="ztz2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.ztz2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="ztz2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.ztz2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="ztzSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.ztzSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="ztzOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.ztzOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-42">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>云同乡</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="ytx2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.ytx2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="ytx2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.ytx2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="ytxSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.ytxSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="ytxOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.ytxOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-43">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>幸福镇</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="xfz2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.xfz2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="xfz2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.xfz2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="xfzSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.xfzSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="xfzOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.xfzOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-44">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>协和乡</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="xhx2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.xhx2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="xhx2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.xhx2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="xhxSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.xhxSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="xhxOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.xhxOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-45">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>下新乡</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="xxx2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.xxx2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="xxx2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.xxx2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="xxxSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.xxxSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="xxxOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.xxxOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-46">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>忠孝乡</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="zxx2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.zxx2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="zxx2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.zxx2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="zxxSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.zxxSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="zxxOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.zxxOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-47">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>双胜镇</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="ssz2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.ssz2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="ssz2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.ssz2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="sszSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.sszSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="sszOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.sszOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-48">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>进都乡</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="jdx2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.jdx2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="jdx2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.jdx2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="jdxSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.jdxSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="jdxOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.jdxOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-49">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>前锋镇</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="qfz2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.qfz2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="qfz2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.qfz2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="qfzSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.qfzSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="qfzOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.qfzOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-50">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>争胜镇</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="zsz2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.zsz2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="zsz2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.zsz2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="zszSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.zszSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="zszOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.zszOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-51">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>跃进镇</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="yjz2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.yjz2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="yjz2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.yjz2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="yjzSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.yjzSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="yjzOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.yjzOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-52">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>永明镇</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="ymz2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.ymz2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="ymz2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.ymz2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="ymzSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.ymzSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="ymzOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.ymzOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-53">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>潼川镇</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="tcz2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.tcz2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="tcz2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.tcz2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="tczSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.tczSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="tczOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.tczOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-54">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>上新乡</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="sxs2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.sxs2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="sxs2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.sxs2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="sxsSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.sxsSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="sxsOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.sxsOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-55">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>景福镇</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="jfz2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.jfz2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="jfz2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.jfz2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="jfzSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.jfzSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="jfzOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.jfzOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-56">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>广利乡</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="glx2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.glx2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="glx2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.glx2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="glxSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.glxSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="glxOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.glxOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-57">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>立新镇</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="lxinz2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.lxinz2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="lxinz2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.lxinz2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="lxinzSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.lxinzSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="lxinzOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.lxinzOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-58">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>中新镇</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="zxinz2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.zxinz2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="zxinz2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.zxinz2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="zxinzSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.zxinzSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="zxinzOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.zxinzOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                    <el-collapse-item name="1-59">
                        <template slot="title">
                            <div><i class="collapseDownIcon el-icon-caret-bottom" :class="[nameFlag.indexOf('1') >=0?'el-icon-caret-bottom':'el-icon-caret-right']"></i>紫河镇</div>
                        </template>
                        <div class="formContent">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="2018发展面积" prop="zhihez2018DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.zhihez2018DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2018发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="2019发展面积" prop="zhihez2019DevelopmentArea" class="formItem">
                                    <el-input v-model="ruleForm.zhihez2019DevelopmentArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入2019发展面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="存活面积" prop="zhihezSurvivalArea" class="formItem">
                                    <el-input v-model="ruleForm.zhihezSurvivalArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入存活面积"></el-input>（亩）
                                </el-form-item>
                                <el-form-item label="投产面积" prop="zhihezOperationArea" class="formItem">
                                    <el-input v-model="ruleForm.zhihezOperationArea" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');" maxlength="11" :disabled="urlType" placeholder="请输入投产面积"></el-input>（亩）
                                </el-form-item> 
                                <div style="clear:both;"></div>
                            </el-form>

                        </div>
                    </el-collapse-item>

                </el-collapse-item>
            </el-collapse>
            <!--自定义表单组件-->
            <Custom-form v-if="formDate.length>0" :formDate.sync = formDate :type='urlType' @customDatavalueChange='customDatavalueChange'></Custom-form>
            <el-row type='flex' justify="center" class="footrBtnGroup" v-if='!urlType'>
                <el-button  type="primary" class="submitBtnMargin" @click="submit">提交</el-button>
                <el-button @click="cancel">取消</el-button>
            </el-row>
        </section>
        
    </div>
</template>
<script>
import { industrialDevelopmentDetail,industrialDevelopmentInsert, industrialDevelopmentUpdate } from '@/utils/api/ruralEconomy/industrialDevelopment' //畜牧股---生猪养殖
import {townshipOption,} from "@/assets/js/commonOptions";
import {handleCofirm} from '@/utils/messageBox/confirm';
import {getData} from '@/utils/nowTime';
import CustomForm from '@/components/customForm/CustomForm';
// import BaiduMap from '@/components/baiduMap/BaiduMap';
import validate from '@/utils/validator'; //检验
export default {
    data() {
        return {
            pickerBeginDateAfter: {
                disabledDate: time => {
                    return time.getTime() > new Date()-8.64e7;
                }
            },
            activeNames: ['1','2','1-1','1-2','1-3','1-4','1-5','1-6','1-7','1-8','1-9'
                            ,'1-10','1-11','1-12','1-13','1-14','1-15','1-16','1-17','1-18','1-19'
                            ,'1-20','1-21','1-22','1-23','1-24','1-25','1-26','1-27','1-28','1-29'
                            ,'1-30','1-31','1-32','1-33','1-34','1-35','1-36','1-37','1-38','1-39'
                            ,'1-40','1-41','1-42','1-43','1-44','1-45','1-46','1-47','1-48','1-49'
                            ,'1-50','1-51','1-52','1-53','1-54','1-55','1-56','1-57','1-58','1-59'], //默认折叠板全部打开
            nameFlag:[],
            miniNav:'', //左上角导航
            urlType:true, //地址类型  edit--编辑 detail--查看 add-添加
            loading:false, //加载框
            id:'', //数据的id
            formDate:[], //自定义表单数据，传值给子组件
            ruleForm: {
                address:'',//详细地址
                amountNum:'',//存栏量
                basinName:'',//流域名称
                buildUser:'',//创建人
                createTime:'',//创建时间
                updateTime:'',//更新时间
                
                lb2018DevelopmentArea:'',//鲁班-2018发展面积
                lb2019DevelopmentArea:'',//鲁班-2019发展面积
                lbOperationArea:'',//鲁班-投产面积
                lbSurvivalArea:'',//鲁班-存活面积
                ly2018DevelopmentArea:'',//刘营-2018发展面积
                ly2019DevelopmentArea:'',//刘营-2019发展面积
                lyOperationArea:'',//刘营-投产面积
                lySurvivalArea:'',//刘营-存活面积
                lsz2018DevelopmentArea:'',//黎曙镇-2018发展面积
                lsz2019DevelopmentArea:'',//黎曙镇-2019发展面积
                lszOperationArea:'',//黎曙镇-投产面积
                lszSurvivalArea:'',//黎曙镇-存活面积
                lmz2018DevelopmentArea:'',//老马镇-2018发展面积
                lmz2019DevelopmentArea:'',//老马镇-2019发展面积
                lmzOperationArea:'',//老马镇-投产面积
                lmzSurvivalArea:'',//老马镇-存活面积
                jsz2018DevelopmentArea:'',//金石镇-2018发展面积
                jsz2019DevelopmentArea:'',//金石镇-2019发展面积
                jszOperationArea:'',//金石镇-投产面积
                jszSurvivalArea:'',//金石镇-存活面积
                jz2018DevelopmentArea:'',//建中-2018发展面积
                jz2019DevelopmentArea:'',//建中-2019发展面积
                jzLyOperationArea:'',//建中-投产面积
                jzSurvivalArea:'',//建中-存活面积
                ghz2018DevelopmentArea:'',//光辉镇-2018发展面积
                ghz2019DevelopmentArea:'',//光辉镇-2019发展面积
                ghzOperationArea:'',//光辉镇-投产面积
                ghzSurvivalArea:'',//光辉镇-存活面积
                fsz2018DevelopmentArea:'',//富顺镇-2018发展面积
                fsz2019DevelopmentArea:'',//富顺镇-2019发展面积
                fszOperationArea:'',//富顺镇-投产面积
                fszSurvivalArea:'',//富顺镇-存活面积
                hjz2018DevelopmentArea:'',//郪江镇-2018发展面积
                hjz2019DevelopmentArea:'',//郪江镇-2019发展面积
                hjzOperationArea:'',//郪江镇-投产面积
                hjzSurvivalArea:'',//郪江镇-存活面积
                bqx2018DevelopmentArea:'',//宝泉乡-2018发展面积
                bqx2019DevelopmentArea:'',//宝泉乡-2019发展面积
                bqxOperationArea:'',//宝泉乡-投产面积
                bqxSurvivalArea:'',//宝泉乡-存活面积
                bqz2018DevelopmentArea:'',//百顷镇-2018发展面积
                bqz2019DevelopmentArea:'',//百顷镇-2019发展面积
                bqzOperationArea:'',//百顷镇-投产面积
                bqzSurvivalArea:'',//百顷镇-存活面积
                ajz2018DevelopmentArea:'',//安居镇-2018发展面积
                ajz2019DevelopmentArea:'',//安居镇-2019发展面积
                ajzOperationArea:'',//安居镇-投产面积
                ajzSurvivalArea:'',//安居镇-存活面积
                gjz2018DevelopmentArea:'',//古井镇-2018发展面积
                gjz2019DevelopmentArea:'',//古井镇-2019发展面积
                gjzOperationArea:'',//古井镇-投产面积
                gjzSurvivalArea:'',//古井镇-存活面积
                dtz2018DevelopmentArea:'',//东塔镇-2018发展面积
                dtz2019DevelopmentArea:'',//东塔镇-2019发展面积
                dtzOperationArea:'',//东塔镇-投产面积
                dtzSurvivalArea:'',//东塔镇-存活面积
                dsx2018DevelopmentArea:'',//断石乡-2018发展面积
                dsx2019DevelopmentArea:'',//断石乡-2019发展面积
                dsxOperationArea:'',//断石乡-投产面积
                dsxSurvivalArea:'',//断石乡-存活面积
                gqz2018DevelopmentArea:'',//观桥镇-2018发展面积
                gqz2019DevelopmentArea:'',//观桥镇-2019发展面积
                gqzOperationArea:'',//观桥镇-投产面积
                gqzSurvivalArea:'',//观桥镇-存活面积
                jg2018DevelopmentArea:'',//金鼓-2018发展面积
                jg2019DevelopmentArea:'',//金鼓-2019发展面积
                jgOperationArea:'',//金鼓-投产面积
                jgSurvivalArea:'',//金鼓-存活面积
                jhz2018DevelopmentArea:'',//菊河镇-2018发展面积
                jhz2019DevelopmentArea:'',//菊河镇-2019发展面积
                jhzOperationArea:'',//菊河镇-投产面积
                jhzSurvivalArea:'',//菊河镇-存活面积
                lcz2018DevelopmentArea:'',//里程镇-2018发展面积
                lcz2019DevelopmentArea:'',//里程镇-2019发展面积
                lczOperationArea:'',//里程镇-投产面积
                lczSurvivalArea:'',//里程镇-存活面积
                lxz2018DevelopmentArea:'',//灵兴镇-2018发展面积
                lxz2019DevelopmentArea:'',//灵兴镇-2019发展面积
                lxzOperationArea:'',//灵兴镇-投产面积
                lxzSurvivalArea:'',//灵兴镇-存活面积
                laz2018DevelopmentArea:'',//乐安镇-2018发展面积
                laz2019DevelopmentArea:'',//乐安镇-2019发展面积
                lazOperationArea:'',//乐安镇-投产面积
                lazSurvivalArea:'',//乐安镇-存活面积
                jp2018DevelopmentArea:'',//建平-2018发展面积
                jp2019DevelopmentArea:'',//建平-2019发展面积
                jpOperationArea:'',//建平-投产面积
                jpSurvivalArea:'',//建平-存活面积
                bdz2018DevelopmentArea:'',//八洞镇-2018发展面积
                bdz2019DevelopmentArea:'',//八洞镇-2019发展面积
                bdzOperationArea:'',//八洞镇-投产面积
                bdzSurvivalArea:'',//八洞镇-存活面积
                qlz2018DevelopmentArea:'',//秋林镇-2018发展面积
                qlz2019DevelopmentArea:'',//秋林镇-2019发展面积
                qlzOperationArea:'',//秋林镇-投产面积
                qlzSurvivalArea:'',//秋林镇-存活面积
                lc2018DevelopmentArea:'',//柳池镇-2018发展面积
                lc2019DevelopmentArea:'',//柳池镇-2019发展面积
                lcOperationArea:'',//柳池镇-投产面积
                lcSurvivalArea:'',//柳池镇-存活面积
                sy2018DevelopmentArea:'',//三元-2018发展面积
                sy2019DevelopmentArea:'',//三元-2019发展面积
                syOperationArea:'',//三元-投产面积
                sySurvivalArea:'',//三元-存活面积
                lj2018DevelopmentArea:'',//乐加-2018发展面积
                lj2019DevelopmentArea:'',//乐加-2019发展面积
                ljOperationArea:'',//乐加-投产面积
                ljSurvivalArea:'',//乐加-存活面积
                hyz2018DevelopmentArea:'',//花园镇-2018发展面积
                hyz2019DevelopmentArea:'',//花园镇-2019发展面积
                hyzOperationArea:'',//花园镇-投产面积
                hyzSurvivalArea:'',//花园镇-存活面积
                jsx2018DevelopmentArea:'',//建设镇-2018发展面积
                jsx2019DevelopmentArea:'',//建设镇-2019发展面积
                jsxOperationArea:'',//建设镇-投产面积
                jsxSurvivalArea:'',//建设镇-存活面积
                ylz2018DevelopmentArea:'',//玉林镇-2018发展面积
                ylz2019DevelopmentArea:'',//玉林镇-2019发展面积
                ylzOperationArea:'',//玉林镇-投产面积
                ylzSurvivalArea:'',//玉林镇-存活面积
                tsz2018DevelopmentArea:'',//塔山镇-2018发展面积
                tsz2019DevelopmentArea:'',//塔山镇-2019发展面积
                tszOperationArea:'',//塔山镇-投产面积
                tszSurvivalArea:'',//塔山镇-存活面积
                sax2018DevelopmentArea:'',//石安镇-2018发展面积
                sax2019DevelopmentArea:'',//石安镇-2019发展面积
                saxOperationArea:'',//石安镇-投产面积
                saxSurvivalArea:'',//石安镇-存活面积
                ls2018DevelopmentArea:'',//龙树-2018发展面积
                ls2019DevelopmentArea:'',//龙树-2019发展面积
                lsOperationArea:'',//龙树-投产面积
                lsSurvivalArea:'',//龙树-存活面积
                xpz2018DevelopmentArea:'',//西平镇-2018发展面积
                xpz2019DevelopmentArea:'',//西平镇-2019发展面积
                xpzOperationArea:'',//西平镇-投产面积
                xpzSurvivalArea:'',//西平镇-存活面积
                slx2018DevelopmentArea:'',//双乐乡-2018发展面积
                slx2019DevelopmentArea:'',//双乐乡-2019发展面积
                slxOperationArea:'',//双乐乡-投产面积
                slxSurvivalArea:'',//双乐乡-存活面积
                xsz2018DevelopmentArea:'',//新生镇-2018发展面积
                xsz2019DevelopmentArea:'',//新生镇-2019发展面积
                xszOperationArea:'',//新生镇-投产面积
                xszSurvivalArea:'',//新生镇-存活面积
                xlz2018DevelopmentArea:'',//新鲁镇-2018发展面积
                xlz2019DevelopmentArea:'',//新鲁镇-2019发展面积
                xlzOperationArea:'',//新鲁镇-投产面积
                xlzSurvivalArea:'',//新鲁镇-存活面积
                sgx2018DevelopmentArea:'',//曙光乡-2018发展面积
                sgx2019DevelopmentArea:'',//曙光乡-2019发展面积
                sgxOperationArea:'',//曙光乡-投产面积
                sgxSurvivalArea:'',//曙光乡-存活面积
                waz2018DevelopmentArea:'',//万安镇-2018发展面积
                waz2019DevelopmentArea:'',//万安镇-2019发展面积
                wazOperationArea:'',//万安镇-投产面积
                wazSurvivalArea:'',//万安镇-存活面积
                lxx2018DevelopmentArea:'',//芦溪镇-2018发展面积
                lxx2019DevelopmentArea:'',//芦溪镇-2019发展面积
                lxxOperationArea:'',//芦溪镇-投产面积
                lxxSurvivalArea:'',//芦溪镇-存活面积
                ztz2018DevelopmentArea:'',//中太镇-2018发展面积
                ztz2019DevelopmentArea:'',//中太镇-2019发展面积
                ztzOperationArea:'',//中太镇-投产面积
                ztzSurvivalArea:'',//中太镇-存活面积
                ytx2018DevelopmentArea:'',//云同乡-2018发展面积
                ytx2019DevelopmentArea:'',//云同乡-2019发展面积
                ytxOperationArea:'',//云同乡-投产面积
                ytxSurvivalArea:'',//云同乡-存活面积
                xfz2018DevelopmentArea:'',//幸福镇-2018发展面积
                xfz2019DevelopmentArea:'',//幸福镇-2019发展面积
                xfzOperationArea:'',//幸福镇-投产面积
                xfzSurvivalArea:'',//幸福镇-存活面积
                xhx2018DevelopmentArea:'',//协和乡-2018发展面积
                xhx2019DevelopmentArea:'',//协和乡-2019发展面积
                xhxOperationArea:'',//协和乡-投产面积
                xhxSurvivalArea:'',//协和乡-存活面积
                xxx2018DevelopmentArea:'',//下新乡-2018发展面积
                xxx2019DevelopmentArea:'',//下新乡-2019发展面积
                xxxOperationArea:'',//下新乡-投产面积
                xxxSurvivalArea:'',//下新乡-存活面积
                zxx2018DevelopmentArea:'',//忠孝乡-2018发展面积
                zxx2019DevelopmentArea:'',//忠孝乡-2019发展面积
                zxxOperationArea:'',//忠孝乡-投产面积
                zxxSurvivalArea:'',//忠孝乡-存活面积
                ssz2018DevelopmentArea:'',//双胜镇-2018发展面积
                ssz2019DevelopmentArea:'',//双胜镇-2019发展面积
                sszOperationArea:'',//双胜镇-投产面积
                sszSurvivalArea:'',//双胜镇-存活面积
                jdx2018DevelopmentArea:'',//进都乡-2018发展面积
                jdx2019DevelopmentArea:'',//进都乡-2019发展面积
                jdxOperationArea:'',//进都乡-投产面积
                jdxSurvivalArea:'',//进都乡-存活面积
                qfz2018DevelopmentArea:'',//前锋镇-2018发展面积
                qfz2019DevelopmentArea:'',//前锋镇-2019发展面积
                qfzOperationArea:'',//前锋镇-投产面积
                qfzSurvivalArea:'',//前锋镇-存活面积
                zsz2018DevelopmentArea:'',//争胜镇-2018发展面积
                zsz2019DevelopmentArea:'',//争胜镇-2019发展面积
                zszOperationArea:'',//争胜镇-投产面积
                zszSurvivalArea:'',//争胜镇-存活面积
                yjz2018DevelopmentArea:'',//跃进镇 -2018发展面积
                yjz2019DevelopmentArea:'',//跃进镇 -2019发展面积
                yjzOperationArea:'',//跃进镇 -投产面积
                yjzSurvivalArea:'',//跃进镇 -存活面积
                ymz2018DevelopmentArea:'',//永明镇 -2018发展面积
                ymz2019DevelopmentArea:'',//永明镇 -2019发展面积
                ymzOperationArea:'',//永明镇 -投产面积
                ymzSurvivalArea:'',//永明镇 -存活面积
                tcz2018DevelopmentArea:'',//潼川镇 -2018发展面积
                tcz2019DevelopmentArea:'',//潼川镇 -2019发展面积
                tczOperationArea:'',//潼川镇 -投产面积
                tczSurvivalArea:'',//潼川镇 -存活面积
                sxs2018DevelopmentArea:'',//上新乡 -2018发展面积
                sxs2019DevelopmentArea:'',//上新乡 -2019发展面积
                sxsOperationArea:'',//上新乡 -投产面积
                sxsSurvivalArea:'',//上新乡 -存活面积
                jfz2018DevelopmentArea:'',//景福镇 -2018发展面积
                jfz2019DevelopmentArea:'',//景福镇 -2019发展面积
                jfzOperationArea:'',//景福镇 -投产面积
                jfzSurvivalArea:'',//景福镇 -存活面积
                glx2018DevelopmentArea:'',//广利乡 -2018发展面积
                glx2019DevelopmentArea:'',//广利乡 -2019发展面积
                glxOperationArea:'',//广利乡 -投产面积
                glxSurvivalArea:'',//广利乡 -存活面积
                lxinz2018DevelopmentArea:'',//立新镇 -2018发展面积
                lxinz2019DevelopmentArea:'',//立新镇 -2019发展面积
                lxinzOperationArea:'',//立新镇 -投产面积
                lxinzSurvivalArea:'',//立新镇 -存活面积
                zxinz2018DevelopmentArea:'',//中新镇 -2018发展面积
                zxinz2019DevelopmentArea:'',//中新镇 -2019发展面积
                zxinzOperationArea:'',//中新镇 -投产面积
                zxinzSurvivalArea:'',//中新镇 -存活面积
                zhihez2018DevelopmentArea:'',//紫河镇 -2018发展面积
                zhihez2019DevelopmentArea:'',//紫河镇 -2019发展面积
                zhihezOperationArea:'',//紫河镇 -投产面积
                zhihezSurvivalArea:'',//紫河镇 -存活面积
            },
            townshipOption:townshipOption, //乡镇
            rules: {
                managementName:[
                      {required: true, message: '请输入经营主体名称',trigger: 'blur', }
                ],
                registrationDate:[
                    {required: true, message: '请选择注册日期',trigger: 'blur', }
                ],
                township: [
                    { required: true, message: '请选择乡镇',trigger: 'blur' }
                ],
                postalAdress:[
                     { required: true, message: '请输入通讯地址',trigger: 'blur' }
                ],
                storageAddress: [
                    { required: true, message: '请输入仓储地址',trigger: 'blur' }
                ],
                businessAddress: [
                    { required: true, message: '请输入经营地址',trigger: 'blur' }
                ],
                legalName:[
                    { required: true, message: '请输入负责人名称',trigger: 'blur' }
                ],
                mobilePhone:[
                    { required: true, message: '请输入移动电话',trigger: 'blur' },
                    {validator: validate.FormValidate.Form().validatePhone,trigger: 'blur'}
                ],
                amountNum:[
                     { required: true, message: '请输入当前存栏量',trigger: 'blur' }
                ],
                address:[
                    { required: true, message: '请输入详细地址',trigger: 'blur' }
                ],
                outNum:[
                    { required: true, message: '请输入年末出栏量',trigger: 'blur'}, 
                ],
                longitude:[
                     { required: true, message: '请输入纬度',trigger: 'blur' }
                ],
                latitude:[
                     { required: true, message: '请输入维度',trigger: 'blur' }
                ],
            },
            enterpriseNameOption:[], //企业名称列表
            timeout:  null
        }
    },
    components:{
        'Custom-form':CustomForm,
        // 'Baidu-map':BaiduMap
    },
    mounted(){
        this.nameFlag = this.activeNames;
        this.urlType = this.$route.query.type == 'detail'?true:false;
        this.miniNav = this.$route.query.toMiniNav; //左上角导航
        this.id = this.$route.query.id; //查看详情数据的id值
        this.initData(); //初始化数据
    },
    methods:{
        //自定义表单数值更改，父组件同步
        customDatavalueChange(data){
            this.formDate = data;
        },
        //折叠版折叠，打开，图标变化
        handleChange(val){
            if(val instanceof Array){
                val.sort();
                this.nameFlag = val
                console.log(this.nameFlag )
            }else{
                this.nameFlag[0] = val
            }  
        },
        //初始化页面数据
        initData(){
            this.getDataDetail(); //调用初始化接口
        },
        //详情接口，获取详情数据
        async getDataDetail(){
            this.loading = true; //显示加载框
            if(this.$route.query.type === 'add'){ // 新增时没有id，将id置空
                this.id = ''
            }
            let res = await industrialDevelopmentDetail({id:this.id});
             if(res.data.status== 0){
                this.ruleForm =  res.data.entitys;
                this.formDate =  res.data.entitys.customDataList; //自定义表单数据
            }else if(res.data.status== -1 || res.data.status== 500){
                this.$message({
                    message: res.data.msg,
                    type: 'warning'
                })
            }else if(res.data.status == -2){
                handleCofirm(res.data.msg, 'warning', false).then(() => {
                    window.loginOut();
                })
            }else{
                this.$message({
                    message: '服务器异常，请稍后再试',
                    type: 'warning'
                })
            }
            this.loading = false; //隐藏加载框
        },
        //取消
        cancel(){
            this.$router.go(-1); //返回上一路由
        },
        //提交事件
        async submit(){
            try{
                let valid = await this.$refs.ruleForm.validate();
                if(valid){
                    this.$confirm('确认提交吗？', '提示', {}).then(() => {
                        if(this.$route.query.type === 'add'){
                            this.addData(); //新增数据
                        }else{
                            this.updateData();//更新信息
                        } 
                    })
                }
            }catch(err){
                console.log(err)
            } 
        },
        //编辑接口调用
        async updateData(){
            this.loading = true; //显示加载框
            //删除不需要传值给后端的字段
            delete this.ruleForm.pageSize;
            delete this.ruleForm.currentPage
            delete this.ruleForm.queryStartTime
            delete this.ruleForm.queryEndTime
            delete this.ruleForm.queryKey
            delete this.ruleForm.buildUser
            delete this.ruleForm.checkUser
            this.ruleForm.id = this.id; //数据id
            this.ruleForm.customDataList = this.formDate;//自定义表单list
            let updateObj = JSON.stringify(this.ruleForm);
            let res = await industrialDevelopmentUpdate(updateObj);
             if(res.data.status== 0){
                this.$message({
                    message: '编辑成功',
                    type: 'success'
                })
                this.$router.go(-1); //返回上一路由
            }else if(res.data.status== -1 || res.data.status== 500){
                this.$message({
                    message: res.data.msg,
                    type: 'warning'
                })
            }else if(res.data.status == -2){
                handleCofirm(res.data.msg, 'warning', false).then(() => {
                    window.loginOut();
                })
            }else{
                this.$message({
                    message: '服务器异常，请稍后再试',
                    type: 'warning'
                })
            }
            this.loading = false; //隐藏加载框
        },
         //新增数据
        async addData(){
            this.loading = true; //显示加载框
            // this.ruleForm.id = this.id; //数据id
            this.ruleForm.id = 0; //数据id
            this.ruleForm.updateTime = getData(); //更新时间
            this.ruleForm.createTime = getData(); //创建时间
            this.ruleForm.customDataList = this.formDate;//自定义表单list
            let addObj = JSON.stringify(this.ruleForm);
            let res = await industrialDevelopmentInsert(addObj);
             if(res.data.status== 0){
                this.$message({
                    message:'新增成功',
                    type: 'success'
                })
                this.$router.go(-1); //返回上一路由
            }else if(res.data.status== -1 || res.data.status== 500){
                this.$message({
                    message: res.data.msg,
                    type: 'warning'
                })
            }else if(res.data.status == -2){
                handleCofirm(res.data.msg, 'warning', false).then(() => {
                    window.loginOut();
                })
            }else{
                this.$message({
                    message: '服务器异常，请稍后再试',
                    type: 'warning'
                })
            }
            this.loading = false; //隐藏加载框
        },
        //地图获取经纬度
        getClickInfo (e) {
            this.ruleForm.longitude = e.point.lng
            this.ruleForm.latitude = e.point.lat
        },
        //地图缩放
        syncCenterAndZoom (e) {
            const {lng,lat} = e.target.getCenter()
            this.ruleForm.longitude = lng
            this.ruleForm.latitude = lat
            this.zoom = e.target.getZoom()
        },
        handleSelect(item) {
            console.log(item);
        }
    }
}
</script>
<style scoped lang="scss">

</style>