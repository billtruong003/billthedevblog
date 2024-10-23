---
title: CSharp Fundamental II
published: 2024-10-22T20:56:47.712001
description: "Buổi học thứ hai về C#, tìm hiểu về cấu trúc điều kiện và vòng lặp, cùng với các ví dụ và bài tập thực hành."
image: "./CsharpImg.png"
tags: ['CSharp', 'Programming Language', 'Course']
category: Course
draft: false
---

# Buổi 2: Cấu trúc điều kiện và vòng lặp trong C# - II

## Cấu trúc điều kiện mở rộng
- **Điều kiện lồng nhau (nested if-else)**: Trong nhiều trường hợp, bạn có thể sử dụng **if-else** lồng nhau để kiểm tra các điều kiện phức tạp.
  - **Ví dụ**:
    ```csharp
    int age = 20;
    bool isStudent = true;
    
    if (age >= 18)
    {
        if (isStudent)
        {
            Console.WriteLine("Bạn là sinh viên và đủ tuổi trưởng thành.");
        }
        else
        {
            Console.WriteLine("Bạn không phải sinh viên nhưng đủ tuổi trưởng thành.");
        }
    }
    else
    {
        Console.WriteLine("Bạn chưa đủ tuổi trưởng thành.");
    }
    ```
  - **Giải thích**: Ở đây, điều kiện lồng nhau giúp kiểm tra tuổi và tình trạng học tập của người dùng, và in ra thông điệp phù hợp.

- **Các trường hợp phức tạp với switch-case và biểu thức điều kiện**:
  - **switch-case** có thể được sử dụng với nhiều lựa chọn khác nhau. Khi cần kiểm tra nhiều trường hợp, **switch-case** sẽ dễ đọc và quản lý hơn **if-else**.
  - **Ví dụ**:
    ```csharp
    string weather = "sunny";
    switch (weather)
    {
        case "sunny":
            Console.WriteLine("Thời tiết nắng.");
            break;
        case "rainy":
            Console.WriteLine("Thời tiết mưa.");
            break;
        case "cloudy":
            Console.WriteLine("Thời tiết nhiều mây.");
            break;
        default:
            Console.WriteLine("Không rõ thời tiết.");
            break;
    }
    ```
  - **Biểu thức điều kiện** (toán tử `? :`): Một cách viết gọn của **if-else** để kiểm tra điều kiện đơn giản.
    - **Ví dụ**:
    ```csharp
    int number = 5;
    string result = (number % 2 == 0) ? "Số chẵn" : "Số lẻ";
    Console.WriteLine(result);
    ```
    - **Giải thích**: Nếu `number % 2 == 0`, thì `result` là "Số chẵn", ngược lại là "Số lẻ".

## Vòng lặp trong C#
- **Vòng lặp for**: Sử dụng khi biết trước số lần lặp.
  - **Ví dụ**:
    ```csharp
    for (int i = 0; i < 5; i++)
    {
        Console.WriteLine("Giá trị của i: " + i);
    }
    ```
    - **Giải thích**: Vòng lặp **for** sẽ chạy từ `i = 0` đến `i < 5`, và in giá trị của `i` mỗi lần lặp.

- **Vòng lặp while**: Sử dụng khi không biết trước số lần lặp, và vòng lặp phụ thuộc vào một điều kiện.
  - **Ví dụ**:
    ```csharp
    int count = 0;
    while (count < 3)
    {
        Console.WriteLine("Giá trị của count: " + count);
        count++;
    }
    ```
    - **Giải thích**: Vòng lặp **while** sẽ tiếp tục chạy khi `count < 3` và tăng giá trị của `count` mỗi lần lặp.

- **Vòng lặp do-while**: Tương tự như **while**, nhưng đảm bảo rằng vòng lặp luôn thực hiện ít nhất một lần, dù điều kiện có đúng hay không.
  - **Ví dụ**:
    ```csharp
    int j = 0;
    do
    {
        Console.WriteLine("Giá trị của j: " + j);
        j++;
    } while (j < 3);
    ```
    - **Giải thích**: Vòng lặp **do-while** sẽ chạy ít nhất một lần trước khi kiểm tra điều kiện `j < 3`.

- **Phân biệt giữa các loại vòng lặp và ứng dụng của chúng**:
  - **for**: Thích hợp khi biết trước số lần lặp.
  - **while**: Dùng khi số lần lặp phụ thuộc vào điều kiện.
  - **do-while**: Dùng khi bạn muốn đảm bảo vòng lặp chạy ít nhất một lần.

