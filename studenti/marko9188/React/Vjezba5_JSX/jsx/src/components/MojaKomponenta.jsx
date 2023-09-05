function MojaKomponenta(){

    const name='Ivan';
    const user={
    firstName: 'Ivan',
    lastName: 'Horvat'
    
};
    const userOutput = `${user.firstName} ${user.lastName}`;

    return(  
    <>
        <p>Hello World!</p>
        <p>Moje ime je : {name}</p>
        <p>Moje ime i prezime: {user.firstName} {user.lastName}</p>
        <p>Moje ime je : {userOutput}</p>
    </>
        );
};

export default MojaKomponenta;