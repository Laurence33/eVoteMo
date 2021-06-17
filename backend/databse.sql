-- phpMyAdmin SQL Dump
-- https://www.phpmyadmin.net/
-- PHP Version: 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+08:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `evote`
--
-- --------------------------------------------------------
--
-- Table structure for table `tbllogin`
--

CREATE TABLE `tbllogin` (
  `id` int(30) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `tblvoters`
--

CREATE TABLE `tblvoters` (
  `id` int(30) NOT NULL,
  `FirstName` varchar(30) NOT NULL,
  `MiddleName` varchar(30) NOT NULL,
  `LastName` varchar(30) NOT NULL,
  `Age` int(3) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Birthdate` varchar(10) NOT NULL,
  `Gender` varchar(10) NOT NULL,
  `VoterId` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `tblregistrations`
--

CREATE TABLE `tblregistrations` (
  `id` int(30) NOT NULL,
  `FirstName` varchar(30) NOT NULL,
  `MiddleName` varchar(30) NOT NULL,
  `LastName` varchar(30) NOT NULL,
  `Age` int(3) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Birthdate` varchar(10) NOT NULL,
  `Gender` varchar(10) NOT NULL,
  `VoterId` varchar(50) NOT NULL,
  `Password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `tblcandidates`
--

CREATE TABLE `tblcandidates` (
  `id` int(30) NOT NULL,
  `CandidateNumber` int(3) NOT NULL,
  `FullName` varchar(150) NOT NULL,
  `Nickname` varchar(30) NOT NULL,
  `Position` varchar(50) NOT NULL,
  `Votes` int(7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- --------------------------------------------------------

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbllogin`
--
ALTER TABLE `tbllogin`
  ADD PRIMARY KEY (`id`);


--
-- Indexes for table `tblvoters`
--
ALTER TABLE `tblvoters`
  ADD PRIMARY KEY (`id`);


--
-- Indexes for table `tblregistrations`
--
ALTER TABLE `tblregistrations`
  ADD PRIMARY KEY (`id`);


--
-- Indexes for table `tblcandidates`
--
ALTER TABLE `tblcandidates`
  ADD PRIMARY KEY (`id`);


--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbllogin`
--
ALTER TABLE `tbllogin`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;


--
-- AUTO_INCREMENT for table `tblvoters`
--
ALTER TABLE `tblvoters`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;


--
-- AUTO_INCREMENT for table `tblregistrations`
--
ALTER TABLE `tblregistrations`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;


--
-- AUTO_INCREMENT for table `tblcandidates`
--
ALTER TABLE `tblcandidates`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;


INSERT INTO tbllogin(Username, Password) VALUES('admin@admin.com', '21232f297a57a5a743894a0e4a801fc3');
COMMIT;
