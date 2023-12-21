/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function levelOrder(root: TreeNode | null): number[][] {
    if (root !== null) {
        const queue: TreeNode[] = [root];
        const res: number[][] = [];
        let tempArr: number[] = [];
        while (queue.length) {
            const len = queue.length;
            for (let i = 0; i < len; i++) {
                const node = queue.shift();
                if (node.left !== null) {
                    queue.push(node.left);
                }
                if (node.right !== null) {
                    queue.push(node.right);
                }
                tempArr.push(node.val);
            }
            res.push(tempArr);
            tempArr = [];
        }
        return res;
    }
    return [] as number[][];
}
