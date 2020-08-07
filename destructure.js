const person = {
    name: "Jack william",
    age: 17,
    job: "facebooking",
    gfName: "Ema Watson",
    address: "Kochu khet",
    phone: "01825167271",
    friends: ["Tom hancks", "tom cruse", "tom yearn"]
};
const { phone } = person;

const complexObject = {
    name: 'abc',
    info: {
        address: 'kalo bogan',
        leader: 'Tiger Leader'
    }
}
const { leader } = complexObject.info;


// const gfName = person.gfName;
// const gfName = person.phone;
// console.log(gfName, phone, salary, address)
// console.log(gfName, phone, salary, address)

const friends = [
    "sakib khan",
    "Arman khan",
    "Amir Khan",
    "Salman Khan",
    "Sharuk khan"
];

const [chotoFriend, ...olderF] = friends;
console.log(olderF);
