var MarkSentence = require('./markSentence');
var StatementBuilder = require('./statementBuilder');


function sentence_to_sql(sentence) {
  var markSen = new MarkSentence();
  var stateBuilder = new StatementBuilder();
  var sentence = "i want cake with sugar,pepper, water, butter and without lemon juice and does not contain milk";
  markSen.markSentence(sentence);
  var splitedSentence = markSen.splitSentence(sentence);
  var nitz_res = stateBuilder.createStatement(splitedSentence, markSen);
  return nitz_res;
}

module.exports={sentence_to_sql: sentence_to_sql};
