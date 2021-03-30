#### 1.简述 Node.js 的特点以及适用的场景。

答: 适合一些IO密集型的场景，因为node.js实际处理的主线程只有一个，他是异步相应模式，所以在处理IO类型的任务的适合有较高的效率





#### 2.简述 Buffer 的使用.包括多种创建方式。实例方法，静态方法。

答：Buffer在nodejs中是充当一个缓存位置，用于减少内存压力。主要方法有 alloc  concat from toString





#### 3.写出5个以上文件操作的API，并且用文字说明其功能。

答：fs.stat 用于读取文件信息，判断文件类型

​		fs.readir 用于读取目录下的子文件或子文件夹，以数组形式返回

​		fs.createReadStream 用于创建 读文件流，用于读取文件内容

​		fs.createWriteStream 用于创建 写文件六，用于写入文件内容





#### 4.简述使用流操作的优势，以及Node中流的分类。

答： 简化了文件打开文件关闭文件写入，一系列的代码操作，使用流操作还能尽可能的减少文件读取时对服务器内存的占用，node中分为读文件流和写文件流





#### 5.在数据封装与解封装过程中，针对应用层、传输层、网络层、数据链路层、物理层5层分别做了什么事情？

答：应用层生产数据，交给传输层封装源端口目标端口，网络层封装源ip目标Ip，数据链路层 封装源mac和目标mac物理层，将数据转成二进制流