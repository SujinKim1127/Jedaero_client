import styled from "@emotion/styled";

export const Container = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  margin: auto;

  width: 80vw;

  row-gap: 2rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;

  width: 100%;
`;

export const OptionContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;

  row-gap: 10px;
`;

//
export const Title = styled.p`
  color: var(--, #1c1c1e);
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -1.56px;
`;

export const IndexButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 6rem;

  padding: 10px 15px;
  border-radius: 20px;

  transition: all 0.5s ease;
  &:hover {
    background-color: var(--g1, #c6c6c680);
    border-radius: 20px;
    transition: all 0.5s ease;
  }
`;

export const SearchButton = styled.div`
  border-radius: 6px;
  background-color: #3d4149;
  color: #dfff60;
  padding: 13px 16px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #2c5aff;
    transition: all 0.5s ease;
  }
`;

export const SubTitle = styled.div`
  color: #676767;
  font-family: Pretendard Variable;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 19.264px; /* 128.425% */
  letter-spacing: -0.9px;
`;

export const ButtonWrapper = styled.div`
  display: flex;

  column-gap: 10px;
`;

export const DefaultBox = styled.article`
  display: flex;
`;

// ------ DashBoard Chart Container ------
/*
d 3

d 3 7 4
d
d

d 1 1
d
d
*/
export const ContentsContainer = styled.div`
  width: 100%;
  min-height: 5cqmax;

  display: grid;
  grid-template-rows: repeat(6, minmax(1fr, auto));

  column-gap: 10px;
  row-gap: 10px;

  margin-bottom: 5vh;
`;

// --- Layer ---
export const FirstLayer = styled(DefaultBox)`
  width: 100%;
  grid-row: 1 / 2;

  display: grid;
  grid-template-columns: repeat(9, 1fr);

  column-gap: 10px;
`;

export const SecondLayer = styled(DefaultBox)`
  width: 100%;
  grid-row: 2/3;

  display: grid;
  grid-template-columns: repeat(14, 1fr);
  grid-template-rows: repeat(4, 1fr);

  column-gap: 10px;
  row-gap: 10px;
`;

export const ThirdLayer = styled(DefaultBox)`
  width: 100%;
  grid-row: 3/7;

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  column-gap: 10px;
`;

// --- Box ---

export const FirstBox = styled(DefaultBox)`
  grid-column: 1/4;
`;

export const SecondBox = styled(DefaultBox)`
  grid-column: 4/7;
`;

export const ThirdBox = styled(DefaultBox)`
  grid-column: 7/10;
`;

//

export const FourthBox = styled(DefaultBox)`
  grid-column: 1/4;
  grid-row: 1/5;
`;

export const FifthBox = styled(DefaultBox)`
  grid-column: 4/11;
  grid-row: 1/5;
`;

export const SixthUpperBox = styled(DefaultBox)`
  grid-column: 11 / 15;
  grid-row: 1/3;

  display: flex;
  align-items: center;
`;

export const SixthLowerBox = styled(DefaultBox)`
  grid-column: 11/15;
  grid-row: 3/5;

  display: flex;
  align-items: center;
`;

//

export const SeventhBox = styled(DefaultBox)`
  grid-column: 1/2;
`;

export const EightthBox = styled(DefaultBox)`
  grid-column: 2/3;
`;
