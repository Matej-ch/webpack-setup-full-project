import {useState} from 'react'

const spell = {
    name: 'Fireball',
    strength: 5,
    aoe: 'no'
}

const aoeSpell = {
    ...spell,
    aoe: 'yes',
}

const Spells = () => {

    const [spell,setSpell] = useState({})

    return (<div>
        <h3>
            Current spell
        </h3>
        <button onClick={() => setSpell(spell)}>Fire spell</button>
        <button onClick={() => setSpell(aoeSpell)}>Aoe fire spell</button>

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