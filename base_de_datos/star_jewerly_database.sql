CREATE DATABASE  IF NOT EXISTS `star_factory_jewerly` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `star_factory_jewerly`;
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
-- Table structure for table `adresses`
--

DROP TABLE IF EXISTS `adresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adresses` (
  `id_adress` int NOT NULL,
  `id_user` int NOT NULL,
  `adress` varchar(100) DEFAULT NULL,
  `city` varchar(20) NOT NULL,
  `province_state` varchar(20) DEFAULT NULL,
  `country` varchar(20) NOT NULL,
  `postal_code` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adresses`
--

LOCK TABLES `adresses` WRITE;
/*!40000 ALTER TABLE `adresses` DISABLE KEYS */;
/*!40000 ALTER TABLE `adresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dashboard_user`
--

DROP TABLE IF EXISTS `dashboard_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dashboard_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(50) DEFAULT NULL,
  `user_password` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dashboard_user`
--

LOCK TABLES `dashboard_user` WRITE;
/*!40000 ALTER TABLE `dashboard_user` DISABLE KEYS */;
INSERT INTO `dashboard_user` VALUES (1,'admin','123456');
/*!40000 ALTER TABLE `dashboard_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id_orders` int NOT NULL,
  `id_user` int NOT NULL,
  `id_products` int NOT NULL,
  `amount` int DEFAULT NULL,
  `dates` date DEFAULT NULL,
  KEY `id_user` (`id_user`),
  KEY `id_products` (`id_products`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`),
  CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`id_products`) REFERENCES `products` (`id_product`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pay_method`
--

DROP TABLE IF EXISTS `pay_method`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pay_method` (
  `id_card` int NOT NULL,
  `id_user` int NOT NULL,
  `card_name` varchar(50) NOT NULL,
  `card_number` int NOT NULL,
  `card_expiration` date DEFAULT NULL,
  `security_code` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pay_method`
--

LOCK TABLES `pay_method` WRITE;
/*!40000 ALTER TABLE `pay_method` DISABLE KEYS */;
/*!40000 ALTER TABLE `pay_method` ENABLE KEYS */;
UNLOCK TABLES;

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
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'WINGS RINGS',39.99,'A BEATUFYL RING MADE IN SILVER 925 WITH A LOT OF DETAILS',6,'18.00gr','SILVER 925','Rings','https://i.ibb.co/233LHqb/anillo-alas.webp'),(2,'SILVER BALI EARRINGS',14.99,'PAIR OF HEARRINGS BALI STYLE MAKE TO FINE SILVER 925',16,'8.00gr','SILVER 925','Earring','https://i.ibb.co/3pL0SXh/aros.webp'),(3,'CHAIN OF SKULLS BRACELET',49.99,'SKULL BRACELET OF SILVER 925 SIZE 22cm AND WEIGHT 80gr',1,'32.00gr','SILVER 925','Bracelets','https://i.ibb.co/BBX0cKD/brasalet.webp'),(4,'KILLER SKULL RING',39.99,'REVELOUS AND BOLD MOTORCYCLE STYLE SKULL RING',5,'17.50gr','SILVER 925','Rings','https://i.ibb.co/fxy4MKG/calavera-asesina.webp'),(8,'ACE OF SPADES EARRINGS',25.99,' earrings with ace of pike design and skulls with screw back stopper',10,'10.00 gr','SILVER 925','Earring','https://i.ibb.co/FK5jkDP/img-20220624-162627-f7f0c0d4d21600f1af16561080917332-640-0.webp'),(9,'HEAVY MOTORHEAD RING',56.99,' heavy metal motorhead band design heavy ring and chain',10,'27.00 gr','SILVER 925','Rings','https://i.ibb.co/hfJ5nRd/img-20220408-145254-ac132f98122b97399416555456929854-640-0.webp'),(10,' EDDY HEAD RING',52.99,' ring with design of \"eddy\" from the band of Iron Maiden',6,'28.00 gr','SILVER 925','Rings','https://i.ibb.co/B6G0gfc/img-20220322-080629-1-891acd86166f609f0216480694365432-320-0.webp'),(11,' CHAIN ​​WITH IRON CROSS PENDANT',29.99,' 0.80mm chain with german iron cross pendant',8,'19.00 gr','SILVER 925','Chains','https://i.ibb.co/fkPmhzY/img-20210825-080304-747999ded1930e0a5016298978358959-640-0.webp'),(12,'THICK CHAIN ​​BRACELET',109.99,' chain bracelet with groumet type links is 10 mm thick',1,'36.00 gr','WHITE GOLD 18K','Bracelets','https://i.ibb.co/fMctjPN/pulsera-cadena.webp');
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

-- Dump completed on 2023-01-12 18:10:55
