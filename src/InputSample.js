import React, { useState } from 'react';

function InputSample() {
    const [text, setTxt] = useState('');

    const onChange = (e) => {
        setTxt(e.target.value);
    };

    const onReset = () =>{
        setTxt('');
    };

    return (
        <div>
            <input onChange={onChange} value={text} />

            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: {text} </b>
            </div>
        </div>
    );
}

export default InputSample;