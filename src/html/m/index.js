NEJ.define([
    '{lib}base/klass.js',
    '{lib}util/dispatcher/module.js',
    '{pro}base/module.js',
    '{lib}base/element.js',
    '{lib}base/event.js',
    '{lib}util/template/tpl.js'
], function(_k, _m, _bm, _e, _v, _t, _p) {

    var _pro;

    // 扩展模块基类
    _p._$$MainModule = _k._$klass();
    _pro = _p._$$MainModule._$extend(_bm._$$Module);

    // 对于顶级模块, 可以重写__doParseParent方法
    // 确定整个应用的父容器.
    // 这里的module-box是容器的id.
    _pro.__doParseParent = function(options) {
        return _e._$get('module-box');
    }

    // 模块构建阶段
    // this.__body确定模块的html结构, 取出模板的html资源即可.
    _pro.__doBuild = function() {
        this.__body = _e._$html2node(_t._$getTextTemplate('module-id-l0'));
        var list = _e._$getByClassName(this.__body, 'j-flag');

        this.__export = {
            tab: list[0],
            parent: list[1]
        }
    }

    // 其他 __onHide 等等

    // 注册组件.
    _bm._$regist('m', _p._$$MainModule);
});