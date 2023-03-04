export const WarningPill = ({count}) => {
  const text = 'Tareas Pendientes';
  return (
    <>
      {
        count <= 0
        ? ''
        : count > 9
          ? <div className="warning-pill">
              {`${text}: +9`}
            </div>
          : <div className="warning-pill">
              {`${text}: ${count}`}
            </div>
      }    
    </>
    
  )
}
