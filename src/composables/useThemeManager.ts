import { onMounted, ref } from 'vue'

type ThemeMode = 'light-mode' | 'dark-mode'

const theme = ref<ThemeMode>('light-mode')

function getSavedTheme(): ThemeMode {
  const saved = localStorage.getItem('theme-mode') as ThemeMode
  return saved === 'light-mode' ? 'light-mode' : 'dark-mode'
}

function setTheme(mode: ThemeMode): void {
  document.documentElement.classList.remove('light-mode', 'dark-mode')
  document.documentElement.classList.add(mode)
  localStorage.setItem('theme-mode', mode)
  theme.value = mode
}

function initTheme(): void {
  const mode = getSavedTheme()
  setTheme(mode)
}

export function useThemeManager() {
  onMounted(() => {
    initTheme()
  })

  return {
    theme,
    setTheme,
    setLightTheme: () => setTheme('light-mode'),
    setDarkTheme: () => setTheme('dark-mode')
  }
}
