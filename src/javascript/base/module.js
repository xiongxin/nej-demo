
NEJ.define([
    '{lib}base/klass.js',
    '{lib}util/dispatcher/module.js'
], function(_k, _t, _p) {

    var _pro;

    _p._$$Module = _k._$klass();
    _pro = _p._$$Module._$extend(_t._$$ModuleAbstract);

    _pro.__onShow = function(options) {
        this.__super(options);
        // magic
    };

    //显示加载
    _pro.__onLoadingShow = function(_event){
        _event.value = '<p class="w-loading">&nbsp;</p>';
    };

    _p._$regist = _t._$regist;

    return _p;

});