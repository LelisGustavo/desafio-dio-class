// Criação da classe Hero
class Hero 
{

    // Criação do construtor que vai receber as informações
    constructor(name, age, category) {

        this.name = name
        this.age = age
        this.category = category

    }

    // Método ataque, que mostrará uma mensagem especifica de acordo com a categoria/tipo do herói
    attack() {
            
        let attack = ""

        if (this.category === "Mago") {

            attack = "magia"
            console.log(`O ${this.category} ${this.name} atacou usando ${attack}`)

        } else if (this.category === "Guerreiro") {

            attack = "espada"
            console.log(`O ${this.category} ${this.name} atacou usando ${attack}`)

        } else if (this.category === "Monge") {

            attack = "artes marciais"
            console.log(`O ${this.category} ${this.name} atacou usando ${attack}`)

        } else if (this.category === "Ninja") {

            attack = "shuriken"
            console.log(`O ${this.category} ${this.name} atacou usando ${attack}`)

        } else {

            console.log("Tipo de héroi inválido")

        }

    }

}

// Instanciando a classe Hero e passando seus valores
let hero = new Hero("Cedrico", 11, "Mago")

// Chamando o método attack para mostrar as mensagens de acordo com a categoria/tipo do herói
hero.attack()

