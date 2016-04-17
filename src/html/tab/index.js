NEJ.define([
    'base/klass',
    'base/element',
    'util/tab/view',
    'util/template/tpl',
    'pro/base/module'
], function(_k,_e,_t,_l, _m, _p) {

    var _pro;

    // 扩展模块基类
    _p._$$MainTabModule = _k._$klass();
    _pro = _p._$$MainTabModule._$extend(_m._$$Module);


    // 模块构建阶段
    // this.__body确定模块的html结构, 取出模板的html资源即可.
    _pro.__doBuild = function() {
        this.__body = _e._$html2node(_l._$getTextTemplate('module-id-0'));
        this.__tbview = _t._$$TabView._$allocate({
            list:_e._$getChildren(this.__body),
            oncheck:this.__doCheckMatchEQ._$bind(this)
        })
    }

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

    _pro.__doCheckMatchEQ = function(_event){
        _event.matched = _event.target.indexOf(_event.source)==0;
    };
    // 其他 __onHide 等等

    // 注册组件.
    _m._$regist('m-tab', _p._$$MainTabModule);
});