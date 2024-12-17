---
title: "Pet Project: TicTacToe - Xây Dựng Trò Chơi Đơn Giản Với SwiftUI"
published: 2024-12-13
description: "Hướng dẫn chi tiết tạo trò chơi TicTacToe đơn giản với SwiftUI, học cách sử dụng @State, LazyVGrid, ForEach và xử lý logic trò chơi một cách dễ hiểu."
tags: [SwiftUI, TicTacToe, Game Development, Mobile, iOS]
category: PET Project
image: "./title.png"
draft: false
---

# Pet Project: TicTacToe - Cùng Xây Dựng Trò Chơi Kinh Điển Với SwiftUI

Hi các bạn, lại là Bill The Dev đây! Có thể nhiều bạn đã nghe qua SwiftUI, framework "xịn sò" của nhà Apple nhằm phát triển UI. Nhưng bạn đã bao giờ thử dùng SwiftUI để làm game chưa?

Hôm nay, mình sẽ cùng các bạn làm một dự án PET TicTacToe và qua đó, khám phá những điều thú vị về SwiftUI cũng như đưa các bạn đến với ngôn ngữ này. Dự án này sẽ là cầu nối giúp bạn làm quen và thực hành với các khái niệm quan trọng như @State, LazyVGrid, ForEach..., tất cả sẽ được áp dụng một cách trực quan và dễ hiểu khi chúng ta cùng nhau hoàn thiện từng phần của game.
## Khởi Đầu: Thiết Lập Dự Án
Trước tiên, hãy tạo một dự án mới trong Xcode. Chọn **Single View App** template và đặt tên cho project của bạn, ví dụ: "TicTacToeSwiftUI". Đảm bảo rằng bạn đã chọn **SwiftUI** cho phần **User Interface**.

## Bước 1: Quản Lý Trạng Thái Trò Chơi với `@State`
Trái tim của bất kỳ trò chơi nào chính là **trạng thái** (state). Trong SwiftUI, `@State` là một property wrapper cho phép chúng ta khai báo các biến mà giá trị của chúng thay đổi sẽ làm cho giao diện tự động cập nhật. Hãy bắt đầu bằng việc khai báo các biến trạng thái cần thiết cho trò chơi TicTacToe:

```swift
@State private var board = Array(repeating: "", count: 9)
@State private var isXTurn = true
@State private var gameOver = false
@State private var winner: String?
```

**Giải thích chi tiết:**
*   `@State private var board = Array(repeating: "", count: 9)`:
    *   `@State`: Khai báo đây là một biến trạng thái.
    *   `private`: Biến này chỉ được sử dụng trong `ContentView`.
    *   `board`: Tên biến, đại diện cho bảng trò chơi.
    *   `Array(repeating: "", count: 9)`: Tạo một mảng 9 phần tử, mỗi phần tử là một chuỗi rỗng `""`, tượng trưng cho 9 ô trống trên bảng TicTacToe.
*   `@State private var isXTurn = true`:
    *   `isXTurn`: Biến boolean xác định lượt chơi hiện tại. `true` là lượt của X, `false` là lượt của O. Ban đầu, X sẽ đi trước.
*   `@State private var gameOver = false`:
    *   `gameOver`: Biến boolean cho biết trò chơi đã kết thúc hay chưa.
*   `@State private var winner: String?`:
    *   `winner`: Biến lưu tên người chiến thắng (X hoặc O). Kiểu `String?` (Optional String) vì có thể chưa có người thắng (giá trị `nil`).

**Tại sao lại dùng `@State`?**
SwiftUI sử dụng cơ chế **declarative programming**. Bạn chỉ cần mô tả giao diện của bạn sẽ trông như thế nào dựa trên trạng thái hiện tại. Khi trạng thái thay đổi (ví dụ: người chơi đánh dấu vào một ô), SwiftUI sẽ tự động tính toán và cập nhật lại giao diện một cách hiệu quả. `@State` chính là chìa khóa để SwiftUI biết được khi nào cần cập nhật.

