import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/palette';
import Button from '../common/Button';
import { useForm } from 'react-hook-form';
import { useLoginHook } from '../../lib/Hooks/useLoginHook';

const LoginBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;

  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }

  & + & {
    margin-top: 1rem;
  }
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;

  a {
    color: ${palette.gray[6]};
    text-decoration: underline;

    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

function Login() {
  const { onSubmit } = useLoginHook();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <LoginBlock>
      <h3>로그인</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledInput
          type="text"
          {...register('username', { required: '아이디를 입력해주세요' })}
        />
        <ErrorMessage>{errors?.username?.message}</ErrorMessage>
        <StyledInput
          type="password"
          {...register('password', { required: '비밀번호를 입력해주세요' })}
        />
        <ErrorMessage>{errors?.password?.message}</ErrorMessage>
        <Button cyan fullWidth style={{ marginTop: '1rem' }}>
          로그인
        </Button>
      </form>
      <Footer>
        <Link to="/register">회원가입</Link>
      </Footer>
    </LoginBlock>
  );
}

export default Login;
