/*
 * @Descripttion: 
 * @version: 
 * @Author: suckson
 * @Date: 2019-10-09 13:57:51
 * @LastEditors: suckson
 * @LastEditTime: 2019-10-09 14:35:45
 */

/**
 *
 *针对参数选项进行判断
 * @export
 * @param {*} opt
 * @param {*} msg
 */
export function assert(opt,msg){
    if(!opt){
        throw new Error(msg || 'some error!');
    }
}
/**
 *
 *对象属性合并
 * @export
 * @param {*} target
 * @param {*} source
 */
export function merge(target,source){
    for(let key in source){
        if(typeof source[key]==='object'){
            if(!target[key]){
                target[key] = {}
            }
            merge(target[key],source[key])
        }else{
            if(source[key]!==undefined){
                target[key] = source[key];
            }
        }
    }
}
/**
 *
 *deep clone an object 
 * @export
 * @param {*} obj
 * @returns
 */
const clone = (obj) =>{
    console.log(obj)
}
export function cloneObj(obj){
    let tempObj;
    switch(typeof obj){
        case 'object':
            if(obj instanceof Array){
                tempObj = [];
                for(let i=0;i<obj[i].length;i++){
                    tempObj[i] = clone(obj[i])
                }
            }else{
                tempObj = {};
                for(let key in obj){
                    tempObj[key] = clone(obj[key])
                }
            }
            return tempObj;
        default:
            return obj;    
    }
}