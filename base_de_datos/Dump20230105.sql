-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: star_factory_jewerly
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id_product` int NOT NULL AUTO_INCREMENT,
  `product_name` varchar(40) NOT NULL,
  `price` float NOT NULL,
  `product_description` varchar(100) DEFAULT NULL,
  `stock` int DEFAULT NULL,
  `weight` varchar(10) NOT NULL,
  `material` varchar(20) NOT NULL,
  `product_type` varchar(20) NOT NULL,
  `pics` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id_product`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'WINGS RINGS',39.99,'A BEATUFYL RING MADE IN SILVER 925 WITH A LOT OF DETAILS',6,'18.00gr','SILVER 925','','https://i.ibb.co/233LHqb/anillo-alas.webp'),(2,'SILVER BALI EARRINGS',14.99,'PAIR OF HEARRINGS BALI STYLE MAKE TO FINE SILVER 925',16,'8.00gr','SILVER 925','','https://i.ibb.co/3pL0SXh/aros.webp'),(3,'CHAIN OF SKULLS BRACELET',49.99,'SKULL BRACELET OF SILVER 925 SIZE 22cm AND WEIGHT 80gr',1,'32.00gr','SILVER 925','','https://i.ibb.co/BBX0cKD/brasalet.webp'),(4,'KILLER SKULL RING',39.99,'REVELOUS AND BOLD MOTORCYCLE STYLE SKULL RING',5,'17.50gr','SILVER 925','','https://i.ibb.co/fxy4MKG/calavera-asesina.webp');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id_user` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(50) NOT NULL,
  `user_lastname` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `user_password` varchar(100) NOT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'gabriel','cortez','darklord778-aldo@gmail.com','123456789'),(3,'teresa','oviedo','teresaoviedo@gmail.com','789456123'),(4,'enrique','garay','garay007@live.com.ar','142536789as'),(5,'denys','medrano','negrocroto@yahoo.io','crotocrot7890'),(6,'noelia','predes','noemegra78@hotmail.com','noeliapredes85'),(7,'roberto','prado','betobombero@hotmail.com','$2b$10$sl7Q/n.VLQJarqlcQ7z1A.A2qhsxq7CJNSjqHlgd2JQ01H5QfgJSW'),(8,'exequiel','cortez','exe007@log.io','$2b$10$qsrV5HBMdBicuDAfM0RlAeKf9eMUcch3VDYFcAg1Q8x2TSnPj34mS'),(12,'trere','rios','profe@profe.io','$2b$08$kdBHelKKYtGkFRhUfrVO1uk3FBGbWPCZrcFK.gGd8d0jCl.D7tFEm'),(13,'sandro11','prado','darklord778@gmail.com','$2b$08$B9wS51WkgFFTZ2kgyKTYtunLncryZd5GFmUAVBvM5N6L7JNaiTuae'),(14,'carolina','aleman','caro@aleman.io','$2b$08$Sw1AtomJ/f.oeThRyAUhteFgzqhsdCE512ffPAL.dp1Na3eWY55wC');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-05 11:21:54
