/* eslint-disable */
import { createApp } from 'vue'
import App from './App.vue'

// if (!('mp' in window)) {
//     window.mp = {
//         trigger(name, ...args) {
//             console.log(name,args)
//         },
//         events: {
//             add(name, ...args) {
//                 console.log(name,args)
//             },
//             call(name) {
//                 console.log(name)
//             }
//         }
//     }
// }

createApp(App).mount('#app')
