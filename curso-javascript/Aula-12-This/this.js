const pessoa = {
    firstName: 'João',
    lastName: 'Mariano',
    id: 20,
    getFullName: function () {
        console.log(`${this.firstName} ${this.lastName}`);
    },
    getId: function () {
        return this.id;
    },
};

pessoa.getFullName();
console.log(pessoa.getId());
