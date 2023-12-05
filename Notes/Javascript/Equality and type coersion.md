# Equality and type coersion

== checks only value
=== checks values and types

Number(false) => 0
Number(true) => 1

NaN -> not a number

null == undefined true
null === undefined false

diffent objects, same value

{} == {} false
{} === {} false

const obj = {}

obj == obj true
obj === obj true
obj == {} false
obj === {} false