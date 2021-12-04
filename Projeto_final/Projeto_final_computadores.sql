USE dados212d;

DROP TABLE IF EXISTS `fabricante`;

CREATE TABLE `fabricante` (
  `fab_codigo` int NOT NULL AUTO_INCREMENT,
  `fab_nome` varchar(30) DEFAULT NULL,
  `fab_fantasia` varchar(15) DEFAULT NULL,
  `fab_pais` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`fab_codigo`),
  KEY `fk_fab` (`fab_codigo`),
  CONSTRAINT `fk_fab` FOREIGN KEY (`fab_codigo`) REFERENCES `fabricante` (`fab_codigo`)
);


INSERT INTO `fabricante` VALUES (1,'LENOVO','Lenovo Tec.','Brasil'),
(2,'Positivo','Positivo Tec','Brasil'),
(3,'SAMSUNG','SAMSUNG ELECTR.','Coréia');

--
-- Table structure for table `filme`
--

DROP TABLE IF EXISTS `computador`;


CREATE TABLE `computador` (
  `cmp_codigo` int NOT NULL AUTO_INCREMENT,
  `cmp_modelo` varchar(20) DEFAULT NULL,
  `cmp_tipo` varchar(10) DEFAULT NULL,
  `cmp_memoria` varchar(10) DEFAULT NULL,
  `cmp_garantia` int DEFAULT NULL,
  `fab_codigo` int NOT NULL,
  PRIMARY KEY (`cmp_codigo`)
);


--
-- Dumping data for table `filme`
--



INSERT INTO `computador` VALUES (1,'Ideapad 340s','Note','8GB', 24 ,'1'),
(2,'Positivo N1240','Note','16GB', 15, '2'),
(3,'Samsung Book X30','Note','4GB', 12 ,'3'),
(4,'Lenovo IdeaPad S145','Note','4GB', 18, '1');





