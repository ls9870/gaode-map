<template>
  <div id="container"></div>
</template>
<script >
export default {
  name: 'HelloWorld',
  data() {
    return{
        local:"",
        jingdu:"",
        weidu:"",
      }
    },
  mounted(){
    var that = this;
    var mapObj = new AMap.Map('container');
    mapObj.plugin('AMap.Geolocation', function () {
     var geolocation = new AMap.Geolocation({
        enableHighAccuracy: true,//是否使用高精度定位，默认:true
        timeout: 10000,          //超过10秒后停止定位，默认：无穷大
        maximumAge: 0,           //定位结果缓存0毫秒，默认：0
        convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
        showButton: true,        //显示定位按钮，默认：true
        buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
        buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
        showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
        panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
        zoomToAccuracy:true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
      });
      mapObj.addControl(geolocation);
      geolocation.getCurrentPosition();
      // console.log(  geolocation)

//console.log(data.formattedAddress);

      AMap.event.addListener(geolocation, 'complete', (data)=>{
        console.log(data.formattedAddress,data.position.lng,data.position.lat);
        // sessionStorage.setItem('1',data.addressComponent.province+data.addressComponent.city+data.addressComponent.district);
        sessionStorage.setItem('1', data.addressComponent.district);
        sessionStorage.setItem('2', data.position.lng);
        sessionStorage.setItem('3', data.position.lat)
        // that.msg=data.formattedAddress;
        // console.log(that.msg.provincea);
      });//返回定位信息
      // AMap.event.addListener(geolocation, 'error', onError);      //返回定位出错信息
    });
    that.local = sessionStorage.getItem('1');
    that.jingdu = sessionStorage.getItem('2');
    that.weidu = sessionStorage.getItem('3');

    // console.log( "经度"+that.jingdu );
    // console.log( "纬度"+that.weidu  );

    console.log( that.local );
    console.log( "经度"+(parseFloat(that.jingdu)).toFixed(6) );
    console.log( "纬度"+(parseFloat(that.weidu)).toFixed(6) );

    // methods: {
    //   map(){
    //     this.getNearby();
    //     var that = this;
    //     var mapObj = new AMap.Map('container');
    //     mapObj.plugin('AMap.Geolocation', function () {
    //       var geolocation = new AMap.Geolocation({
    //         enableHighAccuracy: true,//是否使用高精度定位，默认:true
    //         timeout: 10000,          //超过10秒后停止定位，默认：无穷大
    //         maximumAge: 0,           //定位结果缓存0毫秒，默认：0
    //         convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
    //         showButton: true,        //显示定位按钮，默认：true
    //         buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
    //         buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
    //         showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
    //         showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
    //         panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
    //         zoomToAccuracy:true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
    //       });
    //       mapObj.addControl(geolocation);
    //       geolocation.getCurrentPosition();
    //       // console.log(  geolocation)
    //       AMap.event.addListener(geolocation, 'complete', (data)=>{
    //         console.log(data.formattedAddress,data.position.lng,data.position.lat);
    //         // sessionStorage.setItem('1',data.addressComponent.province+data.addressComponent.city+data.addressComponent.district);
    //         sessionStorage.setItem('1', data.addressComponent.district);
    //         sessionStorage.setItem('2', (parseFloat(data.position.lng)).toFixed(6));
    //         sessionStorage.setItem('3', (parseFloat(data.position.lat)).toFixed(6))
    //         // that.msg=data.formattedAddress;
    //         // console.log(that.msg.provincea);
    //       });//返回定位信息
    //       // AMap.event.addListener(geolocation, 'error', onError);      //返回定位出错信息
    //     });
    //     that.local = sessionStorage.getItem('1');
    //     that.jingdu = sessionStorage.getItem('2');
    //     that.weidu = sessionStorage.getItem('3');
    //
    //     console.log( "经度"+that.jingdu );
    //     console.log( "纬度"+that.weidu  );
    //     console.log( that.local );
    //   }
    // }
  },
}
</script>
<style scoped>
    #container {width:300px; height: 180px; }
</style>
