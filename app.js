var Main = require('./buildAlg/main');
 
var sentences = [
  "sugar,pepper, water, butter and without lemon juice and does not contain milk",
  "i want cake with sugar,pepper, water, butter and without lemon juice and does not contain milk",
]

for (var i = 0, len = sentences.length; i < len; i++) {
  var sentence = sentences[i];
  var res= Main.sentence_to_sql(sentence);
  console.log("===\n%s:\n---\n%j", sentence, res);
}
