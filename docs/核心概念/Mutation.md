## 什么是Mutation
在vuex中state是用来放置和访问数据的，但是如何要修改state的话，不能直接使用js修改变量的方式，需要通过Mutation来修改state数据  
 1，设置Mutation对象：  
```javascript
  const mutations={

   }  //设置固定的对象 mutations={  }
```
2、 Mutations修改数据原理：
声明 mutations对象后，里面放的是一些方法，这写方法用于修改state，例如：
```javascript
const  mutations={  //这里面的方法用于修改state数据
   add(state,t){
		state.data1=state.data1+t
	},
	sub(state,t){
     state.data2=state.data2-t
	},
    }
  
```
## 调用 Mutations
### 1，使用 $store.commit()方法
在组件中调用这写方法：使用this.$store.commit('方法名')
```javascript
   this.$store.commit('add')
```
commit 方法有两个参数，第一个是要调用的方法名，第二个是要传递的参数给mutations里面的方法:  
组建中：
```javascript
  methods:{
        handleAdd(){
         this.$store.commit('add',100)
        },
        handleSub(){
         this.$store.commit('sub',100)
        }
    }
```
mutations中的方法也有两个参数，第一个指的是整个state对象，这个对象包含了所有全局的state数据，第二个参数就指的是在组建中调用这个方法传递过来的参数：
```javascript
 const mutations={   // mutations对象用于配置数据修改时候使用的方法，每个方法使用逗号隔开，方法的第一个参数就是state对象
	jia(state){
		state.count++
	},
	jian(state){
		state.count--
	},
    add(state,t){ //这里的参数t就是调用这个方法时候传递过来的参数
		state.data1=state.data1+t
	},
	sub(state,t){
     state.data2=state.data2-t
	},
	chuanzhi(state,data){   //给mutaions方法传值，这里的data是组件Mutation点击后传进来的值
       state.count=data
	}

//	 mutation传值方法:
//	 1、  如果要在组件中给定义的mutations传参,则需要给mutations里的方法传递两个参数,第一个参数是state,第二个参数是组件传过来的参数
//   2,给mutation传值的时候，组件这边的步骤：
//		     需要使用commit()方法的第一个参数写成要执行传参的那个函数，第二个参数就是要传过去的参数，也就是实参
 }

```
### 2,使用mapMutations函数
这个函数和mapState 都属于辅助函数，这个函数的原理是使用mapMutations将 Mutations中设置的方法映射为当前组件的方法： 
使用如下：  
1、引入mapMutations， 在需要使用的组建中引入：   
```javascript
import {mapMutations} from 'vuex'
```
2,在组件methods选项中注入mapMutations方法：  
```javascript
 methods:{
     ...mapMutations(['add1','add2'])
    }
```
在methods中使用...mapMutations（）方法，他的参数是一个数组，数组元素就是要调用的Mutations里面的方法，此时数组里面的元素就成了当前组件的一个方法可以直接调用：
```vue
    <div>
    <button @click="add1">mapMutations add1</button>
    <button @click="add2">mapMutations add2</button>
    </div>
```
也可以将方法映射为别的名称：  
```javascript
 methods:{
     ...mapMutations({add3:'add1'})
    }
```
调用：  
```vue
  <div>
        <button @click="add3">mapMutations add3</button>
     </div>
```
## Mutations中不能有异步操作
在Mutations 方法中不能有异步相关的操作，例如settimeout,promise等操作：
```
const mutations={ 
	jia(state){
		setTimeout(()=>{
          state.count++
        },1000)
	},
	}
```
上面的方法在操作的时候不会生效，页面会显示更改，但是state不会改变  
因为 Mutations中不能有异步操作