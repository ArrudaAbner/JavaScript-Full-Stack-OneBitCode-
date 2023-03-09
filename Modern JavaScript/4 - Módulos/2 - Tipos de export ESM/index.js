//import inline
import { inline } from "./inline.js";

//import inline default
import defaultInline from "./inline.js";

//import na mesma linha
/* import defaultInline, { inline } from "./inline.js"; */

//import non-inline
import { group } from "./non-inline.js";

//import non-inline default
import exportDefault from "./non-inline.js";

inline();
defaultInline();

group();
exportDefault();
