const names = [`Billy`,`Jordan`,`Wolfgang`,`Aubrey`,`Lydia`];
const occupations = [`Therapist`,`Chef`,`Trainer`,`Tutor`,`Musician`];
const prices = [30,80,40,100,50];
const maxPeople = 5;
const freelancers = [
  {
    name: `Alice`,
    occupation: `Writer`,
    startingPrice: `30`
  },
  {
    name: `Bob`,
    occupation: `Teacher`,
    startingPrice: `50`
  },
  {
    name: `Carol`,
    occupation: `Programmer`,
    startingPrice: `70`
  },
];

function getAverage(prices) {
  const sum = prices.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const average = sum / prices.length;

  return average;
}

function realAverage() {
  let myAverage = document.querySelector("#average");
  const freelancerPrices = freelancers.map(freelancer => freelancer.startingPrice);
  
  const averagePrice = getAverage(freelancerPrices);
  const roundedAverage = Math.floor(averagePrice);
  myAverage.innerText = `The average is $${roundedAverage}`
  return roundedAverage;
}


const addFreelanceIntervalId = setInterval(addPerson, 1000);

render();

function render() {
  const people = document.querySelector("#person");
  const peopleElements = freelancers.map((person) => {
    const element = document.createElement("li");
    element.innerText = `${person.name} - ${person.occupation} - ${person.startingPrice}`;
    return element;
  });
  people.replaceChildren(...peopleElements);
}

function addPerson() {
  const name = names[Math.floor(Math.random() * names.length)];
  const occupation = occupations[Math.floor(Math.random() * occupations.length)];
  const price = prices[Math.floor(Math.random() * prices.length)];

  freelancers.push({ name, occupation, startingPrice: price });

  render();
  if(freelancers.length >= maxPeople) {
    clearInterval(addFreelanceIntervalId);
  }
  realAverage();
}