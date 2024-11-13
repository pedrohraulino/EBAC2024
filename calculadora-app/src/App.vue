<script setup lang="ts">
import { ref, computed } from 'vue';

const selecao: string[] = ['Somar', 'Subtrair', 'Dividir', 'Multiplicar'];
const selecaoAtual = ref<string>('');
const primeiroNumero = ref<number | string>('');
const segundoNumero = ref<number | string>('');

const resultado = computed(() => {

  const num1 = Number(primeiroNumero.value);
  const num2 = Number(segundoNumero.value);

  switch (selecaoAtual.value) {
    case 'Somar':
      return num1 + num2;
    case 'Subtrair':
      return num1 - num2;
    case 'Dividir':
      return num2 !== 0 ? num1 / num2 : 'Não pode dividir por zero';
    case 'Multiplicar':
      return num1 * num2;
    default:
      return 0;
  }
});
</script>

<template>

  <body>
    <div class="calculadora">
      <h3> Selecione o tipo de opeção e em seguida digite os valores para fazer o calculo
      </h3>
      <select v-model="selecaoAtual">
        <option disabled value="">Selecione</option>
        <option v-for="(operacao, index) in selecao" :key="index" :value="operacao">
          {{ operacao }}
        </option>
      </select>

      <section v-if="selecaoAtual !== ''" class="campos">
        <div>
          <input v-model="primeiroNumero" type="number" placeholder="Primeiro número" />
        </div>
        <div>
          <input v-model="segundoNumero" type="number" placeholder="Segundo número" />
        </div>


      </section>
      <div class="resultado" v-if="primeiroNumero !== '' && segundoNumero !== ''">
        <h2>Resultado: {{ resultado }}</h2>
      </div>
    </div>
  </body>
</template>

<style scoped>
body {
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333;
  color: #333;
}

h3{
  width: 80%;
  text-align: center;
}

.calculadora {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 48px;
  background-color: aliceblue;
  height: 50%;
  width: 25%;
  padding: 24px;
  border-radius: 8px;
}

.campos {
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

select,
input {
  background-color: #333;
  width: 100%;
  color: aliceblue;
  font-size: 16px;
  padding: 16px;
  border-radius: 8px;
  border: none;
  outline: none;
}

input::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

input:focus,
select:focus {
  outline: 4px solid #878787;
}
</style>
