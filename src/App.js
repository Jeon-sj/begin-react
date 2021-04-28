import React, { useRef, useState, useMemo, useCallback } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length; // active 상태인 유저 수 체크
}

function App() {
// input에 들어오는 내용을 useState로 규정
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
    });
//input 내용을 usename, email에 배정
  const { username, email } = inputs;
  
//버튼을 클릭하면 inputs 내용을 배열에 입력
  const onChange = useCallback( e => {
    const {name, value} = e.target;
    setInputs ({
      ...inputs,
      [name]: value
      });
    },
  [inputs]
  );
//저장된 목록, index = id
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velolpert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'pert',
      email: 'blic@gmail.com',
      active: false
    },
    {
      id: 3,
      username: 'velo',
      email: 'pub@gmail.com',
      active: false
    }
  ]);
//다음 id값을 전달
  const nextId = useRef(4);
//input에 있는 값을 현재있는 id 다음 id로 만들어 저장
  const onCreate =()=> { 
    const user = {
      id: nextId.current,
      username,
      email
    };

    // setUsers([...users, user]);
//concat함수로 문자열 합쳐서 배열에 입력
    setUsers(users.concat(user));

//현재 id 값에 1추가해서 배열에 username, email 추가
    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  };

//현재 선택된 id가 아닌 값으로 새로운 배열 생성
  const onRemove = useCallback(id => {
    setUsers(users => users.filter(user => user.id !== id));
  },[]);

  const onToggle = useCallback(id => {
    setUsers(users =>
      users.map(user =>
        user.id ===id ? { ...user, active : !user.active } : user
        )
    );
  },[]);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}  />;
      <div>활성사용자수 :{count}</div>
    </>
  )
}

export default App;
