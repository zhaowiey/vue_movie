import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        login:false,
        loginnum:0,
        loginmessage:[
        	{
        		name:'赵伟',
        		passname:'18363836551@163.com',
        		password:'123456',
        		sex:'男',
        		brith:'1993-03-27',
        		phone:13888888888,
        		pic:require('./admin.jpg'),
        	},
        	{
        		name:'咕咕',
        		passname:'846045915@qq.com',
        		password:'123456',
        		sex:'男',
        		brith:'1989-05-03',
        		phone:13888888888,
        		pic:require('./admin2.jpg'),
        	}
        ]
    }
})

export default store
