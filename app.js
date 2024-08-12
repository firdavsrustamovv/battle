const myInp = document.getElementById("myInp");
const res = document.getElementById("res");
let res2 = document.getElementById("res2");
function Hero(
  name,
  weapon,
  damage = 10,
  img = "./img/hero/_Pngtree_flying_super_hero_2802317-removebg-preview__1___1_-removebg-preview.png"
) {
  this.name = name;
  this.weapon = weapon;
  this.damage = damage + weapon.damage;
  this.img = img;
}
function Weapon(name, img, damage) {
  this.name = name;
  this.img = img;
  this.damage = damage;
}

const heroArr = [
  "Stormbreaker",
  "Shadowblade",
  "Ironclaw",
  "Frostfire",
  "Thunderstrike",
  "Nightshade",
  "Blazefury",
  "Whisperwind",
];

const weaponArr = [
  new Weapon("Sword", "./img/weapon/1.jpg", 15),
  new Weapon("Axe", "./img/weapon/2.jpg", 20),
  new Weapon("Shield", "./img/weapon/3.jpg", 10),
  new Weapon("Bow", "./img/weapon/4.jpg", 12),
  new Weapon("Gun", "./img/weapon/5.png", 18),
  new Weapon("Dagger", "./img/weapon/6.jpg", 10),
  new Weapon("Staff", "./img/weapon/7.jpg", 25),
  new Weapon("Wand", "./img/weapon/8.png", 15),
];

const randomHero = heroArr[Math.floor(Math.random() * heroArr.length)];
const randomWeapon = weaponArr[Math.floor(Math.random() * weaponArr.length)];

const newrandomHero = new Hero(randomHero, randomWeapon);

function myFunc() {
  const input = myInp.value;
  const userWeapon = weaponArr[Math.floor(Math.random() * weaponArr.length)];
  const userHero = new Hero(input, userWeapon);

  let result = "";
  if (userHero.damage > newrandomHero.damage) {
    result += `${userHero.name} wins!`;
  } else if (userHero.damage < newrandomHero.damage) {
    result += `${newrandomHero.name} wins!`;
  } else {
    result = `It's a draw!`;
  }
  res.innerHTML = `
  <h2>${userHero.name}</h2>
  <h2>:</h2>
  <h2>Weapon:</h2>
  <h2>${userHero.weapon.name}</h2>
  <img src="./img/hero/_Pngtree_super_boy_hero_white_background_13797339-removebg-preview.png" width="300px"  alt="">
  <h2>${newrandomHero.name}</h2>
  <h2>:</h2>  
  <h2>Weapon:</h2>
  <h2>${newrandomHero.weapon.name}</h2>
  <img src="${newrandomHero.img}" width="300px" alt="">
  `;
  res2.innerHTML = result;
}
