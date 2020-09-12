function Character (name, profession, gender, age, strength, hitpoints) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hitpoints = hitpoints;
}

Character.prototype.printStatus = function () {
    console.log(this.name + )
}

Character.prototype.isAlive = function() {
    if (this.hitpoints > 0) {
        console.log(this.name + "is still alive.");

    }
}