## Bước 2: Xây Dựng Giao Diện Người Dùng với SwiftUI Views
Giao diện của trò chơi TicTacToe rất đơn giản:

1. Hiển thị lượt chơi hiện tại.
2. Bảng 3x3 cho phép người chơi đánh dấu.
3. Thông báo khi trò chơi kết thúc.
4. Nút "Chơi lại".
5. Credit (không bắt buộc nhưng làm cho ứng dụng của bạn trông chuyên nghiệp hơn)

Hãy cùng xây dựng từng phần với các **Views** trong SwiftUI:

### 2.1 Hiển thị lượt chơi
```swift
VStack {
    Text(isXTurn ? "X" : "O")
        .font(.system(size: 100))
        .fontWeight(.bold)
        .foregroundColor(.white)
        .shadow(color: .white.opacity(0.3), radius: 10, x: 5, y: 5)
        .padding()

    // ... phần còn lại của giao diện
}
```

**Giải thích:**
*   `VStack`: Một container sắp xếp các views con theo chiều dọc.
*   `Text(isXTurn ? "X" : "O")`: Hiển thị "X" nếu `isXTurn` là `true`, ngược lại hiển thị "O". Đây là toán tử điều kiện (ternary operator) trong Swift.
*   `.font(.system(size: 100))`: Đặt cỡ chữ là 100.
*   `.fontWeight(.bold)`: In đậm chữ.
*   `.foregroundColor(.white)`: Đặt màu chữ là trắng.
*   `.shadow(...)`: Thêm hiệu ứng đổ bóng.
*   `.padding()`: Thêm khoảng đệm xung quanh `Text`.

### 2.2 Tạo tiêu đề "Tic Tac Toe"
```swift
VStack {
    // ... hiển thị lượt chơi
    
    Text("Tic Tac Toe")
        .font(.largeTitle)
        .fontWeight(.bold)
        .foregroundColor(.white)
        .padding()
        .background(Color.orange)
        .cornerRadius(20)
        .shadow(radius: 10)

    // ... phần còn lại của giao diện
}
```

**Giải thích:**
*   `Text("Tic Tac Toe")`: Hiển thị dòng chữ "Tic Tac Toe".
*   `.font(.largeTitle)`: Sử dụng phông chữ tiêu đề lớn.
*   `.fontWeight(.bold)`: In đậm chữ.
*   `.foregroundColor(.white)`: Đặt màu chữ là trắng.
*   `.padding()`: Thêm khoảng đệm.
*   `.background(Color.orange)`: Đặt màu nền là cam.
*   `.cornerRadius(20)`: Bo tròn các góc với bán kính 20.
*   `.shadow(radius: 10)`: Thêm hiệu ứng đổ bóng.

### 2.3 Xây dựng bảng trò chơi 3x3 với `LazyVGrid` và `ForEach`
Đây là phần quan trọng nhất. Chúng ta sẽ sử dụng `LazyVGrid` để tạo bố cục lưới 3x3 và `ForEach` để lặp qua các ô trong bảng.

```swift
LazyVGrid(columns: Array(repeating: GridItem(.flexible()), count: 3), spacing: 10) {
    ForEach(0..<9) { index in
        ZStack {
            Rectangle()
                .foregroundColor(.gray.opacity(0.3))
                .border(Color.orange, width: 5)
                .cornerRadius(10)
                .shadow(radius: 10)
                .frame(width: 100, height: 100)

            Text(board[index])
                .font(.system(size: 86))
                .fontWeight(.heavy)
                .foregroundColor(.white)
        }
        .onTapGesture {
            playerMove(at: index)
        }
    }
}
```

**Giải thích chi tiết:**
*   `LazyVGrid(columns: Array(repeating: GridItem(.flexible()), count: 3), spacing: 10)`:
    *   `LazyVGrid`: Tạo một lưới linh hoạt, các ô chỉ được render khi cần thiết (khi cuộn đến).
    *   `columns: Array(repeating: GridItem(.flexible()), count: 3)`: Định nghĩa 3 cột có chiều rộng linh hoạt (tự động chia đều không gian).
    *   `spacing: 10`: Khoảng cách giữa các ô là 10.
