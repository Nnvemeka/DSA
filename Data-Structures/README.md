## Data Structures
Data structures are collections of values, the relationships among them, and the functions or operations that can be applied to the data.  
Different data structures excel at different things. Some are highly specialized, while others (like arrays) are more generally used.

### Singly linked list
A data structure that contains a **head**, **tail** and **length** property. Linked lists consist of nodes, and each **node** has a **value** and a **pointer** to another node or null.

Comparisons with arrays: 
| Lists                                                      |     Arrays                                      |
|------------------------------------------------------------|-------------------------------------------------|
| Do not have indexes!                                       | Indexed in order!                               |
| Connected via nodes with a **next** pointer                | Insertion and deletion canbe expensive          |
| Random access is not allowed                               | Can quickly be accessed at a specific index     |