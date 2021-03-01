//corregimos ejercicio de ayer, aunque el mio estaba de puta madre, va bien ver los for
class socialNetwork {
    constructor(name, arrayLikes, importance, numberOfUsers) {
        this.name = name,
        this.arrayLikes = arrayLikes,
        this.importance = importance,
        this.numberOfUsers = numberOfUsers;
    }

    sumLikes(){
        let sum = 0;
        this.arrayLikes.forEach((likes) => sum+= likes); 
        return sum;
    }

    averageLikes() {
        return Math.round(this.sumLikes()/this.arrayLikes.length);
    }
    
    showData() {
        console.log(`${this.name} has ${this.sumLikes()} likes and has an average of ${this.averageLikes()} likes.`);
    }
}

const fb = new socialNetwork ('Facebook', fb_likes = [201, 245, 500, 650, 1103, 347],0.8,14530);
const ig = new socialNetwork('Instagram', ig_likes = [303, 21, 124, 150, 23, 31],0.6,230);
const tw = new socialNetwork('Twitter', tw_likes = [205, 518, 1123, 4350, 233, 3431], 0.6,3230);

fb.showData();
tw.showData();
ig.showData();

/* otras formas de hacer la funcion de sumLikes()
    let sum = 0;
    //for of
    for(let i of this.arrayLikes) {
        sum += i;
    }

    //for in 
    for(let i in this.arrayLikes) {
        sum += this.arrayLikes(i);
    }

    return sum;
*/