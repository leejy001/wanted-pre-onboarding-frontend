import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { HttpClient } from "../../../api/httpClient";
import { AuthApi } from "../../../api/authApi";
import { LocalTokenRepository } from "../../../utils/LocalTokenRepository";

const localTokenRepository = new LocalTokenRepository();
const httpClient = new HttpClient(localTokenRepository);
const authApi = new AuthApi(httpClient, localTokenRepository);

function LogoutButton() {
  const navigate = useNavigate();

  const logoutClick = () => {
    authApi.logout();
    navigate("/");
  };

  return (
    <ButtonContainer onClick={logoutClick}>
      <p>로그아웃</p>
      <img src={`${process.env.PUBLIC_URL}/assets/logout.png`} alt="logout" />
    </ButtonContainer>
  );
}

export default LogoutButton;

export const ButtonContainer = styled.button`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-end;
  background-color: #fff;
  border: none;
  border-radius: 5px;
  width: 200px;
  height: 40px;
  position: absolute;
  top: 30px;
  right: 90px;
  -moz-transition: all 0.5s ease-in;
  -webkit-transition: all 0.5s ease-in;
  -o-transition: all 0.5s ease-in;
  transition: all 0.5s ease-in;
  p {
    font-size: 14px;
    font-weight: 700;
    color: #1e90ff;
  }
  img {
    width: 28px;
  }
  &:hover {
    right: 0;
  }
`;
