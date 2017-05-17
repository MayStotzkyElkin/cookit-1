var MarkSentence = require('./markSentence');
var StatementBuilder = require('./statementBuilder');


function sentence_to_sql(sentence) {
  var markSen = new MarkSentence();
  var stateBuilder = new StatementBuilder();
  markSen.markSentence(sentence);
  var splitedSentence = markSen.splitSentence(sentence);
  var sentence_res = stateBuilder.createStatement(splitedSentence, markSen);
  return sentence_res;
}

module.exports={sentence_to_sql: sentence_to_sql};
