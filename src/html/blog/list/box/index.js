/*
 * ------------------------------------------
 * 博客列表  box 模块实现文件
 * @version  1.0
 * @author   genify(caijf@corp.netease.com)
 * ------------------------------------------
 */
NEJ.define([
    'base/klass',
    'base/element',
    'util/tab/view',
    'util/template/tpl',
    'pro/base/module'
], function(_k,_e,_t,_l,_m,_p,_pro){
    _p._$$BlogListBox = _k._$klass();
    _pro = _p._$$BlogListBox._$extend(_m._$$Module);

    _pro.__doBuild = function(){
        this.__body = _e._$html2node(
            _l._$getTextTemplate('module-id-5')
        );
        
        var _list = _e._$getByClassName(this.__body, 'j-flag');
        this.__ntip = _list[1];
        this.__nprt = _list[0].parentNode;
        this.__tbview = _t._$$TabView._$allocate({
            list: _e._$getByClassName(_list[0], 'j-list')
        })
    };
    
    _pro.__onRefresh = function (_options) {
        this.__super(_options);
        var _param = _options.param||_o,
            _tname = _param.cid||_param.tid;
        if (!!_tname){
            var _prefix = !!_param.cid?'分类：':'标签：';
            this.__ntip.innerText = _prefix+_tname+'的日志列表';
            _e._$addClassName(this.__nprt,'js-ntbx');
        }else{
            this.__tbview._$match(_param.box||0);
            _e._$delClassName(this.__nprt,'js-ntbx');
        }
    }
    
    
    _m._$regist('m-blog-list-box',_p._$$BlogListBox);
});
