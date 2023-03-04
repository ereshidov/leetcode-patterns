const hasCycle = (head) => {
  if (!head) return false
  if (!head.next) return false

  let slow = head
  let fast = head.next

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) return true
  }
  return false
}