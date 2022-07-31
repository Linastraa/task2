var slider = document.getElementById("servoSlider");
    var servoP = document.getElementById("servoPos");
    servoP.innerHTML = slider.value;
    slider.oninput = function() {
      slider.value = this.value;
      servoP.innerHTML = this.value;
    }
    $.ajaxSetup({timeout:1000});
    function servo(pos) {
      $.get("/?value=" + pos + "&");
    }
    