function UserFunction ({ime,godine,onNameChange}) {

    //const {ime,godine} = props; 

    return (
        <>
        <p>Pozdrav moje ime je {ime} i imam {godine} godina.</p>
        <input type="text" value={ime} onChange={onNameChange} />
        </>
    
);
}

export default UserFunction;