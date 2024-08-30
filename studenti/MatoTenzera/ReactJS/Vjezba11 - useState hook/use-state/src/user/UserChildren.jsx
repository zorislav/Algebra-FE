import PropTypes from 'prop-types';


function UserChildren( {ime, godine , children, fontSize} ) { //children je poseban prop
    return (

        <>
        <p>pozdrav moje ime je {ime} i imam {godine} godina</p>
        <p style={{fontSize}}>a hobi mi je {children}--iskoristavanje posebnog property-a children</p> 
        </>

    );
}

export default UserChildren;

UserChildren.prototypes = {
    ime: PropTypes.string,
    godine: PropTypes.number
};

UserChildren.defaultProps = {
    ime:"pero"
}