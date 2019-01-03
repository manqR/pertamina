-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.1.6-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             9.1.0.4867
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping structure for table pertamina.detail_check
CREATE TABLE IF NOT EXISTS `detail_check` (
  `kodeform` varchar(20) NOT NULL,
  `keterangan` varchar(50) NOT NULL,
  `remarks` varchar(255) NOT NULL,
  `status` int(11) NOT NULL,
  `urutan` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`urutan`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- Dumping data for table pertamina.detail_check: ~2 rows (approximately)
/*!40000 ALTER TABLE `detail_check` DISABLE KEYS */;
INSERT INTO `detail_check` (`kodeform`, `keterangan`, `remarks`, `status`, `urutan`) VALUES
	('MTN-1812001', 'cleanlines', '-', 1, 1),
	('MTN-1812001', 'truckconditions', '-', 1, 2),
	('MTN-1812001', 'fuel', 'error', 2, 3);
/*!40000 ALTER TABLE `detail_check` ENABLE KEYS */;


-- Dumping structure for table pertamina.detail_fix
CREATE TABLE IF NOT EXISTS `detail_fix` (
  `kodefix` varchar(20) NOT NULL,
  `keterangan` varchar(50) NOT NULL,
  `remarks` varchar(255) NOT NULL,
  `urutan` int(11) NOT NULL,
  PRIMARY KEY (`urutan`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table pertamina.detail_fix: ~0 rows (approximately)
/*!40000 ALTER TABLE `detail_fix` DISABLE KEYS */;
INSERT INTO `detail_fix` (`kodefix`, `keterangan`, `remarks`, `urutan`) VALUES
	('SPK-1812001', 'fuel', 'fixing done', 1);
/*!40000 ALTER TABLE `detail_fix` ENABLE KEYS */;


-- Dumping structure for table pertamina.detail_proses
CREATE TABLE IF NOT EXISTS `detail_proses` (
  `kodeform` varchar(20) NOT NULL,
  `tanggal` date DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `urutan` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`urutan`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- Dumping data for table pertamina.detail_proses: ~2 rows (approximately)
/*!40000 ALTER TABLE `detail_proses` DISABLE KEYS */;
INSERT INTO `detail_proses` (`kodeform`, `tanggal`, `status`, `urutan`) VALUES
	('MTN-1812001', '2018-12-27', '2', 1),
	('MTN-1812001', '2018-12-27', '3', 2);
/*!40000 ALTER TABLE `detail_proses` ENABLE KEYS */;


-- Dumping structure for table pertamina.form_check
CREATE TABLE IF NOT EXISTS `form_check` (
  `kode_form` varchar(20) NOT NULL,
  `requester` varchar(10) NOT NULL,
  `approval` varchar(10) DEFAULT NULL,
  `teknisi` varchar(10) DEFAULT NULL,
  `tgl_buat` date NOT NULL,
  `tgl_approve` date DEFAULT '1900-00-00',
  `tgl_proses` date DEFAULT '1900-00-00',
  `status` varchar(50) NOT NULL,
  PRIMARY KEY (`kode_form`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table pertamina.form_check: ~0 rows (approximately)
/*!40000 ALTER TABLE `form_check` DISABLE KEYS */;
INSERT INTO `form_check` (`kode_form`, `requester`, `approval`, `teknisi`, `tgl_buat`, `tgl_approve`, `tgl_proses`, `status`) VALUES
	('MTN-1812001', '180005', '180001', '180002', '2018-12-26', '2018-12-27', '2018-12-27', '3');
/*!40000 ALTER TABLE `form_check` ENABLE KEYS */;


-- Dumping structure for table pertamina.form_fix
CREATE TABLE IF NOT EXISTS `form_fix` (
  `kodefix` varchar(20) NOT NULL,
  `kodeform` varchar(20) NOT NULL,
  `teknisi` varchar(20) NOT NULL,
  `tanggal` date NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`kodefix`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table pertamina.form_fix: ~0 rows (approximately)
/*!40000 ALTER TABLE `form_fix` DISABLE KEYS */;
INSERT INTO `form_fix` (`kodefix`, `kodeform`, `teknisi`, `tanggal`, `status`) VALUES
	('SPK-1812001', 'MTN-1812001', '180002', '2018-12-27', 3);
/*!40000 ALTER TABLE `form_fix` ENABLE KEYS */;


-- Dumping structure for table pertamina.jabatan
CREATE TABLE IF NOT EXISTS `jabatan` (
  `idjabatan` int(11) NOT NULL AUTO_INCREMENT,
  `nama_jabatan` varchar(50) NOT NULL,
  PRIMARY KEY (`idjabatan`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- Dumping data for table pertamina.jabatan: ~0 rows (approximately)
/*!40000 ALTER TABLE `jabatan` DISABLE KEYS */;
INSERT INTO `jabatan` (`idjabatan`, `nama_jabatan`) VALUES
	(2, 'SPV');
/*!40000 ALTER TABLE `jabatan` ENABLE KEYS */;


-- Dumping structure for table pertamina.migration
CREATE TABLE IF NOT EXISTS `migration` (
  `version` varchar(180) NOT NULL,
  `apply_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`version`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table pertamina.migration: ~2 rows (approximately)
/*!40000 ALTER TABLE `migration` DISABLE KEYS */;
INSERT INTO `migration` (`version`, `apply_time`) VALUES
	('m000000_000000_base', 1545839074),
	('m130524_201442_init', 1545839077);
/*!40000 ALTER TABLE `migration` ENABLE KEYS */;


-- Dumping structure for table pertamina.user
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `nama_pegawai` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `tgl_lahir` date DEFAULT NULL,
  `no_hp` varchar(12) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `idjabatan` int(11) DEFAULT NULL,
  `auth_key` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  `password_hash` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password_reset_token` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `status` smallint(6) NOT NULL DEFAULT '10',
  `created_at` int(11) NOT NULL,
  `updated_at` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `password_reset_token` (`password_reset_token`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Dumping data for table pertamina.user: ~2 rows (approximately)
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`id`, `username`, `nama_pegawai`, `tgl_lahir`, `no_hp`, `email`, `idjabatan`, `auth_key`, `password_hash`, `password_reset_token`, `status`, `created_at`, `updated_at`) VALUES
	(1, '180001', 'Baried Satria', NULL, NULL, 'admin@pertamina.com', NULL, '95JDc0Q2uHzqrtXgw3W3YGGTwOh_af5O', '$2y$13$ypZeB6kJfjBX3HrCR8g.ce1UVaCeDRadP9l9p/s6SH1FzCJgJwW/6', NULL, 10, 1545839480, 1545839480),
	(2, '180002', 'BR', '2018-04-09', '08121022333', 'BR@pertamina.co.id', 2, 'L0e9DkGTheFKX-XD8fKinbG_5VJ3io43', '$2y$13$uVImFHrvJdg7wHKRSeGf8esKw1J3EYKvmDviuRAoNcouHX4PMdUc.', NULL, 10, 1545841305, 1545841305),
	(3, '180005', 'Barried Satria', '1990-12-05', '01231231', 'a@aa.com', 2, '5sM9brkKUxrq8tK_adiNKrUvJkn7Hmlp', '$2y$13$NpqsSc81xrTkIBvjRso5a.8hZ.aIeLhj0OCMbVcG9YzR4JhMrOtHG', NULL, 10, 1545841530, 1545841530);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
