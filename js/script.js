const accountBtn = document.querySelector('.account');

accountBtn.addEventListener('click', ()=>{
  window.location.href="loginPage.html";
})

// main landing Image animation
const landingImage = document.querySelector('.mainImage');
addEventListener('load', ()=>{
  landingImage.classList.add('animate');
  
  landingImage.addEventListener('animationend', ()=>{
    landingImage.classList.remove('animate');
  })
})
landingImage.addEventListener('mouseover', ()=>{
  landingImage.style.transform='scale(1.1)';
})
landingImage.addEventListener('mouseout', ()=>{
  landingImage.classList.add('moveout');
  landingImage.style.transform='scale(1)';
})
landingImage.addEventListener('animtaionend', ()=>{
  landingImage.classList.remove('moveout');
})
// main landing Image animation



// Games navegator
const imageContainers = document.querySelectorAll('.imageLandingContainer');
imageContainers.forEach((container) => {
  const imageSelection = container.querySelector('img');
  imageSelection.addEventListener('click', ()=> {
    const mainImageSource = landingImage.getAttribute('src');
    const imageSource = imageSelection.getAttribute('src');
    landingImage.setAttribute('src', imageSource);
    imageSelection.setAttribute('src', mainImageSource);
  });
});
// Games navegator


