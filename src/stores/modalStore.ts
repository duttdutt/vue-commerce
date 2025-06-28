import { reactive } from 'vue'

type ModalType = 'success' | 'error' | 'info'

export const modalStore = reactive({
  isOpen: false,
  type: 'info' as ModalType,
  header: '',
  message: '',

  show(type: ModalType, header: string, message: string) {
    modalStore.type = type
    modalStore.header = header
    modalStore.message = message
    modalStore.isOpen = true

    setTimeout(() => {
      modalStore.isOpen = false
    }, 2000)
  },

  close() {
    modalStore.isOpen = false
  }
})
