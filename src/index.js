const spell = {
    name: 'Fireball',
    strength: 5,
    aoe: false
}

const aoeSpell = {
    ...spell,
    aoe: true
}

console.log(spell);

console.log(aoeSpell);