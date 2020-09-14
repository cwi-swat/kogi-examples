module kogi::QL::Plugin

import ParseTree;
import kogi::Compile;
import kogi::QL::Syntax;
import kogi::QL::Lexical;
import kogi::simplification::RemoveUnitProduction;


void createBBE() {
  createBlocklyApp(#Form, targetPath = |project://kogi-examples/src/kogi/QL/webApp|, blockly = "../../lib");
}

void createBBEWithoutChainRules() {
  set[Production] prods = simplifyGrammar(#Form); 
  createBlocklyApp(prods, targetPath = |project://kogi-examples/src/kogi/QL/webApp|, blockly = "../../lib");
}