import {defineStore} from 'pinia'

export default function useProductStore() {
    return defineStore('products' , {
        state: ()=> ({
            showItems: false
        }),
      
    })()
}