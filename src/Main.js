/**
 * Created by Rychou on 2018/4/19.
 */
import React, { Component } from 'react'
import $ from 'jquery'
import url from './audio/gbqq.mp3' // 引入背景音乐文件


class Main extends Component {
    state = {
        date: {},
    }
    componentDidMount() {
        this.print();
        setInterval(() => {
            this.time(2019, 2, 15) // 你们的纪念日
        }, 1000
        )
        var audio = document.getElementById("audio");
        setTimeout(() => audio.play(), 8500) // 背景音乐在页面加载后，延迟播放的时长，单位：毫秒。
    }
    print = () => {
        $.fn.autotype = function () {
            var _this = $(this);
            var str = _this.html();
            // 正则替换代码行之间添加的多个空格，不去除换行输出会有明显的停顿：实际是在输出多个空格
            str = str.replace(/(\s){2,}/g, "$1");
            var index = 0;
            $(this).html('');
            var timer = function fn() {
                var args = arguments;
                var current = str.slice(index, index + 1);
                // html标签完整输出,如：<p>
                if (current == '<') {
                    index = str.indexOf('>', index) + 1;
                }
                else {
                    index++;
                }
                //位运算符: 根据setInterval运行奇偶次来判断是否加入下划线字符“_”，使输入效果更逼真
                if (index < str.length - 1) { //打印字符倒数第2个字符开始，不加下划线字符，以防止结束符可能会多输出一下划线字符
                    _this.html(str.substring(0, index) + (index & 1 ? '_' : ''));
                } else {
                    _this.html(str.substring(0, index));
                    clearTimeout(timer);
                };
                setTimeout(fn, 200)
            };
            // 延迟1s开始
            setTimeout(timer, 1000);
        };
        $("#autotype").autotype();
    }
    time = (year, month, day) => {
        var dateNow = new Date();
        var dateJNR = new Date(year, month - 1, day);
        // var anniversary = parseInt((dateNow - dateJNR) / (365*24*3600*1000))
        var d = parseInt((dateNow - dateJNR) / (24 * 3600 * 1000));
        var hour = parseInt(((dateNow - dateJNR) / (3600 * 1000)) % 24);
        var minute = parseInt((dateNow - dateJNR) / (1000 * 60) % 60);
        var second = parseInt((dateNow - dateJNR) / 1000 % 60);
        this.setState({ date: { d: d, hour: hour, minute: minute, second: second } });
    };
    render() {
        const date = () => {
            if (this.state.date.d !== undefined) {
                const { d, hour, minute, second } = this.state.date
                return (<p>我们已经一起走过了: <span className="date-text">{d}</span> 天 <span className="date-text">{hour}</span> 小时 <span className="date-text">{minute}</span> 分 <span className="date-text">{second}</span> 秒 </p>
                )
            }
        }
        return (
            <div className="App animated bounceInLeft">
                <div className="date">{date()}</div>
                <div id="autotype">
                    <h1 style={{ fontWeight: 900 }}>哈喽！我最可爱的刘宝宝！</h1>
                    <p >在煽情开始之前，先放首歌当背景音乐吧！Music!</p>
                    <p>我们在一起已经一年了，从2019年2月15日到现在，我们一起经历了许许多多的事情，
                    有欢笑也有争吵，也曾因为一些事情闹的不愉快，但是我们都走过来了。</p>
                    <p>我们刚在一起的时候，我每天都期待着见到你，上班的时候我会不自觉的想到你；从早想到晚，想着晚上下班和你讲讲话；
                        上班的时候我想着你现在在做什么，有没有什么不开心的事情，然后就想着能不能帮到你，表面上是想展现
                        自己的能力。实际上啊，是因为喜欢和你呆在一起。喜欢看你的甜美的笑容，喜欢轻轻地闻你的发香，
                        慢慢地开始喜欢你身上的一切。当我得知你喜欢我的时候，我那一整天都笑的合不拢嘴，晚上也睡不着，脑海里一直重复着那句话。
                </p>
                    <p>在2019年7月4日那天早上，我下火车，我还记得清清楚楚，你穿着的衣服和裤子，头发还散发着清香，我的心好像有什么感应一样，一靠近你就开始加速跳动。
                        在去学校的路上，我们不知道要说什么，感觉此时“无声胜有声”那种感觉特别好，我们下了车之后你怕我肚子饿，带我吃了小火锅，真贴心，那一顿小火锅很特别，有你，同时也是我们第一次在一起吃饭。吃完我们出去转转到了中午我们到了我们住的地方，我坐那特别紧张，手也不知道放在哪里，突然你偷袭我，你亲了我，那一刻感觉时间都静止了。在你来武义，回阜阳的时候我嘴上说着没事，心里早就扭成麻花了，等你走了后我就忍不住了
                       和你在一起的那段时间整个人都处于一种飘飘然的状态。那一段时间，也是我一生当中最难忘的暑时间，初吻、约会、每天都歪腻在一起，真心的感谢你陪我度过的那些时光。
                </p>
                    <p>然后我们就继续开始了漫长的异地恋，直到2020年12月31号我们在一次相见，那个时候我真的是超级开心，在那一段时间我们去了好多地
                        方，吃了好多好吃的，在那段期间里，我们一起去过很多地方，留下过很多难忘的回忆。“异地恋其实并不难坚持，因为它真实地考验了
                        两个人的心”。是啊！我们异地经历的那些事，让我们能够看清对方的真心，也让我们的感情更加深厚。“年年月月逝去越是觉得深爱你”。
                </p>
                    <p>我不善于文字表达，写这一个网页和说那么多话也就想表达“我爱你”这简单的三个字而已，说煽情一点就是：“我的心室是单人间，只住得下你一人！”
                        好期待以后结束异地后的同居生活啊，希望那一天早点到来。
                </p>
                    <p>最后祝刘宝宝一周年周年纪念日快乐哦！</p>
                    <div style={{ textAlign: 'right' }}>
                        <p>爱你的♥吴佳乐</p>
                        <p>2020年2月15日</p>
                    </div>
                </div>
                <audio id="audio" src={url}></audio>
            </div>

        )
    }
}
export default Main