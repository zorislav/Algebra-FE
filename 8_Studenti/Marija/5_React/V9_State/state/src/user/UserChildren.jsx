export default function UserChildren({ children, ime, years }) {
  return (
    <>
      <p>
        Pozdrav moje ime je {ime} i imam {years} godina.
      </p>
      <p>{children}</p>
    </>
  );
}
