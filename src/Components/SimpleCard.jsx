import 'boxicons';

export const SimpleCard = ({ Dates }) => {

  const { name, title, footer, icon, image } = Dates;

  return (
    <div className='Simple__Card'>
     
        <div className="Picture">
            <img src={ image } alt="" />
        </div>
        <div className="info">
            <h1>{ name }</h1>
            <p>{ title }</p>
            <div className="btn-card">
            <box-icon name={ icon }></box-icon> 
            <span className='btn-info'>{ footer }</span>
            </div>
        </div>

    </div>
  )
}
 