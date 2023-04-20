import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { CharacterModel } from "../../models/CharacterModel";
import { CharacterCard } from "../CharacterCard/CharacterCard";

import { Container, CurrentPageText, PaginationBox } from "./styles";
import { useQuery } from "react-query";
import { Button } from "react-bootstrap";

export function CharacterList() {
  const [page, setPage] = useState(1);

  const { data } = useQuery(
    ["characters", page],
    () => api.getCharacters(page),
    {
      keepPreviousData: true,
      staleTime: 10000,
    }
  );

  return (
    <Container>
      <h1>Lista de Personagens</h1>
      <PaginationBox>
        <Button
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
        >
          Página Anterior
        </Button>
        <CurrentPageText>Página Atual: {page}</CurrentPageText>
        <Button
          // onClick={() => setPage((old) => ( data?.info.next ? old + 1 : old))}
          onClick={() => setPage((old) => old + 1)}
          disabled={!data?.info.next}
        >
          Príxima página
        </Button>
      </PaginationBox>
      {data?.results?.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </Container>
  );
}
