import os
import datetime

def generate_markdown(title, description, tags, image_url, category, draft=False):
    # Lấy ngày giờ hiện tại
    current_date = datetime.datetime.now().strftime("%Y-%m-%d")
    
    # Tạo front matter
    front_matter = f"""---
        title: {title}
        published: {current_date}
        description: "{description}"
        tags: {tags}
        image: "{image_url}"
        category: {category}
        draft: {str(draft).lower()}
        ---
        """
    # Tạo nội dung file markdown (có thể thêm phần nội dung khác sau front matter)
    content = front_matter + f"\n**Nội dung bài viết về {title} sẽ được viết tại đây.**"
    
    # Tạo tên file từ title (dùng dấu gạch ngang thay cho dấu cách và thêm .md)
    filename = title.lower().replace(' ', '-').replace('.', '') + ".md"
    
    # Lưu file vào thư mục hiện tại
    with open(filename, "w", encoding="utf-8") as f:
        f.write(content)
    
    print(f"Đã tạo file markdown: {filename}")

# Hướng dẫn sử dụng công cụ
if __name__ == "__main__":
    title = input("Nhập tựa đề bài viết: ")
    description = input("Nhập mô tả: ")
    tags = input("Nhập tags (cách nhau bởi dấu phẩy): ")
    image_url = input("Nhập URL hình ảnh: ")
    category = input("Nhập thể loại: ")
    draft_input = input("Có phải bài viết này là draft? (y/n): ").strip().lower()
    
    # Kiểm tra nếu người dùng muốn lưu bài viết ở chế độ draft
    draft = True if draft_input == 'y' else False
    
    # Gọi hàm để tạo file Markdown
    generate_markdown(title, description, tags, image_url, category, draft)
