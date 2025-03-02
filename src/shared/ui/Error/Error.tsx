const Error = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img src="src/shared/icons/error.png" alt="error" width={50} />
      <p style={{ color: 'tomato', fontSize: '28px' }}>
        Ошибка загрузки
      </p>
    </div>
  );
};

export default Error;
