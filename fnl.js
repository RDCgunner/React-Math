import './eq.css';
const Final =(props) => {
var suma = 0;
props.arrNum1.map(current => {if (current.corect==true) {suma=suma+1}})

return (
    <div className='nota'>NOTA FINALA {(suma/props.arrNum1.length*10).toFixed(1)}</div>
)
}

export default Final;