
  window.addEventListener('scroll', function() {
    const fakeHeader = document.querySelector('.fake-header');
    const trueHeader = document.querySelector('.true-header');
    const scrollPos = window.pageYOffset;
    
    
    if (scrollPos > 0)  {
      fakeHeader.classList.add('hide');
      trueHeader.classList.add('non-transparent');
    } else {
      fakeHeader.classList.remove('hide');
      trueHeader.classList.remove('non-transparent');
    }
  });

  document.querySelectorAll('img[data-enlargable]').forEach(function(img) {
    img.classList.add('img-enlargable');
    img.addEventListener('click', function() {
      var src = this.getAttribute('src');
      var overlay = document.createElement('div');
      overlay.style.background = 'RGBA(0,0,0,.5) url(' + src + ') no-repeat center';
      overlay.style.backgroundSize = 'contain';
      overlay.style.width = '100%';
      overlay.style.height = '100%';
      overlay.style.position = 'fixed';
      overlay.style.zIndex = '10000';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.cursor = 'zoom-out';
  
      overlay.addEventListener('click', function() {
        document.body.removeChild(overlay);
      });
  
      document.body.appendChild(overlay);
    });
  });
  

  const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

window.addEventListener('scroll', function () {
  var button = document.getElementById('scrollToTopButton');
  if (window.scrollY > 300) {
      button.classList.add('show');
  } else {
      button.classList.remove('show');
  }
});

document.getElementById('scrollToTopButton').addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});


var dataAtual = new Date().toISOString().split('T')[0];

        document.getElementById('data').value = dataAtual;