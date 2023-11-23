export default function Tabs({ Buttons, children, ButtonsContainer = "menu" }) {
  return (
    <>
      <ButtonsContainer>{Buttons}</ButtonsContainer>
      {children}
    </>
  );
}
