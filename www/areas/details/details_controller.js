// 详细页面控制器
angular.module('details.controller', ['details.service'])
  .controller('DetailsCtrl', function($scope,GlobalVariable,$stateParams,$ionicHistory) {

   /* // 定义购物车数量操作
    $scope.obj_cartCount={
      count:0
    }

    // 页面进入之后获取全部商品数量的方法
    $scope.$on('$ionicView.enter',function(){
        $scope.getAllCount();
    })
*/
    // 通过后台获取到的商品详细信息数据
    $scope.obj_goodsInfo = {
      goodsId: "200067",
      description: "若昕 韩版睡衣女冬法兰绒家居服加厚珊瑚绒女人卡通甜美睡衣秋冬套装 66651K 女 M",
      prise: "66",
      picture: [],
      src: "",
      isFork: false,
      colorGroup: [{name: "红色", value: "red"}, {name: "蓝色", value: "blue"}],
      sizeGroup: [{name: "s", value: "s"}, {name: "m", value: "m"}, {name: "l", value: "l"}]
    };


    // 用户选择信息
    $scope.obj_goodsDetailInfo = {
      goodsId: $scope.obj_goodsInfo.goodsId,
      isFork: $scope.obj_goodsInfo.isFork,
      description: $scope.obj_goodsInfo.description,
      src: $scope.obj_goodsInfo.src,
      prise: $scope.obj_goodsInfo.prise,
      color: "",
      size: "",
      number: 1
    }

/*
    // 数量加1
    $scope.func_jia1 = function () {
      $scope.obj_goodsDetailInfo.number++;
    }

    // 数量减1
    $scope.func_jian1 = function () {
      if ($scope.obj_goodsDetailInfo.number != 1) {
        $scope.obj_goodsDetailInfo.number--;
      }
    }*/



    // 加入购物车方法
    $scope.func_addToCart=function(){
      console.log($scope.obj_goodsDetailInfo);
      /*var obj_newData={};
      // 硬拷贝方法
      angular.copy($scope.obj_goodsDetailInfo,obj_newData);
      // 从新改变编号
      obj_newData.goodsId =obj_newData.goodsId + "-" + obj_newData.color + "-" + obj_newData.size;

      IndexdbJs.get(obj_newData.goodsId,'cart',function(data){
          if(data){
            $scope.obj_cartCount.count=$scope.obj_cartCount.count+obj_newData.number;
            $scope.$apply();

            data.number=data.number+obj_newData.number;
            IndexdbJs.update('cart',data,null,null);
          }
        else{
            IndexdbJs.add('cart',obj_newData,null,null);

            // 当增加新数量的时候修改购物车上的绑定模型值
            $scope.obj_cartCount.count=$scope.obj_cartCount.count+obj_newData.number;
            $scope.$apply();
          }
      },null)*/

    }

    // 获取全部商品数量
    //$scope.getAllCount=function(){
    //  IndexdbJs.getAll('cart',function(data){
    //    data.forEach(function(item,index){
    //      $scope.obj_cartCount.count=$scope.obj_cartCount.count+item.number;
    //      $scope.$apply();
    //    })
    //
    //  },null);
    //}
    //
    //
    //// 回到前一个页面
    //$scope.func_goBack=function(){
    //  $ionicHistory.goBack();
    //}


  })
