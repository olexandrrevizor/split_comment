# split_comment
Js dedicated to split Wordpress comment. 
###Installation
To install the comment js, add the following to your theme code.
```php 
  function reg_scripts()
{
    if (is_single()) {
        wp_enqueue_script('as-comment-show', plugins_url('/js/build/split-comment.min.js', __FILE__), array(), '1.0', true);
    }
}
add_action('wp_enqueue_scripts', 'reg_scripts', 100);
'''