- **Vòng lặp lồng nhau (nested loops)**: Vòng lặp bên trong một vòng lặp khác.
  - **Ví dụ**:
    ```csharp
    for (int m = 1; m <= 3; m++)
    {
        for (int n = 1; n <= 2; n++)
        {
            Console.WriteLine($"Vòng lặp m: {m}, vòng lặp n: {n}");
        }
    }
    ```
    - **Giải thích**: Vòng lặp bên ngoài chạy từ `m = 1` đến `m <= 3`, và mỗi lần như vậy, vòng lặp bên trong chạy từ `n = 1` đến `n <= 2`.

## Enum trong C#
- **Giới thiệu về Enum**: `enum` là kiểu dữ liệu đặc biệt cho phép định nghĩa một tập hợp các hằng số với tên cụ thể, giúp chương trình trở nên rõ ràng và dễ đọc hơn. `enum` thường được dùng để biểu diễn các nhóm giá trị có liên quan đến nhau, chẳng hạn như ngày trong tuần, tháng trong năm, hoặc trạng thái của một tiến trình.
  - **Ví dụ**: Định nghĩa một `enum` cho các ngày trong tuần.
    ```csharp
    enum DayOfWeek
    {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }
    ```
    - **Giải thích**: `DayOfWeek` là một `enum` với bảy giá trị đại diện cho các ngày trong tuần. Các giá trị trong `enum` mặc định có chỉ số bắt đầu từ 0, vì vậy `Monday` là 0, `Tuesday` là 1, và tiếp tục như vậy.

- **Sử dụng Enum trong Switch-Case**: `enum` có thể được sử dụng trong **switch-case** để xử lý các giá trị khác nhau của `enum` một cách rõ ràng và hiệu quả.
  - **Ví dụ**: Sử dụng `DayOfWeek` trong `switch-case`.
    ```csharp
    DayOfWeek today = DayOfWeek.Wednesday;

    switch (today)
    {
        case DayOfWeek.Monday:
            Console.WriteLine("Hôm nay là thứ hai.");
            break;
        case DayOfWeek.Tuesday:
            Console.WriteLine("Hôm nay là thứ ba.");
            break;
        case DayOfWeek.Wednesday:
            Console.WriteLine("Hôm nay là thứ tư.");
            break;
        case DayOfWeek.Thursday:
            Console.WriteLine("Hôm nay là thứ năm.");
            break;
        case DayOfWeek.Friday:
            Console.WriteLine("Hôm nay là thứ sáu.");
            break;
        case DayOfWeek.Saturday:
            Console.WriteLine("Hôm nay là thứ bảy.");
            break;
        case DayOfWeek.Sunday:
            Console.WriteLine("Hôm nay là chủ nhật.");
            break;
        default:
            Console.WriteLine("Không rõ ngày.");
            break;
    }
    ```
    - **Giải thích**: Ở đây, `enum` `DayOfWeek` giúp cho việc sử dụng **switch-case** trở nên rõ ràng và dễ hiểu hơn. Mỗi trường hợp tương ứng với một giá trị của `DayOfWeek`, giúp bạn kiểm tra và xử lý logic phù hợp.

## Ví dụ nâng cao về Enum
- **Ví dụ**: Tạo một `enum` để biểu diễn trạng thái đơn hàng và sử dụng nó trong `switch-case` để xử lý từng trạng thái khác nhau.
  ```csharp
  enum OrderStatus
  {
      Pending,
      Processing,
      Shipped,
      Delivered,
      Cancelled
  }

  class Program
  {
      static void Main(string[] args)
      {
          OrderStatus currentStatus = OrderStatus.Processing;

          switch (currentStatus)
          {
              case OrderStatus.Pending:
                  Console.WriteLine("Đơn hàng đang chờ xử lý.");
                  break;
              case OrderStatus.Processing:
                  Console.WriteLine("Đơn hàng đang được xử lý.");
                  break;
              case OrderStatus.Shipped:
                  Console.WriteLine("Đơn hàng đã được gửi đi.");
                  break;
              case OrderStatus.Delivered:
                  Console.WriteLine("Đơn hàng đã được giao thành công.");
                  break;
              case OrderStatus.Cancelled:
                  Console.WriteLine("Đơn hàng đã bị hủy.");
                  break;
              default:
                  Console.WriteLine("Trạng thái đơn hàng không xác định.");
                  break;
          }
      }
  }
  ```
  - **Giải thích**: Ở đây, `OrderStatus` là một `enum` để biểu diễn trạng thái của đơn hàng. Chương trình sử dụng **switch-case** để xử lý từng trạng thái khác nhau của đơn hàng và in ra thông điệp phù hợp dựa trên trạng thái hiện tại (`currentStatus`). Điều này giúp mã nguồn trở nên dễ hiểu và dễ bảo trì hơn khi xử lý các trường hợp trạng thái khác nhau.

