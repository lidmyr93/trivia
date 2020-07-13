

const colors = ["blue", "yellow", "red", "green", "black", "purple"];
export class Player {
    shortNameGenerator = (name) => name.slice(0,2)
    colorGenerator = () =>  colors.pop()
    constructor(name, score = 1) {
            this.name = name;
            this.shortName = this.shortNameGenerator(name)
            this.score = score;
            this.color = this.colorGenerator();
    }
}
