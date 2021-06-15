# ReactJS - Trello App Client

## Install Package

-   create-react-app

## Command remembers

### **1. Initial Project ReactJS:**

#### Setup Project

-   Create project ReactJS: **_npx create-react-app trello-app-client_**
-   Delete files: **_App.css, App.test.js, index.css, logo.svg_**

#### Push Code Github

-   git status (Kiểm tra các file đã thay đổi)
-   git remote -v: (Kiểm tra repo url đã có chưa)
-   git remote add origin \<LinkGithub>: add remote link github vào project
-   git add .
-   git commit -m "[1.0.0] - Initial Project"
-   git push origin master

### **2. Build layout HTML, CSS Trello**

#### Checkout and create new brand

-   git checkout -b <new_branch> (Create new branch)
-   git status
-   git add .
-   git commit -m "[1.0.1] - Update file README.md"
-   git push origin <brand_name>
-   Page github.com => choose **Compare & pull request** => choose **Create pull request**
-   Đưa link commit cho người review code.

#### Trường hợp có comment thì xử lý như sau:

-   Sửa lại code bị review
-   git add .
-   git commit --amend (amend để merge commit lần này vào commit trước đó)
-   Gõ :wq
-   git push origin <branch_name> -f (Từ lần thứ 2 push code vào branch đã được tạo rồi)

#### Merge code vào brand master

-   Chọn **Pull requests**
-   Chọn **Merge pull request**
-   Chọn **Confirm merge**
-   Sau khi merge xong thì chọn Delete branch

#### Chuyển brand về master trong terminal

-   git checkout master
-   git pull origin master (Kéo đoạn code mới nhất trên github về máy)
-   git branch -D <BrandName> (Xóa branch đang có trên máy)
