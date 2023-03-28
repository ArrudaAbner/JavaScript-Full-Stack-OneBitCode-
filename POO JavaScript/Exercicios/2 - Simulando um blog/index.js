const Author = require("./Author");
const Post = require("./Post");

const john = new Author("John Doe");

const post = john.writePost("Título do post", "lorem ipsun dolor sic...");

post.addComment("Abner", "Muito legal");
post.addComment("José", "Interessante!");

console.log(john);
console.log(post);
