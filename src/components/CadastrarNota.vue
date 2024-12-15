<template>
    <div class="container">
      <form class="form-card" @submit.prevent="cadastrarNota">
        <h2 class="form-title">Cadastrar Nota</h2>
        <div class="form-group">
          <label for="nome" class="form-label">Nome do Aluno:</label>
          <input type="text" id="nome" v-model="nome" class="form-control" required />
        </div>
  
        <div class="form-group">
          <label for="disciplina" class="form-label">Disciplina:</label>
          <select id="disciplina" v-model="disciplina" class="form-control" required>
            <option value="">-</option>
            <option value="Matemática">Matemática</option>
            <option value="Português">Português</option>
            <option value="História">História</option>
            <option value="Ciências">Ciências</option>
          </select>
        </div>
  
        <div class="form-group">
          <label for="tipoAvaliacao" class="form-label">Tipo de Avaliação:</label>
          <select id="tipoAvaliacao" v-model="tipoAvaliacao" class="form-control" required>
            <option value="">-</option>
            <option value="Prova">Prova</option>
            <option value="Projeto">Projeto</option>
          </select>
        </div>
  
        <div class="form-group">
          <label for="nota" class="form-label">Nota:</label>
          <input
            type="number"
            id="nota"
            v-model.number="nota"
            class="form-control"
            min="0"
            max="10"
            step="0.1"
            placeholder="-"
          />
        </div>
  
        <div class="form-group">
          <label class="form-label">Liberar para estudante?</label>
          <div class="form-check">
            <input type="radio" id="liberarSim" value="sim" v-model="liberarParaEstudante" class="form-check-input" />
            <label for="liberarSim" class="form-check-label">Sim</label>
          </div>
          <div class="form-check">
            <input type="radio" id="liberarNao" value="não" v-model="liberarParaEstudante" class="form-check-input" />
            <label for="liberarNao" class="form-check-label">Não</label>
          </div>
        </div>
  
        <button type="submit" class="btn btn-primary">Cadastrar Nota</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const nome = ref('');
  const disciplina = ref(''); // Inicializa vazio para opção em branco
  const tipoAvaliacao = ref(''); // Inicializa vazio para opção em branco
  const nota = ref(''); // Inicializa vazio para campo de nota
  const liberarParaEstudante = ref('sim');
  
  const cadastrarNota = () => {
    if (!disciplina.value || !tipoAvaliacao.value || nota.value === '') {
      alert('Por favor, preencha todos os campos obrigatórios corretamente.');
      return;
    }
  
    console.log({
      nome: nome.value,
      disciplina: disciplina.value,
      tipoAvaliacao: tipoAvaliacao.value,
      nota: nota.value,
      liberarParaEstudante: liberarParaEstudante.value,
    });
    alert('Nota cadastrada com sucesso!');
  };
  </script>
  
  <style scoped>
  /* Centralizar o formulário na página */
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f8f9fa;
    padding: 1rem;
  }
  
  /* Estilo do formulário */
  .form-card {
    background: white;
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
  }
  
  .form-title {
    text-align: center;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    font-weight: bold;
    color: #343a40;
  }
  
  .form-group {
    margin-bottom: 1.5rem;
  }
  
  .form-label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: #495057;
  }
  
  .form-control {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    outline: none;
    transition: border-color 0.3s;
  }
  
  .form-control:focus {
    border-color: #80bdff;
    box-shadow: 0 0 5px rgba(128, 189, 255, 0.5);
  }
  
  .form-check {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
  }
  
  .form-check-input {
    margin-right: 0.5rem;
  }
  
  .form-check-label {
    font-size: 1rem;
    color: #495057;
  }
  
  .btn {
    display: inline-block;
    width: 100%;
    padding: 0.75rem;
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    color: white;
    background-color: #007bff;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .btn:hover {
    background-color: #0056b3;
  }
  </style>
  