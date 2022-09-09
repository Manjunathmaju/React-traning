import './Card.css';

function Card(props) {
    const classes = 'card ' + props.className;

    return <div className={classes}>{props.children}</div>;
    //return <div className='card'>{props.children}</div>; => this will over write the className and css can't able to access 
    //so, we have to use like above const classes 
}

export default Card;