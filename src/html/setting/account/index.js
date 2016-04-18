/*
* 帐号设置 layout 模块
* */

NEJ.define([
   'base/klass',
    'base/element',
    'util/template/tpl',
    'pro/base/module'
], function (_k, _e, _t, _m, _p, _pro) {
    _p._$$SeetingAccount = _k._$klass();
    _pro = _p._$$SeetingAccount._$extend(_m._$$Module)

    _pro.__doBuild = function () {
        this.__body = _e._$html2node(_t._$getTextTemplate('module-id-l4'));
        
        var _list = _e._$getByClassName(this.__body, 'j-flag');
        
        this.__export = {
            tab: _list[0],
            parent: _list[1]
        }
    };


    _m._$regist('m-setting-account', _p._$$SeetingAccount);
});