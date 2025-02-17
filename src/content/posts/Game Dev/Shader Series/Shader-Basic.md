---
title: "Tạo Shader Trong Unity với HLSL: Hướng Dẫn Chi Tiết Cho Người Mới Bắt Đầu"
published: 2024-12-06
description: "Hướng dẫn chi tiết cách xây dựng shader trong Unity từ cơ bản đến nâng cao, bao gồm các tính năng như color, metallic, smoothness và base map."
tags:
  - Unity
  - Shader
  - Game Development
  - Graphics
  - Hlsl
category: "Tutorial"
image: "./shader.png"
author: "Bill The Dev"
license: "CC BY-NC 4.0"
draft: false
---

# **Căn Bản Về Shader: Hiểu Về Cấu Trúc Shader Và Cách Xây Dựng Một Shader Căn Bản Trong Unity Với HLSL**
Khi bạn chơi game và bắt đầu đắm chìm trong một thế giới chân thực đến mức ấn tượng, từ những ánh sáng rực rỡ, bóng đổ chân thật đến những làn sóng vỗ nhẹ vào bờ, bạn có bao giờ tự hỏi làm sao để tạo ra những hiệu ứng này? Làm sao chúng có thể trông thực tế đến vậy, từ những vật liệu metallic bóng loáng cho tới những làn nước trong vắt có vệt loang sáng, ánh xạ đẹp lung linh? Bài viết này sẽ có câu trả lời cho bạn, chúng chính là **shader**.

Đa số mọi người nghĩ rằng shader là một thứ gì đó phức tạp, cao cấp và khó hiểu, và thực tế thì cũng đúng một phần. Tuy nhiên, shader thực sự là một công cụ cực kỳ mạnh mẽ và hữu ích mà bất kỳ game developer nào cũng nên biết dù. Nhiều người thường bỏ qua việc tìm hiểu về shader và sau đó gặp phải rất nhiều khó khăn khi tối ưu hóa game hoặc tạo ra các hiệu ứng đẹp mắt và vẫn giữ được performance tốt. Vậy shader thực chất là gì? Tại sao nó lại quan trọng đến vậy trong game development? Và làm thế nào để bạn có thể tự tạo ra một shader đơn giản trong Unity với HLSL (High-Level Shading Language)? Hãy cùng tìm hiểu với tôi trong bài viết này nhé!

## **Shader Là Gì? Tại Sao Shader Quan Trọng?**
Nếu coi nhà phát triển game như những phù thủy tài ba, thì shader chính là phép thuật kỳ diệu mà chúng ta dùng để thổi hồn vào những thế giới ảo mà mình tạo ra. Qua từng dòng mã tinh tế, đầy logic, shader cho phép ta khắc họa mọi thứ, từ ánh sáng rực rỡ, bóng đổ mềm mại, cho đến những bề mặt kim loại phản chiếu hoàn hảo, hay những yếu tố thiên nhiên khó có thể tái hiện như mặt nước, dung nham… 

