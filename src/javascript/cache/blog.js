/*
 * ------------------------------------------
 * 日志缓存对象
 * @version  1.0
 * @author   genify(caijf@corp.netease.com)
 * ------------------------------------------
 */
NEJ.define([
    'base/klass',
    'base/util',
    'util/ajax/xdr',
    './cache.js'
],function(_k,_u,_j,_d,_p,_pro){

    _p._$$CacheBlog = _k._$klass();
    _pro = _p._$$CacheBlog._$extend(_d._$$Cache);

    _pro.__doLoadList = function (_options) {
        var _key = _options.key,
            _callback = _options.onload;

        _j._$request('http://localhost:63342/nej-demo/api/blog/list.json', {
            method: 'GET',
            type: 'json',
            data:_u._$object2query(_options.data),
            onload:this.__cbListLoad._$bind(this,_key,_callback,_options.offset, _options.limit),
            onerror:this.__cbListLoad._$bind(this,_key,_callback,{})
        })

    }

    /**
     * 从缓存中取日志分类列表
     * @return {Array} 日志分类列表
     */
    _pro._$getClassListInCache = function(){
        // for test
        var _arr = [],
            _nmb = 0,
            _seed = +new Date;
        for(var i=0;i<10;i++){
            _seed++;
            _arr.push({id:_seed,name:'class-'+_seed,count:_nmb++});
        }
        return _arr;
    };
});