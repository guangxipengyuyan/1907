/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : 1111

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2019-09-07 18:53:20
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for cart
-- ----------------------------
DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `cid` int(11) DEFAULT NULL,
  `uname` varchar(255) DEFAULT NULL,
  `num` int(11) DEFAULT NULL,
  `imgs` varchar(255) DEFAULT NULL,
  `titles` varchar(255) DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `xiaoji` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of cart
-- ----------------------------
INSERT INTO `cart` VALUES ('2', '13680693758', '9', '../images/list/goods (2).jpg', '???MAC?????????3g', '180', '180.0');
INSERT INTO `cart` VALUES ('1', '19977892320', '11', 'https://shopncstaticimage.baiyangwang.com/shop/store/goods/2/2_05935404847403270.jpg!gthumb', '【辅助调节血脂血压】美国纽特舒玛Nutrasumma阿拉斯加深海鱼油60粒 高血压高血脂三高人群', '180', '1800');

-- ----------------------------
-- Table structure for information
-- ----------------------------
DROP TABLE IF EXISTS `information`;
CREATE TABLE `information` (
  `id` int(11) NOT NULL,
  `content` varchar(255) DEFAULT NULL,
  `price` float(255,2) DEFAULT NULL,
  `original` float(255,2) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `discount` float(255,1) DEFAULT NULL,
  `inventory` float(255,0) DEFAULT NULL,
  `num` int(255) DEFAULT NULL,
  `time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of information
-- ----------------------------
INSERT INTO `information` VALUES ('12', '茵曼纯棉短袖连衣裙女裙夏装新款V领刺绣显瘦长裙a字裙4', '1400.00', '5279.00', 'img/3.jpg&img/1.jpg&img/1.jpg', '4.0', '60', '3', '2019-05-20 07:35:09');
INSERT INTO `information` VALUES ('5', '女童套装夏装洋气中大童女孩运动童装时髦网红儿童两件套2', '538.30', '1989.00', 'img/2.jpg&img/3.jpg&img/2.jpg', '4.0', '25', '3', '2019-05-20 07:35:11');
INSERT INTO `information` VALUES ('10', ' 君爱家纺 简约清新风 贴身舒适夏凉被水洗棉花边夏被空调被单双人学生宿舍4', '1153.80', '4339.00', 'img/1.jpg&img/2.jpg&img/1.jpg', '4.0', '50', '1', '2019-05-20 07:34:52');

-- ----------------------------
-- Table structure for list
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
  `cid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `imgs` varchar(255) DEFAULT NULL,
  `jieshaonum` varchar(255) DEFAULT NULL,
  `titles` varchar(255) DEFAULT NULL,
  `spans` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `dels` varchar(255) DEFAULT NULL,
  `buys` varchar(255) NOT NULL,
  `xiaoji` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`cid`,`buys`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES ('1', 'https://shopncstaticimage.baiyangwang.com/shop/store/goods/2/2_05935404847403270.jpg!gthumb', '【早晚各1粒】高纯度深海鱼油，辅助调节血脂，稳定血压 【产品有效期至2019年12月】', '【辅助调节血脂血压】美国纽特舒玛Nutrasumma阿拉斯加深海鱼油60粒 高血压高血脂三高人群', '【早晚各1粒】高纯度深海鱼油，辅助调节血脂，稳定血压 ， 中老年高血压高血脂，三高保健 \r\n【产品效期至2019年12月】', '180.0', '228.0', '1212', '180.0');
INSERT INTO `list` VALUES ('2', 'https://shopncstaticimage.baiyangwang.com/shop/store/goods/6/6_05790889792356823.jpg!gthumb', '【每日1-3次，随餐服用】高效肠溶不反胃！强力杀菌，排毒清肠，预防糖尿病并发症', '【保护血管 控血糖】NOW 诺奥 大蒜素软胶囊 100粒/瓶大蒜精油提取物美国', '【每日1-3次，随餐服用】高效肠溶不反胃！强力杀菌，排毒清肠，预防糖尿病并发症', '225.0', '291.0', '1241', '225.0');
INSERT INTO `list` VALUES ('3', 'https://shopncstaticimage.baiyangwang.com/shop/store/goods/2/2_05935223861247905.jpg!gthumb', '【服用方法：每日1-3次，每次1粒】2.25倍高含量，增强肌肉！提高性欲！抵抗衰老！', '【焕发男性活力】NOW 诺奥 刺蒺藜皂甙胶囊 500mg 100粒', '【服用方法：每日1-3次，每次1粒】2.25倍高含量，增强肌肉！提高性欲！抵抗衰老！', '270.0', '354.0', '1235', '270.0');
INSERT INTO `list` VALUES ('4', 'https://shopncstaticimage.baiyangwang.com/shop/store/goods/2/2_05935224489305351.jpg!gthumb', '【每次1粒，每天1-2次】雄性荷尔蒙促进剂，皂甙类含量达45%，促进性功能，让男性焕发活力', 'NOW 诺奥 刺蒺藜皂甙精片 1000mg 90粒/瓶促睾雄性激素男性荷尔蒙', '【每次1粒，每天1-2次】雄性荷尔蒙促进剂，皂甙类含量达45%，促进性功能，让男性焕发活力', '315.0', '417.0', '966', '315.0');
INSERT INTO `list` VALUES ('5', 'https://shopncstaticimage.baiyangwang.com/shop/store/goods/1/1_05936287096590763.jpg!gthumb', '【德国原装进口】El-cemed爱斯麦德青少年清凉牙膏 75ml', '【德国原装进口】El-cemed爱斯麦德青少年清凉牙膏 75ml', '【泡泡糖口味的牙膏】预防牙齿疾病，温和保护牙釉质，含钙强健牙齿；不含发泡剂，细腻温和不刺激', '360.0', '480.0', '555', '360.0');
INSERT INTO `list` VALUES ('6', 'https://static.baiyangwang.com/Uploads/Goods_pic/2018-01-26/350x350/5a6ade5974026_350x350.jpg', '【对抗色斑及干燥小细纹】以你到肌肤饱满透明，使水润浸透角质层深处，肌肤水润充盈', '【透亮柔润】KOSE 高丝 ClearTurn 药用美白面膜 50片', '【对抗色斑及干燥小细纹】以你到肌肤饱满透明，使水润浸透角质层深处，肌肤水润充盈', '540.0', '732.0', '786', '540.0');
INSERT INTO `list` VALUES ('7', 'https://shopncstaticimage.baiyangwang.com/shop/store/goods/6/6_05835140034545440.jpg!gthumb', '【睡前1小时，1次2粒，锁住青春】在睡眠状态皮肤修复能力旺盛时，提供皮肤源源不断的胶原蛋白，第二天醒来皮肤又滑又亮，毛孔也会变得不明显。', '【加拿大直邮】GOLD VITAMINS金维素II型胶原蛋白加玻尿酸 60粒', '【睡前1小时，1次2粒，锁住青春】在睡眠状态皮肤修复能力旺盛时，提供皮肤源源不断的胶原蛋白，第二天醒来皮肤又滑又亮，毛孔也会变得不明显。', '585.0', '795.0', '456', '585.0');
INSERT INTO `list` VALUES ('8', 'https://shopncstaticimage.baiyangwang.com/shop/store/goods/2/2_05878184493594700.jpg!gthumb', '【每日2粒】非直接的胶原蛋白补充剂，促进人体自身胶原蛋白生成，护发亮甲带来自然光泽，皮肤年轻弹润看得见，停用不反复', '【恢复皮肤紧致弹润】美国Garden of Life生命花园Mykind植物胶原蛋白 60粒', '【每日2粒】非直接的胶原蛋白补充剂，促进人体自身胶原蛋白生成，护发亮甲带来自然光泽，皮肤年轻弹润看得见，停用不反复', '453.0', '482.0', '84', '453.0');
INSERT INTO `list` VALUES ('9', 'https://shopncstaticimage.baiyangwang.com/shop/store/goods/1/1_05936199382251965.jpg!gthumb', '【全进口刀头】旋转刀头带来贴合的剃须效果，双层刀片剃须效果更干净，刀头一键替换即插即用，剃须更佳简单、方便。', '吉列威锋旋转双层刀片（8刀头）', '【全进口刀头】旋转刀头带来贴合的剃须效果，双层刀片剃须效果更干净，刀头一键替换即插即用，剃须更佳简单、方便。', '660.0', '700.0', '45', '660.0');
INSERT INTO `list` VALUES ('10', 'https://shopncstaticimage.baiyangwang.com/shop/store/goods/6/6_05835150471447181.jpg!gthumb', '【前3个月每日2粒，之后每日1粒，6瓶一疗程】中和解毒，分解现有黑色素，淡化甚至消除脸上的斑，有效延缓细胞衰老，全身肌肤自然净白', '【加拿大直邮】GOLD VITAMINS金维素美白亮白丸 30粒', '【前3个月每日2粒，之后每日1粒，6瓶一疗程】中和解毒，分解现有黑色素，淡化甚至消除脸上的斑，有效延缓细胞衰老，全身肌肤自然净白', '325.0', '399.0', '154', '325.0');
INSERT INTO `list` VALUES ('11', 'https://static.baiyangwang.com/Uploads/Goods_pic/2017-02-09/350x350/589bcd07a135b_350x350.jpg', '美林 布洛芬混悬液 100ml', '用于感冒或流感引起的发热，头痛。也用于缓解中度疼痛如关节痛，神经痛，偏头痛，牙痛。', '用于感冒或流感引起的发热，头痛。也用于缓解中度疼痛如关节痛，神经痛，偏头痛，牙痛。', '266.0', '300.0', '435', '266.0');
INSERT INTO `list` VALUES ('12', 'https://shopncstaticimage.baiyangwang.com/shop/store/goods/2/2_05938848139519838.jpg!gthumb', '【成人每天1-2片，随餐服用，或遵医嘱，由于有利尿作用避免在晚间服用】能帮助减轻痛风引起的关节红肿、疼痛等症状。', '【痛风患者的福音】澳大利亚Blackmores澳佳宝西芹籽芹菜籽精华3000mg 50粒', '【成人每天1-2片，随餐服用，或遵医嘱，由于有利尿作用避免在晚间服用】能帮助减轻痛风引起的关节红肿、疼痛等症状。', '170.0', '200.0', '300', '170.0');

-- ----------------------------
-- Table structure for login
-- ----------------------------
DROP TABLE IF EXISTS `login`;
CREATE TABLE `login` (
  `cid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `phone` varchar(255) NOT NULL,
  `pass` varchar(255) NOT NULL,
  PRIMARY KEY (`cid`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=34 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of login
-- ----------------------------
INSERT INTO `login` VALUES ('28', '13680693755', 'a123123');
INSERT INTO `login` VALUES ('29', '13680693756', 'a321321');
INSERT INTO `login` VALUES ('30', '13680693757', 'a123123');
INSERT INTO `login` VALUES ('32', '13680693788', 'a123123');
INSERT INTO `login` VALUES ('33', '19977892320', 'liangjia');

-- ----------------------------
-- Table structure for today
-- ----------------------------
DROP TABLE IF EXISTS `today`;
CREATE TABLE `today` (
  `cid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `imgs` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `dels` varchar(255) DEFAULT NULL,
  `buys` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`cid`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of today
-- ----------------------------
INSERT INTO `today` VALUES ('1', './images/index/today_goods (1).jpg', 'Cosme????????Esthe Dew??? ???500ml ??????? ???', '320', '500.0', '230');
INSERT INTO `today` VALUES ('2', './images/index/today_goods (2).jpg', '?????KUMANO?????????????600ml', '550', '800.0', '210');
INSERT INTO `today` VALUES ('3', './images/index/today_goods (3).jpg', 'IPSA??????+??????????', '780', '1100.0', '190');
INSERT INTO `today` VALUES ('4', './images/index/today_goods (4).jpg', '????????IPSA??????200ml', '1010', '1400.0', '170');
INSERT INTO `today` VALUES ('5', './images/index/today_goods (5).jpg', '???(ALBION)???????II? 200g', '1240', '1700.0', '150');
INSERT INTO `today` VALUES ('6', './images/index/today_goods (6).jpg', '?????KUMANO?????????????601ml', '1470', '2000.0', '130');
INSERT INTO `today` VALUES ('7', './images/index/today_goods (7).jpg', 'IPSA??????+??????????', '1700', '2300.0', '110');
INSERT INTO `today` VALUES ('8', './images/index/today_goods (8).jpg', '????????IPSA??????201ml', '1930', '2600.0', '90');
INSERT INTO `today` VALUES ('9', './images/index/today_goods (9).jpg', '???(ALBION)???????II? 201g', '2160', '2900.0', '70');
INSERT INTO `today` VALUES ('10', './images/index/today_goods (10).jpg', '?????KUMANO?????????????602ml', '2390', '3200.0', '50');
INSERT INTO `today` VALUES ('11', './images/index/today_goods (11).jpg', 'IPSA??????+??????????', '2620', '3500.0', '30');
INSERT INTO `today` VALUES ('12', './images/index/today_goods (12).jpg', '????????IPSA??????202ml', '2850', '3800.0', '10');
INSERT INTO `today` VALUES ('13', './images/index/today_goods (13).jpg', '???(ALBION)???????II? 202g', '3080', '4100.0', '1');
SET FOREIGN_KEY_CHECKS=1;
