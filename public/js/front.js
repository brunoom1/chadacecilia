(function () {

  var elementById = function (id) {
    return document.getElementById(id);
  }

  window.addEventListener('scroll', function (evt) {

    var box = elementById("presentes");
    var inputName = elementById('name');
  
    if (box) {
      const pos = box.getBoundingClientRect().top;
  
      if (parseInt(pos) <= 0) {
        if (box.dataset.fixed == 'false'){
          box.dataset.fixed = 'true';
        }
      } else {
        box.dataset.fixed = 'false';
      }  
    }

    if (inputName && box) {
      const inputNamePos = inputName.getBoundingClientRect().top;

      if (inputNamePos > 0) {
        box.dataset.fixed = false;
      }
    }
    
  })
  
  
})()

