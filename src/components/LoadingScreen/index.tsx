import { LoadingScreenContainer, SpinnerContainer } from './styles';

export function LoadingScreen() {
  return(
    <LoadingScreenContainer>
      <SpinnerContainer>
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </SpinnerContainer>
    </LoadingScreenContainer>
  );
}