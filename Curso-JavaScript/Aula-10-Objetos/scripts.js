/* ATRIBUINDO SEPARADAMENTE */
let obj = {};

obj.name = 'Mariano';
obj.age = 20;
obj.adress = 'Rua 8';

console.log(obj);
console.log(Object.keys(obj));

/* ATRIBUINDO NA CRIAÇÃO */
let obj2 = {
    name: 'João',
    age: 21,
    adress: 'Rua 3',
};

console.log(obj2);
console.log(Object.values(obj2));

/* NOVA KEY EM obj2 */
obj2['numberOfSiblings'] = 3;
console.log(obj2);

/* object destructuring */
const user = {
    id: 42,
    displayName: 'Paulo',
    fullName: {
        firstName: 'Paulo',
        lastName: 'Silva',
    },
};

function userId({ id }) {
    return id;
}

function getFullName({ fullName: { firstName: first, lastName: last } }) {
    return `${first} ${last}`;
}

console.log(userId(user));
console.log(getFullName(user));
