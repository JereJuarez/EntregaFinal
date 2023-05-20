-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 20-05-2023 a las 00:53:23
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sanamente`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` text NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`) VALUES
(1, 'Principales motivos para educar emocionalmente', 'Estos son los principales motivos por los que la educación emocional es útil.', 'Desde siempre ha existido una cierta preponderancia de la razón por encima de la emoción; al menos, en nuestra cultura occidental. Quizá el motivo sea que las emociones siempre emergen en primer término y pueden hacernos sentir un tanto desubicados, cuando no francamente contrariados.\r\n\r\nY es que, a pesar de que las emociones son una parte esencial de la psicología, para muchas personas lo emocional sigue teniendo una evidente carga negativa, ya que a menudo se interpone entre aquello que queremos alcanzar y nosotros mismos. Además, las emociones no siempre son agradables, por lo que es normal que, a veces, nos sintamos incómodos.\r\n\r\nPero la función de las emociones no es, ni mucho menos, dificultarnos la vida. Al contrario; suponen una herramienta que nuestra psique pone a nuestra disposición para poder avanzar y sobrevivir. El problema, en realidad, es que no siempre las interpretamos bien.\r\n\r\nEn este sentido, la gestión emocional es básica para comprender qué nos está queriendo decir nuestro cuerpo. Hablamos de ello a continuación.\r\n\r\nEducación emocional: qué es y para qué sirve\r\nAsí pues, la educación emocional es imprescindible a la hora de aprender a gestionar nuestras emociones, pero ¿de qué se trata?\r\n\r\nLa educación emocional es un tipo de mediación en el aprendizaje, orientada a enseñar una correcta interpretación de las emociones. El objetivo es que las personas sepan reconocer qué sienten en cada momento y por qué lo sienten, además de enseñarles recursos para gestionar la situación de la forma más beneficiosa y productiva posible.\r\n\r\nUna correcta educación emocional conlleva una mejor relación con uno mismo y con la gente que te rodea. Se trata de un elemento básico para construir lo que se conoce como inteligencia emocional, constituida por las habilidades emocionales básicas para un correcto conocimiento de nuestro funcionamiento interno, nuestras necesidades y la manera de expresarlas a los demás.\r\n\r\nPara conseguir un resultado óptimo, la educación emocional no debe limitarse a un contenido teórico, sino que debe enfocarse a las situaciones cotidianas que vive y experimenta la persona. Tampoco existe una franja de edad concreta a la hora de enseñarla. Sí que es verdad que una pronta educación emocional en la infancia permite a los niños aprender las habilidades adecuadas que les facilitarán su desarrollo como adultos. No hay que olvidar que los niños carecen de las herramientas necesarias para gestionarse emocionalmente, y una inadecuada educación al respecto puede ocasionar traumas, miedos y trastornos.'),
(9, 'Las estaciones y su influencia en el estado de ánimo', 'Así es como los cambios generados por el paso de las estaciones pueden afectar al estado de ánimo.', '¿Has oído hablar de la depresión estacional? ¿Sientes que cuando cambiamos de estación tu estado de ánimo cambia o se ve afectado de algún modo? Pues sí, la luz y las condiciones climáticas y/o ambientales nos afectan.\r\n\r\nNos encontramos ante un tema muy interesante sobre el que muchas personas buscan información. Pues bien, hay varias cuestiones a tratar. Aunque se desconocen las causas concretas sobre las variaciones en el estado de ánimo en función de las distintas estaciones del año, numerosos investigadores coinciden en que la luz solar juega un papel muy importante en los cambios hormonales y en los neurotransmisores.\r\nEl reloj biológico\r\nLos cambios anímicos pueden estar relacionados por la respuesta del cerebro a la disminución de la luz y a la relación que esto tiene con algunas hormonas esenciales en la regulación de los ciclos de sueño-vigilia, energía y estado de ánimo, como pueden ser la melatonina y la serotonina. De qué se encargan ambas sustancias?\r\n\r\nMelatonina\r\nLa melatonina es una hormona que secretamos de forma natural, y su principal función es la de regular los ciclos de sueño y vigilia. Normalmente, cuando cae la tarde y, por tanto, la intensidad de la luz, aumenta la secreción de melatonina, disminuyendo cuando sale el sol por la mañana.\r\n\r\nSerotonina\r\nLa serotonina es un neurotransmisor que se encarga, entre otras cosas, de regular nuestro estado de ánimo junto con otras sustancias. Niveles bajos de serotonina se relacionan con los síntomas derivados de la depresión, como pueden ser la tristeza, desesperanza, melancolía, apatía, irritabilidad, etc. ¿Qué podría provocar niveles bajos de serotonina?\r\n\r\nCientíficos relacionan los niveles de serotonina con la exposición a la luz solar, por lo que, explicado de una manera sencilla, a falta de luz = niveles bajos de serotonina, y, por tanto, probable aparición de síntomas depresivos. Por el contrario, a cuanta más luz solar estemos expuestos, más aumentarán nuestros niveles de serotonina, y como consecuencia nos sentiremos más enérgicos, animados y eufóricos.\r\n\r\n¿Podemos cuadrar esta explicación con las estaciones del año?\r\nPor supuesto. Durante los meses de otoño e invierno, las horas de luz disminuyen y, por tanto, al estar menos expuestos, nuestros niveles de serotonina se ven reducidos, tendiendo a estar más tristes o irritados.\r\nEn cambio, durante los meses de primavera y verano en los que los días son más largos, los niveles de esta sustancia aumentan y nos sentimos mejor. Si durante los meses otoñales e invernales, no sólo tenemos en cuenta las consecuencias de los bajos niveles de serotonina en nuestro estado de ánimo, sino que además añadimos problemas del día a día, problemas del pasado o inquietudes varias, debilidad en nuestro sistema inmunitario, ansiedad y/o migrañas, tenemos la combinación perfecta para sentirnos mal.\r\n\r\nSon numerosos los factores que pueden influir en nuestro estado de ánimo, pero está claro, que la influencia del clima en nuestro organismo provoca consecuencias de un tipo y otro. También es necesario decir que no todo el mundo las nota, pero una amplia mayoría de la población se podría decir que sí.\r\n¿Qué podemos decir de épocas del año como la primavera y el verano?\r\nPues bien, también hay ciertas personas que no lo pasan especialmente bien en estos meses. En primavera existe lo que se conoce como “Astenia Primaveral”, y se define como la sensación de cansancio, desmotivación y alteraciones en el humor que sufren muchas personas.\r\n\r\nEntre sus causas, podemos encontrar la aparición de alergias, el cambio de horario y de rutinas que provocan una disminución en la secreción de endorfinas que son las hormonas del bienestar. Por otra parte, en los meses de verano, y en determinados lugares, el calor extremo produce fatiga, agotamiento... lo cual nos puede conducir a sentirnos más cansados y más débiles.\r\nEs recomendable realizarse una revisión médica anual para descartar que ninguno de estos síntomas físicos como el agotamiento o cansancio, puedan estar provocados por alguna patología orgánica.');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
