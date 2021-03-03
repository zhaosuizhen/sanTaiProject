<template>
  <view>
    <!-- 产品名称 -->
      <view class="formBox">
          <van-field :value="productName" label="产品名称" id="productName" placeholder="请输入名称" :border="false" type="text" :error-message="productNameError" @change="cghangeForm" required/>
      </view>
    <!-- 供应数量 -->
      <view class="formBox" style="padding-right: 100rpx;">
          <van-field :value="productNum" label="供应数量" id="productNum" placeholder="请输入数量" :border="false" type="number" :error-message="productNumError" @change="cghangeForm" required/>
          <span class="unit">公斤</span>
      </view>
    <!-- 产品价格 -->
      <view class="formBox" style="padding-right: 100rpx;">
          <van-field :value="price" label="产品价格" id="price" placeholder="请输入价格" :border="false" type="text" :error-message="priceError" @change="cghangeForm" required/>
          <span class="unit">元/公斤</span>
      </view>
    <!-- 产品描述 -->
      <view class="formBox">
          <van-field autosize :value="productDescribe" label="产品描述" id="productDescribe" placeholder="请输入描述" :border="false" type="textarea" :error-message="productDescribeError" @change="cghangeForm" required/>
      </view>
    <!-- 上传图片 -->
      <van-field autosize :value="value" label="上传图片" :border="false" type="text" readonly/>
      <view class="formBox">
          <van-uploader :file-list="fileList" @after-read="afterRead" @delete="deleteImg" max-count="1"/>
      </view>
    <!-- 交易地址 -->
      <view class="formBox">
          <van-field :value="address" label="交易地址" id="address" placeholder="请输入地址" :border="false" type="text" :error-message="addressError" @change="cghangeForm" required/>
      </view>
    <!-- 联系人 -->
      <view class="formBox">
          <van-field :value="contacts" label="联系人" id="contacts" placeholder="请输入联系人" :border="false" type="text" :error-message="contactsError" @change="cghangeForm" required/>
      </view>
    <!-- 联系方式 -->
      <view class="formBox">
          <van-field :value="phone" label="联系方式" id="phone" placeholder="请输入联系方式" :border="false" type="text" :error-message="phoneError" @change="cghangeForm" required/>
      </view>
    <!-- 提交按钮 -->
          <van-button size='large' type='info' @click="submit">提交信息</van-button>
  </view>
</template>

<script>
import imgUrl from '@/utils/imgUrl'
import { getUpdate } from '@/api/supplyInfo'

