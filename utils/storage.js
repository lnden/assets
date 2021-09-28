class Storage {
  constructor(props){
      this.props = props || {};
      this.source = this.props.source || window.localStorage;
      this.initRun();
  }
  initRun(){
      const reg = new RegExp("__expires__");
      let data = this.source;
      let list = Object.keys(data);
      if(list.length){
          list.map((key,v)=>{
              if(!reg.test(key)){
                  let now = Date.now();
                  let expires = data[`${key}__expires__`] || Date.now() + 1;
                  if(now >= expires){
                      this.remove(key);
                  }
              }
              return key;
          })
      }
  }

  /**
   * get 获取方法
   * @param {String} key 键
   * @returns 
   * expired 存储时为非必须字段，所以有可能取不到，默认为 Date.now() + 1
   */
  get(key) {
      const source = this.source,
          expired = source[`${key}__expires__`] || Date.now() + 1;
      const now = Date.now();

      if ( now >= expired ) {
          this.remove(key);
          return;
      }
      const value = source[key] ? JSON.parse(source[key]) : source[key];
      return value;
      // return source[key] && JSON.parse(source[key]);
  }

  /**
   * set 存入方法
   * @param {String} key 键
   * @param {String} value 值
   * @param {String} expired 过期时间 以分钟为单位，非必须
   * @returns 
   */
  set(key, value, expired) {
  
      let source = this.source;
      source[key] = JSON.stringify(value);
      if (expired){
          source[`${key}__expires__`] = Date.now() + 1000 * 60 * expired
      }
      return value;
  }

  remove(key) {
      const data = this.source,
          value = data[key];
      delete data[key];
      delete data[`${key}__expires__`];
      return value;
  }
}

// const storage = new Storage({
//   source: sessionStorage
// })
// storage.set('token', 'tokneTest', 1)
// console.log(storage.get('token'))