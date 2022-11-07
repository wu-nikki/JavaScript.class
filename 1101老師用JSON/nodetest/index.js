// import a from './a.js'

// import { b1, b2 as bb } from './b.js'

import * as b from './b.js'

// import c, { animals, fruits } from './c.js'



// console.log(a)
// console.log(b1, bb)
// console.log(b.b1, b.b2);

// console.log(c)
// console.log(animals, fruits);

// 修改 預設匯入 只會改到這個檔案讀到的值，不會改到來源檔案的變數
// a.a1 = 11
// console.log(a.a1);
// console.log(a.get());


// Cannot assign to read only property 'b1' of object '

// 無法直接修改 具名引用匯入的值
// b.b1 = '1111'


// 如果具名匯入是物件或陣列 可以用 key修改 或是用function操作
// 會同時改這個檔案和來源檔案的值
b.b3.firstName = "Fu"
console.log(b.getB());


