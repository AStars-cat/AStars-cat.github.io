var posts=["2023/10/16/Cpp-I/","2023/10/16/Cpp-Ⅱ/","2023/10/16/life/2023-10-16-record/","2023/10/16/tt/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};