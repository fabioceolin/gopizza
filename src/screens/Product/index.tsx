import React from "react";
import { Platform, TouchableOpacity } from "react-native";

import { ButtonBack } from "@components/ButtonBack";
import { Photo } from "@components/Photo";
import { Button } from "@components/Button";

import {
  Container,
  Header,
  Title,
  DeleteLabel,
  Upload,
  PickImageButton,
  Label,
  InputGroup,
  InputGroupHeader,
  MaxCharacters,
  Form,
} from "./styles";

export function Product() {
  return (
    <Container behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <Header>
        <ButtonBack />

        <Title>Cadastrar</Title>

        <TouchableOpacity>
          <DeleteLabel>Deletar</DeleteLabel>
        </TouchableOpacity>
      </Header>

      <Upload>
        <Photo uri="https://github.com/fabioceolin.png" />
        <PickImageButton title="Carregar" type="secondary" />
      </Upload>
    </Container>
  );
}
