/*
 * 帐号设置 layout 模块
 * */

NEJ.define([
    'base/klass',
    'base/element',
    'util/template/tpl',
    'pro/base/module'
], function (_k, _e, _t, _m, _p, _pro) {
    _p._$$SeetingAccountEdu = _k._$klass();
    _pro = _p._$$SeetingAccountEdu._$extend(_m._$$Module)

    _pro.__doBuild = function () {
        this.__body = _e._$html2node(_t._$getTextTemplate('module-id-d'));
    };


    _m._$regist('m-setting-account-edu', _p._$$SeetingAccountEdu);
});