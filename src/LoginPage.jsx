import { useState } from 'react';

// 임시 테스트 계정 (백엔드가 없어서 프론트에서만 비교)
// 실제 서비스에서는 서버 API로 검증해야 함 — 프론트 코드는 누구나 볼 수 있어서 계정이 노출됨
const TEST_ACCOUNT = {
  id: 'admin',
  password: '1234',
};

function LoginPage({ onLoginSuccess }) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!id || !password) {
      alert('아이디와 비밀번호를 모두 입력해 주세요.');
      return;
    }

    // 아이디·비밀번호가 모두 맞으면 부모(App)에 알려서 홈 화면으로 전환
    if (id === TEST_ACCOUNT.id && password === TEST_ACCOUNT.password) {
      onLoginSuccess(id);
      return;
    }

    // 어느 쪽이 틀렸는지 구분하지 않음 — 아이디 존재 여부가 노출되지 않도록
    alert('아이디 또는 비밀번호가 올바르지 않습니다.');
    setPassword('');
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