export default {
    data(){
        return{
          submitFlag:false,
            fileList: [],
            submitForm:{
              productName:'',//产品名称
              productNum:0,//数量
              price:0,//价格
              productDescribe:'',//产品描述
              address:'',//地址
              contacts:'',//联系人
              phone:'',//联系电话
              productImg:'',//图片
              tokenid:'',//openID
              dataType:0
            },

            productNameError:'',//产品名称错误信息
            productNumError:'',//数量错误信息
            priceError:'',//价格错误信息
            productDescribeError:'',//产品描述错误信息
            addressError:'',//地址错误信息
            contactsError:'',//联系人错误信息
            phoneError:'',//联系电话

            
            flag_1: false,
            flag_2: false,
            flag_3: false,
            flag_4: false,
            flag_5: false,
            flag_6: false,
            flag_7: false,

            value:'',
            pageType:'',
            openID:''
        }
    },
    onLoad(res){
      if(res.query == 'out'){
        this.submitForm.dataType = 1
      }else if(res.query == 'in'){
        this.submitForm.dataType = 2
      }
      console.log(this.submitForm.dataType)
        
    },
    onShow(){
      this.submitForm.tokenid = uni.getStorageSync('openID')
      console.log(this.submitForm.tokenid)
    },
    methods:{
      //删除图片
      deleteImg(i){
        console.log(i);
        this.fileList = []
      },
      cghangeForm(e){
        console.log(e)
        this.submitForm[e.target.id] = e.detail
        //产品名称
        if(e.target.id == 'productName'){
          if(!e.detail.trim()){
            this.productNameError = '名称不能为空'
            this.submitFlag = false
          }else{
            this.productNameError = ''
          }
        }
        // 数量
        else if(e.target.id == 'productNum'){
          if(!e.detail.trim()){
            this.productNumError = '数量不能为空'
            this.submitFlag = false
          }else{
            this.productNumError = ''
          }
        }
        // 价格
        else if(e.target.id == 'price'){
          if(!e.detail.trim()){
            this.priceError = '价格不能为空'
            this.submitFlag = false
          }else{
            this.priceError = ''
          }
        }
        // 描述
        else if(e.target.id == 'productDescribe'){
          if(!e.detail.trim()){
            this.productDescribeError = '描述不能为空'
            this.submitFlag = false
          }else{
            this.productDescribeError = ''
          }
        }
        // 地址
        else if(e.target.id == 'address'){
          if(!e.detail.trim()){
            this.addressError = '地址不能为空'
            this.submitFlag = false
          }else{
            this.addressError = ''
          }
        }
        // 联系人
        else if(e.target.id == 'contacts'){
          if(!e.detail.trim()){
            this.contactsError = '联系人不能为空'
            this.submitFlag = false
          }else{
            this.contactsError = ''
          }
        }
        // 联系电话
        else if(e.target.id == 'phone'){
          if(!e.detail.trim()){
            this.phoneError = '联系电话不能为空'
            this.submitFlag = false
          }else{
            this.phoneError = ''
          }
        }
        //校验通过
            this.submitFlag = true
      },
        //上传图片
        afterRead(e){
            const { file } = e.detail
            uni.uploadFile({
              url: 'https://119.6.57.72:8076/bigdata_wechat/supply-demand/uploadImage?folder=weixin', // 仅为示例，非真实的接口地址
              // url: 'http://119.6.57.72:8099/bigdata_update_nanxian/enterprise-output-value/upload', // 仅为示例，非真实的接口地址
              filePath: file.path,
              name: 'file',
              formData: { user: 'test' },
              data: {
                folder: 'weixin'
              },
              success: (res) => {
                console.log(res.data)
                // 上传完成需要更新 fileList
                // this.submitForm.productImg = JSON.parse(res.data).entitys
                // let url = `${imgUrl}${JSON.parse(res.data).entitys}`
                let url = `${imgUrl}${res.data}`
                console.log(url)
                this.fileList = [{url,name:'图片',isImage: true,deletable: true,}]
              },
            })
        },
        //提交表单
        async submit(){
          //名称
            if(!this.submitForm.productName.trim()){
              this.productNameError = '名称不能为空'
              this.flag_1 = false
            }else{
              this.productNameError = ''
              this.flag_1 = true
            }
          //数量
            if(!this.submitForm.productNum != 0){
              this.productNumError = '数量不能为空'
              this.flag_2 = false
            }else{
              this.productNumError = ''
              this.flag_2 = true
            }
          //价格
            if(!this.submitForm.price != 0){
              this.priceError = '价格不能为空'
              this.flag_3 = false
            }else{
              this.priceError = ''
              this.flag_3 = true
            }
          //描述
            if(!this.submitForm.productDescribe.trim()){
              this.productDescribeError = '描述不能为空'
              this.flag_4 = false
            }else{
              this.productDescribeError = ''
              this.flag_4 = true
            }
          //地址
            if(!this.submitForm.address.trim()){
              this.addressError = '地址不能为空'
              this.flag_5 = false
            }else{
              this.addressError = ''
              this.flag_5 = true
            }
          //联系人
            if(!this.submitForm.contacts.trim()){
              this.contactsError = '联系人不能为空'
              this.flag_6 = false
            }else{
              this.contactsError = ''
              this.flag_6 = true
            }
          //联系方式
            if(!this.submitForm.phone.trim()){
              this.phoneError = '联系方式不能为空'
              this.flag_7 = false
            }else{
              this.phoneError = ''
              this.flag_7 = true
            }
            if(this.flag_1 && this.flag_2 && this.flag_3 && this.flag_4 && this.flag_5 && this.flag_6 && this.flag_7){
              this.submitFlag = true
            }
            else{
              this.submitFlag = false
            }
            if(this.submitForm.tokenid == ''){
              this.submitFlag = false
              uni.showToast({
                  title:'请先登录',
                  icon:'none'
              })
            }
            if(this.submitFlag){
              let obj = JSON.stringify(this.submitForm)
              let [err,res] = await getUpdate(obj)
              console.log(res)
              uni.showToast({
                  title:'添加成功',
                  icon:'success'
              })
              uni.switchTab({
                url:'/pages/supplyInfo/index'
              })
            }
            
        },
    }
}
</script>

<style lang="less" scoped>
.formBox{
    position: relative;
    border-bottom: 1px solid #ccc;
    padding-left: 20rpx;
}
.unit{
    position: absolute;
    display: block;
    width: 100rpx;
    top: 50%;
    right: 0;
    transform: translate(0,-50%);
    font-size: 24rpx !important;
}
.van-uploader__preview-delete .van-uploader__preview-delete{
  display: none !important;
}
</style>