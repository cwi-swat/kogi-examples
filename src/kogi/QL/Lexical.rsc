module kogi::QL::Lexical

syntax Label = label: StringValue as; 
  
syntax QType
  = boolean: "boolean"
  | string: "string" 
  | integer: "integer" 
  | money: "money"
  ;

lexical StringValue =  s: [a-zA-Z]*;

lexical IntegerValue = inte: [0-9]+ a;

lexical FloatValue =  floa: [0-9]+ b ;