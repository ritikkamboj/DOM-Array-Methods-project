const main = document.getElementById("main");

const addUser = document.getElementById("add-user");
const double = document.getElementById("double");
const showMill = document.getElementById("show-millionaires");
const sort = document.getElementById("sort");
const calWealth = document.getElementById("calculate-wealth");

const data = [];

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

function formatAmount(value)
{
    return `₹` +(value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');  // 12,345.67
}

function updateDOM(storedData = data) {
  main.innerHTML = ` <h2><strong>Person</strong>Wealth</h2>`;

  storedData.forEach(item=>{
    const element = document.createElement('div');
    element.classList.add('person');
    console.log(element)
    element.innerHTML = `<strong>${item.name}</strong>${formatAmount(item.income)}`;
    main.appendChild(element);
  })
}

addUser.addEventListener('click',getRandomUser);

console.log(data);
