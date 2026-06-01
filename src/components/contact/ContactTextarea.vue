<template>
  <div>
    <label class="mb-3 block text-sm font-medium text-slate-300">
      {{ label }}
    </label>

    <textarea
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
      rows="6"
      :placeholder="placeholder"
      class="w-full resize-none rounded-2xl border border-white/10 bg-slate-900/60 px-5 py-4 text-white outline-none transition focus:border-cyan-400"
    ></textarea>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string
  label: string
  placeholder: string
}>()

defineEmits(['update:modelValue'])
</script>
