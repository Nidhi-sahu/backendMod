-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 20, 2023 at 10:12 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecomerce`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `cart_id` varchar(50) DEFAULT NULL,
  `product_id` varchar(40) DEFAULT NULL,
  `addedon` datetime DEFAULT sysdate(),
  `quantity` int(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cartid_generate`
--

CREATE TABLE `cartid_generate` (
  `cart_id` varchar(50) NOT NULL,
  `mobile` varchar(50) DEFAULT NULL,
  `dateon` datetime DEFAULT sysdate(),
  `status` varchar(100) DEFAULT 'active'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `category_id` varchar(10) NOT NULL,
  `category_name` varchar(40) NOT NULL,
  `category_image` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`category_id`, `category_name`, `category_image`) VALUES
('1', 'phone', 'image1'),
('2', 'snpp', 'image2');

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `email` varchar(100) NOT NULL,
  `mobile` varchar(50) NOT NULL,
  `password` varchar(200) DEFAULT NULL,
  `registration_on` datetime DEFAULT sysdate(),
  `status` varchar(100) DEFAULT 'active'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `discount`
--

CREATE TABLE `discount` (
  `offercode` varchar(50) DEFAULT NULL,
  `sub_category` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `offer`
--

CREATE TABLE `offer` (
  `offercode` varchar(50) NOT NULL,
  `offername` varchar(50) DEFAULT NULL,
  `valid_from` date DEFAULT NULL,
  `valid_to` date DEFAULT NULL,
  `discount_percentage` float DEFAULT NULL,
  `flat_discount` float DEFAULT NULL,
  `status` varchar(20) DEFAULT 'active'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `offer`
--

INSERT INTO `offer` (`offercode`, `offername`, `valid_from`, `valid_to`, `discount_percentage`, `flat_discount`, `status`) VALUES
('1', 'shoppy', '2021-08-24', '2023-08-25', 60, 70, 'active');

-- --------------------------------------------------------

--
-- Table structure for table `place_order`
--

CREATE TABLE `place_order` (
  `cart_id` varchar(50) DEFAULT NULL,
  `payment_mode` varchar(100) DEFAULT NULL,
  `payment_status` varchar(100) DEFAULT 'active',
  `payment_date` datetime DEFAULT sysdate()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `product_id` varchar(40) NOT NULL,
  `retailer_id` varchar(50) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `available_quantity` int(50) DEFAULT NULL,
  `sub_category` varchar(10) DEFAULT NULL,
  `item_name` varchar(100) DEFAULT NULL,
  `company` varchar(50) DEFAULT NULL,
  `product_image` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `retailer_id`, `price`, `available_quantity`, `sub_category`, `item_name`, `company`, `product_image`) VALUES
('2', '1', 67, 78, 's2', '78', 'gijjk', 'image');

-- --------------------------------------------------------

--
-- Table structure for table `product_description`
--

CREATE TABLE `product_description` (
  `product_id` varchar(40) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `color` varchar(20) DEFAULT NULL,
  `size` varchar(100) DEFAULT NULL,
  `weight` float DEFAULT NULL,
  `mfg` date DEFAULT NULL,
  `expire_date` date DEFAULT NULL,
  `model_name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `retailer_banking`
--

CREATE TABLE `retailer_banking` (
  `bank_name` varchar(50) DEFAULT NULL,
  `account_no` varchar(100) NOT NULL,
  `ifsc_code` char(20) DEFAULT NULL,
  `bankholder_name` varchar(100) DEFAULT NULL,
  `branch` varchar(100) DEFAULT NULL,
  `status` varchar(10) DEFAULT 'deactivate'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `retailer_banking`
--

INSERT INTO `retailer_banking` (`bank_name`, `account_no`, `ifsc_code`, `bankholder_name`, `branch`, `status`) VALUES
('indians', '4567890', '56787989807', 'yuppp', 'berasia', 'deactivate'),
('cooperative bank', '67890543', '345678932', 'nothing', 'dont ', 'active');

-- --------------------------------------------------------

--
-- Table structure for table `retailer_registration`
--

CREATE TABLE `retailer_registration` (
  `retailer_id` varchar(50) NOT NULL,
  `shop_name` varchar(200) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  `owner_name` varchar(50) DEFAULT NULL,
  `registration_doc` varchar(100) DEFAULT NULL,
  `profile_photo` varchar(100) DEFAULT NULL,
  `gst_no` char(40) DEFAULT NULL,
  `pan_no` char(10) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `state` varchar(20) DEFAULT NULL,
  `city` varchar(20) DEFAULT NULL,
  `pincode` char(6) DEFAULT NULL,
  `contact_no` varchar(280) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `status` varchar(10) DEFAULT NULL CHECK (`status` in ('active','inactive','tempory')),
  `registration_no` datetime DEFAULT sysdate()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `retailer_registration`
--

INSERT INTO `retailer_registration` (`retailer_id`, `shop_name`, `password`, `owner_name`, `registration_doc`, `profile_photo`, `gst_no`, `pan_no`, `address`, `state`, `city`, `pincode`, `contact_no`, `email`, `status`, `registration_no`) VALUES
('1', 'sahujii', '12345', 'abhi', 'what', 'image1', '678', '345677', 'bhopal', 'm.p', 'bhopal', '687980', '70768798', 'sahu@gmail.com', NULL, '2023-09-25 09:11:09'),
('2', 'new', '234567', 'nivi', 'thijo', 'image2', '2345', '54678', 'bhopal', 'm.p', 'bhopal', '567890', '7890563845', 'nidi@gmail.com', 'active', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `role_id` varchar(3) NOT NULL,
  `rolename` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`role_id`, `rolename`) VALUES
('r2', 'clerk'),
('r1', 'cr'),
('r3', 'hr');

-- --------------------------------------------------------

--
-- Table structure for table `role_assign`
--

CREATE TABLE `role_assign` (
  `id` varchar(40) NOT NULL,
  `role_id` varchar(3) NOT NULL,
  `assignon` datetime DEFAULT sysdate()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `role_assign`
--

INSERT INTO `role_assign` (`id`, `role_id`, `assignon`) VALUES
('1', 'r1', '2023-09-29 00:10:05'),
('1', 'r3', '2023-10-09 22:51:26'),
('2', 'r2', '2023-09-29 00:10:40'),
('2', 'r3', '2023-10-09 23:10:13'),
('3', 'r2', '2023-10-26 07:58:31'),
('3', 'r3', '2023-09-29 00:11:30');

-- --------------------------------------------------------

--
-- Table structure for table `subcategory`
--

CREATE TABLE `subcategory` (
  `category_id` varchar(10) DEFAULT NULL,
  `sub_category` varchar(10) NOT NULL,
  `sub_categoryname` varchar(40) DEFAULT NULL,
  `sub_categoryimage` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `subcategory`
--

INSERT INTO `subcategory` (`category_id`, `sub_category`, `sub_categoryname`, `sub_categoryimage`) VALUES
('1', 's1', 'phones', 'images2'),
('2', 's2', 'snap', 'image2');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` varchar(40) NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `status` varchar(10) DEFAULT 'deactivate',
  `createon` datetime DEFAULT sysdate()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `password`, `status`, `createon`) VALUES
('1', 'sahu', '123456', 'deactive', '2023-09-25 08:55:27'),
('2', 'jenny', '67890', 'active', '2023-09-25 21:37:58'),
('3', 'menny', '7890', 'active', '2023-09-25 21:49:17');

-- --------------------------------------------------------

--
-- Table structure for table `user_profile`
--

CREATE TABLE `user_profile` (
  `id` varchar(40) DEFAULT NULL,
  `mobile` char(10) NOT NULL,
  `email` varchar(100) NOT NULL,
  `profile_photo` varchar(100) NOT NULL,
  `adhar` char(12) NOT NULL,
  `address` varchar(200) DEFAULT NULL,
  `state` varchar(20) DEFAULT NULL,
  `city` varchar(20) DEFAULT NULL,
  `pincode` char(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD KEY `product_id` (`product_id`),
  ADD KEY `cart_id` (`cart_id`);

--
-- Indexes for table `cartid_generate`
--
ALTER TABLE `cartid_generate`
  ADD PRIMARY KEY (`cart_id`),
  ADD KEY `mobile` (`mobile`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`),
  ADD UNIQUE KEY `category_name` (`category_name`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`mobile`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `discount`
--
ALTER TABLE `discount`
  ADD KEY `offercode` (`offercode`),
  ADD KEY `sub_category` (`sub_category`);

--
-- Indexes for table `offer`
--
ALTER TABLE `offer`
  ADD PRIMARY KEY (`offercode`);

--
-- Indexes for table `place_order`
--
ALTER TABLE `place_order`
  ADD KEY `cart_id` (`cart_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `retailer_id` (`retailer_id`),
  ADD KEY `sub_category` (`sub_category`);

--
-- Indexes for table `product_description`
--
ALTER TABLE `product_description`
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `retailer_banking`
--
ALTER TABLE `retailer_banking`
  ADD PRIMARY KEY (`account_no`);

--
-- Indexes for table `retailer_registration`
--
ALTER TABLE `retailer_registration`
  ADD PRIMARY KEY (`retailer_id`),
  ADD UNIQUE KEY `gst_no` (`gst_no`),
  ADD UNIQUE KEY `pan_no` (`pan_no`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `registration_no` (`registration_no`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`role_id`),
  ADD UNIQUE KEY `rolename` (`rolename`);

--
-- Indexes for table `role_assign`
--
ALTER TABLE `role_assign`
  ADD PRIMARY KEY (`id`,`role_id`),
  ADD KEY `role_id` (`role_id`);

--
-- Indexes for table `subcategory`
--
ALTER TABLE `subcategory`
  ADD PRIMARY KEY (`sub_category`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_profile`
--
ALTER TABLE `user_profile`
  ADD UNIQUE KEY `mobile` (`mobile`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `profile_photo` (`profile_photo`),
  ADD UNIQUE KEY `adhar` (`adhar`),
  ADD KEY `id` (`id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`),
  ADD CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`cart_id`) REFERENCES `cartid_generate` (`cart_id`);

--
-- Constraints for table `cartid_generate`
--
ALTER TABLE `cartid_generate`
  ADD CONSTRAINT `cartid_generate_ibfk_1` FOREIGN KEY (`mobile`) REFERENCES `customer` (`mobile`);

--
-- Constraints for table `discount`
--
ALTER TABLE `discount`
  ADD CONSTRAINT `discount_ibfk_1` FOREIGN KEY (`offercode`) REFERENCES `offer` (`offercode`),
  ADD CONSTRAINT `discount_ibfk_2` FOREIGN KEY (`sub_category`) REFERENCES `subcategory` (`sub_category`);

--
-- Constraints for table `place_order`
--
ALTER TABLE `place_order`
  ADD CONSTRAINT `place_order_ibfk_1` FOREIGN KEY (`cart_id`) REFERENCES `cartid_generate` (`cart_id`);

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`retailer_id`) REFERENCES `retailer_registration` (`retailer_id`),
  ADD CONSTRAINT `product_ibfk_2` FOREIGN KEY (`sub_category`) REFERENCES `subcategory` (`sub_category`);

--
-- Constraints for table `product_description`
--
ALTER TABLE `product_description`
  ADD CONSTRAINT `product_description_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`);

--
-- Constraints for table `role_assign`
--
ALTER TABLE `role_assign`
  ADD CONSTRAINT `role_assign_ibfk_1` FOREIGN KEY (`id`) REFERENCES `users` (`id`);

--
-- Constraints for table `subcategory`
--
ALTER TABLE `subcategory`
  ADD CONSTRAINT `subcategory_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`);

--
-- Constraints for table `user_profile`
--
ALTER TABLE `user_profile`
  ADD CONSTRAINT `user_profile_ibfk_1` FOREIGN KEY (`id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
