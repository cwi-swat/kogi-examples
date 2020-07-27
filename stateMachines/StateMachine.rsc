module kogi::demo::stateMachine::StateMachine

extend lang::std::Layout;
import kogi::Compile;
import kogi::simplification::RemoveUnitProduction;

start syntax Machine 
	= machine: "machine" Id id State* states;

syntax State
  	= state: "state" Id id "{" Trans* transitions "}";

syntax Trans 
	= transition: "on" Id on "to" Id to;

lexical Id 
	= id: [a-zA-Z]+;

	
void createBlockGUI() {
  createBlocklyApp(simplifyGrammar(#Machine), targetPath = |project://kogi/src/kogi/demo/stateMachinePaper/|);
}