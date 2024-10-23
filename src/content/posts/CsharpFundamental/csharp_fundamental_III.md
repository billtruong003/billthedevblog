---
title: CSharp Fundamental III
published: 2024-10-22T20:56:47.712890
description: "Hướng dẫn chi tiết về mảng và danh sách trong C#. Buổi học bao gồm cách khai báo, truy cập và thao tác với mảng, danh sách cùng với nhiều ví dụ và bài tập thực hành."
image: "./CsharpImg.png"
tags: ['CSharp', 'Programming Language', 'Course']
category: Course
draft: false
---

# Buổi 3: Mảng và danh sách trong C# - III

## Mảng (Array)
### Khai báo và sử dụng mảng trong C#
- **Khai báo mảng**: Mảng trong C# là một tập hợp các phần tử có cùng kiểu dữ liệu. Bạn có thể khai báo mảng và gán giá trị cho mảng.
  - **Ví dụ**:
    ```csharp
    int[] numbers = { 1, 2, 3, 4, 5 };
    string[] names = new string[3] { "Alice", "Bob", "Charlie" };
    ```
  - **Giải thích**: Mảng `numbers` được khai báo với các giá trị ban đầu `{ 1, 2, 3, 4, 5 }`. Mảng `names` có kích thước là 3 và chứa ba giá trị chuỗi.

- **Truy cập phần tử trong mảng**: Để truy cập một phần tử trong mảng, bạn có thể sử dụng chỉ mục (index).
  - **Ví dụ**:
    ```csharp
    Console.WriteLine(numbers[0]); // In ra phần tử đầu tiên: 1
    numbers[2] = 10; // Thay đổi phần tử thứ ba thành 10
    ```
  - **Giải thích**: Chỉ mục bắt đầu từ 0, vì vậy `numbers[0]` sẽ truy cập phần tử đầu tiên. Bạn cũng có thể gán lại giá trị cho phần tử bằng cách sử dụng chỉ mục.

- **Thêm, sửa, xóa phần tử trong mảng**:
  - **Thêm phần tử**: Kích thước của mảng cố định sau khi khai báo, vì vậy bạn không thể thêm trực tiếp phần tử vào mảng. Thay vào đó, bạn có thể tạo một mảng mới với kích thước lớn hơn và sao chép các phần tử cũ vào.
  - **Sửa phần tử**: Như đã thấy ở ví dụ trên, bạn có thể sửa phần tử bằng cách sử dụng chỉ mục.
  - **Xóa phần tử**: Bạn không thể xóa phần tử trong mảng, nhưng có thể gán giá trị mặc định hoặc tạo một mảng mới không chứa phần tử đó.

- **Độ dài của mảng**: Sử dụng `Length` để lấy số phần tử của mảng. `Length` là thuộc tính được đánh giá rất nhanh vì nó là thông tin cố định của mảng.
  - **Ví dụ**:
    ```csharp
    int arrayLength = numbers.Length;
    Console.WriteLine("Độ dài của mảng: " + arrayLength);
    ```
  - **Hiệu suất**: `Length` hoạt động nhanh và ít tốn kém vì nó chỉ truy cập thuộc tính có sẵn của mảng.

### Mảng nhiều chiều (Multidimensional Array)
- **Khai báo mảng hai chiều**: Mảng nhiều chiều là mảng chứa nhiều hàng và cột.
  - **Ví dụ**:
    ```csharp
    int[,] matrix = new int[2, 3] { { 1, 2, 3 }, { 4, 5, 6 } };
    ```
  - **Giải thích**: `matrix` là một mảng hai chiều với 2 hàng và 3 cột.

- **Truy cập phần tử trong mảng nhiều chiều**:
  - **Ví dụ**:
    ```csharp
    Console.WriteLine(matrix[1, 2]); // In ra phần tử ở hàng thứ 2, cột thứ 3: 6
    ```

- **Khai báo mảng ba chiều**: Ngoài mảng hai chiều, bạn cũng có thể tạo mảng ba chiều.
  - **Ví dụ**:
    ```csharp
    int[,,] threeDArray = new int[2, 2, 2] { { { 1, 2 }, { 3, 4 } }, { { 5, 6 }, { 7, 8 } } };
    Console.WriteLine(threeDArray[1, 1, 0]); // In ra giá trị: 7
    ```