*   `ForEach(0..<9) { index in ... }`:
    *   `ForEach`: Vòng lặp để tạo ra 9 ô (từ 0 đến 8).
    *   `index`: Biến chỉ số của mỗi ô.
*   `ZStack { ... }`:
    *   `ZStack`: Xếp chồng các views lên nhau. Ở đây, chúng ta xếp chồng một `Rectangle` (hình nền) và một `Text` (hiển thị X hoặc O).
*   `Rectangle() ...`:
    *   Tạo một hình chữ nhật.
    *   `.foregroundColor(.gray.opacity(0.3))`: Màu nền xám nhạt.
    *   `.border(Color.orange, width: 5)`: Viền màu cam, độ dày 5.
    *   `.cornerRadius(10)`: Bo tròn góc.
    *   `.shadow(radius: 10)`: Đổ bóng.
    *   `.frame(width: 100, height: 100)`: Kích thước ô vuông 100x100.
*   `Text(board[index]) ...`:
    *   Hiển thị giá trị của ô tương ứng trong mảng `board` (X, O, hoặc "").
    *   `.font(.system(size: 86))`: Cỡ chữ lớn.
    *   `.fontWeight(.heavy)`: In đậm.
    *   `.foregroundColor(.white)`: Màu chữ trắng.
*   `.onTapGesture { playerMove(at: index) }`:
    *   Thêm hành động khi người dùng chạm vào ô.
    *   `playerMove(at: index)`: Gọi hàm xử lý nước đi, truyền vào vị trí ô được chạm.

## Bước 3: Xử Lý Logic Trò Chơi
Bây giờ, hãy thêm các hàm để xử lý logic khi người chơi thực hiện nước đi và kiểm tra người chiến thắng:

### 3.1 Hàm `playerMove(at:)`
```swift
func playerMove(at index: Int) {
    if board[index] != "" || gameOver {
        return // Ô đã được đánh hoặc trò chơi đã kết thúc
    }

    board[index] = isXTurn ? "X" : "O" // Đánh dấu X hoặc O vào ô
    checkWinner() // Kiểm tra người chiến thắng
    isXTurn.toggle() // Chuyển lượt chơi
}
```

**Giải thích:**
1. `if board[index] != "" || gameOver { return }`: Kiểm tra xem ô đã được đánh dấu chưa (`board[index] != ""`) hoặc trò chơi đã kết thúc chưa (`gameOver`). Nếu một trong hai điều kiện đúng, hàm sẽ kết thúc ngay lập tức (`return`).
2. `board[index] = isXTurn ? "X" : "O"`: Gán giá trị "X" hoặc "O" vào ô `board[index]` dựa trên lượt chơi hiện tại (`isXTurn`).
3. `checkWinner()`: Gọi hàm để kiểm tra xem có người chiến thắng sau nước đi này hay không.
4. `isXTurn.toggle()`: Đảo ngược giá trị của `isXTurn` (true thành false và ngược lại) để chuyển lượt chơi.

### 3.2 Hàm `checkWinner()`
```swift
func checkWinner() {
    let winPatterns: [[Int]] = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Hàng ngang
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Hàng dọc
        [0, 4, 8], [2, 4, 6]             // Đường chéo
    ]

    for pattern in winPatterns {
        let p1 = board[pattern[0]]
        let p2 = board[pattern[1]]
        let p3 = board[pattern[2]]

        if p1 == p2 && p2 == p3 && p1 != "" {
            winner = p1
            gameOver = true
            return // Tìm thấy người thắng, kết thúc hàm
        }
    }

    // Kiểm tra hòa (nếu không còn ô trống)
    if board.allSatisfy({ $0 != "" }) {
        gameOver = true
    }
}
```

