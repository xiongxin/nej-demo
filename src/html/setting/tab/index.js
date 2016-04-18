/*
* 帐号设置 layout 模块
* */

NEJ.define([
   'base/klass',
    'base/element',
    'util/template/tpl',
    'pro/base/module',
    'util/tab/view'
], function (_k, _e, _t, _m, _tab ,_p, _pro) {
    _p._$$SettingTab = _k._$klass();
    _pro = _p._$$SettingTab._$extend(_m._$$Module);

    _pro.__doBuild = function () {
        this.__body = _e._$html2node(_t._$getTextTemplate('module-id-8'));

        this.__tbview = _tab._$$TabView._$allocate({
            list: _e._$getChildren(this.__body),
            oncheck: this.__doCheckMatchEQ._$bind(this),
        })
    };

    _pro.__onRefresh = function(_options){
        this.__super(_options);
        this.__tbview._$match(
            this.__doParseUMIFromOpt(_options) // 获取需要 target
        );
    };

    _pro.__doCheckMatchEQ = function(_event){
        if (_event.target=='/setting/'){
            _event.target = '/setting/account/'
        }
        _event.matched = _event.target.indexOf(_event.source)>=0
    };


    _m._$regist('m-setting-tab', _p._$$SettingTab);
});