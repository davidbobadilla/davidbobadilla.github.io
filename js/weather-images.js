<!-- this will make the html to load first. PUT THIS HTML-->
<script src="app.js" defer></script>
<!-- place holder--> 
<img src='data/img/placeholder.png' data-src='data/img/SLUG.jpg' alt='NAME'>
  
<!loading via javascript-->
  
 
let imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};



<!-- WHEN THEY SCROLL DOWN THEY WILL START LOADING-->
  if('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if(item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}

<!-- PUT THIS ON CSS-->
  imagesToLoad.forEach((img) => {
  loadImages(img);
});

<!--PARA HACERLO BLURY AND THEN TO LOAD-->
  article img[data-src] {
  filter: blur(0.2em);
}

article img {
  filter: blur(0em);
  transition: filter 0.5s;
}
