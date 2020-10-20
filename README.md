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

NB: 
T = Type,
K = Key,
U = Union

**2. Interface vs Type** <br />
Features  | Interface | Type  
------------- | ------------- | ------------- 
Aliases  | &cross;  | &check;  
Object  | &check;  | &check;
Merge  | &check;  | &cross;
Intersection & Union  | &cross;  | &check;
Implementes  | &check;  | &check;
Extend  | &check;  | &cross;

**3. Classes** <br />
   Class biasanya digunakan untuk menerapkan Object Oriented Programming(OOP)
- class basic : constructor, properties, method
- access modifiers (private, public, readonly)
- inheritance / sub-class
- static member
- abstract classes

access modifier  | class | sub-class | instance
------------- | ------------- | ------------- | -------------
public  | &check; | &check; | &check;
protected  | &check; | &check; | &cross;
private  | &check; | &cross; | &cross;