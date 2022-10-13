const active = ref('Retro')
const options = ref(['Default', 'Retro'])

export default function useLayout() {
  const setActiveTheme = value => (active.value = value)
  const setRandom = () => (active.value = options.value[Math.floor(Math.random() * options.value.length)])

  return { setActiveTheme, setRandom, active, options }
}