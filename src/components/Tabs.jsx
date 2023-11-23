export default function Tabs({ Buttons, children }) {
  return (
    <>
      <menu>{Buttons}</menu>
      {children}
    </>
  );
}
