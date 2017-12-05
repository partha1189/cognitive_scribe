-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 24, 2017 at 02:48 PM
-- Server version: 5.6.21
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `demo_scribe`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_patient`
--

CREATE TABLE `tbl_patient` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `age` int(12) NOT NULL,
  `gender` varchar(50) NOT NULL,
  `location` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_patient`
--

INSERT INTO `tbl_patient` (`id`, `name`, `age`, `gender`, `location`) VALUES
(2, 'Lily?', 65, 'Female', 'Biltmore Forest'),
(3, 'JACK?', 85, 'Male', 'Cary'),
(4, 'Emily?', 47, 'Female', 'Pinehurst'),
(5, 'HARRY?', 58, 'Male', 'Jamestown'),
(6, 'Isabella?', 65, 'Female', 'Fletcher'),
(7, 'JACOB?', 24, 'Male', 'Oak Ridge'),
(8, 'Sophia?', 29, 'Female', 'Apex'),
(9, 'CHARLIE?', 45, 'Male', 'Morrisville'),
(10, 'Isabelle?', 66, 'Female', 'Tryon'),
(11, 'THOMAS?', 41, 'Male', 'Cornelius'),
(12, 'Sophie?', 53, 'Female', 'Wake Forest'),
(13, 'GEORGE?', 87, 'Male', 'Black Mountain'),
(14, 'OLIVER?', 50, 'Female', 'Chapel Hill'),
(15, 'OSCAR?', 65, 'Male', 'Matthews'),
(16, 'Ava', 47, 'Female', 'Bermuda Run'),
(17, 'JAMES?', 36, 'Male', 'Cary'),
(18, 'Chole', 20, 'Female', 'Pinehurst'),
(19, 'WILLIAM?', 54, 'Male', 'Jamestown'),
(20, 'Isla', 88, 'Female', 'Davidson'),
(21, 'NOAH?', 10, 'Male', 'Biltmore Forest'),
(22, 'Amelia', 36, 'Female', 'Cary'),
(23, 'ALFIE?', 45, 'Male', 'Pinehurst'),
(24, 'Jessica', 58, 'Female', 'Jamestown'),
(25, 'JOSHUA?', 33, 'Male', 'Fletcher'),
(26, 'Grace', 69, 'Female', 'Tryon'),
(27, 'MUHAMMAD?', 41, 'Male', 'Cornelius'),
(28, 'Evie', 52, 'Female', 'Wake Forest'),
(29, 'HENRY?', 78, 'Male', 'Black Mountain'),
(30, 'Charlotte', 59, 'Female', 'Chapel Hill'),
(31, 'LEO?', 85, 'Male', 'Davidson'),
(32, 'Ella', 30, 'Female', 'Biltmore Forest'),
(33, 'ARCHIE?', 59, 'Male', 'Cary'),
(34, 'Mia', 29, 'Female', 'Pinehurst'),
(35, 'ETHAN?', 45, 'Male', 'Jamestown'),
(36, 'Lucy', 54, 'Female', 'Fletcher'),
(37, 'JOSEPH?', 66, 'Male', 'Oak Ridge'),
(38, 'Ferya', 87, 'Female', 'Cornelius'),
(39, 'FREDDIE?', 54, 'Male', 'Wake Forest'),
(40, 'Ruby', 14, 'Female', 'Black Mountain'),
(41, 'SAMUEL?', 50, 'Male', 'Chapel Hill'),
(42, 'Holly', 33, 'Female', 'Davidson'),
(43, 'ALEXANDER?', 31, 'Male', 'Biltmore Forest'),
(44, 'Ellie', 48, 'Female', 'Cary'),
(45, 'LOGAN?', 19, 'Male', 'Pinehurst'),
(46, 'Hannah', 29, 'Female', 'Jamestown'),
(47, 'DANIEL?', 90, 'Male', 'Fletcher'),
(48, 'Emma', 45, 'Female', 'Oak Ridge'),
(49, 'ISAAC?', 69, 'Male', 'Apex'),
(50, 'Megan', 37, 'Female', 'Morrisville');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_patient`
--
ALTER TABLE `tbl_patient`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_patient`
--
ALTER TABLE `tbl_patient`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
