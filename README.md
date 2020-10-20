# typescript
### learn about typescript

**1. Advanced Type**
- Partial   =>  Partial<T>
- Required  =>  Required<T>
- Readonly  =>  Readonly<T>
- Pick      =>  Pick<T, K>
- Omit      =>  Omit<T, K>
- Record    =>  Record<K, T>
- Extract   =>  Extract<T, U> 
- Exclude   =>  Exclude<T, U>

- T = Type
- K = Key
- U = Union


**2. Interface vs Type**
2.a Interface (features)
   - Object
   - merge
   - implementes
   - extend
2.b Type (features)
   - aliases
   - object
   - intersection & union
   - implementes
Features              | Interface | Type    |
--------------------- | --------- | ------- |
Aliases               | no        | yes     |
Object                | yes       | yes     |
Merge                 | yes       | no      | 
Intersection & Union  | no        | yes     |
Implementes           | yes       | yes     | 
Extend                | yes       | no      | 

**3. Classes**
   Class biasanya digunakan untuk menerapkan Object Oriented Programming(OOP)
- class basic : constructor, properties, method
- access modifiers (private, public, readonly)
- inheritance / sub-class
- static member
- abstract classes

First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell