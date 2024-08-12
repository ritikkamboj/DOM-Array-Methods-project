const main = document.getElementById("main");

const addUser = document.getElementById("add-user");
const double = document.getElementById("double");
const showMill = document.getElementById("show-millionaires");
const sort = document.getElementById("sort");
const calWealth = document.getElementById("calculate-wealth");

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

async function getRandomUser() {
  const res = await fetch(`https://randomuser.me/api/`);

  const data = await res.json();
  // console.log(data.results[0]);

  let randomUser = {
    name: `${data.results[0].name.first} ${data.results[0].name.last}`,
    income: Math.floor(Math.random() * 1000000),
  };

  addData(randomUser);
}

function addData(obj) {
  data.push(obj);

  updateDOM();
}

function formatAmount(value) {
  return `₹` + value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,"); // 12,345.67
}

function doubleMoney() {
  // console.log('jai')
  data = data.map((item) => {
    return { ...item, income: item.income * 2 };
  });

  updateDOM();
}

function sortList() {
  // console.log('jai')

  data.sort((a, b) => b.income - a.income);

  updateDOM();
}

function showMillionaire() {
  //  console.log(data)
  data = data.filter((item) => item.income > 1000000);
  // console.log(data);

  updateDOM();
}

function calTotalWealth()
{
  // firstly try to calculate the total income form all enteries 

  let total = data.reduce((acc,curr)=> acc + curr.income , 0);
  console.log(total)
  // create an elemnet and then add person call in it lets see 

  const element = document.createElement('div');
  element.classList.add('person');
  console.log(element)
  element.innerHTML= `<Strong>Total</Strong> ${formatAmount(total)}`;
  main.appendChild(element);

}

function updateDOM(storedData = data) {
  main.innerHTML = ` <h2><strong>Person</strong>Wealth</h2>`;

  storedData.forEach((item) => {
    const element = document.createElement("div");
    element.classList.add("person");
    // console.log(element);
    element.innerHTML = `<strong>${item.name}</strong>${formatAmount(
      item.income
    )}`;
    main.appendChild(element);
  });
}

addUser.addEventListener("click", getRandomUser);
double.addEventListener("click", doubleMoney);
sort.addEventListener("click", sortList);
showMill.addEventListener("click", showMillionaire);
calWealth.addEventListener("click", calTotalWealth);

// console.log(data);
