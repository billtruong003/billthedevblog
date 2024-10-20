---
title: Speedrun Swift UI Lesson 1 - Part III
published: 2024-01-14
description: "How to use this blog template."
image: "./swiftUI-learn.png"
tags: [Swift, SwiftUI, iOS, Programming]
category: SwiftUI
draft: false
---

# Speedrun Swift UI Lesson 1 - Part III: Object-Oriented Programming in Swift

## III. Object-Oriented Programming in Swift

In this part, we will explore object-oriented programming (OOP) concepts in Swift. These include classes, structures (structs), inheritance, and protocols. These concepts allow you to build more organized, reusable, and scalable code by encapsulating data and behavior into logical units.

---

### 3.1. Classes and Structures

Swift provides two ways to define custom data types: **classes** and **structures**. Both allow you to define properties and methods, but there are important differences between them.

#### Defining a Class

A **class** in Swift is a blueprint for creating objects that can store data (properties) and perform actions (methods).

##### Example: Basic Class

```swift
class Animal {
    var name: String
    
    init(name: String) {
        self.name = name
    }
    
    func speak() {
        print("\(name) makes a sound.")
    }
}

let dog = Animal(name: "Dog")
dog.speak()  // Output: Dog makes a sound.
```

- **Explanation**: In this example, the class `Animal` has a property `name` and a method `speak()`. We create an instance of `Animal` called `dog`, and when `speak()` is called, it prints the animal’s name and its sound.

#### Structures (Structs)

A **struct** is similar to a class but has some key differences. Structs are value types, meaning they are copied when assigned to a new variable or constant. In contrast, classes are reference types, which means they are passed by reference.

##### Example: Basic Struct

```swift
struct Person {
    var name: String
    var age: Int
    
    func introduce() {
        print("Hi, my name is \(name) and I am \(age) years old.")
    }
}

var person1 = Person(name: "Alice", age: 25)
person1.introduce()  // Output: Hi, my name is Alice and I am 25 years old.
```

- **Explanation**: The `Person` struct has properties for `name` and `age`, and a method `introduce()` to print a message. Structs are often used for lightweight data structures where copying the object is not an issue.

#### Differences Between Classes and Structs

- **Classes** are reference types, meaning that when you pass a class instance, you are passing a reference to the original object.
- **Structs** are value types, meaning that when you pass a struct, you are passing a copy.

##### Example: Difference in Behavior

```swift
class Car {
    var model: String
    
    init(model: String) {
        self.model = model
    }
}

var car1 = Car(model: "Toyota")
var car2 = car1
car2.model = "Honda"

print(car1.model)  // Output: Honda
print(car2.model)  // Output: Honda
```

In the example above, `car1` and `car2` refer to the same object, so changes to `car2` also affect `car1`.

```swift
struct Book {
    var title: String
}

var book1 = Book(title: "Swift Programming")
var book2 = book1
book2.title = "Advanced Swift"

print(book1.title)  // Output: Swift Programming
print(book2.title)  // Output: Advanced Swift
```

In the example with structs, `book1` and `book2` are separate copies, so changing `book2` does not affect `book1`.

---

### 3.2. Inheritance

Inheritance is a key feature of object-oriented programming that allows a class to inherit properties and methods from another class. This enables you to create a new class based on an existing class, reusing code and extending its functionality.

#### Example: Inheritance in Swift

```swift
class Animal {
    var name: String
    
    init(name: String) {
        self.name = name
    }
    
    func speak() {
        print("\(name) makes a sound.")
    }
}

class Dog: Animal {
    func bark() {
        print("\(name) barks.")
    }
}

let dog = Dog(name: "Buddy")
dog.speak()  // Output: Buddy makes a sound.
dog.bark()   // Output: Buddy barks.
```

- **Explanation**: In this example, the class `Dog` inherits from the `Animal` class. The `Dog` class gets all the properties and methods from `Animal`, and it can also define its own methods like `bark()`.

