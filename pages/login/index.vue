<template>
  <div class="flex justify-center h-[32rem] items-center min-h-[100dvh] bg-slate-200">
    <div class="flex flex-col w-80 sm:w-[28rem] px-8 pt-10 pb-8 bg-white rounded-xl">
      <form>
        <label class="font-semibold text-lg justify-start w-52" for="nombre">Nombre de Usuario</label>
        <input class="w-[19rem] h-10 sm:w-[24rem] mb-4 mt-1 pl-3 border outline-blue-700 rounded-md border-slate-400" id="nombre" type="text" placeholder="Ingrese un nombre de usuario">
        <label class="font-semibold text-lg justify-start w-52" for="email">Correo</label>
        <input class="w-[19rem] h-10 sm:w-[24rem] mb-4 mt-1 pl-3 border outline-blue-700 rounded-md border-slate-400" id="email" type="email" placeholder="Ingrese su correo">
        <label class="font-semibold text-lg justify-start w-52" for="password">Contraseña</label>
        <input class="w-[19rem] h-10 sm:w-[24rem] mb-4 mt-1 pl-3 border outline-blue-700 rounded-md border-slate-400" id="password" type="password" placeholder="********">
      </form>
      <button class="active:scale-95 inline-flex items-center justify-center rounded-md text-base font-medium transition-colors focus:outline-none disabled:opacity-70  bg-blue-600 h-10 text-white w-40 hover:bg-blue-700">Ingresar</button>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>