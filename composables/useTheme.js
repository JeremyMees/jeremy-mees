const active = ref('Blobs')
// const active = ref('Default')
const options = ref(['Default', 'Retro', 'Blobs'])

export default function useLayout() {
  const setActiveTheme = value => (active.value = value)
  const setRandom = () => (active.value = options.value[Math.floor(Math.random() * options.value.length)])

  return { setActiveTheme, setRandom, active, options }
}
