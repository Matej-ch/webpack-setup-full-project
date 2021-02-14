import {useState} from 'react'

const fireSpell = {
    name: 'Fireball',
    strength: 5,
    aoe: 'no'
}

const aoeFireSpell = {
    ...fireSpell,
    aoe: 'yes',
}

const Spells = () => {

    const [spell,setSpell] = useState({})

    return (<div>
        <h3>
            Current spell
        </h3>
        <button onClick={() => setSpell(fireSpell)}>Fire spell</button>
        <button onClick={() => setSpell(aoeFireSpell)}>Aoe fire spell</button>

        <ul>
            {Object.keys(spell).map((spellAttribute) => (
                <li key={spellAttribute}>
                    {spellAttribute}: {spell[spellAttribute]}
                </li>
            ))}
        </ul>
    </div>)
}

export default Spells;