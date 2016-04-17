
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
                '404': '/m/blog/list/',
                "/m/blog/list/":"/m/blog/"
            },
            title: {
            },
            //  模块注册名 对应 umi
            alias: {
                //私有模块
                "m-tab":"/?/tab/",
                "m-blog-tab": "/?/blog/tab/",
                //公开模块url可以访问
                // 模块名 ： UMI
                "m":"/m",
                "m-blog": '/m/blog',
                "m-blog-list": '/m/blog/list/',
                "m-blog-tag": '/m/blog/tag/',

            }
        },
        // UMI 对应 模块实现文件
        modules: {
            //私有模块
            "/?/tab/":"tab/index.html",
            "/?/blog/tab/": "blog/tab/index.html",

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
            "/m/blog/list/": {
                "module":"blog/list/index.html",
            },
            
            "/m/blog/tag/": {
                "module":"blog/tag/index.html",
            }
        }
    });

});