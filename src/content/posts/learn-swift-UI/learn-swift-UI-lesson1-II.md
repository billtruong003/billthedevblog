---
title: Speedrun Swift UI Lesson 1 - Part II
published: 2024-01-13
description: "How to use this blog template."
image: "./swiftUI-learn.png"
tags: [Swift, SwiftUI, iOS, Programming]
category: SwiftUI
draft: false
---

# Speedrun Swift UI Lesson 1 - Part II: Loops, Functions, and Complex Data Types

## II. Loops, Functions, and Working with Data Structures

In this section, we will explore more control flow mechanisms in Swift, including loops for repeating tasks, functions for organizing code, and working with complex data types such as arrays, dictionaries, and sets.

---

### 2.1. Loops in Swift: `for` and `while`

Loops allow you to execute a block of code multiple times. Swift provides several loop constructs that let you iterate over collections or repeat actions until a condition is met.

#### The `for` loop

The `for` loop is used to iterate over a sequence of items, such as an array or a range of numbers.

##### Example: Basic `for` Loop

```swift
let numbers = [1, 2, 3, 4, 5]

for number in numbers {
    print("Number: \(number)")
}
```

- **Explanation**: The loop iterates over each element in the `numbers` array and prints it.

##### Example: `for` Loop with Ranges

You can also use a range of numbers in a `for` loop without an array:

```swift
for i in 1...5 {
    print("Count: \(i)")
}
```

- **Explanation**: The loop runs from 1 to 5, printing each value.

#### The `while` loop

The `while` loop repeats a block of code as long as a condition is `true`. It's useful when you don't know how many times you need to loop beforehand.

##### Example: Basic `while` Loop

```swift
var count = 0

while count < 5 {
    print("Count is \(count)")
    count += 1
}
```

- **Explanation**: The loop continues until `count` is no longer less than 5. Each iteration increases `count` by 1.

#### The `repeat-while` Loop

Swift also has a `repeat-while` loop that runs the block of code first and then checks the condition afterward, guaranteeing the loop runs at least once.

##### Example: `repeat-while`

```swift
var attempts = 1

repeat {
    print("Attempt \(attempts)")
    attempts += 1
} while attempts <= 3
```

- **Explanation**: This loop guarantees that the code inside runs at least once, and it keeps repeating as long as `attempts` is less than or equal to 3.

---

### 2.2. Functions in Swift

Functions are blocks of reusable code that perform a specific task. They help you organize your code by encapsulating tasks that you need to perform multiple times in one place.

#### Defining a Function

A basic function in Swift is defined using the `func` keyword, followed by the function name and parentheses.

##### Example: Basic Function

```swift
func greet(name: String) {
    print("Hello, \(name)!")
}

greet(name: "Alice")  // Output: Hello, Alice!
```

- **Explanation**: The function `greet` takes a `String` parameter named `name` and prints a greeting message. You can call the function with different arguments to reuse the logic.

#### Functions with Return Values

A function can also return a value using the `->` symbol followed by the return type.

##### Example: Function with a Return Value

```swift
func add(a: Int, b: Int) -> Int {
    return a + b
}

let result = add(a: 5, b: 10)
print("Sum: \(result)")  // Output: Sum: 15
```

- **Explanation**: The `add` function takes two integers and returns their sum.

#### Functions with Multiple Parameters

You can pass multiple parameters into a function and use them to perform more complex tasks.

##### Example: Function with Multiple Parameters

```swift
func calculateRectangleArea(length: Double, width: Double) -> Double {
    return length * width
}

let area = calculateRectangleArea(length: 5.0, width: 3.0)
print("Area: \(area)")  // Output: Area: 15.0
```

- **Explanation**: The function `calculateRectangleArea` calculates the area of a rectangle using the formula `length * width`.

#### Functions with Default Parameters

In Swift, you can assign default values to function parameters, which allows you to call the function with or without passing those parameters.

##### Example: Function with Default Parameters

```swift
func greetPerson(name: String = "Guest") {
    print("Hello, \(name)!")
}

greetPerson()            // Output: Hello, Guest!
greetPerson(name: "Bob")  // Output: Hello, Bob!
```

