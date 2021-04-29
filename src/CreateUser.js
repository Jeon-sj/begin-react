import React from 'react';

function CreateUser({ username, email, onChange, onCreate}) {
    return (
        <div>
            <input
            name = "username"
            placeholder = "계정명"
            onChange = {onChange}
            value = {username}
            />
            <input 
            name = "email"
            placeholder="이메일"
            onChange = {onChange}
            value = {email}
            />
            <button onClick={onCreate}>등록</button>
        </div>
    );
}

// const onCreate =()=> { 
//     const user = {
//       id: nextId.current,
//       username,
//       email
//     };

// const onChange = e => {
//     const {name, value} = e.target;
//     setInputs ({
//       ...inputs,
//       [name]: value
//     });
//   };



export default React.memo(CreateUser);
