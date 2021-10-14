/* description: Parses end evaluates mathematical expressions. */

%{
const lib = require('./lib/').default;
%}

/* lexical grammar */
%lex
%%
\s+                   {/* skip whitespace */}

[0-9]+("."[0-9]+)?\b  {return 'NUMBER';}
\"[^\"\n]*\"          {return "STRING";}

"*"                   {return '*';}
"/"                   {return '/';}
"-"                   {return '-';}
"+"                   {return '+';}
"^"                   {return '^';}

"("                   {return "(";}
")"                   {return ")";}
","                   {return ",";}
"{"                   {return "{";}
"}"                   {return "}";}
"=="                  {return "=="}
"||"                  {return "||"}
"="                   {return "=";}
"<"                   {return "<"}
">"                   {return ">"}
"|"                   {return "|"}
"&"                   {return "&"}

"?"                   {return "?"}
":"                   {return ":"}

"true"                {return "true"}
"false"               {return "false"}
"fn"                  {return "fn"}
"if"                  {return "if"}
"else"                {return "else"}
"undefined"           {return "undefined"}
"while"               {return "while"}
"return"              {return "return"}

[a-zA-Z]+             {return "WORD"}

<<EOF>>               {return "EOF"}

/lex

/* operator associations and precedence */


%left "+" "-"
%left "*" "/"
%left ">" "<"
%left "=="
%left "||"
%left UMINUS

%start file

%% /* language grammar */

file
    : expressionsBlock EOF
        {new lib.Program($1).execute()}
    ;

expressionsBlock
    : expression
        {$$ = [$1]}
    | expressionsBlock expression
        {$$ = $1.concat($2)}
    ;

expression
    : WORD "=" expression1
        {$$ = new lib.AssignExpression($1, $3)}
    | WORD "(" expression_list ")"
        {$$ = new lib.FunctionExpression($1, $3)}
    | "if" "(" expression1 ")" "{" expressionsBlock "}"
        {$$ = new lib.IfExpression($3, new lib.BlockExpression($6), null)}
    | "if" "(" expression1 ")" "{" expressionsBlock "}" "else" "{" expressionsBlock "}"
        {$$ = new lib.IfExpression($3, new lib.BlockExpression($6), new lib.BlockExpression($10))}
    | "while" "(" expression1 ")" "{" expressionsBlock "}"
        {$$ = new lib.WhileExpression($3, new lib.BlockExpression($6))}
    | "fn" WORD "(" args_list ")" "{" expressionsBlock "}"
        {$$ = new lib.UserFunctionExpression($2, $4, new lib.BlockExpression($7))}
    | "return" expression1
        {$$ = new lib.ReturnExpression($2)}
    ;

expression_list: {$$ = []}
    | expression1
        {$$ = [$1]}
    | expression_list "," expression1
        {$$ = $1.concat($3)}
    ;

args_list: {$$ = []}
    | WORD
        {$$ = [$1]}
    | args_list "," WORD
        {$$ = $1.concat($3)}
    ;

expression1
    : expression1 "-" expression1
        {$$ = new lib.BinaryExpression($1, $3, "-")}
    | expression1 "+" expression1
        {$$ = new lib.BinaryExpression($1, $3, "+")}
    | expression1 "/" expression1
        {$$ = new lib.BinaryExpression($1, $3, "/")}
    | expression1 "*" expression1
        {$$ = new lib.BinaryExpression($1, $3, "*")}
    | expression1 ">" expression1
        {$$ = new lib.BinaryExpression($1, $3, ">")}
    | expression1 "<" expression1
        {$$ = new lib.BinaryExpression($1, $3, "<")}
    | expression1 "==" expression1
        {$$ = new lib.BinaryExpression($1, $3, '==')}
    | expression1 "||" expression1
        {$$ = new lib.BinaryExpression($1, $3, '||')}
    | "(" expression1 ")"
        {$$ = $2}
    | WORD "(" expression_list ")"
        {$$ = new lib.FunctionExpression($1, $3)}
    | NUMBER
        {$$ = new lib.NumberExpression(yytext)}
    | STRING
        {$$ = new lib.StringExpression(yytext.replace(/"/g, ''))}
    | WORD
        {$$ = new lib.VariableExpression(yytext)}
    | true
        {$$ = new lib.BooleanExpression("true")}
    | false
        {$$ = new lib.BooleanExpression("false")}
    | undefined
        {$$ = new lib.UndefinedExpression()}
    ;