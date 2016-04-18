
/**
 * 模块入口文件
 */

NEJ.define([
    '{lib}util/dispatcher/dispatcher.js'
], function(_p) {

    // 实例化调度器，并在全局设置dispatcher变量供模块使用
    // 源码中你会看到, _$startup方法设置了window.dispatcher.
    // 可直接dispatcher._$redirect('umi or alias')进行模块的跳转.
    _p._$startup({
        rules: {
            rewrite : {
                '404': '/m/blog/list/', //首页
                "/m/blog/list/":"/m/blog/" ,//菜单项
            },
            title: {
                "/m/blog/tag/":"日志标签",
                "/m/blog/list/":"日志列表",
            },
            //  模块注册名 对应 umi
            alias: {
                //首页 私有模块 一般是菜单
                "m-tab":"/?/tab/",
                "m-blog-tab": "/?/blog/tab/",
                "m-blog-list-box":"/?/blog/list/box/",
                "m-blog-list-cate": "/?/blog/list/cate/",
                "m-blog-list-list": "/?/blog/list/list/",
                
                //公开模块url可以访问
                // 模块名 ： UMI
                "m":"/m",
                "m-blog": '/m/blog',
                "m-blog-list": '/m/blog/list/',
                "m-blog-tag": '/m/blog/tag/',
                
                //帐号设置页面
                "m-setting-tab": "/?/setting/tab/",

                "m-setting": "/m/setting"

            }
        },
        // UMI 对应 模块实现文件
        modules: {
            //私有模块
            "/?/tab/":"tab/index.html",
            "/?/blog/tab/": "blog/tab/index.html",
            //博客列表私有模块
            "/?/blog/list/box/" : 'blog/list/box/index.html',
            "/?/blog/list/cate/" : "blog/list/cate/index.html",
            "/?/blog/list/list/" : "blog/list/list/index.html",
            //博客设置私有模块
            "/?/setting/tab/" : "setting/tab/index.html",
            //不带 /结束的可以访问，但是不是给用户看到页面
            "/m":{
                "module":"m/index.html",
                "composite":{
                  "tab":"/?/tab/"
                }
            },
            "/m/blog": {
                "module":"blog/index.html",
                "composite": {
                   "tab":"/?/blog/tab/"
                }
            },
            //用户访问到的页面
            "/m/blog/list/": {
                "module":"blog/list/index.html",
                'composite': {
                    //注入私有模块
                    "box" : "/?/blog/list/box/",
                    "cate": "/?/blog/list/cate/",
                    "list": "/?/blog/list/list/"
                }
            },
            "/m/blog/tag/": "blog/tag/index.html",
            
            //帐号设置模块
            "/m/setting" : {
                'module':'setting/index.html',
                "composite":{
                    "tab":"/?/setting/tab/"
                }
            },
        },
        onbeforechange:function(_options){
            var _umi = _options.path||'';
            if (!!_umi&&
                _umi.indexOf('/?')<0&&
                _umi.indexOf('/m')<0)
                _options.path = '/m'+_umi;  //自动补充  /m/ 路径
        }
    });

});