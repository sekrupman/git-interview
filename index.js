class Hewan {
  constructor(nama, species, usia) {
    this.nama = nama;
    this.species = species;
    this.usia = usia;
  }
  suara() {
    console.log("hewan tidak bersuara");
  }
}

class Singa extends Hewan {
  constructor(nama) {
    super(nama, "mamalia", 2);
  }
  suara() {
    console.log(`${this.nama} bersuara rrawwr`);
  }
}

class Gajah extends Hewan {
  constructor(nama) {
    super(nama, "mamalia", 3);
  }
  suara() {
    console.log(`${this.nama} bersuara preeeeet`);
  }
}
class Monyet extends Hewan {
  constructor(nama) {
    super(nama, "mamalia", 4);
  }
  suara() {
    console.log(`${this.nama} bersuara uuaakk`);
  }
}

const singa = new Singa("messi");
const gajah = new Gajah("ronaldo");
const monyet = new Monyet("pepe");

function call() {
  singa.suara();
  gajah.suara();
  monyet.suara();
}

call()
