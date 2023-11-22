import * as styles from "@/components/styles/PopUp.styles";

const PopUp = () => {
  return (
    <styles.Container>
      <styles.TitleBox>팝업 관리</styles.TitleBox>
      <styles.SubTitleBox>
        학생들에게 보여줄 팝업을 관리해보세요.
      </styles.SubTitleBox>
      <styles.ContentBox>
        <styles.TableTitleContainer>
          <styles.TableCountBox>총 1개</styles.TableCountBox>
          <styles.TableContentTitle>내용</styles.TableContentTitle>
          <styles.TablePeriodTitle>정보 제공</styles.TablePeriodTitle>
        </styles.TableTitleContainer>
        <styles.PopUpsContainer>
          <styles.PopupContainer>
            <styles.NumberBox>01</styles.NumberBox>
            <styles.PopupTitle>오늘만할인</styles.PopupTitle>
            <div style={{ margin: "auto", width: "103px" }}>
              <styles.PopupPeriod>2주간/실시간</styles.PopupPeriod>
            </div>
          </styles.PopupContainer>
        </styles.PopUpsContainer>
      </styles.ContentBox>
      <styles.ButtonBox>
        <styles.EnrollBtn>등록하기</styles.EnrollBtn>
        <styles.RemoveBtn>삭제하기</styles.RemoveBtn>
      </styles.ButtonBox>
    </styles.Container>
  );
};

export default PopUp;
