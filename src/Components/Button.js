import { useState } from 'react'

const Button = ({ cliche }) => {

    const [isActive, setIsActive] = useState(false)

    return (
        <div className="grid-item">
            <button
                onClick={() => setIsActive(isActive ? false : true)}
                style={{
                    background: isActive ? '#231557' : 'white',
                    color: isActive ? 'whitesmoke' : 'black'
                }}
                className="btn"
                type="button"
            >
                {cliche}
            </button>
        </div>

    );
}

export default Button;