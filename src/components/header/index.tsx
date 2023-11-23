import Image from "next/image";
import { HeaderContainer } from "./styles";

import logo from '../../assets/logo.svg';
import DialogComponent from "../dialog";

export default function HeaderComponent() {
  return (
    <HeaderContainer>
      <Image alt='logo' src={logo} />

      <DialogComponent />
    </HeaderContainer>
  )
}