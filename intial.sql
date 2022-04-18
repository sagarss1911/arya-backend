-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.14-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             11.1.0.6116
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping structure for table arya.admin_master
CREATE TABLE IF NOT EXISTS `admin_master` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `token` text DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table arya.admin_master: ~3 rows (approximately)
/*!40000 ALTER TABLE `admin_master` DISABLE KEYS */;
INSERT INTO `admin_master` (`id`, `email`, `password`, `token`, `createdAt`, `updatedAt`) VALUES
	(2, 'info@jtechappz.com', 'fcea920f7412b5da7be0cf42b8c93759', '9b528dafa2d4343182e1263d02d5dec6', '2022-02-21 16:42:33', '2022-04-18 14:15:48'),
	(3, 'milan@jtechappz.com', 'e10adc3949ba59abbe56e057f20f883e', '98630753d0dd99389f174097488d00f3', '2022-02-26 10:58:24', '2022-04-13 12:43:42'),
	(4, 'akash@jtechworld.com', 'e10adc3949ba59abbe56e057f20f883e', '249de3b5e3051f84fac92018c0823bdd', '2022-02-26 10:58:43', '2022-03-24 06:05:18');
/*!40000 ALTER TABLE `admin_master` ENABLE KEYS */;

-- Dumping structure for table arya.customer
CREATE TABLE IF NOT EXISTS `customer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text DEFAULT NULL,
  `address` text DEFAULT NULL,
  `birthdate` text DEFAULT NULL,
  `mobile_no` text DEFAULT NULL,
  `email` text DEFAULT NULL,
  `education` text DEFAULT NULL,
  `marital_status` enum('married','unmarried','divorced','widowed') DEFAULT 'unmarried',
  `spouse_name` text DEFAULT NULL,
  `mother_name` text DEFAULT NULL,
  `notes` text DEFAULT NULL,
  `pan_card` text DEFAULT NULL,
  `aadhar_card` text DEFAULT NULL,
  `residential_latest_bill` text DEFAULT NULL,
  `property_tax_receipt` text DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table arya.customer: ~1 rows (approximately)
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` (`id`, `name`, `address`, `birthdate`, `mobile_no`, `email`, `education`, `marital_status`, `spouse_name`, `mother_name`, `notes`, `pan_card`, `aadhar_card`, `residential_latest_bill`, `property_tax_receipt`, `createdAt`, `updatedAt`) VALUES
	(1, 'johm Smith', 'a-18 h society', '19/07/1994', '9377690348', 'abc@gmail.com', 'education', 'married', 'abc wife', 'abc ben', 'sample notes', '1650293602451.png', '1650293597077.png', '1650293597761.png', '1650293602401.png', '2022-04-18 14:53:14', '2022-04-18 14:53:14');
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
