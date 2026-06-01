<template>
  <div>
    <label class="mb-3 block text-sm font-medium text-slate-300">
      {{ label }}
    </label>

    <input
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      :type="type"
      :placeholder="placeholder"
      class="w-full rounded-2xl border border-white/10 bg-slate-900/60 px-5 py-4 text-white outline-none transition focus:border-cyan-400"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string
  label: string
  placeholder: string
  type?: string
}>()

defineEmits(['update:modelValue'])
</script>
