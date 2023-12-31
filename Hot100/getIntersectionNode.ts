/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function getIntersectionNode(
    headA: ListNode | null,
    headB: ListNode | null
): ListNode | null {
    let listA = headA;
    let listB = headB;

    while (listA !== listB) {
        listA = listA ? listA.next : headB;
        listB = listB ? listB.next : headA;
    }

    return listA;
}
