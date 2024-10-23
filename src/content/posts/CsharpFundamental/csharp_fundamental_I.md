---
title: CSharp Fundamental I
published: 2024-10-22T20:56:47.710579
description: "Buổi học đầu tiên về C#, giới thiệu về cú pháp, kiểu dữ liệu, biến, và các cấu trúc cơ bản trong ngôn ngữ C#."
image: "./CsharpImg.png"
tags: ['CSharp', 'Programming Language', 'Course']
category: Course
draft: false
---

# Buổi 1: Kiến thức cơ bản về C# - I

## Giới thiệu C# và môi trường phát triển
- **Cài đặt và sử dụng IDE**: Để lập trình C#, bạn có thể sử dụng các IDE phổ biến như **Visual Studio**, **Rider**, hoặc **VS Code**. Visual Studio là một trong những IDE mạnh mẽ nhất, hỗ trợ đầy đủ các công cụ cho việc phát triển ứng dụng C#.
  - **Visual Studio**: Tải và cài đặt từ trang chủ của Microsoft, cung cấp các công cụ mạnh mẽ cho lập trình C#.
  - **VS Code**: Một trình biên tập mã nguồn nhẹ và hỗ trợ nhiều ngôn ngữ, có thể cài đặt các plugin để làm việc với C#.
  - **Rider**: Một IDE từ JetBrains, được ưa chuộng bởi hiệu năng và hỗ trợ mạnh mẽ cho phát triển .NET.

  Giáo trình này đề xuất bạn dùng Visual Studio Code, nên bạn có thể tham khảo video hướng dẫn cài đặt tại đây: [Hướng dẫn cài đặt VS Code](https://www.youtube.com/watch?v=VqCgcpAypFQ).

- **Tổng quan về cú pháp C#**: 
  - Mỗi chương trình C# đều cần có một phương thức **Main** là điểm bắt đầu. Ví dụ:
    ```csharp
    using System;
    
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
        }
    }
    ```
  - Dòng lệnh trên sẽ in ra "Hello, World!" trên màn hình. `using System;` giúp sử dụng các lớp và phương thức trong thư viện chuẩn của C#.

  - **Namespace**: Namespace trong C# giúp nhóm các lớp lại với nhau để tránh xung đột tên. Ví dụ:
    ```csharp
    namespace MyApplication
    {
        class Program
        {
            static void Main(string[] args)
            {
                Console.WriteLine("Hello, Namespace!");
            }
        }
    }
    ```
    - **Giải thích**: `namespace MyApplication` định nghĩa một không gian tên chứa lớp `Program`.

## Các kiểu dữ liệu cơ bản
- **int**: Số nguyên, ví dụ: `int a = 5;`
  - Phạm vi của kiểu `int` là từ -2,147,483,648 đến 2,147,483,647.
  - **Ví dụ chi tiết**:
    ```csharp
    int num1 = 10;
    int num2 = -20;
    Console.WriteLine("Giá trị của num1: " + num1);
    Console.WriteLine("Giá trị của num2: " + num2);
    ```
- **float**: Số thực dấu phẩy động, ví dụ: `float b = 5.5f;` (cần thêm hậu tố `f` để chỉ định kiểu float).
  - Dùng khi cần số thực với độ chính xác thấp hơn `double`.
  - **Ví dụ chi tiết**:
    ```csharp
    float length = 5.75f;
    Console.WriteLine("Chiều dài: " + length);
    ```
- **double**: Số thực dấu phẩy động có độ chính xác cao, ví dụ: `double c = 10.55;`
  - Thích hợp khi cần độ chính xác cao trong các phép tính.
  - **Ví dụ chi tiết**:
    ```csharp
    double radius = 7.89;
    Console.WriteLine("Bán kính: " + radius);
    ```
- **char**: Ký tự, ví dụ: `char d = 'A';`
  - Dùng để lưu trữ các ký tự đơn lẻ.
  - **Ví dụ chi tiết**:
    ```csharp
    char grade = 'A';
    Console.WriteLine("Điểm của bạn là: " + grade);
    ```
- **string**: Chuỗi ký tự, ví dụ: `string e = "Hello";`
  - Chuỗi là một dãy các ký tự.
  - **Ví dụ chi tiết**:
    ```csharp
    string greeting = "Xin chào mọi người!";
    Console.WriteLine(greeting);
    ```
- **bool**: Kiểu luận lý, chỉ có giá trị `true` hoặc `false`, ví dụ: `bool f = true;`
  - Dùng để lưu trữ trạng thái đúng hoặc sai.
  - **Ví dụ chi tiết**:
    ```csharp
    bool isStudent = true;
    Console.WriteLine("Có phải bạn là sinh viên không? " + isStudent);
    ```

## Khai báo biến và hằng
- **Biến**: Là một giá trị có thể thay đổi.
  - Ví dụ 1: Khai báo một số nguyên và thay đổi giá trị của nó:
    ```csharp
    int x = 10;
    Console.WriteLine("Giá trị ban đầu của x: " + x);
    x = 20;
    Console.WriteLine("Giá trị mới của x: " + x);
    ```
    - **Giải thích**: Biến `x` ban đầu được gán giá trị là 10, sau đó thay đổi thành 20.
  - Ví dụ 2: Khai báo một chuỗi và thay đổi nội dung của nó:
    ```csharp
    string name = "Alice";
    Console.WriteLine("Tên ban đầu: " + name);
    name = "Bob";
    Console.WriteLine("Tên mới: " + name);
    ```
    - **Giải thích**: Chuỗi `name` ban đầu là "Alice", sau đó thay đổi thành "Bob".

- **Hằng (const)**: Là giá trị không thể thay đổi sau khi khai báo.
  - Ví dụ 1: Khai báo hằng số pi:
    ```csharp
    const double PI = 3.14159;
    Console.WriteLine("Giá trị của PI: " + PI);
    ```
    - **Giải thích**: `PI` là một hằng và không thể thay đổi giá trị sau khi đã khai báo.
  - Ví dụ 2: Khai báo hằng số về số ngày trong tuần:
    ```csharp
    const int DAYS_IN_WEEK = 7;
    Console.WriteLine("Số ngày trong tuần: " + DAYS_IN_WEEK);
    ```
    - **Giải thích**: `DAYS_IN_WEEK` là một hằng số, luôn có giá trị là 7.

## Toán tử
- **Toán tử số học**: Được sử dụng để thực hiện các phép tính toán học.
  - `+` (cộng), `-` (trừ), `*` (nhân), `/` (chia).
  - **Ví dụ chi tiết**:
    ```csharp
    int a = 15;
    int b = 4;
    Console.WriteLine("Tổng: " + (a + b));
    Console.WriteLine("Hiệu: " + (a - b));
    Console.WriteLine("Tích: " + (a * b));
    Console.WriteLine("Thương: " + (a / b));
    ```
- **Toán tử so sánh**: Được sử dụng để so sánh các giá trị.
  - `==` (bằng), `!=` (khác), `<` (nhỏ hơn), `>` (lớn hơn).
  - **Ví dụ chi tiết**:
    ```csharp
    int x = 10;
    int y = 20;
    bool isEqual = (x == y);
    Console.WriteLine("x có bằng y không? " + isEqual); // Kết quả là false
    ```
- **Toán tử logic**: Được sử dụng để kết hợp các điều kiện.
  - `&&` (AND), `||` (OR), `!` (NOT).
  - **Ví dụ chi tiết**:
    ```csharp
    bool isAdult = true;
    bool hasLicense = false;
    bool canDrive = isAdult && hasLicense;
    Console.WriteLine("Có được lái xe không? " + canDrive); // Kết quả là false
    ```

## Nhập/xuất dữ liệu
- **Nhập dữ liệu từ người dùng**: Sử dụng `Console.ReadLine()` để nhận dữ liệu từ bàn phím.
  - Ví dụ:
    ```csharp
    Console.Write("Nhập tên của bạn: ");
    string name = Console.ReadLine();
    Console.WriteLine("Xin chào, " + name);
    ```
- **Xuất dữ liệu ra màn hình**: Sử dụng `Console.WriteLine()` để hiển thị dữ liệu.
  - Ví dụ:
    ```csharp
    int age = 25;
    Console.WriteLine("Tuổi của bạn là: " + age);
    ```

## Cấu trúc điều kiện (if, else, switch)
- **Sử dụng `if-else`**: Để kiểm tra điều kiện và thực hiện các hành động khác nhau.
  - Ví dụ:
    ```csharp
    int number = 10;
    if (number > 0)
    {
        Console.WriteLine("Số dương");
    }
    else
    {
        Console.WriteLine("Số không hoặc âm");
    }
    ```
- **Sử dụng `switch-case`**: Khi cần kiểm tra giá trị của một biến với nhiều khả năng khác nhau.
  - Ví dụ:
    ```csharp
    int day = 3;
    switch (day)
    {
        case 1:
            Console.WriteLine("Thứ hai");
            break;
        case 2:
            Console.WriteLine("Thứ ba");
            break;
        case 3:
            Console.WriteLine("Thứ tư");
            break;
        default:
            Console.WriteLine("Không phải là một ngày hợp lệ");
            break;
    }
    ```
  - **`break`**: Kết thúc mỗi `case` để không thực hiện tiếp các lệnh sau.

## Bài tập thực hành
### Phần 1: Khai báo biến và hằng
1. **Bài tập 1**: Khai báo một số nguyên `a` và một số thực `b`. In ra tổng của chúng.
2. **Bài tập 2**: Khai báo một hằng số `PI` và sử dụng nó để tính chu vi của một hình tròn với bán kính `r` (người dùng nhập).
3. **Bài tập 3**: Khai báo một chuỗi `name` và một số nguyên `age`, sau đó in ra "Tên tôi là [name], tôi [age] tuổi."

### Phần 2: Toán tử
4. **Bài tập 4**: Viết chương trình yêu cầu người dùng nhập vào hai số nguyên và in ra tổng, hiệu, tích, thương của chúng.
5. **Bài tập 5**: Sử dụng toán tử so sánh để kiểm tra xem hai số nhập vào từ người dùng có bằng nhau không.
6. **Bài tập 6**: Sử dụng toán tử logic để kiểm tra xem một số nhập vào có nằm trong khoảng từ 10 đến 50 hay không.

### Phần 3: Nhập/Xuất dữ liệu
7. **Bài tập 7**: Yêu cầu người dùng nhập vào tên và tuổi, sau đó in ra lời chào: "Xin chào, [tên]. Bạn [tuổi] tuổi."
8. **Bài tập 8**: Viết chương trình yêu cầu người dùng nhập vào một số và in ra bình phương của số đó.

### Phần 4: Cấu trúc điều kiện
9. **Bài tập 9**: Viết chương trình kiểm tra xem một số nhập vào từ bàn phím là số chẵn hay số lẻ.
10. **Bài tập 10**: Sử dụng `switch-case` để in ra tên của ngày trong tuần dựa vào số nhập vào (từ 1 đến 7).

### Phần 5: Thực hành tổng hợp
11. **Bài tập 11**: Viết chương trình yêu cầu người dùng nhập vào điểm của một học sinh. Sử dụng `if-else` để phân loại học lực (A, B, C, D, F).
12. **Bài tập 12**: Viết chương trình yêu cầu người dùng nhập vào ba số nguyên và tìm số lớn nhất trong ba số đó.
13. **Bài tập 13**: Yêu cầu người dùng nhập vào một số và kiểm tra xem số đó có phải là số nguyên tố hay không.
14. **Bài tập 14**: Viết chương trình yêu cầu người dùng nhập vào một năm và kiểm tra xem năm đó có phải là năm nhuận không.
15. **Bài tập 15**: Viết chương trình yêu cầu người dùng nhập vào một chuỗi và đếm số lượng ký tự trong chuỗi.
16. **Bài tập 16**: Viết chương trình nhập vào một số nguyên và tính giai thừa của số đó bằng cách sử dụng vòng lặp.
17. **Bài tập 17**: Yêu cầu người dùng nhập vào một số và in ra bảng cửu chương của số đó từ 1 đến 10.
18. **Bài tập 18**: Viết chương trình yêu cầu người dùng nhập vào một mảng số nguyên, sau đó tìm và in ra giá trị lớn nhất và nhỏ nhất của mảng.
19. **Bài tập 19**: Viết chương trình chuyển đổi một số nguyên từ hệ thập phân sang hệ nhị phân.
20. **Bài tập 20**: Viết chương trình sử dụng `for`, `while`, và `do-while` để in ra các số từ 1 đến 10.

### Phần 6: Các bài tập nâng cao
21. **Bài tập 21**: Viết chương trình giải phương trình bậc nhất `ax + b = 0`, yêu cầu người dùng nhập vào `a` và `b`.
22. **Bài tập 22**: Viết chương trình sử dụng mảng hai chiều để lưu trữ ma trận và tính tổng các phần tử của ma trận đó.
23. **Bài tập 23**: Viết chương trình mô phỏng một máy tính đơn giản có các chức năng cộng, trừ, nhân, chia.
24. **Bài tập 24**: Viết chương trình yêu cầu người dùng nhập vào một chuỗi và kiểm tra xem chuỗi đó có phải là chuỗi đối xứng (palindrome) hay không.
25. **Bài tập 25**: Viết chương trình quản lý danh bạ điện thoại đơn giản, cho phép thêm, sửa, xóa và hiển thị danh bạ.

Chúc các bạn học tốt :3 Gọi Bill The Dev để nghe nhạc chuông vì anh ta rất bận nhé! 
