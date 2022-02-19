// get all images with data-src attribute
const imagesToLoad = document.querySelectorAll(".images-grid-item");

// optional parameters being set for the IntersectionalObserver
const imageOption = {
    threshold : 0,
    rootMargin : "0px 0px 30px 0px"
};

const loadImage = (image) => {
    //console.log(image);
    /*image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    }*/
    let sourcex200 = image.children[0];
    let sourcex400 = image.children[1];
    let img = image.children[2];

    sourcex200.setAttribute('srcset', sourcex200.getAttribute('data-srcset'));
    sourcex200.onload = () => {
        sourcex200.removeAttribute('data-srcset');
    }

    sourcex400.setAttribute('srcset', sourcex400.getAttribute('data-srcset'));
    sourcex400.onload = () => {
        sourcex400.removeAttribute('data-srcset');
    }

    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = () => {
        img.removeAttribute('data-src');
    }
}

// first check to see if IntersectionObserver is observed
if('IntersectionObserver' in window){
    const imageObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if(item.isIntersecting){
                loadImage(item.target);
                observer.unobserve(item.target);
            }
        })
    }, imageOption);

    // loop through each img on check status and load if necessary
    imagesToLoad.forEach((image) => {
        imageObserver.observe(image);
    });
} else {
    //Just load all images if not supported.
    imagesToLoad.forEach((image) => {
        loadImage(image);
    });
}