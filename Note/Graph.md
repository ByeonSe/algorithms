# Graph

### Nodes + connections 
- a graph data strucrue consiss of a finite (and possibly matuable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph 

- social media connections 
- map - roads 
- recommendations e.g. "people also watched", "frequently bought with"

### Terminology 
Vertex - a node
vertices
Edge - connection between nodes
Weighted/unweighted - values assigned to distances(edge) between vertices
direxted/undirected - directions assigned to distanced between vertices 

#### Adjacency Matrix 

### Adjacency List
- user an array or list to store the endges to figure out neighboors/connections 
- "is there an enge between 1 and 5?"
- more data in the real-world tends to lend itself to sparser and/or larger graphs

### Adjacency List vs. Adjacency Matrix 
| Adjacency List | Adjacency Matrix|
|----------------+-----------------|
| - can take up less space (in sparse graphs) | - takes up more space (in sparse graphs) |
| - faster to iterate over all edges | - slower to iterate over all edges|
| -  can be slower to look up specific edge | - faster to look up specific edge O(1) |
