import { Indicator } from 'mint-ui';
import axios from 'axios'
export default{
    common:{
        method:'GET',
        data:{},
        params:{}
    },
    $axios(options={}){
        options.method = options.method || this.common.method
        options.data = options.data || this.common.data
        options.params = options.params || this.common.params

        Indicator.open('加载中')
        return axios(options).then(v=>{
            let data = v.data.data
            return new Promise((res,rej)=>{
                if(!v)return rej()
                setTimeout(() => {
                    Indicator.close()
                }, 500);
                res(data)
            })
        })
    }
}
