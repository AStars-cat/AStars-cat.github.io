var posts=["2023/10/16/life/2023-10-16-record/","2023/11/02/大学生活/","2023/10/16/CPP/Cpp-I/","2023/10/16/CPP/Cpp-Ⅱ/","2023/11/09/CPP/stdvector使用优化/","2023/11/15/CPP/C-杂记/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};