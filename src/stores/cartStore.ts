import { reactive, watch } from 'vue'
import { modalStore } from './modalStore'

type CartItem = {
  id: number
  title: string
  quantity: number
}

type CartStore = {
  items: CartItem[]
  addItem: (item: Omit<CartItem, 'quantity'>) => void
  removeItem: (id: number) => void
  decrementItem: (id: number) => void
  clearCart: () => void
}

const cartStore = reactive<CartStore>({
  items: [],

  addItem(item) {
    const existing = cartStore.items.find(i => i.id === item.id)

    if (existing)
      existing.quantity++
    else
      cartStore.items.push({ ...item, quantity: 1 })

    modalStore.show(
      'success',
      'Added to ur cart!',
      'Test description.'
    )
  },

  removeItem(id) {
    cartStore.items = cartStore.items.filter(i => i.id !== id)
  },

  decrementItem(id) {
    const exists = cartStore.items.find(i => i.id === id)
    if (!exists) return

    if (exists.quantity > 1)
      exists.quantity--
    else
      cartStore.items = cartStore.items.filter(i => i.id !== id)
  },

  clearCart() {
    cartStore.items = []
  }
})

const saved = localStorage.getItem('cart-items')

if (saved) {
  cartStore.items = JSON.parse(saved)
}

// https://vuejs.org/guide/essentials/watchers.html#basic-example
/*
Do note that you can't watch a property of a reactive object like this:
```vue
const obj = reactive({ count: 0 })

// this won't work because we are passing a number to watch()
watch(obj.count, (count) => {
  console.log(`Count is: ${count}`)
})
```

Instead, use a getter:

```vue
watch(
  () => obj.count,
  (count) => {
    console.log(`Count is: ${count}`)
  }
)
```
*/
watch(
  () => cartStore.items,
  (newItems) => {
    localStorage.setItem('cart-items', JSON.stringify(newItems))
  },
  { deep: true }
)

export default cartStore
