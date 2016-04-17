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
    'util/tab/view',
    'util/template/tpl',
    'util/template/jst',
    'pro/cache/blog',
    'pro/base/module'
], function(_k,_e,_t,_l,_jst,_d,_m,_p,_pro){
    /**
     * 项目模块基类对象
     * @class   {wd.m._$$ModuleLayoutBlog}
     * @extends {nej.ut._$$AbstractModuleLayoutBlog}
     * @param   {Object}  可选配置参数，已处理参数列表如下所示
     */
    _p._$$BlogListCate = _k._$klass();
    _pro = _p._$$BlogListCate._$extend(_m._$$Module);
    /**
     * 构建模块
     * @return {Void}
     */
    _pro.__doBuild = function(){
        this.__body = _e._$html2node(
            _l._$getTextTemplate('module-id-cate')
        );
        this.__cache = _d._$$CacheBlog._$allocate();
        var _list  = _e._$getByClassName(this.__body,"j-flag");
        _jst._$render(
            _list[0],
            'jst-4-tag-list',
            {xlist:this.__cache._$getClassListInCache()}
        );

        this.__tbview = _t._$$TabView._$allocate({
            list:_e._$getByClassName(_list[0], "j-list")
        });

    };

    _pro.__onRefresh = function (_options) {
        this.__super(_options);
        this.__tbview._$match(_options.param.cid);
    };

    // notify dispatcher
    _m._$regist(
        'm-blog-list-cate',
        _p._$$BlogListCate
    );
});
