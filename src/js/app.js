import Magician from "./Magician";
import Daemon from "./Daemon";


const daemon = new Daemon();
const mag = new Magician();

console.log(daemon);
daemon.stoned = true;
console.log(daemon);
console.log(daemon.getAttack(2), 'Ожидается урон 85');

console.log(mag);
console.log(mag.getAttack(5), 'Ожидается урон 60');
