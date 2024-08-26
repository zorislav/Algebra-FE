function UserFunction({ ime, godine, onNameChange }) {

 //const { ime, godine } = props;
 return (
<>
 <p>Pozzz, moje ime je {ime} i imam {godine} godina. </p>;
<input type="text" value={ime} onChange={onNameChange} />
</>
);

  
}
 
export default UserFunction;