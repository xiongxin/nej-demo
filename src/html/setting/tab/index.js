/*
* 帐号设置 layout 模块
* */

NEJ.define([
   'base/klass',
    'base/element',
    'util/template/tpl',
    'pro/base/module'
    'util/'
], function (_k, _e, _t, _m, _p, _pro) {
    _p._$$SettingTab = _k._$klass();
    _pro = _p._$$SettingTab._$extend(_m._$$Module)

    _pro.__doBuild = function () {
        this.__body = _e._$html2node(_t._$getTextTemplate('module-id-8'));
        
    };


    _m._$regist('m-setting-tab', _p._$$SettingTab);
});