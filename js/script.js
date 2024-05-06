/* Remove grid class from Skills */
function removeGridContainer() {
    var div = document.getElementById('skill');
    if (window.innerWidth >= 200 && window.innerWidth <= 1024) {
      div.classList.remove('grid-container');
    } else {
      div.classList.add('grid-container');
    }
}
  

window.onload = function() {
    removeGridContainer();
};

window.addEventListener('resize', function() {
    removeGridContainer();
});

/* Remove flex class from Technical Skills */
function removeFlexTecSkill() {
    var div = document.getElementById('teck-skill');
    if (window.innerWidth >= 200 && window.innerWidth <= 1024) {
      div.classList.remove('flex-container');
    } else {
      div.classList.add('flex-container');
    }
}

window.onload = function() {
    removeFlexTecSkill();
};

window.addEventListener('resize', function() {
    removeFlexTecSkill();
});