### Lặp qua các phần tử trong mảng
- **Sử dụng vòng lặp `for`**:
  - **Ví dụ**:
    ```csharp
    for (int i = 0; i < numbers.Length; i++)
    {
        Console.WriteLine(numbers[i]);
    }
    ```
  - **Giải thích**: Sử dụng vòng lặp `for` để lặp qua tất cả các phần tử của mảng. `Length` của mảng được đánh giá rất nhanh và an toàn khi sử dụng trong vòng lặp.

- **Sử dụng vòng lặp `foreach`**:
  - **Ví dụ**:
    ```csharp
    foreach (int number in numbers)
    {
        Console.WriteLine(number);
    }
    ```
  - **Giải thích**: `foreach` là cách tiện lợi để lặp qua tất cả các phần tử trong mảng mà không cần biết chỉ số.

- **Lặp qua mảng nhiều chiều**:
  - **Ví dụ**:
    ```csharp
    for (int i = 0; i < matrix.GetLength(0); i++)
    {
        for (int j = 0; j < matrix.GetLength(1); j++)
        {
            Console.WriteLine(matrix[i, j]);
        }
    }
    ```
  - **Giải thích**: Sử dụng hai vòng lặp `for` để lặp qua từng phần tử của mảng hai chiều. `GetLength(dimension)` trả về số phần tử trong chiều được chỉ định.

## Danh sách (List)
### Giới thiệu về `List<T>`
- **List** là một cấu trúc dữ liệu động cho phép thêm, xóa và cập nhật các phần tử một cách linh hoạt hơn so với mảng.
  - **Ví dụ**:
    ```csharp
    List<string> fruits = new List<string>() { "Apple", "Banana", "Cherry" };
    ```
  - **Giải thích**: `List` cho phép quản lý các phần tử một cách linh hoạt, và bạn có thể thêm, xóa, hoặc thay đổi các phần tử dễ dàng.

### Thao tác với danh sách
- **Thêm phần tử**: Sử dụng phương thức `Add()` để thêm phần tử vào danh sách.
  - **Ví dụ**:
    ```csharp
    fruits.Add("Orange");
    ```
- **Thêm nhiều phần tử cùng lúc**: Sử dụng `AddRange()` để thêm nhiều phần tử vào danh sách.
  - **Ví dụ**:
    ```csharp
    fruits.AddRange(new List<string>() { "Grapes", "Mango" });
    ```

- **Xóa phần tử**: Sử dụng `Remove()` hoặc `RemoveAt()` để xóa phần tử.
  - **Ví dụ**:
    ```csharp
    fruits.Remove("Banana"); // Xóa phần tử "Banana"
    fruits.RemoveAt(1); // Xóa phần tử tại chỉ mục 1
    ```

- **Cập nhật phần tử**: Bạn có thể truy cập phần tử thông qua chỉ mục và gán giá trị mới.
  - **Ví dụ**:
    ```csharp
    fruits[0] = "Pineapple";
    ```

- **Chèn phần tử vào vị trí cụ thể**: Sử dụng `Insert()` để chèn phần tử vào một vị trí xác định.
  - **Ví dụ**:
    ```csharp
    fruits.Insert(1, "Kiwi"); // Chèn "Kiwi" vào vị trí thứ 2
    ```

### Độ dài của danh sách
- **Sử dụng thuộc tính `Count`**: Thuộc tính `Count` của `List` để lấy số lượng phần tử hiện tại trong danh sách.
  - **Ví dụ**:
    ```csharp
    int numberOfFruits = fruits.Count;
    Console.WriteLine("Số lượng trái cây trong danh sách: " + numberOfFruits);
    ```
  - **Hiệu suất**: `Count` của `List` có chi phí thấp vì nó lưu trữ sẵn số lượng phần tử và không cần tính toán lại như với mảng.

### Sự khác biệt giữa Mảng và Danh sách
- **Kích thước**: Mảng có kích thước cố định, trong khi `List` có thể thay đổi kích thước linh hoạt.
- **Thao tác**: `List` cung cấp nhiều phương thức hữu ích để thao tác với dữ liệu như `Add()`, `Remove()`, `Contains()`, `Clear()`.

