// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  
    $('#file').change(function () {
        if (this.files.length) {          
            $('.output').html((this.files[0].size/1024).toFixed(2)+'KB');

        }
    });

});
