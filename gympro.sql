-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-06-2024 a las 02:32:32
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `gympro`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clases`
--

CREATE TABLE `clases` (
  `id` int(11) NOT NULL,
  `tipo` varchar(100) NOT NULL,
  `descripcion` text NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `clases`
--

INSERT INTO `clases` (`id`, `tipo`, `descripcion`, `fecha`, `hora`) VALUES
(1, 'Crossfit', 'Clase intensiva de Crossfit para todos los niveles', '2024-06-20', '17:00:00'),
(2, 'Yoga', 'Clase de yoga para mejorar la flexibilidad y relajación', '2024-06-21', '09:00:00'),
(3, 'Pilates', 'Clase de pilates enfocada en el fortalecimiento del core', '2024-06-21', '11:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `evaluacion_corporal`
--

CREATE TABLE `evaluacion_corporal` (
  `id` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  `imc` float NOT NULL,
  `observaciones` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `evaluacion_corporal`
--

INSERT INTO `evaluacion_corporal` (`id`, `fecha`, `hora`, `imc`, `observaciones`, `created_at`) VALUES
(1, '2024-06-20', '10:00:00', 25.5, 'Evaluación inicial', '2024-06-20 15:53:57'),
(2, '2024-06-21', '11:30:00', 27.8, 'Seguimiento mensual', '2024-06-20 15:53:57'),
(3, '2024-06-22', '09:45:00', 23.2, 'Evaluación de rutina', '2024-06-20 15:53:57'),
(4, '2024-06-23', '13:15:00', 29.1, 'Post-entrenamiento', '2024-06-20 15:53:57'),
(5, '2024-06-24', '12:00:00', 22.6, 'Evaluación final', '2024-06-20 15:53:57');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `maquinas`
--

CREATE TABLE `maquinas` (
  `id` int(11) NOT NULL,
  `sala` varchar(255) NOT NULL,
  `descripcion` text NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `maquinas`
--

INSERT INTO `maquinas` (`id`, `sala`, `descripcion`, `fecha`, `hora`) VALUES
(1, 'Sala A', 'Descripción de la sala A', '2024-06-20', '10:00:00'),
(2, 'Sala B', 'Descripción de la sala B', '2024-06-21', '11:00:00'),
(3, 'Sala C', 'Descripción de la sala C', '2024-06-22', '12:00:00'),
(4, 'Sala D', 'Descripción de la sala D', '2024-06-23', '13:00:00'),
(5, 'Sala E', 'Descripción de la sala E', '2024-06-24', '14:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `training`
--

CREATE TABLE `training` (
  `id` int(11) NOT NULL,
  `tipo` varchar(255) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `idUser` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `role`) VALUES
(2, 'Pia aguirre', 'pia@gmail.com', '$2a$12$lwnwR89yGGAS8flsYiF8eOyyt7D8cbRr7Eu3f7qxaoYeu1tH4D25O', 'Admin'),
(8, 'sofia', 'sofia@gmail.com', '$2a$12$Zc8NppxZdjb1NTVggGdXJOMNBgxMWmbDBN01S/sVss.xsBLe4jVIa', 'Cliente'),
(12, 'javi', 'javi@gmail.com', '$2a$12$dtZNKG6pYxzi.Udj6TYwm.QfiokliyihNv9t6yPZvFbmrc9Q.1RqC', 'Cliente');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clases`
--
ALTER TABLE `clases`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `evaluacion_corporal`
--
ALTER TABLE `evaluacion_corporal`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `maquinas`
--
ALTER TABLE `maquinas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `training`
--
ALTER TABLE `training`
  ADD PRIMARY KEY (`id`),
  ADD KEY `profesional_id` (`idUser`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clases`
--
ALTER TABLE `clases`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `evaluacion_corporal`
--
ALTER TABLE `evaluacion_corporal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `maquinas`
--
ALTER TABLE `maquinas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `training`
--
ALTER TABLE `training`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `training`
--
ALTER TABLE `training`
  ADD CONSTRAINT `training_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
