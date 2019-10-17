
class Objet1 {
    x: number;
}
//One to one + Agregation
class OneToOneAgregation {
    obj: Objet1;
}

//One to many 
class OneToMany {
    obj: Objet1[];
}

//Many to many
class ManyToMany {
    objet2: OneToOneAgregation;
    objet1: Objet1;
}

// Heritage (Generalisation)
class Parent {
    x: number;
}
class Enfant extends Parent {
    y: number;
}

// Dependance
class Dependance {
    y: number;
    obj: Objet1;

    methode() {
        return this.y + this.obj.x;
    }
}

// Realisation
interface Inter {
    g: number;
}
class Realisation implements Inter {
    g: number;
}

//Composition 
class Composition1 {
    x: number;
    getX() { return this.x; }
    setX(x: number) { this.x = x; }
}
class Composition2 {
    obj: Composition1;
    y: number;
    getY() { return this.y; }
    setY(y: number) { this.y = y; }
}