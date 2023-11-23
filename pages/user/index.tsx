import * as styles from "@/components/styles/user/first/style";
import { Checkbox } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleIcon from "@mui/icons-material/Circle";
interface UserProps {
  name?: string;
  isLogin?: boolean;
}

interface CheckBoxValid {
  first: boolean;
  second: boolean;
  third: boolean;
  fourth: boolean;
  fifth: boolean;
}

const UserPage: React.FC<UserProps> = () => {
  const router = useRouter();

  const [checked, setChecked] = useState<CheckBoxValid>({
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
  });

  const [pageAble, setPageAble] = useState<boolean>(false);

  useEffect(() => {
    setPageAble(checked.second && checked.third);
  }, [checked]);

  const checkBoxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, name } = e.target;
    setChecked((prev) => {
      return {
        ...prev,
        [name]: checked,
      };
    });
  };

  return (
    <styles.Container>
      <Head>
        <title>회원가입</title>
        <meta name="signUp" content="회원가입" />
      </Head>
      <styles.PhaseBox>
        <styles.PhaseItem>
          <styles.PhaseEllipse selected={true}>1</styles.PhaseEllipse>
          <styles.PhaseTitle selected={true}>약관동의</styles.PhaseTitle>
        </styles.PhaseItem>
        <styles.ConnectLine />
        <styles.PhaseItem>
          <styles.PhaseEllipse>2</styles.PhaseEllipse>
          <styles.PhaseTitle>정보입력</styles.PhaseTitle>
        </styles.PhaseItem>
        <styles.ConnectLine />
        <styles.PhaseItem>
          <styles.PhaseEllipse>3</styles.PhaseEllipse>
          <styles.PhaseTitle>인증절차</styles.PhaseTitle>
        </styles.PhaseItem>
        <styles.ConnectLine />
        <styles.PhaseItem>
          <styles.PhaseEllipse>4</styles.PhaseEllipse>
          <styles.PhaseTitle>가입완료</styles.PhaseTitle>
        </styles.PhaseItem>
      </styles.PhaseBox>
      <styles.AgreementBox>
        <styles.AgreementTitle>
          *필수 약관에 동의하셔야 회원가입이 가능합니다.
        </styles.AgreementTitle>
        <styles.AgreementTitle>
          *선택 약관에 동의하지 않으셔도 회원가입이 가능합니다.
        </styles.AgreementTitle>
        <styles.AgreementInnerBox>
          <styles.AgreementInnerBox>
            <styles.Checks style={{ borderBottom: "1px solid #D0D0D0" }}>
              <Checkbox


                icon={<CircleIcon />}
                checkedIcon={<CheckCircleIcon />}


                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const { checked } = e.target;
                  checked
                    ? setChecked({
                        first: true,
                        second: true,
                        third: true,
                        fourth: true,
                        fifth: true,
                      })
                    : setChecked({
                        first: true,
                        second: true,
                        third: true,
                        fourth: true,
                        fifth: true,
                      });
                }}
              />
              전체 약관동의
            </styles.Checks>
            <styles.Checks>
              <Checkbox
                icon={<CircleIcon />}
                checkedIcon={<CheckCircleIcon />}
                checked={checked.second}
                name="second"
                onChange={checkBoxHandler}
              />
              회원 서비스 이용약관 (필수)
            </styles.Checks>
            <styles.Checks>
              <Checkbox
                icon={<CircleIcon />}
                checkedIcon={<CheckCircleIcon />}
                name="third"
                checked={checked.third}
                onChange={checkBoxHandler}
              />
              개인정보 수집 및 이용동의 (필수)
            </styles.Checks>
            <styles.Checks>
              <Checkbox
                icon={<CircleIcon />}
                checkedIcon={<CheckCircleIcon />}
                name="fourth"
                checked={checked.fourth}
                onChange={checkBoxHandler}
              />
              개인정보의 제3자 제공 동의 (선택)
            </styles.Checks>
            <styles.Checks>
              <Checkbox
                icon={<CircleIcon />}
                checkedIcon={<CheckCircleIcon />}
                name="fifth"
                checked={checked.fifth}
                onChange={checkBoxHandler}
              />
              마케팅 수신 동의 (선택)
            </styles.Checks>
          </styles.AgreementInnerBox>
        </styles.AgreementInnerBox>
        <styles.NextBtn
          variant="contained"
          onClick={() => {
            pageAble && router.push("/user/form");
          }}
          disabled={!pageAble}
        >
          다음
        </styles.NextBtn>
      </styles.AgreementBox>
    </styles.Container>
  );
};

export default UserPage;
