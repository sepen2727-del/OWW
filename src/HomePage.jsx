function HomePage({ userId, onLogout }) {
  return (
    <div>
      <h2>홈</h2>
      <p>{userId}님, 환영합니다!</p>
      <button type="button" onClick={onLogout}>로그아웃</button>
    </div>
  );
}

export default HomePage;
