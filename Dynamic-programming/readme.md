## Dynamic Programming
A method for solving a complex problem by breaking it down into a collection of simpler subproblem, solving each of those subproblems just once, and storing their solutions.

> It only works on problems with **Optimal substructure** and **Overlapping subproblems**

* **Overlapping subproblems:** A problem is said to have **overlapping subproblems** if it can be broken down into subproblems which are reused several times.

* **Optimal substructure:** A problem is said to have **Optimal substructure** if an optimal solution of a bigger problem can be constructed from optimal solutions of its subproblems.

### Methods of dynamic programming

**Memoization:** Storing the results of expensive function calls and returning the cached result when the same input occur again. BigO: **O(n)**

**Tabulation:** Storing the results of a previous result in a "table" (usually an array). Usually done using **iteration**. Better **Space complexity** can be achieved using tabulation.