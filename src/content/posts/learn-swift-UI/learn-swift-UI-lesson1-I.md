---
title: Speedrun Swift UI Lesson 1 - Part I
published: 2024-01-12
description: "Start your Swift journey with the basics! Learn about variables, constants, data types, conditional structures, and get hands-on exercises to strengthen your foundation."
image: "./swiftUI-learn.png"
tags: [Swift, SwiftUI, iOS, Programming]
category: SwiftUI
draft: false
---

# Speedrun Swift UI Lesson 1 - Part I: Introduction to Basic Swift Concepts

## I. Getting Familiar with Basic Swift

In this part, we will introduce the core elements of Swift, a powerful programming language developed by Apple. Mastering these basics is essential for anyone who wants to develop Swift applications for iOS, macOS, watchOS, or tvOS.

### Topics Covered:
- **Variables and Constants (`var` and `let`)**: Learn the differences between mutable and immutable data.
- **Swift's Basic Data Types**: Understand how Swift stores and handles different kinds of data.
- **Conditional Statements**: Control the flow of your code using `if` and `switch`.
- **Practice Exercises**: Sharpen your skills with practical coding challenges.

---

### 1.1. Variables and Constants in Swift

#### What is a Variable?

In Swift, **variables** are containers that can store values, and those values can change over time. You declare a variable using the `var` keyword.

```swift
var message = "Hello, Swift!"  // This is a variable
message = "Hello, World!"      // Value can be changed
print(message)  // Output: Hello, World!
```

- **Why use variables?**
  Variables are useful when you need to keep track of changing information such as user input, scores in a game, or the current state of an app.

#### What is a Constant?

A **constant**, on the other hand, is a container for data that cannot change once it has been set. Constants are declared using the `let` keyword.

```swift
let pi = 3.14159  // This is a constant
// pi = 3.14  // Error: Cannot change a constant's value once assigned
print(pi)  // Output: 3.14159
```

- **Why use constants?**
  Constants are ideal when working with values that should never change after being set, such as mathematical constants or configuration settings.

### Differences Between Variables and Constants

1. **Mutability**:
   - A variable (`var`) can be changed after its initial assignment.
   - A constant (`let`) cannot be changed once it's been initialized.

2. **Use Cases**:
   - Use variables when the value is expected to change over time.
   - Use constants when the value should remain fixed throughout the program.

### Example: Calculating Circle Area

```swift
let radius = 5.0  // A constant
var area = 3.14159 * radius * radius  // Using the constant in a variable
print("The area of the circle is \(area)")
```

---

### 1.2. Swift’s Basic Data Types

#### Swift is a **strongly-typed** language, meaning that every variable or constant must have a specific data type. Here are some of the most commonly used data types:

1. **Int**: Stores whole numbers.
   ```swift
   var age: Int = 25
   ```

2. **Double**: Stores decimal numbers (floating-point).
   ```swift
   var height: Double = 1.75
   ```

3. **String**: Stores text.
   ```swift
   var name: String = "Alice"
   ```

4. **Bool**: Stores Boolean values (`true` or `false`).
   ```swift
   var isLoggedIn: Bool = true
   ```

### Type Inference

Swift can automatically infer the type of a variable or constant based on the value you assign to it. You don't always need to explicitly declare the type.

```swift
var score = 100  // Swift knows this is an Int
var temperature = 37.5  // Swift knows this is a Double
```

---

### 1.3. Conditional Statements: `if` and `switch`

#### Controlling the Flow of Code with `if`

The `if` statement in Swift allows you to execute a block of code based on a specific condition. If the condition is true, the block of code inside the `if` statement is executed.

```swift
let temperature = 30

if temperature > 25 {
    print("It's a hot day!")
} else {
    print("It's a cool day!")
}
```

- **Explanation**: The program checks if the temperature is greater than 25. If the condition is true, it prints "It's a hot day!", otherwise it prints "It's a cool day!".

#### Example: Nested `if-else`

```swift
let grade = 85

if grade >= 90 {
    print("You got an A!")
} else if grade >= 80 {
    print("You got a B!")
} else {
    print("Keep improving!")
}
```

- **Explanation**: Based on the value of `grade`, the program prints different messages. This is useful for grading systems, user permissions, and more.

---

#### Using `switch` for Multiple Cases

The `switch` statement allows you to check multiple possible values for a single variable.

```swift
let dayOfWeek = 3

switch dayOfWeek {
case 1:
    print("It's Monday")
case 2:
    print("It's Tuesday")
case 3:
    print("It's Wednesday")
default:
    print("Unknown day")
}
```

- **Explanation**: The `switch` statement matches the `dayOfWeek` value with the cases and executes the corresponding block of code.

#### Example: Using `switch` with Ranges

```swift
let score = 85

switch score {
case 90...100:
    print("Excellent!")
case 80..<90:
    print("Good job!")
case 70..<80:
    print("You passed!")
default:
    print("Keep trying!")
}
```

- **Explanation**: The `switch` statement can also work with ranges, which is useful when dealing with grades, age ranges, or levels in a game.

---

### Exercises

1. **Age Checker**: Write a program that checks a person's age and prints whether they are eligible to vote (>= 18 years old).

   ```swift
   let age = 17
   if age >= 18 {
       print("You can vote!")
   } else {
       print("You're too young to vote.")
   }
   ```

2. **Day of the Week**: Write a program using `switch` to print the name of the day of the week based on an integer value from 1 to 7.

   ```swift
   let day = 5
   switch day {
   case 1:
       print("Sunday")
   case 2:
       print("Monday")
   case 3:
       print("Tuesday")
   case 4:
       print("Wednesday")
   case 5:
       print("Thursday")
   case 6:
       print("Friday")
   case 7:
       print("Saturday")
   default:
       print("Invalid day")
   }
   ```

---

### Conclusion

In this part, we've covered the basics of Swift's variables, constants, data types, and conditional statements. These are the building blocks of every Swift application, and mastering them is the first step toward becoming a proficient Swift developer.

In the next part, we will explore loops, functions, and complex data types.



