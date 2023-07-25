<template>
  <div>
    <h1>Contador</h1>
    <h2>{{ valor }}</h2>
    <button @click="setValor(-1)">
      Decrementar
    </button>
    <button @click="setValor(1)">
      Incrementar
    </button>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  export default Vue.extend({
    name: 'AppContador',
    props: {
      valorInicial: {
        type: Number,
        default: 0,
      }
    },
    data: () => ({
      valor: 0,
    }),
    mounted() {
        this.valor = this.valorInicial;
    },
    methods: {
      setValor(delta: number): void {
        this.valor += delta;
      }
    },
  })
</script>

<style>

</style>