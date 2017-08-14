-- MySQL dump 10.13  Distrib 5.5.57, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: db_crash
-- ------------------------------------------------------
-- Server version	5.5.57-0ubuntu0.14.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tb_crash_info`
--

DROP TABLE IF EXISTS `tb_crash_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_crash_info` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `crash_type` varchar(15) DEFAULT NULL,
  `crash_date` varchar(32) DEFAULT NULL,
  `app_ver` varchar(32) DEFAULT NULL,
  `app_name` varchar(32) DEFAULT NULL,
  `platform` varchar(32) DEFAULT NULL,
  `android_ver` varchar(64) DEFAULT NULL,
  `device_id` varchar(32) DEFAULT NULL,
  `dumpfile` varchar(64) DEFAULT NULL,
  `stack_trace` varchar(4096) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_crash_info`
--

LOCK TABLES `tb_crash_info` WRITE;
/*!40000 ALTER TABLE `tb_crash_info` DISABLE KEYS */;
INSERT INTO `tb_crash_info` VALUES (14,'java-crash','2017-08-09T20:25:31.455+08:00','1','1.0','undefined','5.1.1','null','','java.lang.StringIndexOutOfBoundsException: length=1; index=3\n	at java.lang.String.indexAndLength(String.java:500)\n	at java.lang.String.substring(String.java:1313)\n	at com.lm.MainActivity$1.onClick(MainActivity.java:19)\n	at android.view.View.performClick(View.java:4780)\n	at android.view.View$PerformClick.run(View.java:19866)\n	at android.os.Handler.handleCallback(Handler.java:739)\n	at android.os.Handler.dispatchMessage(Handler.java:95)\n	at android.os.Looper.loop(Looper.java:135)\n	at android.app.ActivityThread.main(ActivityThread.java:5254)\n	at java.lang.reflect.Method.invoke(Native Method)\n	at java.lang.reflect.Method.invoke(Method.java:372)\n	at com.android.internal.os.ZygoteInit$MethodAndArgsCaller.run(ZygoteInit.java:903)\n	at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:698)\n'),(18,'c-crash','201708110900','1','1.0','','Android SDK built for x86,5.1.1,22','000000000000000','6cf175f1-4a15-4cb3-34c0d1bb-c505196c.dmp','./crash-log/2017/08-11/6cf175f1-4a15-4cb3-34c0d1bb-c505196c.log'),(19,'java-crash','2017-08-11T09:01:40.471+08:00','1','1.0','undefined','5.1.1','null','','java.lang.StringIndexOutOfBoundsException: length=1; index=3\n	at java.lang.String.indexAndLength(String.java:500)\n	at java.lang.String.substring(String.java:1313)\n	at com.lm.MainActivity$1.onClick(MainActivity.java:19)\n	at android.view.View.performClick(View.java:4780)\n	at android.view.View$PerformClick.run(View.java:19866)\n	at android.os.Handler.handleCallback(Handler.java:739)\n	at android.os.Handler.dispatchMessage(Handler.java:95)\n	at android.os.Looper.loop(Looper.java:135)\n	at android.app.ActivityThread.main(ActivityThread.java:5254)\n	at java.lang.reflect.Method.invoke(Native Method)\n	at java.lang.reflect.Method.invoke(Method.java:372)\n	at com.android.internal.os.ZygoteInit$MethodAndArgsCaller.run(ZygoteInit.java:903)\n	at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:698)\n'),(20,'java-crash','2017-08-11T09:01:46.638+08:00','1','1.0','undefined','5.1.1','null','','java.lang.StringIndexOutOfBoundsException: length=1; index=3\n	at java.lang.String.indexAndLength(String.java:500)\n	at java.lang.String.substring(String.java:1313)\n	at com.lm.MainActivity$1.onClick(MainActivity.java:19)\n	at android.view.View.performClick(View.java:4780)\n	at android.view.View$PerformClick.run(View.java:19866)\n	at android.os.Handler.handleCallback(Handler.java:739)\n	at android.os.Handler.dispatchMessage(Handler.java:95)\n	at android.os.Looper.loop(Looper.java:135)\n	at android.app.ActivityThread.main(ActivityThread.java:5254)\n	at java.lang.reflect.Method.invoke(Native Method)\n	at java.lang.reflect.Method.invoke(Method.java:372)\n	at com.android.internal.os.ZygoteInit$MethodAndArgsCaller.run(ZygoteInit.java:903)\n	at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:698)\n'),(21,'c-crash','201708110901','1','1.0','','Android SDK built for x86,5.1.1,22','000000000000000','9d2283ef-95ea-4dfe-bfe8a9b0-dd18c791.dmp','./crash-log/2017/08-11/9d2283ef-95ea-4dfe-bfe8a9b0-dd18c791.log'),(22,'c-crash','201708110902','1','1.0','','Android SDK built for x86,5.1.1,22','000000000000000','d44f7471-c79f-435f-1e3eb791-5d83fcb3.dmp','./crash-log/2017/08-11/d44f7471-c79f-435f-1e3eb791-5d83fcb3.log'),(23,'java-crash','2017-08-11T09:02:13.428+08:00','1','1.0','undefined','5.1.1','null','','java.lang.StringIndexOutOfBoundsException: length=1; index=3\n	at java.lang.String.indexAndLength(String.java:500)\n	at java.lang.String.substring(String.java:1313)\n	at com.lm.MainActivity$1.onClick(MainActivity.java:19)\n	at android.view.View.performClick(View.java:4780)\n	at android.view.View$PerformClick.run(View.java:19866)\n	at android.os.Handler.handleCallback(Handler.java:739)\n	at android.os.Handler.dispatchMessage(Handler.java:95)\n	at android.os.Looper.loop(Looper.java:135)\n	at android.app.ActivityThread.main(ActivityThread.java:5254)\n	at java.lang.reflect.Method.invoke(Native Method)\n	at java.lang.reflect.Method.invoke(Method.java:372)\n	at com.android.internal.os.ZygoteInit$MethodAndArgsCaller.run(ZygoteInit.java:903)\n	at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:698)\n'),(24,'java-crash','2017-08-11T09:02:33.377+08:00','1','1.0','undefined','5.1.1','null','','java.lang.StringIndexOutOfBoundsException: length=1; index=3\n	at java.lang.String.indexAndLength(String.java:500)\n	at java.lang.String.substring(String.java:1313)\n	at com.lm.MainActivity$1.onClick(MainActivity.java:19)\n	at android.view.View.performClick(View.java:4780)\n	at android.view.View$PerformClick.run(View.java:19866)\n	at android.os.Handler.handleCallback(Handler.java:739)\n	at android.os.Handler.dispatchMessage(Handler.java:95)\n	at android.os.Looper.loop(Looper.java:135)\n	at android.app.ActivityThread.main(ActivityThread.java:5254)\n	at java.lang.reflect.Method.invoke(Native Method)\n	at java.lang.reflect.Method.invoke(Method.java:372)\n	at com.android.internal.os.ZygoteInit$MethodAndArgsCaller.run(ZygoteInit.java:903)\n	at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:698)\n'),(25,'c-crash','201708110902','1','1.0','','Android SDK built for x86,5.1.1,22','000000000000000','9f5438b2-c640-49d6-a20d2699-846d311c.dmp','./crash-log/2017/08-11/9f5438b2-c640-49d6-a20d2699-846d311c.log'),(26,'java-crash','2017-08-11T09:02:46.969+08:00','1','1.0','undefined','5.1.1','null','','java.lang.StringIndexOutOfBoundsException: length=1; index=3\n	at java.lang.String.indexAndLength(String.java:500)\n	at java.lang.String.substring(String.java:1313)\n	at com.lm.MainActivity$1.onClick(MainActivity.java:19)\n	at android.view.View.performClick(View.java:4780)\n	at android.view.View$PerformClick.run(View.java:19866)\n	at android.os.Handler.handleCallback(Handler.java:739)\n	at android.os.Handler.dispatchMessage(Handler.java:95)\n	at android.os.Looper.loop(Looper.java:135)\n	at android.app.ActivityThread.main(ActivityThread.java:5254)\n	at java.lang.reflect.Method.invoke(Native Method)\n	at java.lang.reflect.Method.invoke(Method.java:372)\n	at com.android.internal.os.ZygoteInit$MethodAndArgsCaller.run(ZygoteInit.java:903)\n	at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:698)\n'),(30,'c-crash','201708111135','1','1.0','','Android SDK built for x86,5.1.1,22','000000000000000','159556c9-d73d-49c4-c1c9f0ad-2a297300.dmp','./crash-log/2017/08-11/159556c9-d73d-49c4-c1c9f0ad-2a297300.log'),(31,'java-crash','2017-08-11T11:35:35.192+08:00','1','1.0','undefined','5.1.1','null','','java.lang.StringIndexOutOfBoundsException: length=1; index=3\n	at java.lang.String.indexAndLength(String.java:500)\n	at java.lang.String.substring(String.java:1313)\n	at com.lm.MainActivity$1.onClick(MainActivity.java:19)\n	at android.view.View.performClick(View.java:4780)\n	at android.view.View$PerformClick.run(View.java:19866)\n	at android.os.Handler.handleCallback(Handler.java:739)\n	at android.os.Handler.dispatchMessage(Handler.java:95)\n	at android.os.Looper.loop(Looper.java:135)\n	at android.app.ActivityThread.main(ActivityThread.java:5254)\n	at java.lang.reflect.Method.invoke(Native Method)\n	at java.lang.reflect.Method.invoke(Method.java:372)\n	at com.android.internal.os.ZygoteInit$MethodAndArgsCaller.run(ZygoteInit.java:903)\n	at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:698)\n'),(32,'c-crash','201708111135','1','1.0','','Android SDK built for x86,5.1.1,22','000000000000000','97508f54-8869-4130-6d027aaa-944936fb.dmp','./crash-log/2017/08-11/97508f54-8869-4130-6d027aaa-944936fb.log'),(33,'java-crash','2017-08-11T11:35:48.417+08:00','1','1.0','undefined','5.1.1','null','','java.lang.StringIndexOutOfBoundsException: length=1; index=3\n	at java.lang.String.indexAndLength(String.java:500)\n	at java.lang.String.substring(String.java:1313)\n	at com.lm.MainActivity$1.onClick(MainActivity.java:19)\n	at android.view.View.performClick(View.java:4780)\n	at android.view.View$PerformClick.run(View.java:19866)\n	at android.os.Handler.handleCallback(Handler.java:739)\n	at android.os.Handler.dispatchMessage(Handler.java:95)\n	at android.os.Looper.loop(Looper.java:135)\n	at android.app.ActivityThread.main(ActivityThread.java:5254)\n	at java.lang.reflect.Method.invoke(Native Method)\n	at java.lang.reflect.Method.invoke(Method.java:372)\n	at com.android.internal.os.ZygoteInit$MethodAndArgsCaller.run(ZygoteInit.java:903)\n	at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:698)\n'),(34,'c-crash','201708111135','1','1.0','','Android SDK built for x86,5.1.1,22','000000000000000','9c7e7b88-cd74-4dcc-44d209ad-564d7f8c.dmp','./crash-log/2017/08-11/9c7e7b88-cd74-4dcc-44d209ad-564d7f8c.log'),(35,'c-crash','201708111136','1','1.0','','Android SDK built for x86,5.1.1,22','000000000000000','3ed1ede6-f169-4a04-cc4f4191-ce990ced.dmp','./crash-log/2017/08-11/3ed1ede6-f169-4a04-cc4f4191-ce990ced.log'),(36,'java-crash','2017-08-11T11:36:11.823+08:00','1','1.0','undefined','5.1.1','null','','java.lang.StringIndexOutOfBoundsException: length=1; index=3\n	at java.lang.String.indexAndLength(String.java:500)\n	at java.lang.String.substring(String.java:1313)\n	at com.lm.MainActivity$1.onClick(MainActivity.java:19)\n	at android.view.View.performClick(View.java:4780)\n	at android.view.View$PerformClick.run(View.java:19866)\n	at android.os.Handler.handleCallback(Handler.java:739)\n	at android.os.Handler.dispatchMessage(Handler.java:95)\n	at android.os.Looper.loop(Looper.java:135)\n	at android.app.ActivityThread.main(ActivityThread.java:5254)\n	at java.lang.reflect.Method.invoke(Native Method)\n	at java.lang.reflect.Method.invoke(Method.java:372)\n	at com.android.internal.os.ZygoteInit$MethodAndArgsCaller.run(ZygoteInit.java:903)\n	at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:698)\n'),(37,'c-crash','201708111136','1','1.0','','Android SDK built for x86,5.1.1,22','000000000000000','cf65fc0e-8fca-4dc1-1ee23c86-e5464261.dmp','./crash-log/2017/08-11/cf65fc0e-8fca-4dc1-1ee23c86-e5464261.log'),(38,'c-crash','201708111136','1','1.0','','Android SDK built for x86,5.1.1,22','000000000000000','01488131-0737-46b2-29a5cdbb-3416a1b0.dmp','./crash-log/2017/08-11/01488131-0737-46b2-29a5cdbb-3416a1b0.log'),(39,'java-crash','2017-08-11T11:36:36.702+08:00','1','1.0','undefined','5.1.1','null','','java.lang.StringIndexOutOfBoundsException: length=1; index=3\n	at java.lang.String.indexAndLength(String.java:500)\n	at java.lang.String.substring(String.java:1313)\n	at com.lm.MainActivity$1.onClick(MainActivity.java:19)\n	at android.view.View.performClick(View.java:4780)\n	at android.view.View$PerformClick.run(View.java:19866)\n	at android.os.Handler.handleCallback(Handler.java:739)\n	at android.os.Handler.dispatchMessage(Handler.java:95)\n	at android.os.Looper.loop(Looper.java:135)\n	at android.app.ActivityThread.main(ActivityThread.java:5254)\n	at java.lang.reflect.Method.invoke(Native Method)\n	at java.lang.reflect.Method.invoke(Method.java:372)\n	at com.android.internal.os.ZygoteInit$MethodAndArgsCaller.run(ZygoteInit.java:903)\n	at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:698)\n'),(40,'c-crash','201708111136','1','1.0','','Android SDK built for x86,5.1.1,22','000000000000000','b4c5fd8c-a4f1-4ded-dceb68b9-0e33b14f.dmp','./crash-log/2017/08-11/b4c5fd8c-a4f1-4ded-dceb68b9-0e33b14f.log'),(41,'c-crash','201708111137','1','1.0','','Android SDK built for x86,5.1.1,22','000000000000000','1098121a-1870-4096-cc571b9a-6a3d99d1.dmp','./crash-log/2017/08-11/1098121a-1870-4096-cc571b9a-6a3d99d1.log');
/*!40000 ALTER TABLE `tb_crash_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_query_user`
--

DROP TABLE IF EXISTS `tb_query_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_query_user` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `username` varchar(32) DEFAULT NULL,
  `password` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_query_user`
--

LOCK TABLES `tb_query_user` WRITE;
/*!40000 ALTER TABLE `tb_query_user` DISABLE KEYS */;
INSERT INTO `tb_query_user` VALUES (1,'admin','bc4f888eea6b72164ee00db6d918bfc6');
/*!40000 ALTER TABLE `tb_query_user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-08-11 14:24:37
