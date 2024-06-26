
// eslint-disable-next-line react/prop-types
const Card = ({ name, email, id }) => {
    return (
            <div className='bg-light-green dib br3 pa2 ma2 grow bw2 shadow-5'>
                <img alt='robobitch'src={`https://robohash.org/${id}?200x200`}/>
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
    )
}

export default Card;