**Giải thích:**
1. `let winPatterns: [[Int]] = ...`: Định nghĩa một mảng các mẫu chiến thắng. Mỗi mẫu là một mảng gồm 3 chỉ số tương ứng với 3 ô liên tiếp tạo thành một hàng ngang, hàng dọc, hoặc đường chéo.
2. `for pattern in winPatterns { ... }`: Duyệt qua từng mẫu chiến thắng.
3. `let p1 = board[pattern[0]]`, `let p2 = board[pattern[1]]`, `let p3 = board[pattern[2]]`: Lấy giá trị của 3 ô trong mẫu hiện tại.
4. `if p1 == p2 && p2 == p3 && p1 != "" { ... }`: Kiểm tra xem 3 ô có cùng giá trị (X hoặc O) và khác rỗng hay không.
    *   Nếu đúng, gán người chiến thắng (`winner = p1`), đặt `gameOver = true`, và kết thúc hàm (`return`).
5. `if board.allSatisfy({ $0 != "" }) { ... }`: Nếu không tìm thấy người chiến thắng, kiểm tra xem tất cả các ô đã được đánh dấu chưa (`board.allSatisfy({ $0 != "" })`). Nếu đúng, đặt `gameOver = true` (hòa).

### 3.3 Hàm `resetGame()` 
```swift
func resetGame() {
    board = Array(repeating: "", count: 9) // Xóa bảng
    isXTurn = true // X đi trước
    gameOver = false // Trò chơi bắt đầu lại
    winner = nil // Xóa người thắng
}
```

**Giải thích:**
Hàm này đơn giản là đặt lại các biến trạng thái về giá trị ban đầu để bắt đầu một trò chơi mới.

## Bước 4: Hoàn Thiện Giao Diện và Thêm Chức Năng
### 4.1 Hiển thị thông báo khi trò chơi kết thúc
```swift
.alert(isPresented: $gameOver) {
    Alert(title: Text(winner == nil ? "Hòa!" : "\(winner!) chiến thắng!"),
          dismissButton: .default(Text("Chơi lại")) {
            resetGame()
          })
}
```

**Giải thích:**
*   `.alert(isPresented: $gameOver) { ... }`: Hiển thị một hộp thoại cảnh báo khi `gameOver` chuyển thành `true`.
*   `Alert(title: Text(...), dismissButton: .default(Text("Chơi lại")) { ... })`: Tạo hộp thoại cảnh báo.
    *   `title: Text(winner == nil ? "Hòa!" : "\(winner!) chiến thắng!")`: Hiển thị tiêu đề thông báo kết quả.
    *   `dismissButton: .default(Text("Chơi lại")) { resetGame() }`: Nút "Chơi lại" sẽ gọi hàm `resetGame()` khi được nhấn.

### 4.2 Thêm thông tin Credit
```swift
HStack {
    Spacer()
    Text("Credit: ")
        .foregroundColor(.orange)
        .fontWeight(.bold)

    Text("Bill")
        .foregroundColor(.orange)
        .fontWeight(.bold)

    Text("The")
        .foregroundColor(.gray)
        .fontWeight(.bold)

    Text("Dev")
        .foregroundColor(Color.gray.opacity(0.7))
        .fontWeight(.bold)
}
.padding()
```

**Giải thích:**
*   `HStack`: Sắp xếp các `Text` theo chiều ngang.
*   `Spacer()`: Đẩy các `Text` về phía bên phải.
*   Các `Text` hiển thị thông tin Credit với màu sắc và độ đậm khác nhau.

### 4.3 Chỉnh sửa giao diện
Bạn có thể tùy chỉnh giao diện theo ý thích, ví dụ như thay đổi màu nền:
```swift
.background(Color.black.edgesIgnoringSafeArea(.all))
```
Thêm dòng này vào cuối `VStack` chính để đặt màu nền đen cho toàn bộ màn hình.

## Tổng Kết Kiến Thức
Qua dự án TicTacToe này, bạn đã học được:

