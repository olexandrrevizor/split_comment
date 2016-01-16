# split_comment
Js dedicated to split Wordpress comment. 
###Installation
To install the comment js, add the following to your theme code in ```functions.php```.
```php 
  function reg_scripts() {
      if (is_single()) {
          wp_enqueue_script('as-comment-show', plugins_url('/js/build/split-comment.min.js', __FILE__), array(), '1.0', true);
      }
  }
  add_action('wp_enqueue_scripts', 'reg_scripts', 100);
```
### Usage
You must add code below to your script.
```javascript
  jQuery(document).ready(function ($) {
    var com = $.comment,
        showComments = 10,
        loadComments = 20;
    com.showComment(showComments,loadComments);
});
```
Variables: 
 1. ```ShowComments = 10``` - responsible for the number of comments to be displayed when the page loads. 
 2. ```loadComments = 20 ``` - responsible for the step show comments.
