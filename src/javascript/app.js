
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
        // 设置规则
        // 这个rewrite比较坑爹, 404是指如果访问了不存在的模块就跳转到/m/blog模块, 
        // 但是其他的规则是反的, 比如404下面的, 访问/m模块会直接跳转到/m/blog模块.
        rules: {
            rewrite : {
                '404': '/m/blog/list',
                '/m/blog/list': '/m/blog', 
            },
            title: {
            },
            //  模块 对应 umi
            alias: {
            }
        },
        // UMI 映射到一个模块实现文件
        modules: {
        }
    });

});