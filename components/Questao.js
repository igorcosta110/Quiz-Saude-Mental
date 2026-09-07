import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Modal, StyleSheet, ScrollView} from "react-native";
import { Audio } from "expo-av";

export default function Questao({pergunta, imagem, alternativas, alternativaCorreta, feedback, onProxima}) {
  const [alternativaUsuario, setAlternativaUsuario] = useState(null);
  const [modalVisivel, setModalVisivel] = useState(false);

  // Função disparada ao clicar em qualquer alternativa
  async function responder(alternativaClicada) {
    // Se o usuário já clicou antes, o código para aqui e não faz nada
    if (alternativaUsuario !== null) {
      return;
    }

    setAlternativaUsuario(alternativaClicada);

    // Verifica se acertou
    let acertou = false;
    if (alternativaClicada === alternativaCorreta) {
      acertou = true;
    }

    // Define o som baseado no acerto com if/else
    let arquivoSom;
    if (acertou === true) {
      arquivoSom = require("../assets/certo.mp3");
    } else {
      arquivoSom = require("../assets/errado.mp3");
    }

    // Toca o som
    const { sound } = await Audio.Sound.createAsync(arquivoSom);
    await sound.playAsync();

    // Mostra o feedback na tela
    setModalVisivel(true);

    // CONFIGURAÇÃO DO TEMPO: Espera 5 segundos (5000 ms) e avança automaticamente
    setTimeout(() => {
      setModalVisivel(false);

      // Envia os pontos para a tela repassar para a variável global
      if (acertou === true) {
        onProxima(1);
      } else {
        onProxima(0);
      }
    }, 5000);
  }

  // Define o título do Modal com if/else
  let tituloDoModal = "";
  if (alternativaUsuario === alternativaCorreta) {
    tituloDoModal = "✔️ Você Acertou!";
  } else {
    tituloDoModal = "❌ Você Errou!";
  }

  // Define a cor de fundo da caixa do Modal com if/else
  let corFundoModal = "rgba(255,255,255,0.92)"; // Branco por padrão
  if (alternativaUsuario !== null) {
    if (alternativaUsuario === alternativaCorreta) {
      corFundoModal = "rgba(212,237,218,0.92)"; // Verde claro para acerto
    } else {
      corFundoModal = "rgba(248,215,218,0.92)"; // Vermelho claro para erro
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={imagem} style={styles.imagem} />
        <Text style={styles.pergunta}>{pergunta}</Text>

        {/* BOTÕES FEITOS UM A UM (SEM MAP E SEM MUDANÇA DE COR) */}

        {/* Botão 1 */}
        <TouchableOpacity style={styles.botao} onPress={() => responder(1)}>
          <Text style={styles.textoBotao}>{alternativas[0]}</Text>
        </TouchableOpacity>

        {/* Botão 2 */}
        <TouchableOpacity style={styles.botao} onPress={() => responder(2)}>
          <Text style={styles.textoBotao}>{alternativas[1]}</Text>
        </TouchableOpacity>

        {/* Botão 3 */}
        <TouchableOpacity style={styles.botao} onPress={() => responder(3)}>
          <Text style={styles.textoBotao}>{alternativas[2]}</Text>
        </TouchableOpacity>

        {/* Botão 4 */}
        <TouchableOpacity style={styles.botao} onPress={() => responder(4)}>
          <Text style={styles.textoBotao}>{alternativas[3]}</Text>
        </TouchableOpacity>

        {/* Botão 5 */}
        <TouchableOpacity style={styles.botao} onPress={() => responder(5)}>
          <Text style={styles.textoBotao}>{alternativas[4]}</Text>
        </TouchableOpacity>

        {/* Modal de Feedback */}
        <Modal visible={modalVisivel} transparent={true} animationType="fade">
          <View style={styles.modalFundo}>
            {/* A cor de fundo aqui é injetada pela nossa variável corFundoModal */}
            <View style={[styles.modalCaixa, { backgroundColor: corFundoModal }]}>
              <Text style={styles.modalTitulo}>{tituloDoModal}</Text>
              <Text style={styles.modalFeedback}>{feedback}</Text>
              {/* O botão "Próxima" foi removido. A transição ocorre pelo setTimeout. */}
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    alignItems: "center" 
  },
  imagem: { 
    width: "100%", 
    height: 200, 
    borderRadius: 10, 
    marginBottom: 20 
  },
  pergunta: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  // Adicionada a cor de fundo cinza padrão diretamente no estilo do botão
  botao: {
    width: "100%",
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "#e0e0e0",
  },
  textoBotao: { 
    fontSize: 16, 
    fontWeight: "bold", 
    color: "#333" 
  },
  modalFundo: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  // Removida a cor de fundo daqui, pois agora é passada dinamicamente no JSX
  modalCaixa: {
    width: "80%",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  modalFeedback: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
});
