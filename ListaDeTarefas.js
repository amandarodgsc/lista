import React, { useState } from 'react';
import { Text, View, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Tarefa from './Tarefa';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8e8e8', // Cinza claro de fundo
  },
  listaContainer: {
    width: '80%',
  },
  cabecalho: {
    fontSize: 24,
    marginBottom: 10,
    color: '#0077b6', // Azul
  },
  input: {
    borderWidth: 2,
    borderColor: '#0077b6', // Azul
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  botaoAdicionar: {
    backgroundColor: '#0077b6', // Azul
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  textoBotaoAdicionar: {
    color: 'white',
  },
});

export default function ListaDeTarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionarTarefa = () => {
    if (novaTarefa) {
      const novaTarefaObj = {
        id: Date.now(),
        texto: novaTarefa,
      };
      setTarefas([...tarefas, novaTarefaObj]);
      setNovaTarefa('');
    }
  }

  const editarTarefa = (id, textoEditado) => {
    const tarefasAtualizadas = tarefas.map((tarefa) =>
      tarefa.id === id ? { ...tarefa, texto: textoEditado } : tarefa
    );
    setTarefas(tarefasAtualizadas);
  };

  const excluirTarefa = (id) => {
    const tarefasFiltradas = tarefas.filter((tarefa) => tarefa.id !== id);
    setTarefas(tarefasFiltradas);
  };

  return (
    <View style={styles.container}>
      <View style={styles.listaContainer}>
        <Text style={styles.cabecalho}>Lista de Tarefas</Text>
        <TextInput
          style={styles.input}
          value={novaTarefa}
          onChangeText={setNovaTarefa}
          placeholder="Adicione uma tarefa"
        />
        <TouchableOpacity
          style={styles.botaoAdicionar}
          onPress={adicionarTarefa}
        >
          <Text style={styles.textoBotaoAdicionar}>Adicionar</Text>
        </TouchableOpacity>
        <ScrollView>
          {tarefas.map((tarefa) => (
            <Tarefa
              key={tarefa.id}
              tarefa={tarefa}
              onEdit={editarTarefa}
              onDelete={excluirTarefa}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
