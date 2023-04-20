import { useState } from "react";
import { useQuery } from "react-query";
import { EditModal } from "../EditModal/EditModal";
import { UserCard } from "../UserCard/UserCard";
import { Container } from "./styles";
import { User } from "../../models/UserModel";
import { api } from "../../api/api";

export function UserList() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const { data, isError, isLoading } = useQuery('user-list', api.getUsers);

  return (
    <Container>
      <h1>Lista de Usuários</h1>
      {isLoading && <h3 className="loading">Carregando...</h3>}
      {isError && <h3 className="error">Ocorreu algum problema</h3>}
      {data?.map((user) => {
        return (
          <UserCard user={user} onClickEdit={() => setSelectedUser(user)} />
        );
      })}
      {selectedUser && (
        <EditModal
          user={selectedUser}
          show={!!selectedUser}
          handleClose={() => setSelectedUser(null)}
        />
      )}
    </Container>
  );
}
