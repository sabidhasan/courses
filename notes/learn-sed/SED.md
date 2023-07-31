# SED

## Introduction

SED - or **Stream Editor** - is a tool for finding and replacing strings.



## Basic Usage

To replace text, you use the `s` command, and provide find and replace strings:

````bash
$ sed 's/find/replace' <input-file >output-file
````

This finds the **first instance** of the string `find` in the `input-file` **on each line** and replaces with `replace` and outputs it to `output-file` . By default, SED operates on a line by line basis.



### Global Replaces

SED can replace **all instances** too:

```bash
$ sed 's/find/replace/g' <input-file >output-file
```



## Piping Output

SED also works with **pipes**: we can provide a chain of commands on which to do the find/replace operation, or we can pipe operations:

```bash
$ echo "green eggs and ham" | sed 's/ham/spam/g'
```

To write to the same file as you are reading from, use the `-i` flag:

```bash
$ sed -i 's/find/replace' some-file.txt
```



For matching multiple patterns (like doing multiple substitutions), you can of course use multiple pipes and run `sed` numerous times, but SED can also accept multiple patterns:

```bash
cat /some/file | sed -e "s/ham/spam/g" -e "s/green eggs/spam/g" -e "/blah/d"
```



## Performing an Op on Certain Lines

To limit operations to a certain line, provide a predicate RegEx. This will only do the substitution on lines that match the predicate

```bash
$ sed '/find this line/s/search text/replace text/g'
#        ^predicate    	 ^look for	 ^replace with
```



## Deleting Things

To delete the found text, we can substitute with empty string:

```bash
$ echo "This is some text" | sed "s/some //g"
> This is text
```



To delete the entire line where the search term occurs, using the `d` flag:

```bash
echo "This is a line" | sed "/a line/d"
```



## Printing Output (Head Relacement)

SED can be used for just finding and displaying (and not doing replacement) too. For this the `p` flag (for print) can be used.

```bash
$ echo /usr/bin/some/file | sed "/some line/p"
```

Will print out all instances of the line without modifying anything. This can be used to effectively search within a file.

Another thing to do is use the `q` parameter to read the first n lines:

```bash
$ sed 11q /some/file
# outputs the first 11 lines from this file
```