## Bài tập thực hành tổng hợp
1. **Bài tập 1**: Tạo một `enum` để biểu diễn các cấp độ khó trong một trò chơi: `Easy`, `Medium`, `Hard`, `Expert`. Viết chương trình yêu cầu người dùng chọn cấp độ và sử dụng `switch-case` để in ra thông điệp phù hợp với cấp độ đã chọn.
2. **Bài tập 2**: Tạo một `enum` cho các mùa trong năm (`Spring`, `Summer`, `Autumn`, `Winter`). Viết chương trình yêu cầu người dùng nhập vào tên của một mùa và in ra các hoạt động phổ biến cho mùa đó.
3. **Bài tập 3**: Tạo một `enum` để biểu diễn các loại phương tiện giao thông: `Car`, `Motorbike`, `Bicycle`, `Bus`, `Train`. Viết chương trình sử dụng `switch-case` để mô tả ưu và nhược điểm của từng loại phương tiện.
4. **Bài tập 4**: Sử dụng **if-else** lồng nhau để kiểm tra điểm của một học sinh và phân loại học lực (A, B, C, D, F) dựa trên điểm nhập vào.
5. **Bài tập 5**: Sử dụng **vòng lặp for** để in ra tất cả các số nguyên từ 1 đến 100, và in thêm thông điệp nếu số đó là số chẵn hay số lẻ.
6. **Bài tập 6**: Viết chương trình yêu cầu người dùng nhập vào một số và sử dụng **vòng lặp while** để tính tổng tất cả các số từ 1 đến số đó.
7. **Bài tập 7**: Tạo một chương trình sử dụng **vòng lặp do-while** để yêu cầu người dùng nhập mật khẩu cho đến khi đúng mật khẩu đã định trước.
8. **Bài tập 8**: Tạo một **enum** để biểu diễn các trạng thái của đèn giao thông (`Red`, `Yellow`, `Green`). Viết chương trình sử dụng **switch-case** để in ra hành động cần thực hiện tương ứng với mỗi trạng thái đèn.
9. **Bài tập 9**: Sử dụng **vòng lặp for lồng nhau** để in ra một bảng cửu chương từ 1 đến 10.
10. **Bài tập 10**: Viết chương trình sử dụng **switch-case** để kiểm tra ngày trong tuần (`DayOfWeek` enum) và in ra các hoạt động trong ngày đó (ví dụ: làm việc, nghỉ ngơi, thể thao).
11. **Bài tập 11**: Tạo một **enum** để biểu diễn các loại đồ uống (`Coffee`, `Tea`, `Juice`, `Water`). Yêu cầu người dùng chọn đồ uống và in ra giá tiền tương ứng.
12. **Bài tập 12**: Viết chương trình yêu cầu người dùng nhập vào một số nguyên và sử dụng **vòng lặp while** để kiểm tra xem số đó có phải là số nguyên tố không.
13. **Bài tập 13**: Tạo một **enum** để biểu diễn các loại tài khoản ngân hàng (`Savings`, `Checking`, `Loan`). Sử dụng **switch-case** để mô tả đặc điểm của từng loại tài khoản.
14. **Bài tập 14**: Viết chương trình sử dụng **vòng lặp for** để tính giai thừa của một số nguyên nhập vào từ người dùng.
15. **Bài tập 15**: Tạo một **enum** cho các loại sự kiện trong cuộc sống (`Wedding`, `Birthday`, `Anniversary`, `Graduation`). Sử dụng **switch-case** để in ra các hoạt động thường được tổ chức trong các sự kiện đó.
16. **Bài tập 16**: Sử dụng **vòng lặp do-while** để yêu cầu người dùng nhập vào một chuỗi cho đến khi chuỗi đó không rỗng.
17. **Bài tập 17**: Tạo một **enum** để biểu diễn các loại hình thức thanh toán (`Cash`, `CreditCard`, `DebitCard`, `OnlinePayment`). Viết chương trình sử dụng **switch-case** để in ra ưu và nhược điểm của từng hình thức thanh toán.
18. **Bài tập 18**: Viết chương trình sử dụng **if-else** để kiểm tra tuổi của người dùng và phân loại xem họ có thể bỏ phiếu (>=18 tuổi) hoặc không.
19. **Bài tập 19**: Tạo một **enum** để biểu diễn các loại sách (`Fiction`, `NonFiction`, `Science`, `History`). Sử dụng **switch-case** để in ra mô tả ngắn gọn về nội dung của từng loại sách.
20. **Bài tập 20**: Sử dụng **vòng lặp while** để tìm ước số chung lớn nhất (UCLN) của hai số nguyên nhập vào từ người dùng.

Chúc các bạn học tốt :3 Gọi Bill The Dev để nghe nhạc chuông vì anh ta rất bận nhé! 
