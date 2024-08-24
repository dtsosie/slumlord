import React, {useState} from 'react';

function Money() {
    const [money, setMoney] = useState(0);

    return (
        <div className='Money'>
            <p>
                ${money}
            </p>
            <button onClick={() => setMoney(money + 1)}>Shake Down</button>
        </div>
    )
}

export default Money;