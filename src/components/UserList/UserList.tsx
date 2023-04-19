import { EditModal } from "../EditModal/EditModal";
import { UserCard } from "../UserCard/UserCard";
import { Container } from "./styles";

const users = [
  {
    id: "1",
    createdAt: "Teste",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    name: "João Batista ",
  },
  {
    id: "2",
    createdAt: "Teste",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    name: "Karen Batista ",
  },
  {
    id: "3",
    createdAt: "Teste",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    name: "Gilberto Batista ",
  },
];
export function UserList() {
  return (
    <Container>
      <h1>Lista de Usuários</h1>
      {users.map((user) => {
        return <UserCard user={user} onClickEdit={() => {}} />;
      })}

      <EditModal
        user={users[0]}
        show={false}
        handleClose={() => {}}
      />
    </Container>
  );
}
