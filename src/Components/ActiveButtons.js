import { useState } from 'react'
import './cliche.css'

function ActiveButtons ({cardArray}) {
  const [active, setActive] = useState([])

        const item1 = cardArray[0]
        const item2 = cardArray[1]
        const item3 = cardArray[2]
        const item4 = cardArray[3]
        const item5 = cardArray[4]
        const item6 = cardArray[5]

  const buttons = [item1, item2, item3, item4, item5, item6]

  return buttons.map(key => {
    const isActive = active.includes(key)

    return (
        <div id = "container"> 
            <div className = "grid-container">
                <div className="grid-item">
      <button
        key={key}
        onClick={() => setActive(isActive
          ? active.filter(current => current !== key)
          : [...active, key]
        )}
        style={{ background: isActive ? '#231557' : 'white', 
                color: isActive ? 'whitesmoke' : 'black'}}
        class="btn"
        type="button"
      >
        {key}
      </button>
                 </div>
            </div>
      </div>
    )
  })
}

export default ActiveButtons