const warningPillStyle = {
  display: 'inline',
  backgroundColor: '#9b4dca',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  textAlign: 'center',
  height: '3rem',
  textTransform: 'uppercase',
  color: 'white',
  borderRadius: '25px',
  padding: '0.8rem 2rem 0.8rem 2rem'
}

export const WarningPill = ({count}) => {
  const text = 'Tareas Pendientes';
  return (
    <>
      {
        count <= 0
        ? ''
        : count > 9
          ? <div style={warningPillStyle}>
              {`${text}: +9`}
            </div>
          : <div style={warningPillStyle}>
              {`${text}: ${count}`}
            </div>
      }    
    </>
    
  )
}
