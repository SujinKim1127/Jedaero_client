import React, { useEffect, useState } from "react";
import * as phase from "@/components/styles/user/first/style";
import * as styles from "@/components/styles/user/second/style";

import {
  Checkbox,
  FilledInput,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { FlexBox } from "@/components/atoms/basics";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useRouter } from "next/router";

interface FormPageProps {}

enum Unions {
  first = "first",
  second = "second",
  third = "third",
}

/*
form Data 예시
univ : 숭실대
belong : {
  first : {
    checked : false, name : ''
  },
  second : {
    checked : true, name : '숭숭it대학'
  },
  third : {
    checked : false, name : ''
  }
},
uion
 */
interface FormData {
  univ: string;
  belong: belong;
  unionName: string;
}

type belong = {
  checked: boolean;
  name: string;
};

const FormPage: React.FC<FormPageProps> = () => {
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>();

  const checkBoxInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const InputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  useEffect(() => {
    console.log(JSON.stringify(formData));
  }, [formData]);
  return (
    <phase.Container>
      <phase.PhaseBox>
        <phase.PhaseItem>
          <phase.PhaseEllipse>1</phase.PhaseEllipse>
          <phase.PhaseTitle>약관동의</phase.PhaseTitle>
        </phase.PhaseItem>
        <phase.ConnectLine />
        <phase.PhaseItem>
          <phase.PhaseEllipse selected={true}>2</phase.PhaseEllipse>
          <phase.PhaseTitle selected={true}>정보입력</phase.PhaseTitle>
        </phase.PhaseItem>
        <phase.ConnectLine />
        <phase.PhaseItem>
          <phase.PhaseEllipse>3</phase.PhaseEllipse>
          <phase.PhaseTitle>인증절차</phase.PhaseTitle>
        </phase.PhaseItem>
        <phase.ConnectLine />
        <phase.PhaseItem>
          <phase.PhaseEllipse>4</phase.PhaseEllipse>
          <phase.PhaseTitle>가입완료</phase.PhaseTitle>
        </phase.PhaseItem>
      </phase.PhaseBox>
      <phase.AgreementBox>
        <styles.AskContainer>
          <styles.AskWrapper>
            <styles.AskTitle>학교*</styles.AskTitle>
            <styles.AskContents>
              <FilledInput
                name="Univ"
                style={{ width: "100%" }}
                endAdornment={<SearchOutlinedIcon />}
              />
            </styles.AskContents>
          </styles.AskWrapper>
          <styles.AskWrapper>
            <styles.AskTitle>학생회 소속*</styles.AskTitle>
            <styles.AskContents>
              <styles.AskSubBox>
                <styles.HorizontalBox>
                  <styles.AskSubTitle>
                    <Checkbox
                      name={Unions.first}
                      onChange={checkBoxInputHandler}
                    />
                    총 학생회
                  </styles.AskSubTitle>
                </styles.HorizontalBox>
                <styles.HorizontalBox>
                  <styles.AskSubTitle>
                    <Checkbox
                      name={Unions.second}
                      onChange={checkBoxInputHandler}
                    />
                    단과대 학생회
                  </styles.AskSubTitle>
                  <styles.AskSubContent>
                    <TextField variant="filled" style={{ width: "100%" }} />
                  </styles.AskSubContent>
                </styles.HorizontalBox>
                <styles.HorizontalBox>
                  <styles.AskSubTitle>
                    <Checkbox
                      name={Unions.third}
                      onChange={checkBoxInputHandler}
                    />
                    과 학생회
                  </styles.AskSubTitle>
                  <styles.AskSubContent>
                    <TextField
                      variant="filled"
                      style={{ width: "100%" }}
                      onChange={InputHandler}
                    />
                  </styles.AskSubContent>
                </styles.HorizontalBox>
              </styles.AskSubBox>
            </styles.AskContents>
          </styles.AskWrapper>

          <styles.AskWrapper>
            <styles.AskTitle>학생회 명*</styles.AskTitle>
            <styles.AskContents>
              <TextField
                name="nameOfUnion"
                variant="filled"
                style={{ width: "100%" }}
                onChange={InputHandler}
              />
            </styles.AskContents>
          </styles.AskWrapper>
        </styles.AskContainer>
        <phase.NextBtn
          variant="contained"
          onClick={() => {
            router.push("/user/auth");
          }}
        >
          다음
        </phase.NextBtn>
      </phase.AgreementBox>
    </phase.Container>
  );
};

export default FormPage;
