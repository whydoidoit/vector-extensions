### Introduction

Utility extensions to PlayCanvas pc.Vec3 that add chainable methods to set elements
of the vector.

### Installation

```language-shell
npm install --save playcanvas-vector-extensions
```

### Usage

```language-javascript
import 'playcanvas-vector-extensions'

...

//Get vector to enemy ignoring Y
this.vector.copy(this.enemy.getPosition()).Y(0).sub(this.entity.getPosition()); 
 

```

Supports `X(value)`, `Y(value)` and `Z(value)` as well as `addX(value)`, `addY(value)` and `addZ(value)`

### Requirements

Requires PlayCanvas Engine to be running on the page.  Uses ES6/Babel/PlayCanvas template.
