<script setup>
import { ref } from 'vue';
import LoginService from '@/services/LoginService';
import router from '@/router';

const email = ref('');
const password = ref('');

const loginService = new LoginService();

const handleLogin = () => {
  loginService.login(email.value, password.value)
    .then(result => {
      alert('Login realizado com sucesso!')
      router.push('/');
    }).catch(error => {
      alert('E-mail e/ou senha inválido(s).')
    });
};

const createUser = () => {
  loginService.createUser('Victor', 'professor', 'victor.cavalcanti@palmares.ifpe.edu.br', '12345678')
    .then(result => {
      alert('Usuário criado com sucesso!');
    })
};

const recoverPassword = () => {
  loginService.recoverPassword(email.value)
    .then(() => alert('E-mail de recuperação de senha enviado com sucesso!'))
};
</script>

<template>
    <div class="login-container">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" placeholder="Digite seu email" required />
        </div>
        <div class="form-group">
          <label for="password">Senha</label>
          <input type="password" id="password" v-model="password" placeholder="Digite sua senha" required />
        </div>
        <div class="button-group">
          <button type="button" class="btn-recover" @click="recoverPassword">Recuperar Senha</button>
          <button type="button" class="btn-new" @click="createUser">Criar Usuário</button>
          <button type="submit" class="btn-login">Login</button>
        </div>
      </form>
    </div>
  </template>

  
  <style scoped>
  .login-container {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    background: #fff;
    font-family: Arial, sans-serif;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #555;
  }
  
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }
  
  input:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
  
  .button-group {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }
  
  button {
    flex: 1;
    padding: 10px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .btn-recover {
    background: #ffc107;
    color: #fff;
  }
  
  .btn-recover:hover {
    background: #e0a800;
  }
  
  .btn-login {
    background: #007bff;
    color: #fff;
  }
  
  .btn-login:hover {
    background: #0056b3;
  }
  </style>
  