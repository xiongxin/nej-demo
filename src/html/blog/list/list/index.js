/*
 * ------------------------------------------
 * 日志列表模块实现文件
 * @version  1.0
 * @author   genify(caijf@corp.netease.com)
 * ------------------------------------------
 */
NEJ.define([
    'base/klass',
    'base/element',
    'util/template/tpl',
    'util/list/page',
    'pro/base/module',
    'pro/cache/blog'
], function(_k,_e,_l,_t,_m,_d,_p,_pro){
    _p._$$BlogListList = _k._$klass();
    _pro = _p._$$BlogListList._$extend(_m._$$Module);
    
    
    _pro.__doBuild = function () {
        this.__body = _e._$html2node(
            _l._$getTextTemplate('module-id-2')
        )  
    };
    
    
    _m._$regist('m-blog-list-list', _p._$$BlogListList);
});