- **Explanation**: If no argument is passed to `greetPerson`, it will use the default value `"Guest"`, otherwise, it will use the value provided.

---

### 2.3. Complex Data Types in Swift

Swift provides several data structures that allow you to store and manipulate collections of values. The most common are **arrays**, **dictionaries**, and **sets**.

#### Arrays

An **array** is an ordered collection of values of the same type. You can add, remove, and access elements in an array using their index.

##### Example: Working with Arrays

```swift
var fruits = ["Apple", "Banana", "Cherry"]

// Accessing elements
print(fruits[0])  // Output: Apple

// Adding elements
fruits.append("Orange")
print(fruits)  // Output: ["Apple", "Banana", "Cherry", "Orange"]

// Removing elements
fruits.remove(at: 1)
print(fruits)  // Output: ["Apple", "Cherry", "Orange"]
```

- **Explanation**: In this example, we work with an array of fruits, adding, accessing, and removing elements.

#### Dictionaries

A **dictionary** stores key-value pairs. Each value is associated with a unique key, and you can use the key to access the corresponding value.

##### Example: Working with Dictionaries

```swift
var capitals = ["USA": "Washington, D.C.", "Japan": "Tokyo", "Vietnam": "Hanoi"]

// Accessing values
print(capitals["USA"]!)  // Output: Washington, D.C.

// Adding a new key-value pair
capitals["France"] = "Paris"
print(capitals)  // Output: ["USA": "Washington, D.C.", "Japan": "Tokyo", "Vietnam": "Hanoi", "France": "Paris"]

// Removing a key-value pair
capitals.removeValue(forKey: "Japan")
print(capitals)  // Output: ["USA": "Washington, D.C.", "Vietnam": "Hanoi", "France": "Paris"]
```

- **Explanation**: The example demonstrates how to add, access, and remove key-value pairs from a dictionary.

#### Sets

A **set** is an unordered collection of unique values. Sets automatically remove duplicate values and are useful when you need to ensure no value appears more than once.

##### Example: Working with Sets

```swift
var uniqueNumbers: Set = [1, 2, 3, 3, 4]

// Output: {1, 2, 3, 4}
print(uniqueNumbers)

// Adding an element
uniqueNumbers.insert(5)
print(uniqueNumbers)  // Output: {1, 2, 3, 4, 5}

// Removing an element
uniqueNumbers.remove(2)
print(uniqueNumbers)  // Output: {1, 3, 4, 5}
```

- **Explanation**: Sets ensure all elements are unique, which is useful when dealing with non-duplicate data like unique identifiers.

---

### Exercises

1. **Sum of Array Elements**: Write a program that takes an array of integers and calculates the sum of its elements using a `for` loop.

   ```swift
   let numbers = [1, 2, 3, 4, 5]
   var sum = 0

   for number in numbers {
       sum += number
   }

   print("Total Sum: \(sum)")  // Output: Total Sum: 15
   ```

2. **Rectangle Area Function**: Write a function that calculates the area of a rectangle. The function should take `length` and `width` as parameters and return the area.

   ```swift
   func calculateArea(length: Double, width: Double) -> Double {
       return length * width
   }

   let area = calculateArea(length: 5.0, width: 3.0)
   print("Area: \(area)")  // Output: Area: 15.0
   ```

3. **Dictionary of Countries and Capitals**: Create a dictionary that stores countries and their capitals. Write a function that takes a country as input and returns the capital.

   ```swift
   let capitals = ["USA": "Washington, D.C.", "France": "Paris", "Japan": "Tokyo"]

   func getCapital(of country: String) -> String? {
       return capitals[country]
   }

   if let capital = getCapital(of: "Japan") {
       print("The capital of Japan is \(capital)")  // Output: The capital of Japan is Tokyo
   }
   ```

---

### Conclusion

In this part, we learned about loops, functions, and working with more complex data structures like arrays, dictionaries, and sets. These concepts are vital for building more dynamic and interactive Swift applications. In the next part, we will dive deeper into object-oriented programming and learn about classes, structs, and inheritance.