#### Overriding Methods

You can override methods in a subclass to provide a specific implementation of a method that exists in the superclass.

##### Example: Method Overriding

```swift
class Cat: Animal {
    override func speak() {
        print("\(name) meows.")
    }
}

let cat = Cat(name: "Whiskers")
cat.speak()  // Output: Whiskers meows.
```

- **Explanation**: The `Cat` class overrides the `speak()` method to provide a custom implementation. When `speak()` is called on a `Cat` instance, it prints "meows" instead of the default "makes a sound."

---

### 3.3. Protocols in Swift

A **protocol** in Swift defines a blueprint of methods, properties, or other requirements that suit a particular task or piece of functionality. Classes, structs, and enums can adopt and conform to a protocol by implementing the required functionality.

#### Defining a Protocol

A protocol can be defined using the `protocol` keyword. Any type that conforms to the protocol must implement its requirements.

##### Example: Basic Protocol

```swift
protocol Describable {
    func describe() -> String
}

class Car: Describable {
    var model: String
    
    init(model: String) {
        self.model = model
    }
    
    func describe() -> String {
        return "This is a \(model)."
    }
}

let car = Car(model: "Tesla")
print(car.describe())  // Output: This is a Tesla.
```

- **Explanation**: The `Describable` protocol requires the conforming type to implement a `describe()` method. The `Car` class conforms to the protocol by implementing the required method.

#### Protocols with Properties

Protocols can also specify property requirements, including whether the property should be gettable or settable.

##### Example: Protocol with Property Requirements

```swift
protocol Identifiable {
    var id: String { get }
}

class User: Identifiable {
    var id: String
    
    init(id: String) {
        self.id = id
    }
}

let user = User(id: "12345")
print("User ID: \(user.id)")  // Output: User ID: 12345
```

- **Explanation**: The `Identifiable` protocol requires a `String` property `id`. The `User` class conforms to the protocol by providing a property `id`.

---

### 3.4. Access Control in Swift

Access control restricts access to parts of your code from code in other source files or modules. Swift provides different access control levels:

- **public**: The entity is accessible from any module.
- **internal**: The entity is accessible within the same module (default).
- **private**: The entity is accessible only within the same file.
- **fileprivate**: The entity is accessible within the same file.

#### Example: Access Control

```swift
class Animal {
    private var name: String
    
    init(name: String) {
        self.name = name
    }
    
    func speak() {
        print("\(name) makes a sound.")
    }
}

let animal = Animal(name: "Elephant")
// animal.name = "Lion"  // Error: Cannot access private property
```

- **Explanation**: The `name` property is marked as `private`, so it cannot be accessed directly outside the `Animal` class. Only the methods inside the class can access the `name` property.

---

### Exercises

1. **Create a Class and Subclass**: Create a base class `Vehicle` with a `speed` property and a `move()` method. Then, create a subclass `Car` that adds a `brand` property and overrides the `move()` method.

   ```swift
   class Vehicle {
       var speed: Int
       
       init(speed: Int) {
           self.speed = speed
       }
       
       func move() {
           print("The vehicle is moving at \(speed) km/h.")
       }
   }

   class Car: Vehicle {
       var brand: String
       
       init(speed: Int, brand: String) {
           self.brand = brand
           super.init(speed: speed)
       }
       
       override func move() {
           print("The \(brand) car is moving at \(speed) km/h.")
       }
   }

   let car = Car(speed: 120, brand: "Toyota")
   car.move()  // Output: The Toyota car is moving at 120 km/h.
   ```

2. **Protocol Conformance**: Create a protocol `Shape` with a method `area() -> Double`. Create two classes `Rectangle` and `Circle` that conform to the `Shape` protocol and implement

 the `area()` method.

---

By mastering object-oriented programming in Swift, you can build more modular, reusable, and maintainable code. In the next lesson, we will dive deeper into SwiftUI and how these concepts translate into building interactive UIs.
