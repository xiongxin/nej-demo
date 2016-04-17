/*
 * ------------------------------------------
 * 博客列表模块
 * @version  1.0
 * @author   genify(caijf@corp.netease.com)
 * ------------------------------------------
 */
NEJ.define([
    'base/klass',
    'base/element',
    'util/template/tpl',
    'pro/base/module'
], function(_k,_e,_l,_m,_p,_pro){
    
    _p._$$BlogList = _k._$klass();
    _pro = _p._$$BlogList._$extend(_m._$$Module);
    /**
     * 构建模块
     * @return {Void}
     */
    _pro.__doBuild = function(){
        this.__body = _e._$html2node(
            _l._$getTextTemplate('module-id-l2')
        );
        // 0 - tab box
        // 1 - module box
        var _list = _e._$getByClassName(this.__body,'j-flag');
        this.__export = {
            box:_list[0],
            cate:_list[1],
            list:_list[3],
            parent:_list[3]
        };
    };
    // 注册
    _m._$regist(
        'm-blog-list',
        _p._$$BlogList
    );
});
