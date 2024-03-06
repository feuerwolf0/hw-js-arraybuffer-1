import Character from '../Character';
import Daemon from '../Daemon';
import Magician from '../Magician';


test('Test: setter/getter stoned', () => {
  const ch = new Character();
  ch.stoned = true;

  expect(ch.stoned).toBe(true);
});


test('Test: setter/getter attack', () => {
  const ch = new Character();
  ch.attack = 237;

  expect(ch.attack).toBe(237);
});

test('Test: character get calculated attack without stoned', () => {
  const ch = new Character();
  const to_block = 5;

  expect(ch.getAttack(to_block)).toBe(60);
});

test('Test: character get calculated attack with stoned', () => {
  const ch = new Character();
  ch.stoned = true;
  const to_block = 2;

  expect(ch.getAttack(to_block)).toBe(85);
});

test('Test: create Magician and Daemon', () => {
  const mag = new Magician();
  const daemon = new Daemon();

  expect(mag).toBeInstanceOf(Magician);
  expect(daemon).toBeInstanceOf(Daemon);
})