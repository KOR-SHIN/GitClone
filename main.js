(function(window, document){ 
    'use strict';

    // 요소를 가지고 있는경우 $을 붙이는 경우가 많다.
    const $toggles = document.querySelectorAll(".toggle"); //유사배열인 NodeList
    const $toggleBtn = document.getElementById("toggle-btn");

    $toggleBtn.addEventListener("click", function() {
        toggleElements();
    });

    window.addEventListener("resize", function() {
        if(window.innerWidth > 1024) {
            offElements();
        }
    });

    function toggleElements() {
        // 유사배열을 반복시키기 위한 방법
        [].forEach.call($toggles, function(toggle) {
            toggle.classList.toggle("on");
        });
    }

    function offElements() {
        [].forEach.call($toggles, function(toggle) {
            toggle.classList.remove("on");
        });
    }

})(window, document)