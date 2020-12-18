
## Getter概念
Getters是state在改变的时候，定义在getters里面的方法会执行，相当于是state相关数据的计算属性
## 定义Getters
```javascript
const getters={
    computedMethods:function(state){
    	  return state.count +100
    },
    dataChange(state){
     return '数据是：'+ state.data1
    }
  }
export default getters  //导出模块
```
## 访问Getter

### 1,使用属性访问
getters:  
```javascript
const getters={
  dataChange(state){
     return '数据是：'+ state.data1
    }
  }
  export default getters
```
组件中：
```javascript
<div>this.$store.state.getters.dataChange</div>
```
说明: 当state.data1数据发生改变的时候就会执行 getters中的dataChange函数,返回一个监听的这个数据加工后的数据
### 2,使用方法访问
 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 !!!!!!!!!!!!!!!!!!!!!!!!!!!!1
### 3,使用mapState辅助函数访问
在computed选项中，使用mapGetters 可以访问多个全局性的getters, mapGetters方法的参数是一个数组，数组的元素是getters中定义好的数据，当state数据发生改变，如果getters的方法是与变化相关的state,则这个getters也会改变
```javascript
const getters={
    dataChange(state){
      return '数据是：'+ state.data1
    },
   }
 export default getters  //导出模块
```
在组建中的computed选项中配置mapGetters：  
```javascript
computed:{
  ...mapGetters(['dataChange'])  // 
         },
```
访问映射过来的mapGetters数据：
```vue
<div><button >通过mapGetters访问Getters {{test}}</button></div> //可以直接访问
```
可以为映射的getter自定义名称
```javascript
computed:{
         ...mapGetters({newData:'dataChange'})  //  赋予新名称
         },
```