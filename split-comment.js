jQuery(document).ready(function () {
    var com = $.comment,
        showComments = 10,
        loadComments = 20;
    com.showComment(showComments,loadComments);
});
(function (name, definition) {
    var theModule = definition(),
    // this is considered "safe":
        hasDefine = typeof define === 'function' && define.amd,
    // hasDefine = typeof define === 'function',
        hasExports = typeof module !== 'undefined' && module.exports;

    if (hasDefine) { // AMD Module
        define(theModule);
    } else if (hasExports) { // Node.js Module
        module.exports = theModule;
    } else { // Assign to common namespaces or simply the global object (window)
        (this.jQuery || this.ender || this.$ || this)[name] = theModule;
    }
})('comment', function () {
    var module = this;
    module.respondForm = $('#respond');
    module.comments = $('.depth-1');
    module.numberShows = 10;
    module.stepShow = 5;
    module.numberComments = module.comments.length;

    module.init = function (number, step) {
        module.numberShows = number;
        module.stepShow = step;
        module.lastShow = module.comments.length - module.numberShows;
        module.hideComment();
        module.addShowMoreBtn();
    }

    module.hideComment = function (method) {
        for (var i = module.numberShows; i < module.numberComments; i++) {
            method != 'toggle' ? jQuery(module.comments[i]).hide() : jQuery(module.comments[i]).toggle('slow');
        }
    }

    module.addShowMoreBtn = function () {
        jQuery('<button/>').attr('class', 'toggle-comments').attr('href', '#').html('Показать больше').insertBefore(module.respondForm);
    }

    module.showMore = function (lastShow) {
        var max = module.numberShows + lastShow;
        for (var i = module.numberShows; i < max; module.lastShow--, i++) {
            jQuery(module.comments[i]).toggle('slow');
        }
        return max;
    }

    module.showComment = function (number, step) {
        if( module.numberComments > 10) {
            module.init(number, step);
            var anchor = $('.toggle-comments');
            var anchorText = anchor.html();
            jQuery('.toggle-comments').on('click', function (e) {
                e.preventDefault();
                if (module.lastShow <= 20 && module.lastShow != 0) {
                    module.numberShows = module.showMore(module.lastShow);
                    anchor.text('Скрыть комментарии');
                }
                else if (module.lastShow > 20) {
                    module.numberShows = module.showMore(module.stepShow);
                }
                else {
                    module.numberShows = number;
                    module.lastShow = module.numberComments - module.numberShows;
                    module.hideComment('toggle');
                    anchor.text('Показать больше');
                }
                console.log(module.lastShow);
            });
        }
        else {
            return false;
        }
    }

    return {
        init: module.init,
        showComment: module.showComment
    };

});