module kogi::sonification::Plugin

import ParseTree;
import kogi::Compile;
import kogi::sonification::Syntax;
import kogi::simplification::RemoveUnitProduction;


void createBBE() {
  createBlocklyApp(#Program, targetPath = |project://kogi-examples/src/kogi/sonification/webApp|, blockly = "../../lib");
}

void createBBEWithoutChainRules() {
  set[Production] prods = simplifyGrammar(#Program); 
  createBlocklyApp(prods, targetPath = |project://kogi-examples/src/kogi/sonification/webApp|, blockly = "../../lib");
}