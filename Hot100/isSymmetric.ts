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

function isSymmetric(root: TreeNode | null): boolean {
    const isMirror = (r1, r2) => {
        if (!r1 && !r2) {
            return true;
        }
        if (!r1 || !r2) {
            return false;
        }

        return (
            r1.val === r2.val &&
            isMirror(r1.left, r2.right) &&
            isMirror(r1.right, r2.left)
        );
    };

    return isMirror(root, root);
}
