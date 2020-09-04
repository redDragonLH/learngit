/**
 * 257. 二叉树的所有路径
 * 
 * 给定一个二叉树，返回所有从根节点到叶子节点的路径。
 * 说明: 叶子节点是指没有子节点的节点。
 */

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const result = [];
    if(!root) return result;
    deep(root,root.val+'',result);
    return result;
};
const deep = (root,str,result)=> {
    if(!root.left && !root.right) {
        result.push(str);
        return false;
    }
    root.left && deep(root.left,str + `->${root.left.val}`,result);
    root.right && deep(root.right,str + `->${root.right.val}`,result);
}

/**
 * 执行用时：88 ms, 在所有 JavaScript 提交中击败了56.05%的用户
 * 内存消耗：39.7 MB, 在所有 JavaScript 提交中击败了85.37%的用户
 */

/**
 * java 代码
class Solution {
    public List<String> binaryTreePaths(TreeNode root) {
        List<String> result = new ArrayList<String>();
        deep(root,"",result);
        return result;
    }
    public void deep (TreeNode root,String str, List<String> result){
        if(root != null ) {
            str+=root.val;
            if(root.left == null && root.right == null) {
                result.add(str);
            }
            str+="->";
            deep(root.left,str,result);
            deep(root.right,str,result);
        }
        
    }
}
 */