const main = document.getElementById('main');

const addUser = document.getElementById('add-user');
const double = document.getElementById('double');
const showMill = document.getElementById('show-millionaires');
const sort = document.getElementById('sort');
const calWealth = document.getElementById('calculate-wealth');


const data =[];

getRandomUser();
getRandomUser();
getRandomUser();

async function getRandomUser()
{
    const res = await fetch(`https://randomuser.me/api/`);

    const data = await res.json();
    // console.log(data.results[0]);

    let randomUser = {
        name : `${data.results[0].name.first} ${data.results[0].name.last}`,
        income : Math.floor(Math.random()*1000000),

    }

  addData(randomUser);
}

function addData(obj)
{
    data.push(obj);
}



console.log(data);

