import * as S from './styles'

const Main = ({
  title = 'Boilerplate Reactjs',
  description = 'ReactJS, TypeScript, Jest, Styled Components e StoryBook'
}) => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration src="/img/illustration.jpg" />
  </S.Wrapper>
)

export default Main
