const animals = {
  wolf: {
    fact:
      "Wolves are the largest members of the dog family. Wolves can roam large and long distances, sometimes up to 12 miles (20 kilometers) in a single day.",
    music: "./sounds/wolf.mp3"
  },
  lion: {
    fact:
      "Lions are the second largest big cat species in the world (behind tigers).The average male lion weighs around 180 kg (400 lb) while the average female lion weighs around 130 kg (290 lb).",
    music: "./sounds/lion.mp3"
  },
  elephant: {
    fact:
      "Elephants are the world’s largest land animal! Male African elephants can reach 3m tall and weigh between 4,000 -7,500kg. Asian elephants are slightly smaller, reaching 2.7m tall and weighing 3,000– 6,000kg.",
    music: "./sounds/elephant.mp3"
  },
  crocodile: {
    fact:
      "Crocodiles are large reptiles that live in fresh water, lakes, rivers, brackish water (mix between salty and fresh water). They can be found in tropic areas of Australia, Africa, America and Asia.",
    music: "./sounds/crocodile.mp3"
  }
};

let isPlayingJungleMusic = false;
const audio = new Audio("./sounds/junglemusic.mp3");

function showAnimalDetail(animal) {
  const audio = new Audio(animals[animal].music);
  audio.play();
  document.querySelector("#facts").innerHTML = animals[animal].fact;
}

function playJungleMusic() {
  if (!isPlayingJungleMusic) {
    audio.play();
    isPlayingJungleMusic = true;
  } else {
    audio.pause();
    isPlayingJungleMusic = false;
  }
}