*   **`@State`**: Quản lý trạng thái trong SwiftUI và cách cập nhật giao diện tự động.
*   **`LazyVGrid`**: Tạo bố cục lưới linh hoạt.
*   **`ForEach`**: Lặp qua các phần tử để tạo views.
*   **`ZStack`, `VStack`, `HStack`**: Các container để sắp xếp views.
*   **`Text`, `Rectangle`**: Các views cơ bản để hiển thị nội dung.
*   **Xử lý sự kiện**: Sử dụng `.onTapGesture` để xử lý tương tác của người dùng.
*   **Logic trò chơi**: Cách kiểm tra điều kiện thắng/thua/hòa.
*   **`Alert`**: Hiển thị thông báo cho người dùng.
*   **Tùy chỉnh giao diện**: Thay đổi màu sắc, font chữ, thêm shadow, border, background, v.v.

## Full Source Code
```swift
import SwiftUI

struct ContentView: View {
    @State private var board = Array(repeating: "", count: 9)
    @State private var isXTurn = true
    @State private var gameOver = false
    @State private var winner: String?

    var body: some View {
        VStack {
            Text(isXTurn ? "X" : "O")
                .font(.system(size: 100))
                .fontWeight(.bold)
                .foregroundColor(.white)
                .shadow(color: .white.opacity(0.3), radius: 10, x: 5, y: 5)
                .padding()

            Text("Tic Tac Toe")
                .font(.largeTitle)
                .fontWeight(.bold)
                .foregroundColor(.white)
                .padding()
                .background(Color.orange)
                .cornerRadius(20)
                .shadow(radius: 10)

            LazyVGrid(columns: Array(repeating: GridItem(.flexible()), count: 3), spacing: 10) {
                ForEach(0..<9) { index in
                    ZStack {
                        Rectangle()
                            .foregroundColor(.gray.opacity(0.3))
                            .border(Color.orange, width: 5)
                            .cornerRadius(10)
                            .shadow(radius: 10)
                            .frame(width: 100, height: 100)

                        Text(board[index])
                            .font(.system(size: 86))
                            .fontWeight(.heavy)
                            .foregroundColor(.white)
                    }
                    .onTapGesture {
                        playerMove(at: index)
                    }
                }
            }

            Spacer()

            HStack {
                Spacer()
                Text("Credit: ")
                    .foregroundColor(.orange)
                    .fontWeight(.bold)

                Text("Bill")
                    .foregroundColor(.orange)
                    .fontWeight(.bold)

                Text("The")
                    .foregroundColor(.gray)
                    .fontWeight(.bold)

                Text("Dev")
                    .foregroundColor(Color.gray.opacity(0.7))
                    .fontWeight(.bold)
            }
            .padding()
        }
        .alert(isPresented: $gameOver) {
            Alert(title: Text(winner == nil ? "Hòa!" : "\(winner!) chiến thắng!"),
                  dismissButton: .default(Text("Chơi lại")) {
                    resetGame()
                  })
        }
        .background(Color.black.edgesIgnoringSafeArea(.all))
    }

    func playerMove(at index: Int) {
        if board[index] != "" || gameOver {
            return
        }

        board[index] = isXTurn ? "X" : "O"
        checkWinner()
        isXTurn.toggle()
    }

    func checkWinner() {
        let winPatterns: [[Int]] = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ]

        for pattern in winPatterns {
            let p1 = board[pattern[0]]
            let p2 = board[pattern[1]]
            let p3 = board[pattern[2]]

            if p1 == p2 && p2 == p3 && p1 != "" {
                winner = p1
                gameOver = true
                return
            }
        }

        if board.allSatisfy({ $0 != "" }) {
            gameOver = true
        }
    }

    func resetGame() {
        board = Array(repeating: "", count: 9)
        isXTurn = true
        gameOver = false
        winner = nil
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
```

Chúc bạn thành công với dự án TicTacToe của mình và tiếp tục khám phá thêm nhiều tính năng thú vị với SwiftUI! Hãy thử thách bản thân bằng cách thêm các feature mới như chơi với máy, tính điểm, hoặc làm UI đẹp hơn. 
