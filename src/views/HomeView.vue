<script setup>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import DAOService from '@/services/DAOService';
import { ref } from 'vue';

const dao = new DAOService('jogadores');

const name = ref('')
const team = ref('')
const playerNumber = ref(0);

const limparFormulario = () => {
    name.value = '';
    team.value = '';
    playerNumber.value = 0;
}

const cadastrar = async () => {
    const jogador = {
        name: name.value,
        team: team.value,
        number: playerNumber.value
    };
    
    const id = await dao.insert(jogador);
    alert('Jogador criado com sucesso');
    limparFormulario();
    console.log(id);
}

const listar = async () => {
    const lista = await dao.search('team', 'Milan');
    console.log(lista);
};

const remover = async () => {
    const jogadoresFiltrados = await dao.search('name', 'Carlinhos Bala');
    if (jogadoresFiltrados.length == 0) {
        alert('Jogador não encontrado!');
    } else {
        const jogador = jogadoresFiltrados[0];
        await dao.delete(jogador.id);
        console.log('Jogador removido com sucesso!')
    }
};

</script>

<template>
    <Header />
    <input type="text" id="name" name="name" placeholder="Nome" v-model="name" />
    <br>
    <input type="text" id="team" name="team" placeholder="Time" v-model="team" />
    <br/>
    <input type="number" id="playerNumber" name="playerNumber" placeholder="Número da camisa" v-model="playerNumber" />
    <br/>
    <button @click="cadastrar()">Cadastrar jogador</button>
    <button @click="listar()">Listar jogadores</button>
    <button @click="remover()">Remover Jogador</button>
    <Footer />
</template>

<style scoped>


</style>