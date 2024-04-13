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

function isPalindrome(head: ListNode | null): boolean {
    if (!head || !head.next) {
        return true;
    }

    // 快慢指针
    let fast = head;
    let slow = head;
    let preSlow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        preSlow = slow;
        slow = slow.next;
    }
    // 截断前半部分
    preSlow.next = null;
    let remainList = reverseList(slow);
    while (head && remainList) {
        if (head.val !== remainList.val) {
            return false;
        }
        head = head.next;
        remainList = remainList.next;
    }
    return true;
}

function reverseList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return head;
    }
    let prev = null;
    while (head) {
        const next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}
