# 访问State
## 使用属性访问
  例如：store.js的state中设置了state数据data1:
  
   ```javascript
    const state = {
       data1:100 
    }
    export default state //导出模块
   ```
   则在组件中访问如下：

   ```vue
    <template>
    <div>
	   {{$store.state.data1}}  //注意需要其设置store为全局访问
    </div>
</template>

   ```
   页面就会展示出state.data1的值
## 使用方法访问
## 使用mapState辅助函数按需访问
  在组件中如果访问多条state数据，例如：
  
  ```javascript
  const state = {
  //state用于设置存储的数据
  count: 4,
  data1:100,
  data2:200,
  data3:300,
  data4:400
  }
export default state //导出模块
  ```
  可以通过mapState 方法来获取，这个方法是vuex的方法，使用的时候作为computed中的一个计算属性来使用使用如下：
  1，引入mapState 
 ```javascript
import { mapState } from 'vuex'
  ```
  2,在computed计算属性中：
  ```javascript
  <script>
import { mapState } from 'vuex'
export default {
   data(){

    },
    computed:{
        ...mapState(['data1','data2','data3','data4'])  //获取数据
    }
};
</script>
<style scoped lang=""></style
  ```
组件中可以直接访问：
```vue
<template>
     <div>
         <div>
	   {{$store.state.data1}}
    </div>
     <div>
         {{data1}}  
     </div>  
     <!--访问数据-->
     <div>{{data2}}</div>
     </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
   data(){
     return{}
    },
    created(){
      window.console.log(this.data3,this.data4)  //访问数据
    },
    computed:{
        ...mapState(['data1','data2','data3','data4'])   //获取数据
    }
};
</script>
```
...mapState()中是一个数组，数组中的元素是字符串，指的是需要从全局的state中获取的数据