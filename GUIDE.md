# MZ_TBS Style Guide
## Coding Style Guide


1. [Introduction](#introduction)
2. [Source file basics](#Source-file-basics)
    1. [File name](#File-name)
	2. [File encoding](#File-encoding)
3. [Formatting](#Formatting)
    1. [Braces](#Braces)
	2. [Block indentation](#Block-indentation)
		1. [Block indentation for Arrays](#Array-block-indentation)
		2. [Block indentation for Object](#Object-block-indentation)
		3. [Block indentation for Parameters](#Parameters-block-indentation)
	3. [Switch statements](#Switch-statements)
	4. [Statements](#Statements)
	5. [Comments](#Comments)
		1. [Comments for RPG Maker MZ](#Comments-for-plugin)
		2. [Comments for Functions](#Comments-for-functions)
	6. [Variable](#Variable)
	7. [String ](#String )
4. [Disallowed Actions](#Disallowed-actions)
    1. [Wrapper objects for primitives types](#Wrapper-objects)
5. [Naming](#Naming)
    1. [Universal Naming Rules](#Universal-naming-rules)
	
<a name="introduction"></a>
## 1. Introduction

This document will serve as the complete definition of Noble plugin's coding standard for source code in the JavaScript programming language for RPG Maker MZ engine. Any source file that is being described in accordance to the Style Guide, if and only if, it adheres to the rules herein.

Unlike other programming style guides, this is a live document. As which it will be edited and updated as standards are defined between the developers. 

This guide will cover issues spanning aesthetics, conventions and coding standards. With the focus being primarily on the hard-and-fast rules that we follow universally with a strict avoidance on giving advice that is still in conflict or isn't clearly enforceable.

<a name="Source-file-basics"></a>
## 2. Source file basics

<a name="File-name"></a>
### 2.i File name

File names must be start with Noble then the aberration of the engine, for example MZ. Follow by an underscore, then the name of the file in PascalCase.

<a name="File-encoding"></a>
### 2.ii File encoding

Files are encoded in the UTF-8 standard.

<a name="Formatting"></a>
## 3. Formatting

**Terminology Note:** Block refers to the body of a class, function, method, or brace-delimited block of code. 

<a name="Braces"></a>
### 3.i Braces

Braces are required for all blocks and control structures (i.e. if, else, for, do while, as well as any others). 

<a name="Block-indentation"></a>
### 3.ii Block indentation

Each time a new block or block-like construct is opened, the indent increases by one tab. When the block ends, the indent returns to the previous indent level. The indent level applies to both code and comments throughout the block.

<a name="Array-block-indentation"></a>
#### 3.ii.a Block indentation for Arrays

Any array literal that reaches the 80th column of characters, will be formatted as if it were a block-like construct. For example, with exception of the character requirement.
```javascript
const a = [
	0,
	1,
	2
]

const c = [0, 1, 2];

someMethod1(foo, [
  0, 1, 2,
], bar);

someMethod2(foo, [
  0,
  1,
  2,
], bar);
```

<a name="Object-block-indentation"></a>
#### 3.ii.b Block indentation for Object

Any array literal that reaches the 80th column of characters, will be formatted as if it were a block-like construct. For example, with exception of the character requirement.
```javascript
const a = {
  a: 0,
  b: 1
};

const c = {a: 0, b: 1};

someMethod1(foo, {
  a: 0, b: 1
}, bar);

someMethod2(foo, {
  a: 0,
  b: 1
}, bar);
```

<a name="Parameters-block-indentation"></a>
#### 3.ii.c Block indentation for Parameters

Any parameters for a function, class, method that reaches the 80th column of characters, will be formatted as if it were a block-like construct. For example with the exception of the character requirement

```javascript
doSomething(
    argumentOne,
    argumentOne) {
  // …
}
```

3. [Block indentation for Parameters](#Parameters-block-indentation)

<a name="Switch-statements"></a>
### 3.iii Switch statements

After a switch label, a newline appears, and the indentation level is increased by 1 tab, exactly as if a block were being opened. The following switch label return to the previous indentation level as if a block had been closed.

Example:
```javascript
switch( variable ) {
	case condition1:
		doSomething();
		break;
	case conditional2:
		doSomethingElse();
		break;
	default:
		doDefault();
}
```

Default case must be present in all switch statements, even if it contains no code. 

<a name="Comments"></a>
### 3.v Comments

Block comments are indented at the same level as the surrounding code. They may be in any of the following forms.

```javascript
/*
 * This is a multi-line comment
 */

// This is a single line comment

/* This is an internal line comment */;
}
```

 - Multi-line comments are started with  `/*` and ended with `*/` with the `*` starting every line after the first line and aligned to the start from the first line. These are best used when a comment needs to be composed of multiple lines
 - Single line comment are started with `//` and ends with a newline. These are best used when a comment needs to be at the end of a line or can be composed of a single line in the code
 - Internal line comment are started with `/*` and ended with `*/`, similar to the multi-line comment however without any newline characters. These are best used when you need to add a comment within a line of code.
 
<a name="Comments-for-plugin"></a>
#### 3.v.a Comments for RPG Maker MZ

[Annotation guide for RPG Maker MZ translated](https://tkool-jp.translate.goog/mz/plugin/make/annotation.html?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=en-US)

 
 <a name="Comments-for-functions"></a>
#### 3.v.b Comments for Functions

Functions are require to have a comment describing what they do above the function declaration. Which is composed of three main parts; a description of the function, a list of all the parameters their name and general description, and if it returns a value then list the type and a description. This can be seen in the following example:
```javascript
/**
 * Method Description
 * Can be multiple lines to describe it
 * @param Name  Description of what this parameter is, should include type if isn't clear
 * @return type Description of the data this returns
 */
```

<a name="Variable"></a>
### 3.vi Variable

All variables shall be declared with either `const` or `let`. With `const` being preferred, unless a variable will need to be reassigned. 

Variables shall only be declared one at a time. This is not to be used  `let a = 1, b = 2;`.

When declaring a variable, they should be declared as close to the point they are first to be used (within reason), to minimize their scope.

<a name="String"></a>
### 3.vii String

Do not use line continuations (that is, ending a line inside a string literal with a backslash `\`). Instead use concatenation of string literals (that is, ending the string literal on the line then adding a plus `+`).

<a name="Disallowed-actions"></a>
## 4 Disallowed Actions

These actions have huge negatives associated with them.

<a name="Wrapper-objects"></a>
### 4.i Wrapper objects for primitives types

Never use `new` on the primitive object wrappers (`Boolean`, `Number`, `String`, `Symbol`), nor include them in type annotations.

The reasoning is this can result in typeof function returning a non-expected `object`.

<a name="Naming"></a>
## 5 Naming

<a name="Universal-naming-rules"></a>
### 5.i Universal Naming Rules

Give as descriptive a name as possible, within reason. Do not worry about saving horizontal space as it is far more important to make your code immediately understandable by a new reader. Do not use abbreviations that are ambiguous or unfamiliar to readers outside your project, and do not abbreviate by deleting letters within a word.

Good examples
```javascript
errorCount          // No abbreviation.
dnsConnectionIndex  // Most people know what "DNS" stands for.
referrerUrl         // Ditto for "URL".
customerId          // "Id" is both ubiquitous and unlikely to be misunderstood.
```

Bad Examples
```javascript
n                   // Meaningless.
nErr                // Ambiguous abbreviation.
nCompConns          // Ambiguous abbreviation.
wgcConnections      // Only your group knows what this stands for.
pcReader            // Lots of things can be abbreviated "pc".
cstmrId             // Deletes internal letters.
```