-- phpMyAdmin SQL Dump
-- version 4.4.15.5
-- http://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: 2016-12-29 13:54:43
-- 服务器版本： 5.5.49-log
-- PHP Version: 7.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `baidunews`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE IF NOT EXISTS `news` (
  `id` int(11) NOT NULL,
  `newstype` char(200) NOT NULL,
  `newstitle` varchar(200) NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `newstime` datetime NOT NULL,
  `newssrc` char(200) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `newstype`, `newstitle`, `newsimg`, `newstime`, `newssrc`) VALUES
(1, '推荐', '测试数据库中的第一条数据', 'image/a.jpg', '2016-12-28 00:00:00', '网易头条'),
(2, '推荐', '推手万吉:退出与阿里的红包大战！微信发布小程序,企业家自明星该如何抓住这波红利？', 'image/bb.png', '2016-12-29 00:00:00', '百度推荐'),
(3, '推荐', '稻香村炸串儿今起限购十串 速冻装半天就卖空', 'image/20.jpeg', '2016-12-29 00:00:00', '百度推荐'),
(4, '推荐', '城中村孩子的生活 废墟中寻乐', 'image/22.jpg', '2016-12-29 00:00:00', '网易头条'),
(5, '推荐', '	 《西游伏妖篇》悟空现原形 吴亦凡“暴打”林更新', 'image/23.jpeg', '2016-12-29 00:00:00', '吴亦凡'),
(6, '社会', '女子分手被捅8刀 曾被威胁如果分手就杀了全家人', 'image/24.jpeg', '2016-12-29 00:00:00', '社会'),
(7, '推荐', '小程序对公众号运营者意味着什么？这是新榜的分析', 'image/25.jpeg', '2016-12-29 00:00:00', '推荐'),
(8, '推荐', '俄罗斯女主持不听警告偷摸熊 棕熊转身将她打趴', 'image/26.jpeg', '2016-12-29 00:00:00', '凤凰要闻'),
(9, '推荐', '阿里大文娱未来三年的投入规划超过500亿：我们不是来玩的', 'image/30.jpeg', '2016-12-29 00:00:00', '凤凰要闻'),
(10, '推荐', '辽宁舰已抵三亚 美：对远训无异议 符合航行自由', 'image/27.jpeg', '2016-12-29 00:00:00', '凤凰头条'),
(11, '推荐', '关于2017年的VR，我们能做出哪些判断？', 'image/31.jpeg', '2016-12-29 00:00:00', '猜你喜欢'),
(12, '娱乐', '	 冬季最流行的半丸子头风靡亚洲 这样扎才不怕撞造型', 'image/nr.png', '2016-12-29 00:00:00', '猜你喜欢'),
(13, '娱乐', '“第三人生”：万达的新场景实验', 'image/32.jpeg', '2016-12-29 00:00:00', '百度原创'),
(14, '推荐', '习近平这三副锦囊 为深化改革点出关键', 'image/d.jpg', '2016-12-29 00:00:00', '热点'),
(19, '百家', '大蟒蛇吞下了狗还没来得及消化，结果被活活卡死在了栏杆上', 'image/001.jpeg', '2016-12-29 00:00:00', '百度新闻'),
(20, '百家', '一年缔造8个超级大号 他何以成为百家号作者心中“神一样的存在”', 'image/002.jpeg', '2016-12-22 00:00:00', '百度新闻'),
(21, '本地', '北京一女生被球踢到家长讨说法 校长当场宣布开除', 'image/003.jpeg', '2016-12-29 00:00:00', '本地');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=22;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
