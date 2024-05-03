/* eslint-disable @typescript-eslint/no-unused-vars */
function printList(head: any, _v: any) {
  const result = []
  while (head) {
    result.push(head.val)
    head = head.next
  }

  console.log('合并后的链表： ', result)
}

const str = 'typescript'
const array = [1, 2, 3]
const cc = 1
