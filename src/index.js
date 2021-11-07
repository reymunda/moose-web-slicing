import 'video.js/dist/video-js.css';
import videoJs from 'video.js/dist/video.js';
import './style/style.css';
console.log("testing");

const player = videoJs("my_video_1");
$(function(){
    var $refreshButton = $('#refresh');
    var $results = $('#css_result');
    
    function refresh(){
      var css = $('style.cp-pen-styles').text();
      $results.html(css);
    }
  
    refresh();
    $refreshButton.click(refresh);
    
    // Select all the contents when clicked
    $results.click(function(){
      $(this).select();
    });
  });
  