import { User } from "../../models/UserModel";
import { Container, Imagem, Content, Button } from "./styles";

interface Props {
  user: User;
  onClickEdit: () => void;
}

export function UserCard({user, onClickEdit}: Props) {
  return (
    <Container>
      <Imagem src={user.avatar}/>
      <Content>
      <h3>{user.name}</h3>
      <Button onClick={onClickEdit}>EDITAR</Button>
      </Content>
    </Container>
  );
}
