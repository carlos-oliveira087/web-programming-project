-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 22, 2024 at 09:17 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `brightminds_progweb_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `news_table`
--

CREATE TABLE `news_table` (
  `id` int(11) NOT NULL COMMENT 'News article ID',
  `news_category` enum('Science','Technology','Engineering','Mathematics') NOT NULL COMMENT 'News article category',
  `news_title` varchar(255) NOT NULL COMMENT 'News article title',
  `news_author` varchar(100) NOT NULL COMMENT 'News article author name',
  `news_text` text NOT NULL COMMENT 'News article body text',
  `news_image` varchar(255) NOT NULL COMMENT 'News article cover image',
  `news_creation_date` int(11) NOT NULL DEFAULT current_timestamp() COMMENT 'News article creation date and time'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `news_table`
--

INSERT INTO `news_table` (`id`, `news_category`, `news_title`, `news_author`, `news_text`, `news_image`, `news_creation_date`) VALUES
(1, 'Science', 'titulo-teste', 'autor-teste', 'corpo-teste', 'uploads/screenshot-python-model-ECMD.png', 2024),
(2, 'Science', 'titulo-teste', 'autor-teste', 'corpo-teste', 'uploads/screenshot-python-model-ECMD.png', 2024),
(3, 'Science', 'titulo2', 'autor2', 'texto2', 'uploads/Cosmic Cataclysms © ShaRa group - Astronomy Photographer of the Year 2024 Galaxies.jpg', 2024),
(4, 'Science', 'titulo3', 'autor3', 'texto3', 'uploads/21e5012359bda50ddf27d3ab91c03046.jpg', 2024),
(5, '', 'titulo6', 'autor6', 'texto6', 'uploads/image.png', 2024);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news_table`
--
ALTER TABLE `news_table`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `news_table`
--
ALTER TABLE `news_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'News article ID', AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
