---
title: "Pet Project: TicTacToe - Xây Dựng Trò Chơi Đơn Giản Với SwiftUI"
published: 2024-12-13
description: "Hướng dẫn tạo trò chơi TicTacToe đơn giản với SwiftUI, học cách sử dụng @State, LazyVGrid, ForEach và xử lý logic trò chơi."
tags: [SwiftUI, TicTacToe, Game Development, Mobile]
category: PET Project
image: "./title.png"
draft: false
---


# Pet Project: TicTacToe

Trong bài viết này, chúng ta sẽ tạo một trò chơi TicTacToe đơn giản sử dụng SwiftUI. Trò chơi sẽ có giao diện thân thiện, cho phép hai người chơi thay phiên đánh dấu X hoặc O trên bảng 3x3. Trò chơi sẽ có khả năng xác định người chiến thắng, hiển thị lượt chơi, và cung cấp một nút để bắt đầu lại trò chơi. Đây là cơ hội tuyệt vời để làm quen với các khái niệm cơ bản của SwiftUI như `@State`, `LazyVGrid`, `ForEach`, và các thao tác xử lý logic trong một ứng dụng.

## Thiết Lập Các Biến Trạng Thái

Đầu tiên, chúng ta cần khai báo một số biến trạng thái để quản lý trò chơi. Sử dụng `@State` trong SwiftUI giúp ta theo dõi các thay đổi của trạng thái trong ứng dụng.

```swift
@State private var board = Array(repeating: "", count: 9)  // Lưu trữ các nước đi
@State private var isXTurn = true  // Biến xác định lượt chơi
@State private var gameOver = false  // Kiểm tra xem trò chơi đã kết thúc chưa
@State private var winner: String?  // Lưu tên người chiến thắng
```

## Xây Dựng Giao Diện Người Dùng

Trong SwiftUI, chúng ta sẽ sử dụng các **Views** để xây dựng giao diện. Đầu tiên, tạo một phần hiển thị lượt chơi, sau đó là bảng trò chơi 3x3:

```swift
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
}

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

## Xử Lý Logic Trò Chơi

Sau khi xây dựng giao diện, tiếp theo là xử lý logic khi người chơi thực hiện các nước đi.

```swift
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
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
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
```

## Hoàn Thành Giao Diện

Chúng ta cũng có thể thêm thông tin Credit và chỉnh sửa giao diện để làm cho trò chơi sinh động hơn:

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

## Kết Luận

Với các bước trên, bạn đã hoàn thành một trò chơi TicTacToe đơn giản trong SwiftUI. Bạn có thể sử dụng dự án này để học thêm về cách SwiftUI quản lý giao diện và trạng thái, đồng thời nâng cao kỹ năng phát triển ứng dụng iOS. Chúc bạn thành công!

Bạn có thể copy toàn bộ code chuẩn đã hoàn thiện tại đây:
```swift
import SwiftUI

struct ContentView: View {
    // Biến trạng thái cho trò chơi
    @State private var board = Array(repeating: "", count: 9)  // Lưu trữ các nước đi
    @State private var isXTurn = true  // Biến xác định lượt chơi
    @State private var gameOver = false  // Kiểm tra xem trò chơi đã kết thúc chưa
    @State private var winner: String?  // Lưu tên người chiến thắng
    
    var body: some View {
        VStack {
            // Hiển thị lượt chơi
            Text(isXTurn ? "X" : "O")
                .font(.system(size: 100))
                .fontWeight(.bold)
                .foregroundColor(.white)
                .shadow(color: .white.opacity(0.3), radius: 10, x: 5, y: 5)
                .padding()

            // Tiêu đề trò chơi
            Text("Tic Tac Toe")
                .font(.largeTitle)
                .fontWeight(.bold)
                .foregroundColor(.white)
                .padding()
                .background(Color.orange)
                .cornerRadius(20)
                .shadow(radius: 10)

            // Bảng trò chơi 3x3
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
            
            // Hiển thị Credit
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
                  dismissButton: .default(Text("OK")) {
                    resetGame()
                  })
        }
        .background(Color.black.edgesIgnoringSafeArea(.all))
    }

    // Hàm xử lý nước đi của người chơi
    func playerMove(at index: Int) {
        // Nếu ô đã có giá trị hoặc trò chơi đã kết thúc thì không làm gì cả
        if board[index] != "" || gameOver {
            return
        }
        
        board[index] = isXTurn ? "X" : "O"
        checkWinner()
        isXTurn.toggle()
    }

    // Hàm kiểm tra người chiến thắng
    func checkWinner() {
        let winPatterns: [[Int]] = [
            [0,1,2], [3,4,5], [6,7,8],
            [0,3,6], [1,4,7], [2,5,8],
            [0,4,8], [2,4,6]
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
        
        // Kiểm tra hòa (nếu không còn ô trống)
        if board.allSatisfy({ $0 != "" }) {
            winner = nil
            gameOver = true
        }
    }

    // Hàm reset trò chơi
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
