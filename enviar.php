<?php
// Define o endereço de e-mail para onde a mensagem será enviada
$destinatario = "kelvinharlandev@gmail.com";

// Verifica se os dados foram submetidos
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Obtém os valores dos campos de entrada
  $nome = $_POST["name"];
  $email = $_POST["email"];
  $telefone = $_POST["phone"];
  $mensagem = $_POST["message"];

  // Cria a mensagem de e-mail a ser enviada
  $assunto = "Nova mensagem do formulário de contato";
  $corpo = "Nome: $nome\nE-mail: $email\nTelefone: $telefone\nMensagem:\n$mensagem";

  // Envia o e-mail
  mail($destinatario, $assunto, $corpo);
}
?>
