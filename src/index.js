import 'video.js/dist/video-js.css';
import videoJs from 'video.js/dist/video.js';
import './style/style.css';

let questionBar = document.querySelectorAll('.question-bar');

questionBar.forEach(e => {
  e.addEventListener('click',() => {
    if(!e.classList.contains('active')){
      questionBar.forEach(e => {
        if(e.classList.contains('active')){
          e.classList.remove('active');
        } 
      })  
    }
        // let questionDesc = e.childNodes[3];            

      e.classList.toggle('active');
  })
})

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
  
