export default function Tabs({ Buttons, children, ButtonsContainer }) {
  return (
    <>
      <ButtonsContainer>{Buttons}</ButtonsContainer>
      {children}
    </>
  );
}
