// Tarefa.js
import React, { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: '#0077b6', // Azul
    borderRadius: 5,
    backgroundColor: '#f2f2f2', // Cinza
  },
  editText: {
    flex: 1,
  },
});

export default function Tarefa({ tarefa, onEdit, onDelete }) {
  const [editMode, setEditMode] = useState(false);
  const [tarefaEditada, setTarefaEditada] = useState(tarefa.texto);

  const handleEdit = () => {
    onEdit(tarefa.id, tarefaEditada);
    setEditMode(false);
  };

  return (
    <View style={styles.container}>
      {editMode ? (
        <View style={styles.editText}>
          <TextInput
            value={tarefaEditada}
            onChangeText={setTarefaEditada}
          />
          <Button title="Salvar" onPress={handleEdit} />
        </View>
      ) : (
        <View style={styles.editText}>
          <Text>{tarefa.texto}</Text>
        </View>
      )}
      <View>
        <Button title={editMode ? 'Cancelar' : 'Editar'} onPress={() => setEditMode(!editMode)} />
        <Button title="Excluir" onPress={() => onDelete(tarefa.id)} />
      </View>
    </View>
  );
}
