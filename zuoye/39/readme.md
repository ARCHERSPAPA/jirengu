# 新闻网站瀑布流制作
preview:http://js.jirengu.com/cixeq/1
## 实现懒加载功能
### 懒加载功能主要分为几个模块
1.  监听滚动条，配合判断元素出现的函数，执行得到数据的函数
   ~~~
    $(window).on('scroll',function(){
        if(clock){
            clearTimeout(clock)
        }
        clock=setTimeout(function(){
            if(isshow()){

                start()
            }

        },300)
    })
   ~~~
2.  得到数据函数，因为这里是从新浪api获取的数据，所以当数据加载的时候，执行了一个回调函数，将数据分享出来
~~~
start()
    function start(){
        getnews(function(node){

            console.log(node)
           $.each(node,function(i,n){

               $node=demo(n)
               console.log(n)

                   $('.content').append($node)
             test.init()
           })
        })
~~~
3.  判断函数，判断是否出现在视窗内
~~~
function isshow(){
        return $('p').offset().top <=$(window).scrollTop()+$(window).height()
    }
~~~
### 瀑布流
. 当我执行瀑布流的函数的时候，我的元素都已经出现在了dom里。
~~~
var test={
    //初始化 init中使用this.相当于在test中添加新的元素。代替了全局变量定义
  init:function(){
    this.colCountA=[]
OBOBOB    this.imgWidth=$('.content img').outerWidth(true)
    this.colCount =Math.floor($('.content').width())/this.imgWidth
    console.log(this.colCount)
    for(var i=0;i<this.colCount; i++){ //初始化数组，数组的长度取决于窗体的大小
      this.colCountA[i]=0

    }
    this.bind()
  },
  bind:function(){
    var _this =this //这里_this=test,因为在这个事件里面this代表的是事件
    $('.content img').on('load',function(){
      _this.layout($(this))//初始化加载一次
    })
    $(window).on('resize',function(){
        if(this.clock){
            clearTimeout(this.clock)
        }
      this.clock=setTimeout($('.content img').each(function(){
        _this.layout($(this))//遍历图片
      }),500)
    })
  },
  layout:function($node){
    console.log(this.colCountA[0])
    var minValue =this.colCountA[0]
    var minindex=0
    for(var i=0;i<this.colCount;i++){
        if(this.colCountA[i]<minValue){
            minValue=this.colCountA[i]
            minindex=i
        }
    }
    console.log(minValue,minindex)
    $node.css({
        left:minindex * this.imgWidth,
        top:minValue
    })
    this.colCountA[minindex]+=$node.outerHeight(true)//每一次找到最小高度的那个的INDEX，然后加上图片的高度，
  }
}
~~~