### Các phương thức phổ biến trong `List`
- **Add()**: Thêm một phần tử vào cuối danh sách.
- **AddRange()**: Thêm một tập hợp các phần tử vào cuối danh sách.
- **Remove()**: Xóa phần tử đầu tiên tìm thấy có giá trị bằng với giá trị cho trước.
- **RemoveAt()**: Xóa phần tử tại chỉ mục xác định.
- **Contains()**: Kiểm tra xem danh sách có chứa một phần tử cụ thể hay không.
  - **Ví dụ**:
    ```csharp
    if (fruits.Contains("Apple"))
    {
        Console.WriteLine("Danh sách có chứa Apple");
    }
    ```
- **Clear()**: Xóa tất cả các phần tử trong danh sách.
  - **Ví dụ**:
    ```csharp
    fruits.Clear();
    Console.WriteLine("Danh sách đã bị xóa toàn bộ.");
    ```
- **Sort()**: Sắp xếp các phần tử trong danh sách.
  - **Ví dụ**:
    ```csharp
    fruits.Sort();
    Console.WriteLine("Danh sách sau khi sắp xếp:");
    foreach (string fruit in fruits)
    {
        Console.WriteLine(fruit);
    }
    ```

### Hiệu suất: `Count` vs `Length`
- **`Length`**: Sử dụng cho mảng và trả về số phần tử trong mảng. Độ phức tạp là O(1) và rất nhanh vì giá trị này được lưu trữ cố định trong bộ nhớ của mảng.
- **`Count`**: Sử dụng cho danh sách (`List`) và trả về số phần tử trong danh sách. `Count` cũng có độ phức tạp O(1) vì nó lưu trữ sẵn số lượng phần tử và không cần tính toán lại. `Count` có chi phí thấp và thích hợp cho các thao tác với danh sách thay đổi thường xuyên.

## Ví dụ nâng cao
- **Quản lý danh sách các vật nuôi bằng mảng hoặc danh sách**:
  - **Mảng**:
    ```csharp
    string[] pets = { "Dog", "Cat", "Parrot" };
    for (int i = 0; i < pets.Length; i++)
    {
        Console.WriteLine(pets[i]);
    }
    ```
  - **Danh sách**:
    ```csharp
    List<string> petsList = new List<string>() { "Dog", "Cat", "Parrot" };
    petsList.Add("Rabbit");
    petsList.Insert(1, "Fish");
    foreach (string pet in petsList)
    {
        Console.WriteLine(pet);
    }
    ```

- **Tính toán chỉ số cho từng vật nuôi và lưu trữ dữ liệu bằng mảng hoặc danh sách**:
  - **Ví dụ**: Tạo danh sách để quản lý cân nặng của các vật nuôi.
    ```csharp
    List<double> petWeights = new List<double>() { 5.5, 3.2, 2.8 };
    petWeights.Add(4.1);
    petWeights.Sort();
    foreach (double weight in petWeights)
    {
        Console.WriteLine("Cân nặng của vật nuôi: " + weight);
    }
    ```
  - **Mảng nhiều chiều để lưu trữ cân nặng theo tháng**:
    ```csharp
    double[,] monthlyWeights = new double[3, 4] { { 5.5, 5.6, 5.8, 5.9 }, { 3.2, 3.3, 3.5, 3.7 }, { 2.8, 2.9, 3.0, 3.1 } };
    for (int pet = 0; pet < monthlyWeights.GetLength(0); pet++)
    {
        Console.WriteLine("Cân nặng của vật nuôi " + (pet + 1) + ":");
        for (int month = 0; month < monthlyWeights.GetLength(1); month++)
        {
            Console.WriteLine("  Tháng " + (month + 1) + ": " + monthlyWeights[pet, month]);
        }
    }
    ```