Shader là công cụ giúp biến những chi tiết tưởng chừng như nhỏ nhặt, như những làn sóng biển, mặt cỏ, thành những yếu tố sống động, có hồn trong thế giới ảo. Nó không chỉ cho phép người chơi nhìn thấy, mà còn cảm nhận được sự chân thật của mỗi khoảnh khắc trong trò chơi. Đó chính là phép màu thực sự của shader, nếu bạn đã từng chơi game, chắc chắn chúng ít nhất một lần đã mang đến những trải nghiệm khó quên cho chúng ta. 
![Portal Shader](https://preview.redd.it/the-portals-arent-working-is-this-supposed-to-happen-v0-rbhjla7538n91.jpg?width=1080&crop=smart&auto=webp&s=1693647b804f32aae58992dbc37f650e72e0d82b)

### **Tại sao game developer nên biết về shader?**

Shader không chỉ là công cụ giúp tạo ra những hiệu ứng đẹp mắt mà còn là chìa khóa giúp tối ưu hóa hiệu suất đồ họa trong game. Một shader được tối ưu tốt có thể giảm tải cho CPU bằng cách chuyển các phép toán phức tạp sang GPU, nơi mà các phép toán này có thể được xử lý song song và nhanh chóng hơn. Điều này đặc biệt quan trọng trong game development, đặc biệt là khi bạn làm việc trên các hệ thống có phần cứng hạn chế như điện thoại di động, VR, hoặc các máy console.

Bằng cách hiểu và sử dụng shader, game developer có thể nâng cao khả năng sáng tạo, từ việc tạo ra những hiệu ứng đơn giản như thay đổi màu sắc, cho đến những hiệu ứng phức tạp như mô phỏng nước, gió, hay các hiệu ứng vật lý khác. Shader không chỉ làm cho game trở nên đẹp hơn mà còn giúp tối ưu hóa hiệu suất, khiến trò chơi chạy mượt mà hơn trên mọi nền tảng.

Một ví dụ điển hình là việc sử dụng **interior mapping** trong thiết kế game. Nếu như phải mô hình hóa từng đối tượng nội thất trong một tòa nhà, điều này sẽ ngốn rất nhiều tài nguyên để render chỉ một cảnh duy nhất. Thay vì vậy, người ta đã phát triển kỹ thuật mapping các tấm **texture 2D** lên bề mặt kính, tạo cảm giác như người chơi có thể nhìn vào bên trong, trong khi thực tế, không có gì bên trong cả. Đây là một ví dụ về việc sử dụng shader để tối ưu hóa việc render và giảm tải cho hệ thống, mà vẫn mang đến trải nghiệm thị giác tuyệt vời. 
![Iterior Mapping](https://cdn.80.lv/api/upload/content/81/images/5d28ad591b758/widen_1840x0.jpg)

Điển hình, kỹ thuật này cũng đã được sử dụng trong game **Spider-Man 4**, nơi mà game developer đã khéo léo áp dụng phương pháp này để tạo ra những cảnh quan chân thực, đồng thời tối ưu hóa hiệu suất. 
![Spider Man 4](https://automaton-media.com/en/wp-content/uploads/2023/12/20231201-23558-001.jpeg) 

Nhờ shader, game không chỉ trở nên đẹp mắt mà còn có thể vận hành mượt mà hơn, tạo nên trải nghiệm người chơi tuyệt vời trên nhiều nền tảng.
### **Tạo shader trong Unity: Khởi đầu từ cơ bản**

Giờ chúng ta sẽ bắt đầu xây dựng một shader đơn giản trong Unity. Cách làm này sẽ giúp bạn hiểu được cơ bản về shader, từ đó dễ dàng nâng cao hơn nữa với các tính năng phức tạp hơn. Chúng ta sẽ sử dụng **HLSL** (High-Level Shading Language), ngôn ngữ lập trình thường dùng trong Unity để viết các shader, nhằm tạo ra một vật liệu cơ bản và từ đó mở rộng ra các hiệu ứng phức tạp hơn.

Dưới đây là hướng dẫn được viết lại một cách chi tiết hơn, từng bước một, giúp bạn dễ dàng theo dõi quá trình tạo một shader đơn giản dùng để tô màu cho đối tượng trong Unity. Chúng ta sẽ bắt đầu với một **Standard Surface Shader** (dành cho Built-in Render Pipeline) và sau đó chỉnh sửa để tạo ra một shader đơn giản, chỉ áp dụng màu sắc tĩnh lên đối tượng.

---

## **Chuẩn Bị Môi Trường**

1. **Mở Unity**: Nếu bạn chưa có dự án, hãy tạo một dự án mới bằng Built-in Render Pipeline (Standard). Trong Unity Hub, chọn **3D (Core)** hoặc tương tự.  
2. **Kiểm tra Pipeline**: Đảm bảo rằng dự án của bạn không sử dụng URP hoặc HDRP. Nếu không chắc, kiểm tra trong **Project Settings > Graphics**. Built-in Render Pipeline thường là mặc định.

---

## **Bước 1: Tạo Shader Cơ Bản Sử Dụng Standard Surface Shader**

Chúng ta sẽ bắt đầu bằng cách tạo ra một shader theo mẫu chuẩn mà Unity cung cấp. Shader này sử dụng mô hình ánh sáng tiêu chuẩn (Standard Surface Shader), cho phép bạn chỉnh các thuộc tính như màu sắc, Metallic, Smoothness và Base Map.

1. **Tạo Shader Mới**:  
   - Trong Unity, chuyển đến tab **Project** (thường ở phía dưới màn hình).  
   - Nhấp chuột phải vào thư mục **Assets** hoặc thư mục con mà bạn muốn lưu shader.  
   - Chọn **Create > Shader > Standard Surface Shader**.

2. **Đặt Tên Cho Shader**:  
   - Sau khi chọn xong, Unity sẽ tạo ra một file shader mới.  
   - Đặt tên file shader là `BasicShader.shader` hoặc `BasicShader`.

3. **Mở Shader Vừa Tạo**:  
   - Nhấp đúp chuột vào file `BasicShader.shader` để mở nó bằng trình soạn thảo mã (Visual Studio hoặc VSCode).

4. **Cấu Trúc Shader Ban Đầu**:  
   Lúc này, code của shader sẽ trông như sau (đây là mẫu cơ bản Unity cung cấp):
   ```csharp
   Shader "Custom/NewSurfaceShader"
    {
        Properties
        {
            _Color ("Color", Color) = (1,1,1,1)
            _MainTex ("Albedo (RGB)", 2D) = "white" {}
            _Glossiness ("Smoothness", Range(0,1)) = 0.5
            _Metallic ("Metallic", Range(0,1)) = 0.0
        }
        SubShader
        {
            Tags { "RenderType"="Opaque" }
            LOD 200

            CGPROGRAM
            // Physically based Standard lighting model, and enable shadows on all light types
            #pragma surface surf Standard fullforwardshadows

            // Use shader model 3.0 target, to get nicer looking lighting
            #pragma target 3.0

            sampler2D _MainTex;

            struct Input
            {
                float2 uv_MainTex;
            };

            half _Glossiness;
            half _Metallic;
            fixed4 _Color;

            // Add instancing support for this shader. You need to check 'Enable Instancing' on materials that use the shader.
            // See https://docs.unity3d.com/Manual/GPUInstancing.html for more information about instancing.
            // #pragma instancing_options assumeuniformscaling
            UNITY_INSTANCING_BUFFER_START(Props)
                // put more per-instance properties here
            UNITY_INSTANCING_BUFFER_END(Props)

            void surf (Input IN, inout SurfaceOutputStandard o)
            {
                // Albedo comes from a texture tinted by color
                fixed4 c = tex2D (_MainTex, IN.uv_MainTex) * _Color;
                o.Albedo = c.rgb;
                // Metallic and smoothness come from slider variables
                o.Metallic = _Metallic;
                o.Smoothness = _Glossiness;
                o.Alpha = c.a;
            }
            ENDCG
        }
        Fallback "Standard"
    }

   ```

## **Bước 2: Tạo Shader Đơn Giản Chỉ Tô Màu (Simple Color Shader)**

Bây giờ, chúng ta sẽ đơn giản hóa shader trên để chỉ áp dụng một màu sắc tĩnh cho đối tượng, không phụ thuộc vào ánh sáng hay texture. Chúng ta chuyển từ Surface Shader sang một dạng **Vertex/Fragment Shader** đơn giản. Điều này giúp bạn hiểu rõ hơn về cấu trúc vertex/fragment và cách áp dụng màu đơn giản.

**Ta sẽ thay Đổi Nội Dung Shader**:  
   - Xóa hết toàn bộ nội dung của code đi, sau đó tạo cấu trúc sau:
```csharp
    Shader "Custom/MyBasicShader"
    {
        Properties
        {
            
        }

        SubShader
        {
            
            Pass
            {
                
                CGPROGRAM
                
                ENDCG
            }
        }

        
        Fallback "Standard"
    }
```
Đây cũng chúng là cấu trúc khung sườn căn bản của một tấm shader HLSL trong unity
1. **Shader "Custom/MyBasicShader"**:  Tên của shader, dùng chọn trong mục material so với các shader khác trong Unity.
2. **Properties**:  Khai báo các thuộc tính như màu sắc, texture, mà người dùng có thể điều chỉnh trong Inspector của Material.
3. **SubShader**:  Chứa một hoặc nhiều Pass. Unity sẽ chọn SubShader phù hợp với phần cứng của máy người dùng.
4. **Pass**:  Định nghĩa các bước vẽ (vertex shader, fragment shader). Mỗi Pass thực hiện một phần của việc vẽ đối tượng.
5. **CGPROGRAM / ENDCG**:  Mã HLSL được viết ở đây để xử lý các phép toán đồ họa (vertex/fragment shader).
6. **Fallback**:  Chỉ định shader thay thế nếu phần cứng không hỗ trợ shader chính.
Để thêm biến `color` vào shader và xử lý từng bước một, ta sẽ làm theo các bước dưới đây. Mục tiêu của chúng ta là tạo ra một biến màu mà có thể thay đổi trong quá trình shader hoạt động, đồng thời áp dụng màu cho đối tượng.
---

### **Hướng Dẫn Chi Tiết:**

#### **Bước 1: Khai Báo Biến Màu (_Color)**

```csharp
Properties
{
    _Color ("Color", Color) = (1, 0, 0, 1) // Màu mặc định là đỏ
}
```

- **_Color**: Khai báo màu cho shader, mặc định là màu đỏ (RGB = 1, 0, 0, alpha = 1).

#### **Bước 2: SubShader Áp Dụng Màu**

```csharp
SubShader
{
    Tags { "RenderType"="Opaque" }
    LOD 200

    CGPROGRAM
    #pragma surface surf Standard

    fixed4 _Color; // Biến màu

    struct Input { /* Không cần khai báo _MainTex */ }

    void surf(Input IN, inout SurfaceOutputStandard o)
    {
        o.Albedo = _Color.rgb; // Áp dụng màu cho Albedo
        o.Alpha = _Color.a;    // Áp dụng alpha cho Alpha
        o.Metallic = 0.5f;     // Giá trị mặc định
        o.Smoothness = 0.5f;   // Giá trị mặc định
    }
    ENDCG
}
```

- **`surf`**: Hàm xử lý màu cho vật liệu, áp dụng màu `_Color` cho Albedo và Alpha. Các giá trị mặc định cho **Metallic** và **Smoothness** cũng được thiết lập.

### Tóm Tắt
- Shader khai báo màu sắc trong `Properties`.
- Trong `SubShader`, sử dụng màu `_Color` để tô đối tượng, cùng với các giá trị mặc định cho **Metallic** và **Smoothness**.
<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1036629288?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="2024-12-06 13-15-52"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

### **Bước 3: Thêm Biến Metallic và Smoothness**

#### **Khai Báo Biến Metallic và Smoothness**

```csharp
Properties
{
    _Color ("Color", Color) = (1, 0, 0, 1) 
    // Ta thêm 2 biến sau để có slider điều chỉnh cho metallic và smoothness
    _Metallic ("Metallic", Range(0, 1)) = 0.5 
    _Smoothness ("Smoothness", Range(0, 1)) = 0.5 
}
```

- **_Metallic**: Điều chỉnh mức độ kim loại (từ 0 đến 1). Mức 0 là vật liệu không kim loại, 1 là vật liệu kim loại hoàn toàn.
- **_Smoothness**: Điều chỉnh độ mịn bề mặt (từ 0 đến 1). Mức 0 là bề mặt thô ráp, 1 là bề mặt bóng mượt.

#### **Cập Nhật SubShader Để Thêm Metallic và Smoothness**

```csharp
SubShader
{
    Tags { "RenderType"="Opaque" }
    LOD 200

    CGPROGRAM
    #pragma surface surf Standard

    // Biến khai báo
    fixed4 _Color;
    float _Metallic;
    float _Smoothness;

    struct Input
    {
        // Không cần khai báo _MainTex vì không sử dụng texture
    };

    void surf (Input IN, inout SurfaceOutputStandard o)
    {
        o.Albedo = _Color.rgb; // Áp dụng màu (_Color) cho Albedo
        o.Alpha = _Color.a;    // Áp dụng alpha của _Color cho Alpha
        o.Metallic = _Metallic; // Áp dụng giá trị _Metallic cho Metallic
        o.Smoothness = _Smoothness; // Áp dụng giá trị _Smoothness cho Smoothness
    }
    ENDCG
}
```

### Giải Thích
- **_Color**: Màu sắc của vật liệu.
- **_Metallic** và **_Smoothness**: Các giá trị giúp điều chỉnh đặc tính vật liệu, ảnh hưởng đến độ phản chiếu và độ bóng bề mặt.
- **`surf`**: Hàm này sử dụng **_Color** cho Albedo, và **_Metallic** và **_Smoothness** để điều chỉnh độ phản chiếu và độ bóng. 

### Tóm Tắt
- **Properties** khai báo các giá trị màu sắc, metallic và smoothness.
- **SubShader** sử dụng các giá trị này để điều chỉnh vật liệu trong Unity, áp dụng cho đối tượng 3D.
<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1036629270?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="2024-12-06 13-16-09"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

#### **Bước 4: Thêm Texture (_MainTex)**

Cuối cùng, chúng ta sẽ thêm một texture vào shader. Biến này sẽ chứa thông tin về texture và có thể thay đổi màu sắc của đối tượng bằng cách sử dụng texture.

```csharp
Properties
{
    _Color ("Color", Color) = (1, 0, 0, 1)
    _Metallic ("Metallic", Range(0, 1)) = 0.5
    _Smoothness ("Smoothness", Range(0, 1)) = 0.5
    _MainTex ("Base (RGB)", 2D) = "white" {}
}

```

- **_MainTex**: Đây là texture sẽ được áp dụng lên đối tượng.

##### **Cập Nhật SubShader Để Thêm Texture**

Cuối cùng, ta sẽ sửa đổi lại phần `surf` để sử dụng texture:

```csharp
SubShader
{
    Tags { "RenderType"="Opaque" }
    LOD 200

    CGPROGRAM
    // Sử dụng lighting model Standard cho Surface Shader
    #pragma surface surf Standard

    sampler2D _MainTex;
    fixed4 _Color;
    float _Metallic;
    float _Smoothness;

    struct Input
    {
        float2 uv_MainTex;
    };

    void surf (Input IN, inout SurfaceOutputStandard o)
    {
        fixed4 c = tex2D(_MainTex, IN.uv_MainTex) * _Color;
        o.Albedo = c.rgb;
        o.Alpha = c.a;
        o.Metallic = _Metallic;
        o.Smoothness = _Smoothness;
    }
    ENDCG
}
```

- **tex2D(_MainTex, i.uv_MainTex)**: Lấy màu từ texture sử dụng tọa độ UV của pixel.
- Chúng ta đã áp dụng texture, màu sắc, metallic và smoothness vào kết quả cuối cùng.

---

### **Tổng Kết:**

1. **Khai báo biến màu** `_Color` trước tiên, để người dùng có thể thay đổi màu sắc.
2. **Thêm biến metallic và smoothness**, giúp điều chỉnh độ phản chiếu và độ bóng của vật liệu.
3. **Thêm texture** `_MainTex` để áp dụng texture lên đối tượng.

Bây giờ bạn đã có một shader cơ bản sử dụng màu sắc, metallic, smoothness và texture, tất cả đều có thể được điều chỉnh trong Unity Inspector.

**Final Code**
```csharp
Shader "Custom/BasicShader"
{
    Properties
    {
        _Color ("Color", Color) = (1, 0, 0, 1)
        _Metallic ("Metallic", Range(0, 1)) = 0.5
        _Smoothness ("Smoothness", Range(0, 1)) = 0.5
        _MainTex ("Base (RGB)", 2D) = "white" {}
    }

    SubShader
    {
        Tags { "RenderType"="Opaque" }
        LOD 200

        CGPROGRAM
        // Sử dụng lighting model Standard cho Surface Shader
        #pragma surface surf Standard

        sampler2D _MainTex;
        fixed4 _Color;
        float _Metallic;
        float _Smoothness;

        struct Input
        {
            float2 uv_MainTex;
        };

        void surf (Input IN, inout SurfaceOutputStandard o)
        {
            fixed4 c = tex2D(_MainTex, IN.uv_MainTex) * _Color;
            o.Albedo = c.rgb;
            o.Alpha = c.a;
            o.Metallic = _Metallic;
            o.Smoothness = _Smoothness;
        }
        ENDCG
    }

    Fallback "Standard"
}
```
<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1036629463?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="2024-12-06 13-16-43"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

## **Lời kết**

Shader là một công cụ mạnh mẽ và vô cùng quan trọng trong Unity. Với các ví dụ cơ bản từ màu sắc đến texture, metallic, và smoothness, bạn đã học được cách xây dựng một shader đơn giản nhưng mạnh mẽ. Hiểu và sử dụng shader không chỉ giúp bạn tạo ra hiệu ứng hình ảnh đẹp mắt mà còn có thể tối ưu hóa hiệu suất đồ họa trong game của bạn. Hãy tiếp tục khám phá và sáng tạo với shader để đưa game của bạn lên một tầm cao mới!

<a href="https://1drv.ms/u/s!Aoey5k7SyjbEeSUPy3ey-h_RWo8?e=3doeKk">Download Source Code</a>

