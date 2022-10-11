function Saludo(e) {
    return `hola ${e}`
}
export function Name() {
  return (
    <div>
        <h1>
            {Saludo('ramonita')}
        </h1>
    </div>
      
  );
}