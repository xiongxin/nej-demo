/*
 * ------------------------------------------
 * 标签列表模块实现文件
 * @version  1.0
 * @author   genify(caijf@corp.netease.com)
 * ------------------------------------------
 */
define([
    'base/klass',
    'base/element',
    'util/tab/view',
    'util/template/tpl',
    'pro/base/module'
], function(_k,_e,_t,_l,_m,_p,_pro){
    /**
     * 标签列表模块
     * @class   {wd.m._$$ModuleBlogTagTab}
     * @extends {nej.ut._$$AbstractModuleTagList}
     * @param   {Object}  可选配置参数，已处理参数列表如下所示
     */
    _p._$$BlogTag = _k._$klass();
    _pro = _p._$$BlogTag._$extend(_m._$$Module);
    /**
     * 构建模块
     * @return {Void}
     */
    _pro.__doBuild = function(){
        this.__super();
        this.__body = _e._$html2node(
            _l._$getTextTemplate('module-id-7')
        );
        this.__tbview = _t._$$TabView._$allocate({
            list:_e._$getChildren(this.__body)
        });
    };
    /**
     * 刷新模块
     * @param  {Object} 配置信息
     * @return {Void}
     */
    _pro.__onRefresh = function(_options){
        this.__super(_options);
        this.__tbview._$match(
            this.__doParseUMIFromOpt(_options)
        );
    };
    // notify dispatcher
    _m._$regist(
        'm-blog-tab',
        _p._$$BlogTag
    );
});