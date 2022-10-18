import Memberships from './memberships.js';

export default class Utils {
    constructor(){
        this.memeberships = new Memberships();
    }

    getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    draw(data){
        
        const tenisBall = document.getElementById('tenisBall');
        tenisBall.style.top = data.y+'px';
        
        const posicion = document.getElementById('posicion');
    
        const velocidad = document.getElementById('velocidad');
    
        const venti = document.getElementById('venti');

        const objetivo = document.getElementById('objetivo');
    }

    fuzzification(data){
        let distancia = data.objY - data.posY;

        let medio = this.memeberships.triangle(distancia, -40, 0, 40);

        let cercaA = this.memeberships.trapezoid(distancia, 20, 80, 120, 180);
        let cercaB = this.memeberships.trapezoid(distancia, -180, -120, -80, -20);

        let normalA = this.memeberships.trapezoid(distancia, 120, 160, 240, 280);       
        let normalB = this.memeberships.trapezoid(distancia, -280, -240, -160, -120);

        let lejosA = this.memeberships.grade(distancia, 240, 300);
        let lejosB = this.memeberships.gradeInverted(distancia, -300, -240);

        const num = medio*13 + cercaA*8 + normalA*6 + lejosA*5 + cercaB*18 + normalB*19 + lejosB*21;
        const denom = medio+cercaA+normalA+lejosA+cercaB+normalB+lejosB;

        data.venti = num/denom;

        return data;
    }
}