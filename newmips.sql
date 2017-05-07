-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Client :  127.0.0.1
-- Généré le :  Dim 07 Mai 2017 à 14:58
-- Version du serveur :  10.1.21-MariaDB
-- Version de PHP :  5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `newmips`
--

-- --------------------------------------------------------

--
-- Structure de la table `4_e_api_credentials`
--

CREATE TABLE `4_e_api_credentials` (
  `id` int(11) NOT NULL,
  `version` int(11) DEFAULT NULL,
  `f_client_name` varchar(255) DEFAULT NULL,
  `f_client_key` varchar(255) DEFAULT NULL,
  `f_client_secret` varchar(255) DEFAULT NULL,
  `f_token` varchar(255) DEFAULT NULL,
  `f_token_timeout_tmsp` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `f_id_role_role` int(11) DEFAULT NULL,
  `f_id_group_group` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `4_e_api_credentials`
--

INSERT INTO `4_e_api_credentials` (`id`, `version`, `f_client_name`, `f_client_key`, `f_client_secret`, `f_token`, `f_token_timeout_tmsp`, `createdAt`, `updatedAt`, `f_id_role_role`, `f_id_group_group`) VALUES
(1, 1, 'Rail4', '8D0dZXMIBeiWSj7', 'YzDVJPRyIUp7DS0', '4f7532ca6489695bf9e460a6b78c3799', '1494239858251', '2017-05-07 05:00:21', '2017-05-07 12:37:38', 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `4_e_group`
--

CREATE TABLE `4_e_group` (
  `id` int(11) NOT NULL,
  `version` int(11) DEFAULT NULL,
  `f_label` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `4_e_group`
--

INSERT INTO `4_e_group` (`id`, `version`, `f_label`, `createdAt`, `updatedAt`) VALUES
(1, NULL, 'admin', '2017-05-06 20:21:48', '2017-05-06 20:21:48');

-- --------------------------------------------------------

--
-- Structure de la table `4_e_hanger`
--

CREATE TABLE `4_e_hanger` (
  `id` int(11) NOT NULL,
  `version` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `f_barcode` varchar(255) DEFAULT NULL,
  `f_occ` varchar(255) DEFAULT NULL,
  `f_id_rail` int(11) DEFAULT NULL,
  `f_connected` varchar(255) DEFAULT NULL,
  `f_rail` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `4_e_hanger`
--

INSERT INTO `4_e_hanger` (`id`, `version`, `createdAt`, `updatedAt`, `f_barcode`, `f_occ`, `f_id_rail`, `f_connected`, `f_rail`) VALUES
(4, 2, '2017-05-07 04:58:13', '2017-05-07 09:30:47', '13456321', '0', 4, '1', NULL),
(6, 2, '2017-05-07 04:58:41', '2017-05-07 09:20:01', '124356', '0', 4, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `4_e_product`
--

CREATE TABLE `4_e_product` (
  `id` int(11) NOT NULL,
  `version` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `f_style` varchar(255) DEFAULT NULL,
  `f_barcode` varchar(255) DEFAULT NULL,
  `f_sexe` varchar(255) DEFAULT NULL,
  `f_size` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `4_e_rail`
--

CREATE TABLE `4_e_rail` (
  `id` int(11) NOT NULL,
  `version` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `f_id_stock` int(11) DEFAULT NULL,
  `f_state` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `4_e_rail`
--

INSERT INTO `4_e_rail` (`id`, `version`, `createdAt`, `updatedAt`, `f_id_stock`, `f_state`) VALUES
(4, 2, '2017-05-07 04:44:48', '2017-05-07 09:11:39', 1, '1');

-- --------------------------------------------------------

--
-- Structure de la table `4_e_role`
--

CREATE TABLE `4_e_role` (
  `id` int(11) NOT NULL,
  `version` int(11) DEFAULT NULL,
  `f_label` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `4_e_role`
--

INSERT INTO `4_e_role` (`id`, `version`, `f_label`, `createdAt`, `updatedAt`) VALUES
(1, NULL, 'admin', '2017-05-06 20:21:48', '2017-05-06 20:21:48');

-- --------------------------------------------------------

--
-- Structure de la table `4_e_stock`
--

CREATE TABLE `4_e_stock` (
  `id` int(11) NOT NULL,
  `version` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `f_nbhangmisplaced` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `4_e_stock`
--

INSERT INTO `4_e_stock` (`id`, `version`, `createdAt`, `updatedAt`, `f_nbhangmisplaced`) VALUES
(1, 1, '2017-05-06 21:57:20', '2017-05-06 21:57:20', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `4_e_user`
--

CREATE TABLE `4_e_user` (
  `id` int(11) NOT NULL,
  `version` int(11) DEFAULT NULL,
  `f_login` varchar(255) DEFAULT NULL,
  `f_password` varchar(255) DEFAULT NULL,
  `f_email` varchar(255) DEFAULT NULL,
  `f_token_password_reset` varchar(255) DEFAULT NULL,
  `f_enabled` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `f_id_role_role` int(11) DEFAULT NULL,
  `f_id_group_group` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `4_e_user`
--

INSERT INTO `4_e_user` (`id`, `version`, `f_login`, `f_password`, `f_email`, `f_token_password_reset`, `f_enabled`, `createdAt`, `updatedAt`, `f_id_role_role`, `f_id_group_group`) VALUES
(1, NULL, 'adminWorkspace', '$2a$10$TclfBauyT/N0CDjCjKOG/.YSHiO0RLqWO2dOMfNKTNH3D5EaDIpr.', NULL, NULL, 1, '2017-05-06 20:21:48', '2017-05-06 20:21:48', 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `application`
--

CREATE TABLE `application` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `displayName` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `codeName` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `id_project` bigint(20) NOT NULL,
  `version` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Contenu de la table `application`
--

INSERT INTO `application` (`id`, `name`, `displayName`, `codeName`, `id_project`, `version`) VALUES
(4, 'availhanger', 'AvailHanger', 'a_availhanger', 3, 1);

-- --------------------------------------------------------

--
-- Structure de la table `component`
--

CREATE TABLE `component` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `codeName` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `id_module` bigint(20) DEFAULT NULL,
  `version` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Structure de la table `component_data_entity`
--

CREATE TABLE `component_data_entity` (
  `id_component` bigint(20) NOT NULL,
  `id_entity` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `data_entity`
--

CREATE TABLE `data_entity` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `codeName` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `id_module` bigint(20) NOT NULL,
  `version` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Contenu de la table `data_entity`
--

INSERT INTO `data_entity` (`id`, `name`, `codeName`, `id_module`, `version`) VALUES
(16, 'user', 'e_user', 9, 1),
(17, 'role', 'e_role', 9, 1),
(18, 'group', 'e_group', 9, 1),
(19, 'api credentials', 'e_api_credentials', 9, 1),
(20, 'product', 'e_product', 10, 1),
(22, 'hanger', 'e_hanger', 8, 1),
(23, 'rail', 'e_rail', 8, 1),
(24, 'stock', 'e_stock', 8, 1);

-- --------------------------------------------------------

--
-- Structure de la table `data_field`
--

CREATE TABLE `data_field` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `codeName` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `type` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `id_data_entity` bigint(20) NOT NULL,
  `version` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Contenu de la table `data_field`
--

INSERT INTO `data_field` (`id`, `name`, `codeName`, `type`, `id_data_entity`, `version`) VALUES
(38, 'login', 'f_login', 'string', 16, 1),
(39, 'password', 'f_password', 'string', 16, 1),
(40, 'email', 'f_email', 'email', 16, 1),
(41, 'token_password_reset', 'f_token_password_reset', 'string', 16, 1),
(42, 'enabled', 'f_enabled', 'number', 16, 1),
(43, 'label', 'f_label', 'string', 17, 1),
(44, 'label', 'f_label', 'string', 18, 1),
(45, 'id_role_role', 'f_id_role_role', 'INTEGER', 16, 1),
(46, 'id_group_group', 'f_id_group_group', 'INTEGER', 16, 1),
(47, 'client name', 'f_client_name', 'string', 19, 1),
(48, 'client key', 'f_client_key', 'string', 19, 1),
(49, 'client secret', 'f_client_secret', 'string', 19, 1),
(50, 'id_role_role', 'f_id_role_role', 'INTEGER', 19, 1),
(51, 'id_group_group', 'f_id_group_group', 'INTEGER', 19, 1),
(52, 'token', 'f_token', 'string', 19, 1),
(53, 'token timeout tmsp', 'f_token_timeout_tmsp', 'string', 19, 1),
(55, 'style', 'f_style', 'string', 20, 1),
(56, 'barcode', 'f_barcode', 'number', 20, 1),
(57, 'sexe', 'f_sexe', 'string', 20, 1),
(58, 'size', 'f_size', 'string', 20, 1),
(60, 'barcode', 'f_barcode', 'number', 22, 1),
(61, 'occ', 'f_occ', 'int', 22, 1),
(62, 'id_hungerlist', 'f_id_hungerlist', 'INTEGER', 22, 1),
(63, 'nbhangmisplaced', 'f_nbhangmisplaced', 'number', 24, 1),
(64, 'state', 'f_state', 'boolean', 23, 1),
(68, 'connected', 'f_connected', 'boolean', 22, 1),
(69, 'rail', 'f_rail', 'int', 22, 1);

-- --------------------------------------------------------

--
-- Structure de la table `module`
--

CREATE TABLE `module` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `codeName` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `id_application` bigint(20) NOT NULL,
  `version` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Contenu de la table `module`
--

INSERT INTO `module` (`id`, `name`, `codeName`, `id_application`, `version`) VALUES
(8, 'home', 'm_home', 4, 1),
(9, 'authentication', 'm_authentication', 4, 1),
(10, 'products', 'm_products', 4, 1);

-- --------------------------------------------------------

--
-- Structure de la table `project`
--

CREATE TABLE `project` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `displayName` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `codeName` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `version` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Contenu de la table `project`
--

INSERT INTO `project` (`id`, `name`, `displayName`, `codeName`, `version`) VALUES
(3, 'hackhanger', 'HackHanger', 'p_hackhanger', 1);

-- --------------------------------------------------------

--
-- Structure de la table `role`
--

CREATE TABLE `role` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `version` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Contenu de la table `role`
--

INSERT INTO `role` (`id`, `name`, `version`) VALUES
(1, 'Administrateur', 1);

-- --------------------------------------------------------

--
-- Structure de la table `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(255) COLLATE utf8_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` text COLLATE utf8_bin
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Contenu de la table `sessions`
--

INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
('-9QrRkkHuwuPmGGPUL44Q1C_4oBTTums', 1494228450, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('-VgcqvDyFR1JkcZRmvW3AH2KDJRHfbRX', 1494179995, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[],\"passport\":{\"user\":{\"id\":1,\"version\":null,\"f_login\":\"adminWorkspace\",\"f_password\":\"$2a$10$TclfBauyT/N0CDjCjKOG/.YSHiO0RLqWO2dOMfNKTNH3D5EaDIpr.\",\"f_email\":null,\"f_token_password_reset\":null,\"f_enabled\":1,\"createdAt\":\"2017-05-06T17:13:54.000Z\",\"updatedAt\":\"2017-05-06T17:13:54.000Z\",\"f_id_role_role\":1,\"f_id_group_group\":1,\"r_group\":{\"id\":1,\"version\":null,\"f_label\":\"admin\",\"createdAt\":\"2017-05-06T17:13:54.000Z\",\"updatedAt\":\"2017-05-06T17:13:54.000Z\"},\"r_role\":{\"id\":1,\"version\":null,\"f_label\":\"admin\",\"createdAt\":\"2017-05-06T17:13:54.000Z\",\"updatedAt\":\"2017-05-06T17:13:54.000Z\"}}}}'),
('0-fLzZUVGKwvq68vKqxwhOwvDYDLA8jA', 1494176637, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('1DuzNcWCQw0GxAvYQ9sLUU2gmJVI3S8L', 1494237048, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('1RikGIJyobm8kA4qiBdInQB78G-cjMQH', 1494237172, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('1TBOqGUtANLDpi2BPbm8zDJgwUC-iTdH', 1494238536, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('1dlZ8vLpCvMQge1w04VxnXEzsOVq3FmD', 1494175439, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('2IJmCqHfKXjJNkyF6y-SHnrfVbrwg-OY', 1494186082, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('2TLqivna8tqKtzy0Jv7vpTBNIlsxQkww', 1494239826, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('2YOO0zlBStqU0C4NcqPWUgZpGpD7aqiA', 1494228395, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('3UFJZFxDMc5BzGg0zK4g_OCONktr4Wpb', 1494237320, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('3pTKPK1kTWdfboX4RAgrCtkz2IUIubNc', 1494175678, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('4-3LgmIWMZgKmgatNlaB1woLU_DqrLo3', 1494228077, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('4_hkUdaX0iypaZySberGxEMqFpeLQgEW', 1494184471, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('4ol5xNnHrKmdr-voODhty7q-UhPpmqH_', 1494228317, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('4yl6713t3d3SjXwPbzKmOK7456DxS-0P', 1494226840, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('54IeK67dDtMu1gxIs48BmIl8dgSGzmYk', 1494179400, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('5FVTfwff7LoVWNLlwwkR_eVan66NmIGS', 1494212619, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('5FjEg7Dy0ymBO7yW9QpKpiMJj3J7Ez3n', 1494211916, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('5L3B4voe1B3nySOI0aaZLLFaU9ai5uZH', 1494184610, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('5_ql4TbaMG9Pyxxx8L3BL0lvfTMOCcb2', 1494181868, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('5kmCEyTFgpsY-vi4b2dRUyQ-c_zo6QSN', 1494239714, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('6MR5l8TDJKd1gsulVw13GthUF6hLCdpq', 1494224701, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('6cl8Ca81QAjP6mmN1IovYyiHeKzaWaAS', 1494212616, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('6ij_Uf7NZpFKaiI8bYVTGWEElx4b6tdy', 1494175129, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('6lMZd0XC-iGW_8vqq7ATb2YKUIWzKMEi', 1494226740, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('76L2kWYNgZ9xhf_pVPyXtOEpnkQBKQUm', 1494239858, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('7Ie-xqH3y3AwC7iL3qdB0krw0mmlYJB2', 1494223637, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('7LTjqtbkwx-i-ZCGqjVZC_XhF85fMpB0', 1494224129, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('7LZSDs1T0x5S3bpJKQDtTuTrn_gmt1jr', 1494225766, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('7zQVjEQfE1wXKAczuu3HHR-ndcTciG71', 1494237911, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('8YhMaNRuEtIUsTGdt7gBj7CEmhxBZVBM', 1494176433, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('8k6N3w_4N0xyuxTXuSNo6LXSxBV9VpVg', 1494225441, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('9QesOgHuHIamKDAFD0kIv2OXv3KwPJ0C', 1494181977, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('9T5M8RXdrE4ZLXYC8y5AoxAeSn7sBYc6', 1494237236, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('9UQhvpm2HlLHqixs4zzWRCDzF0HQP0Ug', 1494189502, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('9gT0qG4VStp6cUH8MNzWEw7Y3CUeVvi-', 1494212616, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[],\"flash\":{}}'),
('A5LlmwhCtAYoVpwtaOIBxb-4G0E9Obcp', 1494246273, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('ACSQq7AvvLJEZM8JUnsyRWvFLVTn-YNF', 1494175525, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('Ajdlh2sOggR8hitlhBw-qQV_PAlG0R2-', 1494227018, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('AlUQxaFToPiLUaKlsvEnyGfdQpTBoTdb', 1494193251, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('B3TmywCGiKPrF82PNnbLYRtRqS5CelkF', 1494239700, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('BbTEa_tCUWFnsELbpYG04Ym8e9r6SgfG', 1494211843, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('BpQxFzKEY5AjAmMGDkiUnMHWunLtEuEv', 1494185949, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('CgMC2IsvLMMCe9oLZUkRdw5WJBv7qXmn', 1494224560, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('CxMVENiayDVihQT2a1EwcK00tEtX8jGT', 1494176433, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('D2afAxsFMqjRh6nS9E_0LlP2WaXCij6Z', 1494246523, '{\"cookie\":{\"originalMaxAge\":false,\"expires\":false,\"httpOnly\":true,\"path\":\"/\"},\"lang_user\":\"fr-FR\",\"data\":{\"id\":1,\"email\":\"admin@newmips.com\",\"enabled\":1,\"first_name\":\"admin\",\"last_name\":\"NEWMIPS\",\"login\":\"admin\",\"password\":\"$2a$10$TclfBauyT/N0CDjCjKOG/.YSHiO0RLqWO2dOMfNKTNH3D5EaDIpr.\",\"phone\":\"0982593032\",\"token_password_reset\":null,\"version\":1,\"id_role\":1},\"passport\":{\"user\":{\"id\":1,\"email\":\"admin@newmips.com\",\"enabled\":1,\"first_name\":\"admin\",\"last_name\":\"NEWMIPS\",\"login\":\"admin\",\"password\":\"$2a$10$TclfBauyT/N0CDjCjKOG/.YSHiO0RLqWO2dOMfNKTNH3D5EaDIpr.\",\"phone\":\"0982593032\",\"token_password_reset\":null,\"version\":1,\"id_role\":1}},\"returnTo\":\"http://localhost:1337/default/home\",\"toastr\":[],\"answers\":[\"select module home :<br>Module home (8) sélectionné.\",\"add field Token timeout TMSP :<br>Nouveau champ Token timeout TMSP (53) créé.\",\"add field Token :<br>Nouveau champ Token (52) créé.\",\"add field group related to Group using label :<br>Nouveau champ r_group associé à group créé.\",\"add field role related to Role using label :<br>Nouveau champ r_role associé à role créé.\",\"set icon unlink :<br>L\'entité api credentials a maintenant l\'icône unlink\",\"add field Client Secret :<br>Nouveau champ Client Secret (49) créé.\",\"add field Client Key :<br>Nouveau champ Client Key (48) créé.\",\"add field Client Name :<br>Nouveau champ Client Name (47) créé.\",\"add entity API credentials :<br>Nouvelle entité api credentials (19) créée.\",\"add field group related to Group using label :<br>Nouveau champ r_group associé à group créé.\",\"add field role related to Role using label :<br>Nouveau champ r_role associé à role créé.\",\"select entity User :<br>Entité user (16) sélectionnée.\",\"set icon users :<br>L\'entité group a maintenant l\'icône users\",\"add field label :<br>Nouveau champ label (44) créé.\",\"create entity Group :<br>Nouvelle entité group (18) créée.\",\"set icon asterisk :<br>L\'entité role a maintenant l\'icône asterisk\",\"add field label :<br>Nouveau champ label (43) créé.\",\"create entity Role :<br>Nouvelle entité role (17) créée.\",\"set icon user :<br>L\'entité user a maintenant l\'icône user\",\"add field enabled with type number :<br>Nouveau champ enabled (42) créé.\",\"add field token_password_reset :<br>Nouveau champ token_password_reset (41) créé.\",\"add field email with type email :<br>Nouveau champ email (40) créé.\",\"add field password :<br>Nouveau champ password (39) créé.\",\"add field login :<br>Nouveau champ login (38) créé.\",\"create entity User :<br>Nouvelle entité user (16) créée.\",\"create module Authentication :<br>Nouveau module m_authentication (9) créé.\",\"create module home :<br>Nouveau module m_home (8) créé.\",\"create application AvailHanger :<br>Nouvelle application availhanger (4) créée.\",\"select project 3 :<br>Projet hackhanger (3) sélectionné.\",\"delete application 3 :<br>Application 3 supprimée !\",\"select module home :<br>Module home (6) sélectionné.\",\"add field Token timeout TMSP :<br>Nouveau champ Token timeout TMSP (34) créé.\",\"add field Token :<br>Nouveau champ Token (33) créé.\",\"add field group related to Group using label :<br>Nouveau champ r_group associé à group créé.\",\"add field role related to Role using label :<br>Nouveau champ r_role associé à role créé.\",\"set icon unlink :<br>L\'entité api credentials a maintenant l\'icône unlink\",\"add field Client Secret :<br>Nouveau champ Client Secret (30) créé.\",\"add field Client Key :<br>Nouveau champ Client Key (29) créé.\",\"add field Client Name :<br>Nouveau champ Client Name (28) créé.\",\"add entity API credentials :<br>Nouvelle entité api credentials (12) créée.\",\"add field group related to Group using label :<br>Nouveau champ r_group associé à group créé.\",\"add field role related to Role using label :<br>Nouveau champ r_role associé à role créé.\",\"select entity User :<br>Entité user (9) sélectionnée.\",\"set icon users :<br>L\'entité group a maintenant l\'icône users\",\"add field label :<br>Nouveau champ label (25) créé.\",\"create entity Group :<br>Nouvelle entité group (11) créée.\",\"set icon asterisk :<br>L\'entité role a maintenant l\'icône asterisk\",\"add field label :<br>Nouveau champ label (24) créé.\",\"create entity Role :<br>Nouvelle entité role (10) créée.\",\"set icon user :<br>L\'entité user a maintenant l\'icône user\",\"add field enabled with type number :<br>Nouveau champ enabled (23) créé.\",\"add field token_password_reset :<br>Nouveau champ token_password_reset (22) créé.\",\"add field email with type email :<br>Nouveau champ email (21) créé.\",\"add field password :<br>Nouveau champ password (20) créé.\",\"add field login :<br>Nouveau champ login (19) créé.\",\"create entity User :<br>Nouvelle entité user (9) créée.\",\"create module Authentication :<br>Nouveau module m_authentication (7) créé.\",\"create module home :<br>Nouveau module m_home (6) créé.\",\"create application AvailHanger :<br>Nouvelle application availhanger (3) créée.\",\"create project HackHanger :<br>Nouveau projet HackHanger (3) créé.\",\"delete project 2 :<br>Projet 2 supprimé !\",\"select module home :<br>Module home (3) sélectionné.\",\"add field Token timeout TMSP :<br>Nouveau champ Token timeout TMSP (16) créé.\",\"add field Token :<br>Nouveau champ Token (15) créé.\",\"add field group related to Group using label :<br>Nouveau champ r_group associé à group créé.\",\"add field role related to Role using label :<br>Nouveau champ r_role associé à role créé.\",\"set icon unlink :<br>L\'entité api credentials a maintenant l\'icône unlink\",\"add field Client Secret :<br>Nouveau champ Client Secret (12) créé.\",\"add field Client Key :<br>Nouveau champ Client Key (11) créé.\",\"add field Client Name :<br>Nouveau champ Client Name (10) créé.\",\"add entity API credentials :<br>Nouvelle entité api credentials (5) créée.\",\"add field group related to Group using label :<br>Nouveau champ r_group associé à group créé.\",\"add field role related to Role using label :<br>Nouveau champ r_role associé à role créé.\",\"select entity User :<br>Entité user (2) sélectionnée.\",\"set icon users :<br>L\'entité group a maintenant l\'icône users\",\"add field label :<br>Nouveau champ label (7) créé.\",\"create entity Group :<br>Nouvelle entité group (4) créée.\",\"set icon asterisk :<br>L\'entité role a maintenant l\'icône asterisk\",\"add field label :<br>Nouveau champ label (6) créé.\",\"create entity Role :<br>Nouvelle entité role (3) créée.\",\"set icon user :<br>L\'entité user a maintenant l\'icône user\",\"add field enabled with type number :<br>Nouveau champ enabled (5) créé.\",\"add field token_password_reset :<br>Nouveau champ token_password_reset (4) créé.\",\"add field email with type email :<br>Nouveau champ email (3) créé.\",\"add field password :<br>Nouveau champ password (2) créé.\",\"add field login :<br>Nouveau champ login (1) créé.\",\"create entity User :<br>Nouvelle entité user (2) créée.\",\"create module Authentication :<br>Nouveau module m_authentication (4) créé.\",\"create module home :<br>Nouveau module m_home (3) créé.\",\"create application AvailHanger :<br>Nouvelle application availhanger (2) créée.\",\"create project HackHanger :<br>Nouveau projet HackHanger (2) créé.\"],\"id_project\":3,\"id_application\":\"4\",\"id_module\":8,\"id_data_entity\":22,\"name_application\":\"availhanger\",\"chat\":{\"2\":{\"1\":{\"items\":[{\"user\":\"Newmips\",\"dateEmission\":\"06 May 18:36\",\"content\":\"chat.welcome\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"06 May 18:38\",\"content\":\"restart server\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"06 May 18:40\",\"content\":\"add entity livre\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 18:40\",\"content\":\"database.entity.create.success\",\"params\":[\"livre\",6]},{\"user\":\"admin\",\"dateEmission\":\"06 May 18:41\",\"content\":\"add field titre\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 18:41\",\"content\":\"database.field.create.created\",\"params\":[\"titre\",17]},{\"user\":\"admin\",\"dateEmission\":\"06 May 18:43\",\"content\":\"add field description\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 18:43\",\"content\":\"database.field.create.created\",\"params\":[\"description\",18]},{\"user\":\"admin\",\"dateEmission\":\"06 May 18:45\",\"content\":\"restart server\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"06 May 18:46\",\"content\":\"restart server\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"06 May 18:47\",\"content\":\"create module yolo\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 18:47\",\"content\":\"database.module.create.success\",\"params\":[\"m_yolo\",5]},{\"user\":\"admin\",\"dateEmission\":\"06 May 18:47\",\"content\":\"create entity entity de yolo\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 18:47\",\"content\":\"database.entity.create.success\",\"params\":[\"entity de yolo\",7]},{\"user\":\"admin\",\"dateEmission\":\"06 May 18:54\",\"content\":\"delete module yolo\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 18:54\",\"content\":\"database.entity.notFound.withThisName\",\"params\":[\"entity_de_yolo\"]},{\"user\":\"admin\",\"dateEmission\":\"06 May 18:55\",\"content\":\"help\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 18:55\",\"content\":\"Please refer to documentation: <a href=\'http://docs.newmips.com/\' target=\'_blank\'>http://docs.newmips.com/</a> to know more about basic instructions.\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"06 May 19:00\",\"content\":\"restart server\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"06 May 19:01\",\"content\":\"delete module yolo\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 19:01\",\"content\":\"database.module.delete.deleted\",\"params\":[\"yolo\"]},{\"user\":\"admin\",\"dateEmission\":\"06 May 19:03\",\"content\":\"delete entity livre\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 19:03\",\"content\":\"database.entity.delete.deleted\",\"params\":[\"livre\"]},{\"user\":\"admin\",\"dateEmission\":\"06 May 19:09\",\"content\":\"create entity hanger\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 19:09\",\"content\":\"database.entity.create.success\",\"params\":[\"hanger\",8]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 19:09\",\"content\":\"structure.global.restart.error\",\"params\":[]}]}},\"3\":{\"1\":{\"items\":[{\"user\":\"Newmips\",\"dateEmission\":\"06 May 19:13\",\"content\":\"chat.welcome\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"06 May 19:15\",\"content\":\"create entity hanger\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 19:15\",\"content\":\"database.entity.create.success\",\"params\":[\"hanger\",13]},{\"user\":\"admin\",\"dateEmission\":\"06 May 19:15\",\"content\":\"create entity rail\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 19:15\",\"content\":\"database.entity.create.success\",\"params\":[\"rail\",14]},{\"user\":\"admin\",\"dateEmission\":\"06 May 19:16\",\"content\":\"create entity stock\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 19:16\",\"content\":\"database.entity.create.success\",\"params\":[\"stock\",15]},{\"user\":\"admin\",\"dateEmission\":\"06 May 19:33\",\"content\":\"create field id with type int\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 19:33\",\"content\":\"database.field.create.created\",\"params\":[\"id\",35]},{\"user\":\"admin\",\"dateEmission\":\"06 May 19:35\",\"content\":\"create field barcode with type number\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 19:35\",\"content\":\"database.field.create.created\",\"params\":[\"barcode\",36]},{\"user\":\"admin\",\"dateEmission\":\"06 May 19:37\",\"content\":\"restart server\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"06 May 19:39\",\"content\":\"add field id with type id\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 19:39\",\"content\":\"database.field.error.alreadyExist\",\"params\":[\"id\"]},{\"user\":\"admin\",\"dateEmission\":\"06 May 19:49\",\"content\":\"delete field id\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 19:49\",\"content\":\"database.field.delete.deleted\",\"params\":[\"id\"]},{\"user\":\"admin\",\"dateEmission\":\"06 May 19:49\",\"content\":\"delete field barcode\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 19:49\",\"content\":\"database.field.delete.deleted\",\"params\":[\"barcode\"]},{\"user\":\"admin\",\"dateEmission\":\"06 May 19:49\",\"content\":\"add field id with type id\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 19:49\",\"content\":\"database.field.create.created\",\"params\":[\"id\",37]},{\"user\":\"admin\",\"dateEmission\":\"06 May 19:58\",\"content\":\"delete entity stock\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 19:58\",\"content\":\"database.entity.delete.deleted\",\"params\":[\"stock\"]}]}},\"4\":{\"1\":{\"items\":[{\"user\":\"Newmips\",\"dateEmission\":\"06 May 20:21\",\"content\":\"chat.welcome\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"06 May 20:22\",\"content\":\"create module products\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 20:22\",\"content\":\"database.module.create.success\",\"params\":[\"m_products\",10]},{\"user\":\"admin\",\"dateEmission\":\"06 May 20:23\",\"content\":\"create entity product\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 20:23\",\"content\":\"database.entity.create.success\",\"params\":[\"product\",20]},{\"user\":\"admin\",\"dateEmission\":\"06 May 20:29\",\"content\":\"add entity product\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 20:29\",\"content\":\"database.entity.create.alreadyExist\",\"params\":[\"e_product\"]},{\"user\":\"admin\",\"dateEmission\":\"06 May 20:31\",\"content\":\"add field id with type int\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 20:31\",\"content\":\"database.field.create.created\",\"params\":[\"id\",54]},{\"user\":\"admin\",\"dateEmission\":\"06 May 20:31\",\"content\":\"add field style with type string\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 20:31\",\"content\":\"database.field.create.created\",\"params\":[\"style\",55]},{\"user\":\"admin\",\"dateEmission\":\"06 May 20:32\",\"content\":\"add field barcode with type number\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 20:32\",\"content\":\"database.field.create.created\",\"params\":[\"barcode\",56]},{\"user\":\"admin\",\"dateEmission\":\"06 May 20:32\",\"content\":\"add field sexe with type string\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 20:32\",\"content\":\"database.field.create.created\",\"params\":[\"sexe\",57]},{\"user\":\"admin\",\"dateEmission\":\"06 May 20:33\",\"content\":\"add field size with type string\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 20:33\",\"content\":\"database.field.create.created\",\"params\":[\"size\",58]},{\"user\":\"admin\",\"dateEmission\":\"06 May 20:34\",\"content\":\"delete field id\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 20:34\",\"content\":\"database.field.delete.deleted\",\"params\":[\"id\"]},{\"user\":\"admin\",\"dateEmission\":\"06 May 20:37\",\"content\":\"add entity hanger\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 20:37\",\"content\":\"database.entity.create.success\",\"params\":[\"hanger\",21]},{\"user\":\"admin\",\"dateEmission\":\"06 May 21:12\",\"content\":\"delete entity hanger\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 21:12\",\"content\":\"database.entity.delete.deleted\",\"params\":[\"hanger\"]},{\"user\":\"admin\",\"dateEmission\":\"06 May 21:12\",\"content\":\"seleAccueil\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 21:12\",\"content\":\"Sorry, your instruction has not been executed properly.<br><br>Error: Unable to find a matching instruction.<br><br>\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"06 May 21:13\",\"content\":\"select module Accueil\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 21:13\",\"content\":\"database.module.notFound.withThisName\",\"params\":[\"Accueil\"]},{\"user\":\"admin\",\"dateEmission\":\"06 May 21:13\",\"content\":\"select Accueil\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 21:13\",\"content\":\"Sorry, your instruction has not been executed properly.<br><br>Error: Unable to find a matching instruction.<br><br>\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"06 May 21:14\",\"content\":\"select module Accueil\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 21:14\",\"content\":\"database.module.notFound.withThisName\",\"params\":[\"Accueil\"]},{\"user\":\"admin\",\"dateEmission\":\"06 May 21:14\",\"content\":\"select module Home\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 21:14\",\"content\":\"database.module.select.selected\",\"params\":[\"home\",8]},{\"user\":\"admin\",\"dateEmission\":\"06 May 21:14\",\"content\":\"add entity hanger\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 21:14\",\"content\":\"database.entity.create.success\",\"params\":[\"hanger\",22]},{\"user\":\"admin\",\"dateEmission\":\"06 May 21:15\",\"content\":\"add field tringle with type int\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 21:15\",\"content\":\"database.field.create.created\",\"params\":[\"tringle\",59]},{\"user\":\"admin\",\"dateEmission\":\"06 May 21:16\",\"content\":\"add field barcode with type number\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 21:16\",\"content\":\"database.field.create.created\",\"params\":[\"barcode\",60]},{\"user\":\"admin\",\"dateEmission\":\"06 May 21:16\",\"content\":\"add field occ with type int\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 21:16\",\"content\":\"database.field.create.created\",\"params\":[\"occ\",61]},{\"user\":\"admin\",\"dateEmission\":\"06 May 21:16\",\"content\":\"add entity rail\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 21:16\",\"content\":\"database.entity.create.success\",\"params\":[\"rail\",23]},{\"user\":\"admin\",\"dateEmission\":\"06 May 21:32\",\"content\":\"create  fieldset hunger-list related to hanger\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 21:32\",\"content\":\"Sorry, your instruction has not been executed properly.<br><br>Error: Unable to find a matching instruction.<br><br>\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"06 May 21:34\",\"content\":\"create fieldset HungerList related to hanger\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 21:34\",\"content\":\"structure.association.fieldset.success\",\"params\":[\"hanger\",\"rail\"]},{\"user\":\"admin\",\"dateEmission\":\"06 May 21:39\",\"content\":\"restart server\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"06 May 21:41\",\"content\":\"create data entity stock\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 21:41\",\"content\":\"database.entity.create.success\",\"params\":[\"stock\",24]},{\"user\":\"admin\",\"dateEmission\":\"06 May 22:02\",\"content\":\"select entity rail\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 22:02\",\"content\":\"database.entity.select.selected\",\"params\":[\"rail\",23]},{\"user\":\"admin\",\"dateEmission\":\"06 May 22:05\",\"content\":\"delete tab HungerList\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 22:05\",\"content\":\"Tab HungerList deleted.\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"06 May 22:07\",\"content\":\"entity rail has many hanger\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 22:07\",\"content\":\"structure.association.hasMany.successEntity\",\"params\":[\"hanger\"]},{\"user\":\"admin\",\"dateEmission\":\"06 May 22:07\",\"content\":\"select entity stock\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 22:07\",\"content\":\"database.entity.select.selected\",\"params\":[\"stock\",24]},{\"user\":\"admin\",\"dateEmission\":\"06 May 22:38\",\"content\":\"entity stock has many rail\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 22:38\",\"content\":\"structure.association.hasMany.successEntity\",\"params\":[\"rail\"]},{\"user\":\"admin\",\"dateEmission\":\"06 May 22:42\",\"content\":\"add field NbHangMisplaced with type number\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 22:42\",\"content\":\"database.field.create.created\",\"params\":[\"NbHangMisplaced\",63]},{\"user\":\"admin\",\"dateEmission\":\"06 May 22:45\",\"content\":\"entity stock has many hanger\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 22:45\",\"content\":\"structure.association.hasMany.successEntity\",\"params\":[\"hanger\"]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 22:45\",\"content\":\"structure.global.restart.error\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"06 May 22:47\",\"content\":\"\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 22:47\",\"content\":\"Sorry, your instruction has not been executed properly.<br><br>Error: Unable to find a matching instruction.<br><br>\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"06 May 22:54\",\"content\":\"select entity rail\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 22:54\",\"content\":\"database.entity.select.selected\",\"params\":[\"rail\",23]},{\"user\":\"admin\",\"dateEmission\":\"06 May 22:55\",\"content\":\"select entity stock\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 22:55\",\"content\":\"database.entity.select.selected\",\"params\":[\"stock\",24]},{\"user\":\"admin\",\"dateEmission\":\"06 May 23:04\",\"content\":\"create data entity product\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 23:04\",\"content\":\"database.entity.create.alreadyExist\",\"params\":[\"e_product\"]},{\"user\":\"admin\",\"dateEmission\":\"06 May 23:37\",\"content\":\"select entity rail\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 23:37\",\"content\":\"database.entity.select.selected\",\"params\":[\"rail\",23]},{\"user\":\"admin\",\"dateEmission\":\"06 May 23:40\",\"content\":\"add field State with type boolean\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"06 May 23:40\",\"content\":\"database.field.create.created\",\"params\":[\"State\",64]},{\"user\":\"admin\",\"dateEmission\":\"07 May 04:41\",\"content\":\"select entity stock\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"07 May 04:41\",\"content\":\"database.entity.select.selected\",\"params\":[\"stock\",24]},{\"user\":\"admin\",\"dateEmission\":\"07 May 04:42\",\"content\":\"add widget on entity stock\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"07 May 04:42\",\"content\":\"structure.ui.widget.unknown\",\"params\":[\"on entity stock\"]},{\"user\":\"admin\",\"dateEmission\":\"07 May 04:42\",\"content\":\"add widget info on entity stock\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"07 May 04:42\",\"content\":\"structure.ui.widget.success\",\"params\":[\"info\",\"home\"]},{\"user\":\"admin\",\"dateEmission\":\"07 May 04:45\",\"content\":\"delete stock has many hanger\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"07 May 04:45\",\"content\":\"Sorry, your instruction has not been executed properly.<br><br>Error: Unable to find a matching instruction.<br><br>\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"07 May 04:47\",\"content\":\"list entity\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"07 May 04:47\",\"content\":\"<br><ul><li>home | stock(24)</li><li>home | rail(23)</li><li>home | hanger(22)</li><li>products | product(20)</li><li>authentication | api credentials(19)</li><li>authentication | group(18)</li><li>authentication | role(17)</li><li>authentication | user(16)</li></ul>\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"07 May 04:47\",\"content\":\"list data entity\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"07 May 04:47\",\"content\":\"<br><ul><li>home | stock(24)</li><li>home | rail(23)</li><li>home | hanger(22)</li><li>products | product(20)</li><li>authentication | api credentials(19)</li><li>authentication | group(18)</li><li>authentication | role(17)</li><li>authentication | user(16)</li></ul>\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"07 May 04:48\",\"content\":\"list data field\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"07 May 04:48\",\"content\":\"<br><ul><li>home | rail | state(64)</li><li>home | stock | nbhangmisplaced(63)</li><li>home | hanger | id_hungerlist(62)</li><li>home | hanger | occ(61)</li><li>home | hanger | barcode(60)</li><li>home | hanger | tringle(59)</li><li>products | product | size(58)</li><li>products | product | sexe(57)</li><li>products | product | barcode(56)</li><li>products | product | style(55)</li><li>authentication | api credentials | token timeout tmsp(53)</li><li>authentication | api credentials | token(52)</li><li>authentication | api credentials | id_group_group(51)</li><li>authentication | api credentials | id_role_role(50)</li><li>authentication | api credentials | client secret(49)</li><li>authentication | api credentials | client key(48)</li><li>authentication | api credentials | client name(47)</li><li>authentication | user | id_group_group(46)</li><li>authentication | user | id_role_role(45)</li><li>authentication | group | label(44)</li><li>authentication | role | label(43)</li><li>authentication | user | enabled(42)</li><li>authentication | user | token_password_reset(41)</li><li>authentication | user | email(40)</li><li>authentication | user | password(39)</li><li>authentication | user | login(38)</li></ul>\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"07 May 04:49\",\"content\":\"delete tab hanger\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"07 May 04:49\",\"content\":\"Tab hanger deleted.\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"07 May 04:49\",\"content\":\"select entity hanger\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"07 May 04:49\",\"content\":\"database.entity.select.selected\",\"params\":[\"hanger\",22]},{\"user\":\"admin\",\"dateEmission\":\"07 May 04:50\",\"content\":\"delete field tringle\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"07 May 04:50\",\"content\":\"database.field.delete.deleted\",\"params\":[\"tringle\"]},{\"user\":\"admin\",\"dateEmission\":\"07 May 04:50\",\"content\":\"add field railId with type int\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"07 May 04:50\",\"content\":\"database.field.create.created\",\"params\":[\"railId\",65]},{\"user\":\"admin\",\"dateEmission\":\"07 May 04:51\",\"content\":\"restart server\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"07 May 04:51\",\"content\":\"add widget info on entity rail\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"07 May 04:51\",\"content\":\"structure.ui.widget.success\",\"params\":[\"info\",\"home\"]},{\"user\":\"admin\",\"dateEmission\":\"07 May 04:52\",\"content\":\"add widget info on entity hanger\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"07 May 04:52\",\"content\":\"structure.ui.widget.success\",\"params\":[\"info\",\"home\"]},{\"user\":\"admin\",\"dateEmission\":\"07 May 05:01\",\"content\":\"deploy\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"07 May 05:01\",\"content\":\"Application is now available on: <br><a href=\'http://127.0.0.1:9004\' target=\'_blank\'>http://127.0.0.1:9004</a>\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"07 May 07:08\",\"content\":\"select entity hanger\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"07 May 07:08\",\"content\":\"database.entity.select.selected\",\"params\":[\"hanger\",22]},{\"user\":\"admin\",\"dateEmission\":\"07 May 07:09\",\"content\":\"add field onRail with type boolean\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"07 May 07:09\",\"content\":\"database.field.create.created\",\"params\":[\"onRail\",66]},{\"user\":\"admin\",\"dateEmission\":\"07 May 08:07\",\"content\":\"add widget stat on entity stock\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"07 May 08:07\",\"content\":\"structure.ui.widget.success\",\"params\":[\"stat\",\"home\"]},{\"user\":\"admin\",\"dateEmission\":\"07 May 08:08\",\"content\":\"remove widget info on entity stock\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"07 May 08:08\",\"content\":\"Sorry, your instruction has not been executed properly.<br><br>Error: Unable to find a matching instruction.<br><br>\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"07 May 08:08\",\"content\":\"remove widget info\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"07 May 08:08\",\"content\":\"Sorry, your instruction has not been executed properly.<br><br>Error: Unable to find a matching instruction.<br><br>\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"07 May 08:09\",\"content\":\"remove widget\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"07 May 08:09\",\"content\":\"Sorry, your instruction has not been executed properly.<br><br>Error: Unable to find a matching instruction.<br><br>\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"07 May 08:10\",\"content\":\"delete tab widget info\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"07 May 08:10\",\"content\":\"structure.association.error.unableTab\",\"params\":[\"widget info\"]},{\"user\":\"admin\",\"dateEmission\":\"07 May 08:14\",\"content\":\"restart server\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"07 May 08:15\",\"content\":\"add widget stat on entity rail\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"07 May 08:15\",\"content\":\"structure.ui.widget.success\",\"params\":[\"stat\",\"home\"]},{\"user\":\"admin\",\"dateEmission\":\"07 May 08:15\",\"content\":\"add widget stat on entity hanger\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"07 May 08:15\",\"content\":\"structure.ui.widget.success\",\"params\":[\"stat\",\"home\"]},{\"user\":\"admin\",\"dateEmission\":\"07 May 08:17\",\"content\":\"    add widget last records on entity hanger limited to 10 records with columns barcode, occ, raildId, onRail\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"07 May 08:17\",\"content\":\"structure.ui.widget.success\",\"params\":[\"last records\",\"home\"]},{\"user\":\"admin\",\"dateEmission\":\"07 May 08:18\",\"content\":\"restart server\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"07 May 08:19\",\"content\":\"restart server\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"07 May 08:19\",\"content\":\"    add widget last records on entity hanger limited to 10 records with columns occ, raildId, onRail\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"07 May 08:19\",\"content\":\"structure.ui.widget.success\",\"params\":[\"last records\",\"home\"]},{\"user\":\"admin\",\"dateEmission\":\"07 May 08:20\",\"content\":\"    add widget last records on entity hanger limited to 10 records with columns railId\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"07 May 08:20\",\"content\":\"structure.ui.widget.success\",\"params\":[\"last records\",\"home\"]},{\"user\":\"admin\",\"dateEmission\":\"07 May 08:21\",\"content\":\"restart server\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"07 May 08:22\",\"content\":\"    add widget last records on entity hanger limited to 10 records with columns railId\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"07 May 08:22\",\"content\":\"structure.ui.widget.success\",\"params\":[\"last records\",\"home\"]},{\"user\":\"admin\",\"dateEmission\":\"07 May 08:23\",\"content\":\"    add widget last records on entity hanger limited to 10 records with columns railId, onRail, occ\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"07 May 08:23\",\"content\":\"structure.ui.widget.success\",\"params\":[\"last records\",\"home\"]},{\"user\":\"admin\",\"dateEmission\":\"07 May 08:24\",\"content\":\"restart server\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"07 May 08:25\",\"content\":\"    add widget last records on entity hanger limited to 10 records with columns occ, railId\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"07 May 08:25\",\"content\":\"structure.ui.widget.success\",\"params\":[\"last records\",\"home\"]},{\"user\":\"admin\",\"dateEmission\":\"07 May 08:27\",\"content\":\"restart server\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"07 May 08:30\",\"content\":\"restart server\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"07 May 08:32\",\"content\":\"restart server\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"07 May 08:37\",\"content\":\"restart server\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"07 May 08:38\",\"content\":\"delete field railId\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"07 May 08:38\",\"content\":\"database.field.delete.deleted\",\"params\":[\"railId\"]},{\"user\":\"admin\",\"dateEmission\":\"07 May 08:39\",\"content\":\"restart server\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"07 May 08:42\",\"content\":\"restart server\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"07 May 08:47\",\"content\":\"restart server\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"07 May 08:58\",\"content\":\"add field depositRail with type int\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"07 May 08:58\",\"content\":\"database.field.create.created\",\"params\":[\"depositRail\",67]},{\"user\":\"admin\",\"dateEmission\":\"07 May 09:00\",\"content\":\"restart server\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"07 May 09:03\",\"content\":\"deploy\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"07 May 09:03\",\"content\":\"Application is now available on: <br><a href=\'http://127.0.0.1:9004\' target=\'_blank\'>http://127.0.0.1:9004</a>\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"07 May 09:20\",\"content\":\"delete field onRail\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"07 May 09:20\",\"content\":\"database.field.delete.deleted\",\"params\":[\"onRail\"]},{\"user\":\"admin\",\"dateEmission\":\"07 May 09:21\",\"content\":\"add field connected with type boolean\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"07 May 09:21\",\"content\":\"database.field.create.created\",\"params\":[\"connected\",68]},{\"user\":\"admin\",\"dateEmission\":\"07 May 09:24\",\"content\":\"delete field depositRail\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"07 May 09:24\",\"content\":\"database.field.delete.deleted\",\"params\":[\"depositRail\"]},{\"user\":\"admin\",\"dateEmission\":\"07 May 09:25\",\"content\":\"restart server\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"07 May 09:26\",\"content\":\"restart server\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"07 May 09:27\",\"content\":\"add field rail with type int\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"07 May 09:27\",\"content\":\"database.field.create.created\",\"params\":[\"rail\",69]},{\"user\":\"admin\",\"dateEmission\":\"07 May 11:41\",\"content\":\"deploy\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"07 May 11:41\",\"content\":\"Application is now available on: <br><a href=\'http://127.0.0.1:9004\' target=\'_blank\'>http://127.0.0.1:9004</a>\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"07 May 11:48\",\"content\":\"restart server\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"07 May 11:50\",\"content\":\"restart server\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"07 May 11:55\",\"content\":\"deploy\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"07 May 11:55\",\"content\":\"Application is now available on: <br><a href=\'http://127.0.0.1:9004\' target=\'_blank\'>http://127.0.0.1:9004</a>\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"07 May 12:01\",\"content\":\"deploy\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"07 May 12:01\",\"content\":\"Application is now available on: <br><a href=\'http://127.0.0.1:9004\' target=\'_blank\'>http://127.0.0.1:9004</a>\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"07 May 12:34\",\"content\":\"deploy\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"07 May 12:34\",\"content\":\"Application is now available on: <br><a href=\'http://127.0.0.1:9004\' target=\'_blank\'>http://127.0.0.1:9004</a>\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"07 May 12:35\",\"content\":\"deploy\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"07 May 12:35\",\"content\":\"Application is now available on: <br><a href=\'http://127.0.0.1:9004\' target=\'_blank\'>http://127.0.0.1:9004</a>\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"07 May 12:37\",\"content\":\"deploy\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"07 May 12:37\",\"content\":\"Application is now available on: <br><a href=\'http://127.0.0.1:9004\' target=\'_blank\'>http://127.0.0.1:9004</a>\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"07 May 12:37\",\"content\":\"restart server\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"07 May 12:40\",\"content\":\"restart server\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"07 May 12:40\",\"content\":\"deploy\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"07 May 12:40\",\"content\":\"Application is now available on: <br><a href=\'http://127.0.0.1:9004\' target=\'_blank\'>http://127.0.0.1:9004</a>\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"07 May 14:23\",\"content\":\"deplay\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"07 May 14:23\",\"content\":\"Sorry, your instruction has not been executed properly.<br><br>Error: Unable to find a matching instruction.<br><br>\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"07 May 14:23\",\"content\":\"deploy\",\"params\":[]},{\"user\":\"Newmips\",\"dateEmission\":\"07 May 14:23\",\"content\":\"Application is now available on: <br><a href=\'http://127.0.0.1:9004\' target=\'_blank\'>http://127.0.0.1:9004</a>\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"07 May 14:24\",\"content\":\"restart server\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"07 May 14:27\",\"content\":\"restart server\",\"params\":[]},{\"user\":\"admin\",\"dateEmission\":\"07 May 14:28\",\"content\":\"restart server\",\"params\":[]}]}}}}'),
('ECZ7uyBU0WShjLpgF8k13V5HEFC0fJNY', 1494224493, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('ECw9K5NijYYOdprwRA81XPdx-G_SYN1u', 1494181372, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('EnZnZ_FtVMM8wgpru_diVSNquxiM0ci3', 1494212620, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[],\"flash\":{}}'),
('EwS-kCGlJACQvbTIlVgNc3aTzcya0yM0', 1494246272, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('FNjmazhwexCJRUhK64D2VrF9PIaOMHE4', 1494177238, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('G-qtoiFcN4T9TQMvfW7c7103T6aUIcip', 1494238706, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[],\"flash\":{}}');
INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
('G4of-q-EW0NkTdLc4VbxiP661xMBf1sp', 1494228395, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('GuGkn2y3gy7aw62yBm8p5naMXZkIo4Gq', 1494224701, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('H0pA_F6VYjB3H8i745eoFgSOgzyeSwoJ', 1494225495, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('H19QaCm4PsTuAYeUXeT6F5zqFGCgq3mB', 1494237030, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('HFPH-5EvDTWQ7NLkAHmaihkn4fMgIPqV', 1494236498, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('HGCwGfE4BzhDxXcpQDuwfpKpQy9zGLo-', 1494226031, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('HZiBrs06Ko0iCCYpR0KYbc6BYufkHYSR', 1494212618, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[],\"flash\":{}}'),
('Hd3TkJAyOHWudQMNm76aZOToG6zz1HvG', 1494225766, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('I6GLK3kQF6iWbZmXAfSdE-O6YVq9f4YR', 1494211668, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('IVhtqstXIl4HxG6haug_5dICDNgm3VkF', 1494240025, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('IodzKvcTJHq-x6Hf2I0EdYLQTYju0kOn', 1494211883, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('IzOzmt6E2AboZkTxxnalH_1561b_O2JX', 1494190468, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('J1gPVF8bgKr8dnlI48q7PrMf30g1CfyG', 1494246204, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('Jdv7JcPY1y8S1jMZvwPZBXdZOkKbSbHR', 1494225594, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('JhlPXcaE_Dt8Ou0273BzuN2kmNqA0T0h', 1494226031, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('K6xXq8QDK3A-GwUUVrYxEUhnzp7kKm60', 1494176515, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('LAtKXT3386tFIqteOWNPGv-BAEs0ue7U', 1494236950, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('LMTcX8rZy723zcGc1-91btQsemWSiN73', 1494225157, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('LSIR-IMAk-GNpU3qN9KZ-5wGsAAha1pv', 1494179928, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('LhTOJPxk8T-_3p-0QyaluWlgJHRyHjzJ', 1494187341, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('MZH7C8MI7-SCyHBlU6-HOLDFLl8YSAz2', 1494220169, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('NQ0WO-clfXJXzXU1GW5qmmV-Gd0y5-Jz', 1494185949, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('OKThGUqYOEqlcUFw6YQK7fVUd8Kl1Igk', 1494224528, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('PTGCo2C2N2neuFt4sERcEyto-tAc2ki-', 1494174975, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('Piqjdw9-JsJ1iQ6rH5egnd5BGG6o6Ele', 1494211349, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('PixcSJqBZBZSP7DRZ20DmLC6bZJBiv6a', 1494212618, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('PlpUz2rq_XBuHhJduBpEQNlaxW4SzAYG', 1494224870, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('Pn2j6S1wdaYkhl210y6hMN8-RgXB2UfO', 1494181313, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('Q3PvlLPgCaI5zbe7r7nBFFW1EXBgU2_u', 1494239614, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('QIxRAkZOgWyIQc5kmZHCUJMaJqNAcvov', 1494228268, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('QfdM00-DbZAnSBrJhKB2Xfh2AIkCyG0e', 1494181999, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('R1aZDiZNCVZPKumr58QNYn7UxUTO7PW9', 1494224720, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('Rm1o-NWgeswXcKJxIpbKFYG0nmBXeNkb', 1494211822, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('RnWGrm-pVe1ki-Vhch6-GoGCJz5I04sY', 1494224307, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('S59YWZiJI4oNZNSFVzgJOL57UR98mKkK', 1494237029, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('TWDRuBr0UY20unAVcumj9H6kVb_k3X_w', 1494225034, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('ULxzGyjU_WddLV-5hVP9mAoIC4dYiFIv', 1494236935, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('UT64EF4FwPsYN7LrMoNZf77RoMbiFfDD', 1494181403, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('UWiIKYssQEfLiILVy4aGanDVKoA9hFsC', 1494179366, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('UfNy3ZjHBv4YtVKCieS10ZsAw0Zr-Fjx', 1494237129, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('UfaM32-DjND2fX0SukO8Qo8QrKCNPvtj', 1494187629, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('UrZQIcxIfqw2UMKb3_cG-T8Y0Z2vBIpJ', 1494224402, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('V2bHy4Ab5Wf5l_BitfDPuOYTLhVskz27', 1494220134, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('VMrjIbwEFk8MyAAXeYRCelJe2fyVyuMR', 1494239735, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('VlVs56puULfItMotQpN5HVsvrhKMRxmr', 1494237115, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('W44uiuAxP-hhCsskSagymURWsopxaeRG', 1494175578, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('WqK7tkhXbaXVYNymIpEVSldofWlvszrS', 1494228607, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('WuMQaUu6lAuEII4stxYdL17tF3ojJkYc', 1494175239, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('XGRfLl60QcpZ9NLv569vb9vyAmMa0Knn', 1494175283, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('XXgdmnJev77wysWhKK9ZiPUzDOqZmnYT', 1494246466, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('Xd6PeEWyAku3-Xg6QogFGbeGdDnFhqNG', 1494224429, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('Xrrh29Am4KdwPVLNtLbE6bgiHBUldBaX', 1494239740, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('Y1vrPWAsu3P5jjwAkeaEXr63n9jeC7d9', 1494178390, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('Y2oM4yhjFYVig1zX2y-PZjjpRoE8c8fX', 1494237308, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('YUZsq4CbCowKz2i3WKmTcP1hVnzYv5iu', 1494224636, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('Ya8U40hbiuMfGKK3gfw-gXWgzYHp2HG0', 1494184566, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('Z6Zf-Xq-NoMHRlPBZRr7Gs3bwZ8Leqnn', 1494228037, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('ZDnTDdpIjUZE7dbtQRmOkZwbhdquJaRc', 1494246509, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('aP1XKOtZ3zfkkdm8Uav9CG2b8LObOvYh', 1494211639, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('b6hQaXemE_HIb1m7X7VGH5nL9aSpBWXA', 1494182243, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('basu9qzzwWKMpZiNEfP2twMp85WRTzPh', 1494187653, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('cEJ-VTFqNnTynyDTqpUs-uZF79mAXETt', 1494224097, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('cwU6YhETfAQ2jMLgiznIzMxGumwqjBV2', 1494211363, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('d9ftrGbvWpSgQtxkxBQ0NUPKNRLyquoI', 1494176136, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('dVe7yv8_6PFbRQaV1qR1PYukWX2b5yxC', 1494236628, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('dzQQv0DqtbxwZ-r-ssmS_gjdeKhtoHha', 1494224246, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('e04ENttWIONzhaNaeMpvnDNwP0YDXedP', 1494179346, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('ej-zjyNDV4J08_LHm57BMAWV_ZJH_780', 1494224371, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('eqKCtp4xDcMTxtgKR8txXSmDjJsQx5JC', 1494212523, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('fcZUzyw9hTFVI1uKjt3Y6J8jWrrQF5iZ', 1494190506, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('gTtXUD6zdJ1YASiBvNzj_1ABkNY2gt2U', 1494211267, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('gfw6JY7LUhMe2WhdNsIZq60ittEk1FEb', 1494224493, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('gvWdpZQk5__1e68LQSSWF1FzzMXGCvCG', 1494184589, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('h86-rX0u8R4Ivk9su0K9xhXr7sY56w98', 1494182060, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('hcx9Rif4I5UWJtwYx5z9AJicbEPlCgdI', 1494238664, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('hkiLgRn2D8r8vjYoA9BwSZG322CqEA2T', 1494239863, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('hm7ho7LJnZxGabJhVJHAyRetGxokIu3N', 1494193069, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('iGirVIoN24FAmEJXdJ1rOz8Sgxj2HB9Q', 1494236935, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('jNO87uE7oNPsfikrF9Ha_TEL2_xmGxUV', 1494178663, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('jUVzejgLF7SANFyLTRdGJcBFO1AmQyeh', 1494240007, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('jwtZ2ZbRVO70k7xcLdCf4HTQmkOHzov9', 1494225595, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('k4PKenDb-prSqly5h3SzjTQJhxi79gvS', 1494181947, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('kRiOYt5yH0EDMGwC8P2gxR9pTb2sR4s0', 1494224371, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('kjd5U1fY7s4Yw7QPoUMKYoaKFIHbDbeK', 1494184358, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('lHxlgt4BityVuzpbB9OcSVQHk3q6fNwv', 1494212615, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('lLVMEwgeAffX6kH-65Ygm4k4oKwM1kEJ', 1494212623, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[],\"flash\":{}}'),
('lbh_z_j-yrCIkB6BNB8VJlHseATR4xvC', 1494189764, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('mIO1AUN85NddbxE9u5pUH2wqigAE0aYK', 1494177309, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('mUXAZ1wkcsGJ8Qkdqrd3RkP0c10QvNv8', 1494181915, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('mVQUYj7ODw6VuHTxI_JTIsFPMT4yaVOP', 1494177326, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('n8mtrpa4lBjDZb1w8UUTgwT4z7s1azlZ', 1494211796, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('nMdHKwANz10iTkNDD4xJYWRP8ud0Rb8K', 1494225157, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('nOgv6ye4wB0fO8uloDebuIC3kEwfBj-K', 1494237072, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('nqVSL4UQ5ko_y2rWpUUXA_bGSH_hTu2f', 1494236673, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('o0COhOi2H0EkZyurUFBG4ocFCTnYDkIr', 1494176652, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[],\"passport\":{\"user\":{\"id\":1,\"version\":null,\"f_login\":\"adminWorkspace\",\"f_password\":\"$2a$10$TclfBauyT/N0CDjCjKOG/.YSHiO0RLqWO2dOMfNKTNH3D5EaDIpr.\",\"f_email\":null,\"f_token_password_reset\":null,\"f_enabled\":1,\"createdAt\":\"2017-05-06T16:36:09.000Z\",\"updatedAt\":\"2017-05-06T16:36:09.000Z\",\"f_id_role_role\":1,\"f_id_group_group\":1,\"r_group\":{\"id\":1,\"version\":null,\"f_label\":\"admin\",\"createdAt\":\"2017-05-06T16:36:09.000Z\",\"updatedAt\":\"2017-05-06T16:36:09.000Z\"},\"r_role\":{\"id\":1,\"version\":null,\"f_label\":\"admin\",\"createdAt\":\"2017-05-06T16:36:09.000Z\",\"updatedAt\":\"2017-05-06T16:36:09.000Z\"}}}}'),
('o8L3PaZ_ldoJqjX9kiMUzhC8YG4NTD5t', 1494178663, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('pK0BZpRR9Z3CjG4sPpPCfmYPQXUQvSKI', 1494239848, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('pSed0GVdWXZxGbSVxl2c6XR7BtCu2yAo', 1494212997, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[],\"flash\":{}}'),
('p_Dm9RMMFpC7tUp0dgHmVsBakeXdWug4', 1494238652, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[],\"flash\":{}}'),
('pftO3kujQIyqvwF7ilH_qfOslxPNgAgf', 1494228317, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('pj6WvF8qkxewgOhJZ73L7F7BMA8xwkou', 1494185654, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('q36XOgA-NpqE-VO8pDgdqRJoEZH45sVh', 1494175129, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('qT4haXqUYQTY4jIVCNkP19Hfxoi5cZeU', 1494237681, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('qdW9M6puK1V_83egCBgia3fdKCAfnuHh', 1494226840, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('qhKWFUB7yts-J6EgV5xBEJd-C7bycvOz', 1494246509, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('qwcXbO9MGUBwDWv9FufKmttjqcba_hgk', 1494246466, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('r4nULKh36wwF8mNfO4C3Q7TKp3GmkuZ2', 1494239619, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('rVK77Uk45uygUYDT9aDtvy3l3Hha2GTs', 1494212619, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[],\"flash\":{}}'),
('ralIP37zRNDM5tBd6bMbIVkEjkTTxfBM', 1494224307, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('rhYan7uSVlHnQL8F0pl1m986MFnotY8W', 1494175648, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('rnsEuI4DEIL8QYzpdYvKeyPhWHXGVTwI', 1494224869, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('rueqeoWPubvT7cNM3xJoGNhlqHau5kTG', 1494175578, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('s-J3CMKas0pG1zLMtfZeN4xRR0DMLwvQ', 1494211925, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('sa7gUnGb09bQnPZFWWfRnfHnnMXWFzzl', 1494239847, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('sy1p9tbkjh-7J57yxWxcM_KOM_fcIj1R', 1494212616, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[],\"flash\":{}}'),
('tGCuMLur8swh6NpHWxVU9cN8mWaa38Ts', 1494184546, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('tNwmpHyM0QZ1rOfhXnxQXZ5ywsZlVesi', 1494211693, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('tZ6JwZXCeOEzLtLa2qLB2y98MYvI_RCr', 1494239566, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('taL6JEbbuzacUW_PH4rK80WxSoTXmgx1', 1494175525, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('uXvbrSnnfoLZXHqYOtorYHcNQykksrTP', 1494211883, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('v3wZItyY94GZt-vnD0HTJB2_XVd0fZk2', 1494225441, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('vgVqpgC0nK1kUU25OS1nEw6bwHFAraLJ', 1494212624, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[],\"flash\":{}}'),
('vvhmNfu53dGUkI9qFKUG7ciH1V2MdYtI', 1494178541, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('xmacspSMKqVPfOGmzfHnG85omEf5s8Tp', 1494237689, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('xpiLvKj68EQA_-i-6fPNuQBZAnWMR6u3', 1494224098, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('yEQ6U07B2tf503FWijy6j79gQwY3U-Vz', 1494224118, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('ykGFiL-PpUBxhuWG41zus6IleGNNPZvb', 1494177423, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('yzDW68V9kfP0yWcMILix4s7w13hhS-oD', 1494187531, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('zToAS7-HnBlPWJjdWlgJNuk-NC_jqFaF', 1494225033, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('zUk047ZLx0rJPQI56Liut6P0uu9TO32g', 1494212619, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[],\"flash\":{}}'),
('zYKjY3jJVcFX3DnFNrszrs11OBkHkvUL', 1494246547, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[],\"passport\":{\"user\":{\"id\":1,\"version\":null,\"f_login\":\"adminWorkspace\",\"f_password\":\"$2a$10$TclfBauyT/N0CDjCjKOG/.YSHiO0RLqWO2dOMfNKTNH3D5EaDIpr.\",\"f_email\":null,\"f_token_password_reset\":null,\"f_enabled\":1,\"createdAt\":\"2017-05-06T18:21:48.000Z\",\"updatedAt\":\"2017-05-06T18:21:48.000Z\",\"f_id_role_role\":1,\"f_id_group_group\":1,\"r_group\":{\"id\":1,\"version\":null,\"f_label\":\"admin\",\"createdAt\":\"2017-05-06T18:21:48.000Z\",\"updatedAt\":\"2017-05-06T18:21:48.000Z\"},\"r_role\":{\"id\":1,\"version\":null,\"f_label\":\"admin\",\"createdAt\":\"2017-05-06T18:21:48.000Z\",\"updatedAt\":\"2017-05-06T18:21:48.000Z\"}}}}'),
('zZnEk41uYD_6FxDDk1buX-IrCm--JDLj', 1494211751, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}'),
('zr5NA6rze2Khvpe0MNFBRQFpWKlceqDE', 1494184495, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"autologin\":true,\"lang_user\":\"fr-FR\",\"toastr\":[]}');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `enabled` tinyint(1) DEFAULT NULL,
  `first_name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `last_name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `login` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `token_password_reset` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `id_role` bigint(20) NOT NULL,
  `version` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Contenu de la table `user`
--

INSERT INTO `user` (`id`, `email`, `enabled`, `first_name`, `last_name`, `login`, `password`, `phone`, `token_password_reset`, `id_role`, `version`) VALUES
(1, 'admin@newmips.com', 1, 'admin', 'NEWMIPS', 'admin', '$2a$10$TclfBauyT/N0CDjCjKOG/.YSHiO0RLqWO2dOMfNKTNH3D5EaDIpr.', '0982593032', NULL, 1, 1);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `4_e_api_credentials`
--
ALTER TABLE `4_e_api_credentials`
  ADD PRIMARY KEY (`id`),
  ADD KEY `f_id_role_role` (`f_id_role_role`),
  ADD KEY `f_id_group_group` (`f_id_group_group`);

--
-- Index pour la table `4_e_group`
--
ALTER TABLE `4_e_group`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `f_label` (`f_label`),
  ADD UNIQUE KEY `4_e_group_f_label_unique` (`f_label`);

--
-- Index pour la table `4_e_hanger`
--
ALTER TABLE `4_e_hanger`
  ADD PRIMARY KEY (`id`),
  ADD KEY `f_id_rail` (`f_id_rail`);

--
-- Index pour la table `4_e_product`
--
ALTER TABLE `4_e_product`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `4_e_rail`
--
ALTER TABLE `4_e_rail`
  ADD PRIMARY KEY (`id`),
  ADD KEY `f_id_stock` (`f_id_stock`);

--
-- Index pour la table `4_e_role`
--
ALTER TABLE `4_e_role`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `f_label` (`f_label`),
  ADD UNIQUE KEY `4_e_role_f_label_unique` (`f_label`);

--
-- Index pour la table `4_e_stock`
--
ALTER TABLE `4_e_stock`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `4_e_user`
--
ALTER TABLE `4_e_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `f_login` (`f_login`),
  ADD UNIQUE KEY `4_e_user_f_login_unique` (`f_login`),
  ADD KEY `f_id_role_role` (`f_id_role_role`),
  ADD KEY `f_id_group_group` (`f_id_group_group`);

--
-- Index pour la table `application`
--
ALTER TABLE `application`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_project` (`id_project`);

--
-- Index pour la table `component`
--
ALTER TABLE `component`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_module` (`id_module`);

--
-- Index pour la table `component_data_entity`
--
ALTER TABLE `component_data_entity`
  ADD PRIMARY KEY (`id_component`,`id_entity`),
  ADD KEY `id_component` (`id_component`),
  ADD KEY `id_entity` (`id_entity`);

--
-- Index pour la table `data_entity`
--
ALTER TABLE `data_entity`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_module` (`id_module`);

--
-- Index pour la table `data_field`
--
ALTER TABLE `data_field`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_data_entity` (`id_data_entity`);

--
-- Index pour la table `module`
--
ALTER TABLE `module`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_application` (`id_application`);

--
-- Index pour la table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_role` (`id_role`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `4_e_api_credentials`
--
ALTER TABLE `4_e_api_credentials`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `4_e_group`
--
ALTER TABLE `4_e_group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `4_e_hanger`
--
ALTER TABLE `4_e_hanger`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT pour la table `4_e_product`
--
ALTER TABLE `4_e_product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `4_e_rail`
--
ALTER TABLE `4_e_rail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT pour la table `4_e_role`
--
ALTER TABLE `4_e_role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `4_e_stock`
--
ALTER TABLE `4_e_stock`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `4_e_user`
--
ALTER TABLE `4_e_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `application`
--
ALTER TABLE `application`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT pour la table `component`
--
ALTER TABLE `component`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `data_entity`
--
ALTER TABLE `data_entity`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
--
-- AUTO_INCREMENT pour la table `data_field`
--
ALTER TABLE `data_field`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;
--
-- AUTO_INCREMENT pour la table `module`
--
ALTER TABLE `module`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT pour la table `project`
--
ALTER TABLE `project`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `role`
--
ALTER TABLE `role`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `4_e_api_credentials`
--
ALTER TABLE `4_e_api_credentials`
  ADD CONSTRAINT `4_e_api_credentials_ibfk_1` FOREIGN KEY (`f_id_role_role`) REFERENCES `4_e_role` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `4_e_api_credentials_ibfk_2` FOREIGN KEY (`f_id_group_group`) REFERENCES `4_e_group` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Contraintes pour la table `4_e_hanger`
--
ALTER TABLE `4_e_hanger`
  ADD CONSTRAINT `4_e_hanger_ibfk_1` FOREIGN KEY (`f_id_rail`) REFERENCES `4_e_rail` (`id`);

--
-- Contraintes pour la table `4_e_rail`
--
ALTER TABLE `4_e_rail`
  ADD CONSTRAINT `4_e_rail_ibfk_1` FOREIGN KEY (`f_id_stock`) REFERENCES `4_e_stock` (`id`);

--
-- Contraintes pour la table `4_e_user`
--
ALTER TABLE `4_e_user`
  ADD CONSTRAINT `4_e_user_ibfk_1` FOREIGN KEY (`f_id_role_role`) REFERENCES `4_e_role` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `4_e_user_ibfk_2` FOREIGN KEY (`f_id_group_group`) REFERENCES `4_e_group` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Contraintes pour la table `application`
--
ALTER TABLE `application`
  ADD CONSTRAINT `fk_application_project` FOREIGN KEY (`id_project`) REFERENCES `project` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `component`
--
ALTER TABLE `component`
  ADD CONSTRAINT `fk_component_module` FOREIGN KEY (`id_module`) REFERENCES `module` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `component_data_entity`
--
ALTER TABLE `component_data_entity`
  ADD CONSTRAINT `fk_component_data_entity_component` FOREIGN KEY (`id_component`) REFERENCES `component` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_component_data_entity_data_entity` FOREIGN KEY (`id_entity`) REFERENCES `data_entity` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `data_entity`
--
ALTER TABLE `data_entity`
  ADD CONSTRAINT `fk_data_entity_module` FOREIGN KEY (`id_module`) REFERENCES `module` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `data_field`
--
ALTER TABLE `data_field`
  ADD CONSTRAINT `fk_data_field_data_entity` FOREIGN KEY (`id_data_entity`) REFERENCES `data_entity` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `module`
--
ALTER TABLE `module`
  ADD CONSTRAINT `fk_module_application` FOREIGN KEY (`id_application`) REFERENCES `application` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `fk_user_role` FOREIGN KEY (`id_role`) REFERENCES `role` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
