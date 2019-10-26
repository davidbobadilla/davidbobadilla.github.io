//The notes are what I got from the activities and my struggles getting this to work.


// <!-- this will make the html to load first. PUT THIS HTML-->
// <script src="app.js" defer></script>
// <!-- place holder--> 
// <img src='data/img/placeholder.png' data-src='data/img/SLUG.jpg' alt='NAME'>
  
// <!loading via javascript-->
  
 
// let imagesToLoad = document.querySelectorAll('img[data-src]');
// const loadImages = (image) => {
//   image.setAttribute('src', image.getAttribute('data-src'));
//   image.onload = () => {
//     image.removeAttribute('data-src');
//   };
// };
// imagesToLoad.forEach((img) => {
//   loadImages(img);
// });



// let photos = document.querySelectorAll("[data-src]");

// function preload(img) {
//   let src = img.getAttribute("data-src");
//   if (!src) {
//     return;
//   }
//   img.src = src;
// }

// let observer = new IntersectionObserver ((input, observer) => {
//   input.forEach (entry => {
//     if (!entry.isIntersecting) {
//       return;
//     } 
//     else {
//       preload(entry.target);
//       observer.unobserve(entry.target);
//     }
//   })
// }, options);

// let options = {
//   threshold: 1,
//   rootMargin: "0px 0px 0px 0px"
// };

// photos.forEach(image => {
//   observer.observe(image);
// });



//This one is the good one
// if('IntersectionObserver' in window) {
//   const observer = new IntersectionObserver((items, observer) => {
//     items.forEach((item) => {
//       if(item.isIntersecting) {
//         loadImages(item.target);
//         observer.unobserve(item.target);
//       }
//     });
//   });
//   imagesToLoad.forEach((img) => {
//     observer.observe(img);
//   });
// } else {
//   imagesToLoad.forEach((img) => {
//     loadImages(img);
//   });
// }



// <!-- WHEN THEY SCROLL DOWN THEY WILL START LOADING-->
//   if('IntersectionObserver' in window) {
//   const observer = new IntersectionObserver((items, observer) => {
//     items.forEach((item) => {
//       if(item.isIntersecting) {
//         loadImages(item.target);
//         observer.unobserve(item.target);
//       }
//     });
//   });
//   imagesToLoad.forEach((img) => {
//     observer.observe(img);
//   });
// } else {
//   imagesToLoad.forEach((img) => {
//     loadImages(img);
//   });
// }

// <!-- PUT THIS ON CSS-->
//   imagesToLoad.forEach((img) => {
//   loadImages(img);
// });

// <!--PARA HACERLO BLURY AND THEN TO LOAD-->
//   article img[data-src] {
//   filter: blur(0.2em);
// }

// article img {
//   filter: blur(0em);
//   transition: filter 0.5s;
// }





let photos = document.querySelectorAll("[data-src]");

function preload(img) {
  let src = img.getAttribute("data-src");
  if (!src) {
    return;
  }
  img.src = src;
}

let options = {
  threshold: 1,
  rootMargin: "0px 0px 200px 0px"
};

let observer = new IntersectionObserver((items, observer) => {
  items.forEach(item => {
    if (!item.isIntersecting) {
      return;
    } else {
      preload(item.target);
      observer.unobserve(item.target);
    }
  })
}, options);

photos.forEach(image => {
  observer.observe(image);
});

//   if('IntersectionObserver' in window) {
//   const observer = new IntersectionObserver((items, observer) => {
//     items.forEach((item) => {
//       if(item.isIntersecting) {
//         loadImages(item.target);
//         observer.unobserve(item.target);
//       }
//     });
//   });
//   imagesToLoad.forEach((img) => {
//     observer.observe(img);
//   });
// } else {
//   imagesToLoad.forEach((img) => {
//     loadImages(img);
//   });
// }









//backup

// let photos = document.querySelectorAll("[data-src]");

// function preload(img) {
//   let src = img.getAttribute("data-src");
//   if (!src) {
//     return;
//   }
//   img.src = src;
// }

// let options = {
//   threshold: 1,
//   rootMargin: "0px 0px 200px 0px"
// };

// let imgObserver = new IntersectionObserver((items, imgObserver) => {
//   items.forEach(item => {
//     if (!item.isIntersecting) {
//       return;
//     } else {
//       preload(item.target);
//       imgObserver.unobserve(item.target);
//     }
//   })
// }, options);

// photos.forEach(image => {
//   imgObserver.observe(image);
// });