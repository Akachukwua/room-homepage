const texts = [
  {
    headline: "Discover innovative ways to decorate",
    description: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with ourcollection and make your property a reflection of you and what you have" 
  },
  {
    headline: "Transform your living space effortlessly",
    description: "Choose from our diverse collection to create a space you'll love.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut eveniet ipsam voluptatibus animi facere iusto, adipisci aliquid dolore deserunt saepe. Deserunt soluta pariatur placeat minima. Excepturi veniam iste eos odio."
  },
  {
    headline: "Style meets functionality",
    description: "Our furniture is designed to provide comfort and elegance. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut eveniet ipsam voluptatibus animi facere iusto, adipisci aliquid dolore deserunt saepe. Deserunt soluta pariatur placeat minima. Excepturi veniam iste eos odio."
  },
  {
    headline: "Make your space truly yours",
    description: "Personalize your rooms with innovative designs. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut eveniet ipsam voluptatibus animi facere iusto, adipisci aliquid dolore deserunt saepe. Deserunt soluta pariatur placeat minima. Excepturi veniam iste eos odio."
  }
];

let currentIndex = 0;

function nextText() {
  currentIndex = (currentIndex + 1) % texts.length; 
  updateText();
}


function previousText() {
  currentIndex = (currentIndex - 1 + texts.length) % texts.length; 
  updateText();
}

function updateText() {
  document.getElementById("headline").textContent = texts[currentIndex].headline;
  document.getElementById("description").textContent = texts[currentIndex].description;
}
