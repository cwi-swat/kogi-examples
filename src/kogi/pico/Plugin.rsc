module kogi::pico::Plugin

import ParseTree;
import kogi::Compile;
import kogi::pico::Syntax;
import kogi::simplification::RemoveUnitProduction;


void createBBE() {
  createBlocklyApp(#Program, targetPath = |project://kogi-examples/src/kogi/pico/webApp|, blockly = "../../lib");
}

void createBBEWithoutChainRules() {
  set[Production] prods = simplifyGrammar(#Program); 
  createBlocklyApp(prods, targetPath = |project://kogi-examples/src/kogi/pico/webApp|, blockly = "../../lib");
}