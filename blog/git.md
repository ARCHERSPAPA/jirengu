git
首先应该理解4个步骤，已修改-暂存区-已提交-推送库

git 是一个能实现远程库和本地数据交换同步的功能，比如当2个人同时完成一个项目时，分配了不同的任务，初次使用需要使用 ssh-keygen -t rsa -C 去添加公钥私钥（因为我选的是SSH方式连接）。执行之后会有2个文件在家目录下。一个公钥一个私钥，将公钥打开之后的文本复制粘贴到github的设置里面，cd到库，使用git config – user.eamil or name去创建你的名称。
这个时候可以通过git branch 1任务，然后1就可以通过git clone在本地去克隆远程库，加载主体的代码，再使用git checkout 1任务 ,切换到1分支。完成代码片段之后使用 git add .（可以只推一个文件到暂存）到暂存区。然后使用git commit -am "名称"提交，最后使用 git push origin 1推送到分支。这个时候可以通过git branch 1任务，然后1就可以通过git clone在本地去克隆远程库，加载主体的代码，再使用git checkout 1任务 ,切换到1分支。完成代码片段之后使用 git add .（可以只推一个文件到暂存）到暂存区。然后使用git commit -am "名称"提交，最后使用 git push origin 1推送到分支。
--------------------- 
作者：qq_39567879 
来源：CSDN 
原文：https://blog.csdn.net/qq_39567879/article/details/87936435 
版权声明：本文为博主原创文章，转载请附上博文链接！