module kogi::stateMachine::Plugin

import ParseTree;
import kogi::Compile;
import kogi::stateMachine::Syntax;
import kogi::simplification::RemoveUnitProduction;


void createBBE() {
  createBlocklyApp(#Machine, targetPath = |project://kogi-examples/src/kogi/stateMachine/webApp|, blockly = "../../lib");
}

void createBBEWithoutChainRules() {
  set[Production] prods = simplifyGrammar(#Machine); 
  createBlocklyApp(prods, targetPath = |project://kogi-examples/src/kogi/stateMachine/webApp|, blockly = "../../lib");
}