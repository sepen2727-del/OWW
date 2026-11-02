import { useState } from 'react';

function LoginPage() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!id || !password) {
      alert('아이디와 비밀번호를 모두 입력해 주세요.');
      return;
    }
    alert(`로그인 시도: ${id}`);
  };

  return (
    <div>
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="아이디" value={id} onChange={e => setId(e.target.value)} /> <br />
        <input type="password" placeholder="비밀번호" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}

export default LoginPage;
