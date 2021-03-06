'use strict'

var toMarkdown = require('to-markdown')

let config = [
  ['&quot;', '"'],
  ['&amp;', '&'],
  ['&lt;', '<'],
  ['&gt;', '>'],
  ['&lt', '<'],
  ['&gt', '>'],
  ['&nbsp;', ' '],
  ['&amp;', '&'],
  ['%3A', ':'],
  ['%3F', '?'],
  ['%3D', '='],
  ['%26', '&'],
  ['\\sdata-rawwidth=".*?"', ''],
  ['\\sdata-rawheight=".*?"', ''],
  ['\\/\\/link.zhihu.com\\/\\?target=', ''],
  ['\\starget="_blank"', ''],
  ['\\sclass=".*?"', ''],
  ['\\n', '<br />'],
  ['\\swidth=".*?"', ''],
  ['\\srel=".*?"', ''],
  ['\\sdata-original=".*?"', ''],
  ['<figure>','']
]

var html = function (value) {
  if (!value) {
    console.log('没有内容')
    return false
  }
  config.forEach(function (val) {
    var pattern = val[0]
    value = value.replace(new RegExp(pattern, 'gm'), val[1])
  })

  return value
}

// var htmlString = '<h1>「今晚的月色真美」为什么会是「我爱你」的意思？</h1>首先反对排名第一的老兄@<a href="http://www.zhihu.com/people/ren-wu-23">壬午</a>的答案，因为す和つ发音相差很远。<br>月亮：つき<br>喜欢：すき<br>要是从发音上来说，滑雪比月更加贴近。。<br>要是“月が綺麗ですね”（今晚的月亮真美）这么有韵味的一句话被当作因为男生羞怯而语塞就真是太让人无话可说了。<br><br>--------------------------------胡扯的开始-------------------------------------<br>开始听到这句话的时候，还是我刚刚开始学日语的时候，大一，刚刚认识她。<br>她喜欢川端康成的《伊豆的舞女》和《雪国》。<br>为了能搭上话，便借着学习的名义开始看大江健三郎、芥川龙之介和夏目漱石......<br>其实这句话还是在一个讲日语和汉语都是高语境的文章里看到的，因为这句话比较简单，于是就暗记了下来，也是抱着附庸风雅的心理想要某天讲给她听。<br>当时真的也是没有理解这句话是什么意思，就觉得好像很随意却饱含爱意，心里大致有这么一个模糊的感觉，具体为什么，自己也说不清。<br><br>大约过了一年，对这个姑娘的感情越发深厚。<br><br>大二暑假，回家给初中的小朋友们代课，讲的是语文。一上一上午那种。<br>第一节是古诗课，讲的是杜甫的《春望》<br>                         国破山河在，城春草木深。<br><b>感时花溅泪，恨别鸟惊心。</b><br>                         烽火连三月，家书抵万金。<br>                         白头搔更短，浑欲不胜簪。<br>第二节讲作文，说到含蓄，不自觉地就举了夏目的这个例子“今晚月色真好”。<br><br>不提这个还好，说了这样含蓄的一句话，小朋友们不买账了，说不明白，非要我解释不可。<br>可是夏目他风流儒雅岂是我所能及半分的，加上平时自己看书也是马马虎虎，很少潜心雕琢字句，于是就决定壮着胆子用自己的理解来解释一番：<br><br>我：“你们觉得月亮美吗”<br>小朋友们：“一般般啦...太远了...美~....傻....”(反正他们是给了我一堆的答案)<br><br>我：“那好吧，那你们会在什么情况下觉得月亮很美呢？是不是心里高兴的时候啊？”（开始挖坑）<br>小朋友们：“对啊，开心的时候啊，很多东西都很好看啊”（掉进去了，嘿嘿，偷笑）<br><br>我：“对，我们上一节不是讲了吗：<b>感时花溅泪，恨别鸟惊心。</b>不就是这样吗？花儿会落泪吗？不会吧？小鸟的叫声为什么让杜甫他老人家听地这么揪心？”<br>小朋友们：“因为他国破家忘了心里难过呗”<br><br>我：“对啊，因为他心里难过，那么美的花儿在他眼里仿佛是在流泪，清脆的鸟啼反而像是刺耳的噪声，那么反过来想我们这句话呢：今晚的月亮真美啊。你想想，你说这句话的时候，或者是别人对你缓缓说出这句话的时候，是一种怎样的心情呢？”<br>小朋友们：“哦，对啊，应该是开心或者舒畅吧？”<br><br>我：“对啊，是开心啊。那为什么他说这句话的时候这么开心呢？”<br>小朋友们：“......“(显然功力不足，被老夫忽悠进去了)<br><br>我：“是不是因为我面对的人是你啊”<br>小朋友们：“啊？“（仿佛懂了）<br><br>我：<br><b>“</b><b>因为站在我面前的人就是你啊。</b><b>”</b><br><b>“能够看到你我就开心，忍不住地开心，忍不住要赞叹”</b><br><b>“</b><b>根本不需要电视剧那种花前月下般的唯美的画面</b><b>”</b><br><b>“</b><b>眼前的这个人，你看到的时候，心，已经止不住地开始加速</b><b>”</b><br><b>“</b><b>嘴唇不经意之间始终上扬</b><b>”</b><br><b>“</b><b>此时此刻</b><b>”</b><br><b>“</b><b>管它阴晴圆缺</b><b>”</b><br><b>“</b><b>抬头望去</b><b>”</b><br><b>“</b><b>是它轻撒纯真，映着你的面庞</b><b>”</b><br><b>“</b><b>那浅浅的笑容</b><b>”</b><br><b>“</b><b>那么美</b><b>”</b><br><b>“</b><b>心早已被幸福注满</b><b>”</b><br><b>“</b><b>月亮不美吗？</b><b>”</b><br><b>“</b><b>美吗？</b><b>”</b><br><b>“</b><b>那也是因为你啊</b><b>”</b><br><b>“</b><b>因为爱的人是你</b><b>”</b><br><b>“</b><b>所以 月が綺麗ですね</b><b>”</b><br><b>“</b><b>君が綺麗ですね</b><b>”</b><br><b>“</b><b>没错，我爱你</b><b>”</b><br><b>“</b><b>你就像月亮一样美</b><b>”</b><br><b>“</b><b>不想直接说出来害你害羞</b><b>”</b><br><b>“</b><b>或许是不敢</b><b>”</b><br><b>“</b><b>月亮好美啊，今晚的</b><b>”</b><br><b>“</b><b>你 感觉到了吗？</b><b>”</b><br><br>小朋友们：“。。。。。。。”（恍然大悟的有，脸红的有，各种各样的）<br><br><br>上面就是一年前自作聪明的回答，也是猛然才意识到自己也能给一些东西自己的解释。<br>大概是性格比较敏感，其实自己经历也不多，没想到以前我们的画面却暗合那就今晚月亮好美<br>你好美，我说的太晚，对不起。<br><br>然后我第二天就被解雇了。<br><br>回来和她开玩笑说自己被解雇，她问我为什么，还是没说出来。<br>今晚月亮真美<br>可是，听懂的人不是你。<br>或许你懂，不懂的是我。<br>。。。<br><br>扯远了，其实就是一句话吧：<b>没有经历，无从说起。</b><br><br>-------------------------------回答问题------------------------------------------<br>为什么这句话大家都知道并且能引起共鸣。<br><br>首先，夏目的名气：<a href="//link.zhihu.com/?target=http://jp.hjenglish.com/new/p228251/">明治时代的名家情怀：I Love You的文艺译法<i></i></a><br>其次，优雅却不俗气的隐喻。<br>第三，很多人附庸风雅。你信不信让很多随随便便说出这句话的人来解释他们都说不出所以然来？<br>第四，真正懂的人知道<b>这句话有多美</b>。<br><br>以上。<br><br><br>----------------------------更新-----------------------------------<br>今天得知她有男朋友了<br>嗯<br>祝幸福哈~ 小丸子~<br><br><br>----------------------------再更新-----------------------------------<br>                     2017年1月17日<br><br>真的好谢谢大家的关注和鼓励呢<br>其实自己也没想到这个答案会有这么多人看到，原本只是自己的一个小故事。<br>写点新的东西吧，希望看到的知友放心，我现在真的还好啦，不是那个丢掉工作的倒霉鬼 哈哈。<br><br>补充下哦，答主2014年5月25已经表过白了，被拒绝了，哈哈哈哈。<br>小丸子是她当时剪头发剪成了丸子头，我就这么叫她，后来就叫习惯了，改不了了。。<br>不过没有纠缠人家哈，后来才懂，她真的不喜欢我。<br><br>我是12年上的大学，现在已经毕业了。<br>本科是西北某不甚知名的985，现在在等德国大学研究生的录取通知，估计就这几天了吧，先祝自己好运，嘿嘿。<br><br>可能大家会意外，德国，为什么是德国，你丫不是学的日语的嘛？<br>答：是呀，学的日语，最后落脚是德国，换成以前的自己也是很难想象的。大一下学期开始学的日语，喜欢语言也很喜欢她，真的很喜欢那种，应该算是初恋吧。日语课开到大二的下学期，结束了之后去考了N3（因为是学校的兴趣班那种，只是把新标日的初级讲了），然后自己在大三上学期的时候参加了日语的N2考试。寒假放假回家过年，嗯，也过了。虽然不是很高，但也过了 哈哈哈。当时有多开心呢：早上在被窝从网上查到成绩的时候，高兴地穿着拖鞋就跑出去了，当时外面还在下雪。。 跑出去给妈妈说这个消息。<br><br>。。。此处省略一大堆字，因为实在不好解释，因为过于复杂，而且你们感兴趣的也不在这。。。<br><br>于是，过完寒假，回到学校，开始了解去德国的事情。<br>2015年3月，开始学德语。坐标：西安英德。（做个广告，嘿嘿，里面的老师很nett呢）<br><br>第一天去<br>第一个德语等级（A1）<br>第一个说话的人（你好同学，我来晚了，能坐到里面吗，谢谢~）<br>第一个同桌（她：“第一排你都看不清呢，要不要我的眼镜给你啊” 我：“啊 哈哈 谢谢 不用啦~”）<br>第一个见面还不到1小时就发现同月同日生的人（小我2岁整，我95她97）<br>第一个中午休息了一起去吃饭的人<br>第一次吃饭就笑意盈盈的人<br><br>没错，上面的这些都是一个人，一个对我来说意义非凡的人，后面再说吧。<br>对了，昨天看到她可能有新男朋友了。<br>嗯，也祝福你哦，希望他好好保护你珍惜你。<br><br>接下来的故事并没有像大多数国产青春剧那样展开，没有什么浪漫和狗血或者是新的一轮求之不得。事实上，放弃日语，放弃去日本，成了我当时最大的遗憾。第二周的德语课，我刚刚领了姗姗来迟的日语N2证书，看着夹在扉页的证书，人傻傻地愣在位子上，心里却一直在默念：<br><br>サヨナラ 情报理工（再见了 情报理工）<br>サヨナラ こまるこ酱（再见了小丸子）<br>サヨナラ 私の大切なこと（再见了，对我来说如此重要的事情）<br><br>大概那个时候的心情就是这样吧：不仅沉浸在理想破碎的漩涡，还迷失在一年征服德语的压力中。<br>所以，这就是我那个时候对那么多人那么多事视而不见的原因吧。<br><br>不过德语真的好难啊，不信的同学可以试试自己报一下那种零基础到高级不间断的学习班试试[微笑脸]。而且那个时候大三的专业课火力全开，看不完的专业书和做不完的实验，所以，写到这里，真的还要对班里的同学们表达一下最真诚的感激，没有你们大家的无私帮助，我可能毕业都有点困难。尽管我有时还是很讨厌自己学的这个理工科的专业，不过，遇到你们，是我莫大的幸运。<br><br>作业好多，压力好大。<br>去倾诉吗？去吐槽吗？<br>本着自己约的炮，喊着泪也要自己打完的精神，这些事情我都没和身边的任何人说过。<br>印象笔记纪录了那段闭上眼就是天黑的日子<br>单车房里的声声呐喊成了最好的发泄渠道<br>每天晚上都好累，躺到床上很快就睡了<br><br>渐渐地，性格开始不再那么张扬，更懂得去考虑别人的难处。<br>身材有渐渐有棱有角，最好的时候，差不多可以看到人鱼线了，嘿嘿。<br>因为之前在日语班里面为大家服务过，所以在上德语的一开始，我就按照自己之前在日语班的做法去给老师和同学带来方便。。。 于是，慢慢开始有了些人气吧。<br><br>接下来的事，大家肯定能猜到：因为健身和外语的缘故，不知不觉认识了很多妹子，其中不乏各种肤白貌美有钱任性前凸后翘的，额，还有一个日本妹子（Haruka）。大家都年轻嘛，相处久了，渐渐就有那种超越普通友谊的关系出现了--这也就是所谓的桃花吧。<br><br>如果我还说对这些人都视而不见的话，你们肯定不信。<br>嗯 有和一个人好多次聊到深夜的 也有和别人单独出去吃焖锅吃到很开心的 也有一起去看电影到11点才回学校的。。 所以，这么多次，我都点到为止，刻意和这么多人保持距离。不仅仅是知道自己即将去德国，不希望耽误别人，同时还必须承认，还是没有忘记我的小丸子的。尽管和后来我遇见的这么多女孩子相比，她普通的一无是处。可是，自她以后，到目前为之，再也没有任何一个女孩真的能让我产生那么强烈的情感了。<br><br>老天啊，居然扯了这么多。。<br><br>后面的事情就有点开始负能量了，你们还想看嘛。<br><br>留个悬念作为结尾吧：<br><br>                 “这个答案我很久之前就看到了，觉得写得好温柔啊，没想到居然是你”<br>                                                                                                   ---那个对我意义非凡的人。<br><br>当你这样截图给我的那一刻，你说喜欢我，我真的信了。'
// console.log(html(htmlString))
module.exports = html
