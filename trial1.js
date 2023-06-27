const obj = { 
    a: { 
      b: { 
        c: 'd' 
      },
      e: 'f'
    }
  };

const get = (obj, path, notFoundVal) => {
    const splitedPath = path.split('.');
    let res = obj;
    try {
      for (let prop of splitedPath) res = res[prop];
      return res;
    } catch {
      return notFoundVal;
    }
};
console.log(get(obj, 'a.b')); // { c : 'd' }
console.log(get(obj, 'a.b.c')); // 'd'
console.log(get(obj, 'a.e'));    // 'f'
console.log(get(obj, 'x.x.e')); // undefined
console.log(get(obj, 'a.x.e', true)); // true
console.log(get(obj, 'a.x.e', 'My default value')); // My default value

