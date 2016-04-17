/*
 * ------------------------------------------
 * 项目模块基类实现文件
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
    /**
     * 项目模块基类对象
     * @class   {wd.m._$$ModuleLayoutBlog}
     * @extends {nej.ut._$$AbstractModuleLayoutBlog}
     * @param   {Object}  可选配置参数，已处理参数列表如下所示
     */
    _p._$$ModuleLayoutBlog = _k._$klass();
    _pro = _p._$$ModuleLayoutBlog._$extend(_m._$$Module);
    /**
     * 构建模块
     * @return {Void}
     */
    _pro.__doBuild = function(){
        this.__body = _e._$html2node(
            _l._$getTextTemplate('module-id-2')
        );

    };
    // notify dispatcher
    _m._$regist(
        'm-blog-list',
        _p._$$ModuleLayoutBlog
    );
});
