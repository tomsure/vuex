## Actions执行的是mutation里面的方法
 ```javascript
 const mutations={   // mutations对象用于配置数据修改时候使用的方法，每个方法使用逗号隔开，方法的第一个参数就是state对象
	jian(state){
		state.count++
	},
}

 const actions={
	changeData:function(context){ //context是执行上下文
       context.commit('jian')
	}
}
export default actions
// actions是通过间接的执行mutaion里面的方法来改变state里面的数据
//用法:
//  定义actions:
//  1,定义actions对象,对象里面定义多个方法,方法的参数叫context
//  2,使用context.commit()方法调用在mutation里面定义的方法
//  调用actions
//   在页面调用的时候,使用$store.dispatch()方法,里面参数就是actions里面定义的方法

 ```
## 异步执行
 ```javascript
 const actions={
	testSub:function(context){ //倒计时，异步操作
      setTimeout(() => {
		context.commit('subNum') 
	  }, 2000);
	}
}
export default actions
 ```
 如果需要执行异步操作需要再actions中操作
## 触发Actions方法

### 1，使用store.dispatch('')
```javascript
methods:{
        asyncSub(){
            this.$store.dispatch('testSub')  //这个方法就是定义在actions中的方法
        }
    }
```
### 2，使用mapActions辅助函数
mapActions用于将actions中配置的全局方法映射为本地的方法，在本地直接调用
1,引入mapActions
```javascript
import {mapActions} from 'vuex'
```
2，action中： 
```javascript
const actions={
	changeData:function(context){
       context.commit('jian')
	},
	testSub:function(context,plaload){ //倒计时，异步操作
      setTimeout(() => {
		context.commit('subNum',plaload) 
	  }, 2000);
	}
}
export default actions
```
2,组件中配置调用：
```javascript
 
 methods:{
        ...mapActions(['testSub','changeData']),  //映射actionss中的方法
        handleNewSub(){ 
          this.testSub(9999)  //调用方法，参数就是传到action中的参数
        }
    }
```
使用 ...mapActions（）方法，参数是一个数组，数组中的元素就是需要调用的在actions中定义的方法名,调用的时候方法第一个参数就是传到action中的参数
## Actions方法传参
第二个参数就是传参的位置  
组件中
```javascript
 methods:{
        asyncSub(){
            this.$store.dispatch('testSub',9000)  //第二个就是参数
                  }
        }
```
actions中
```javascript
const actions={
	testSub:function(context,plaload){ //payload就是参数
      setTimeout(() => {
		context.commit('subNum',plaload) 
	  }, 2000);
	}
}
export default actions
```
mutaion中
```javascript
const mutations={  
	subNum(state,playload){  //payload就是参数
     state.data2=10001+playload
	                     }
               }
export default  mutations
```
使用mapAction传参：定义时候actions中，moutions中都一样，参数就在调用的时候传递即可：  
```javascript
 methods:{
  ...mapActions(['testSub','changeData']),
  handleNewSub(){
            this.testSub(100)  //传参
        }
 }
 ```
## 执行流程
1,用户在组件中操作，触发组件中的方法，组件方法中执行this.$store.dispatch('xxx')； 
2,this.$store.dispatch('xxx') 中的xxx执行 actions中的方法；  
3，actions中的方法执行的时候调用 mutations中的方法；