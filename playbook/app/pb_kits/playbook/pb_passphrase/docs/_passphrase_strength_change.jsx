import React, { useState } from 'react'
import { Passphrase, TextInput } from '../../'

const PassphraseStrengthChange = (props) => {
  const [input, setInput] = useState('')

  const handleChange = (e) => setInput(e.target.value)

  const [strength, setStrength] = useState(0)
  const handleStrengthChange = (str) => setStrength(str)

  return (
    <>
      <div>
        <Passphrase
            label="Passphrase"
            onChange={handleChange}
            onStrengthChange={handleStrengthChange}
            value={input}
            {...props}
        />
        <TextInput
            disabled
            label="Passphrase Strength"
            readOnly
            value={strength}
        />
      </div>
    </>
  )
}

export default PassphraseStrengthChange