## Bài tập thực hành
1. **Bài tập 1**: Khai báo một mảng số nguyên gồm 10 phần tử. Nhập các giá trị từ bàn phím và in ra tổng của tất cả các phần tử trong mảng.
2. **Bài tập 2**: Tạo một mảng hai chiều để lưu trữ điểm của học sinh trong các môn học. Tính và in ra điểm trung bình của mỗi học sinh.
3. **Bài tập 3**: Viết chương trình quản lý danh sách tên các thành viên trong lớp bằng `List<string>`. Cho phép người dùng thêm, xóa và cập nhật tên thành viên.
4. **Bài tập 4**: Tạo một danh sách `List<int>` lưu trữ tuổi của các thành viên trong gia đình. Tính và in ra tuổi trung bình.
5. **Bài tập 5**: Sử dụng mảng để tính và in ra giá trị lớn nhất và nhỏ nhất trong mảng số nguyên.
6. **Bài tập 6**: Tạo một danh sách `List<double>` lưu trữ chiều cao của các học sinh trong lớp. Sắp xếp danh sách và in ra chiều cao của học sinh cao nhất và thấp nhất.
7. **Bài tập 7**: Viết chương trình yêu cầu người dùng nhập vào một mảng hai chiều chứa số lượng sản phẩm bán ra của các cửa hàng trong từng tháng. Tính tổng số lượng sản phẩm bán ra cho mỗi cửa hàng.
8. **Bài tập 8**: Tạo một mảng ba chiều để lưu trữ thông tin nhiệt độ của các thành phố trong 4 mùa. Tính nhiệt độ trung bình cho mỗi thành phố.
9. **Bài tập 9**: Viết chương trình sử dụng danh sách `List<string>` để lưu trữ danh sách các môn học. Yêu cầu người dùng nhập vào các môn học, sau đó tìm và in ra chỉ mục của môn học mà người dùng yêu cầu.
10. **Bài tập 10**: Tạo một danh sách `List<int>` để lưu trữ điểm của các học sinh. Tìm và in ra điểm cao nhất và thấp nhất.
11. **Bài tập 11**: Sử dụng `List<string>` để quản lý tên các nhân viên trong công ty. Viết chương trình cho phép thêm, xóa, và tìm kiếm tên nhân viên.
12. **Bài tập 12**: Tạo một danh sách `List<double>` để lưu trữ cân nặng của các vật nuôi. Yêu cầu người dùng nhập vào cân nặng mới và cập nhật danh sách, sau đó tính và in ra cân nặng trung bình.
13. **Bài tập 13**: Tạo một mảng nhiều chiều để lưu trữ điểm số của học sinh trong các môn học trong nhiều học kỳ. Tính và in ra điểm tổng kết cho mỗi môn học.
14. **Bài tập 14**: Tạo một danh sách `List<string>` để lưu trữ tên các quốc gia. Cho phép người dùng nhập vào tên quốc gia và kiểm tra xem quốc gia đó có nằm trong danh sách hay không.
15. **Bài tập 15**: Viết chương trình yêu cầu người dùng nhập vào một danh sách các số nguyên và sử dụng vòng lặp để in ra tất cả các số chẵn trong danh sách.
16. **Bài tập 16**: Tạo một mảng hai chiều để lưu trữ doanh thu của các chi nhánh trong từng quý. Tính tổng doanh thu của tất cả các chi nhánh.
17. **Bài tập 17**: Tạo một danh sách `List<int>` lưu trữ số lượng sách bán ra trong từng tháng. Tính tổng và giá trị trung bình của số lượng sách bán ra.
18. **Bài tập 18**: Tạo một mảng ba chiều để lưu trữ số lượng khách hàng ghé thăm cửa hàng trong từng giờ của các ngày trong tuần. Tính và in ra số lượng khách hàng trung bình cho mỗi ngày.
19. **Bài tập 19**: Viết chương trình sử dụng danh sách `List<string>` để quản lý danh sách các khóa học online. Cho phép người dùng thêm, xóa, và tìm kiếm khóa học.
20. **Bài tập 20**: Tạo một danh sách `List<double>` lưu trữ nhiệt độ trung bình hàng ngày của một tháng. Tìm và in ra nhiệt độ cao nhất và thấp nhất của tháng đó.

Chúc các bạn học tốt :3 Gọi Bill The Dev để nghe nhạc chuông vì anh ta rất bận nhé! 
