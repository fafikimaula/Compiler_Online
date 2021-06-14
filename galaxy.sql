-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: mysql-server
-- Waktu pembuatan: 13 Jun 2021 pada 12.25
-- Versi server: 8.0.19
-- Versi PHP: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `galaxy`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `file`
--

CREATE TABLE `file` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `source_code` text NOT NULL,
  `language_code` int NOT NULL,
  `extention` varchar(10) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data untuk tabel `file`
--

INSERT INTO `file` (`id`, `user_id`, `name`, `source_code`, `language_code`, `extention`, `created_at`, `updated_at`) VALUES
(13, 7, 'HelloWorld', '', 53, 'c', '2021-04-01 16:23:09', '2021-04-01 16:23:09'),
(15, 1, 'Java', 'public class Main{\n  public static void main(String args[]){\n    System.out.println(\"hello\");\n  }\n}\n', 62, 'java', '2021-04-01 21:26:42', '2021-04-01 21:26:42'),
(19, 1, 'tes', 'print \"asdas\"', 70, 'py', '2021-04-02 00:29:47', '2021-04-02 00:29:47'),
(21, 1, 'piton', 'def execute(): \n	 for i in range(10):\n		 print i \nexecute()', 70, 'py', '2021-04-02 12:05:37', '2021-04-02 12:05:37'),
(23, 1, 'aaa', 'def execute(): \n     a = int(input())\n	 for i in range(a):\n		 print i \nexecute()', 70, 'py', '2021-04-02 12:07:46', '2021-04-02 12:07:46'),
(25, 8, 'sss', 'public class Main{\n  public static void main(String args[]){\n    System.out.println(\"hello\");\n  }\n}\n', 62, 'java', '2021-04-02 12:10:58', '2021-04-02 12:10:58'),
(28, 9, 'tes', 'def execute(): \n	 for i in range(10):\n		 print i \nexecute()', 70, 'py', '2021-04-06 07:53:11', '2021-04-06 07:53:11'),
(35, 9, '1', '#include <iostream>\n        using namespace std;\n    int main() {\n        cout << \"Hello World\"; \n\n    } ', 53, 'c', '2021-04-06 08:15:13', '2021-04-06 08:15:13'),
(40, 9, 'coba', '#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n     int sisi, luas;\n\n     cout<<\"=========================\"<<endl;\n     cout<<\"== Program Luas Persegi (Cpp) ==\";\n     cout<<\"=========================\"<<endl;\n\n\n     cout<<\"Rumus untuk menghitung Luas Persegi = Sisi x Sisi\";\n\n     cout<<\"Masukkan panjang Sisi Persegi : \";\n\n     // Contoh Input Bahasa C++\n     cin>>sisi;\n\n     luas = sisi*sisi;\n\n     // Contoh Output Bahasa C++\n     cout<<endl<<\"Luas Persegi = \"<<luas;\n\n     return 0;\n}', 53, 'c', '2021-04-07 07:34:06', '2021-04-07 07:34:06'),
(41, 9, 'fafiki', 'def execute(): \n	 for i in range(10):\n		 print i \nexecute()', 70, 'py', '2021-04-07 08:43:45', '2021-04-07 08:43:45'),
(42, 9, 'tesstttt', 'public class Main {\n        public static void main(String args[]) {\n            System.out.println(\"hello\");\n        }\n    }\n    ', 62, 'java', '2021-04-08 07:13:08', '2021-04-08 07:13:08'),
(43, 9, '123', 'public class Main {\n        public static void main(String args[]) {\n            System.out.println(\"hello\");\n        }\n    }\n    ', 62, 'java', '2021-04-08 07:20:09', '2021-06-13 11:38:15'),
(44, 9, 'fafiki', 'Module VBModule\n    Sub Main()\n        Console.WriteLine(\"Hello World\")\n    End Sub\nEnd Module\n', 84, 'vb', '2021-04-08 07:33:04', '2021-06-13 12:24:04'),
(45, 9, 'ruby', 'puts \"Hello World\"', 72, 'rb', '2021-04-08 07:39:36', '2021-06-13 11:37:40'),
(46, 9, 'r', 'print(\"Hello World\")', 80, 'r', '2021-04-08 07:56:48', '2021-06-13 11:51:47'),
(48, 14, 'HelloWorld-2021-4-12', '', 53, 'c', '2021-04-12 08:04:05', '2021-04-12 08:04:05');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id` int NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `photo` varchar(100) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id`, `first_name`, `last_name`, `email`, `password`, `photo`, `created_at`) VALUES
(7, 'coba', 'coba', 'coba@coba.com', '1621a5dc746d5d19665ed742b2ef9736', NULL, '2021-04-01 16:43:24'),
(8, 'fafiki', 'coba', 'fafikimaula@mail.com', 'f9871976d835857a3181ddcc76b2db32', NULL, '2021-04-02 12:08:10'),
(9, 'fafiki', 'maula', 'maula@gmail.com', 'f9871976d835857a3181ddcc76b2db32', NULL, '2021-04-06 05:01:01'),
(12, 'coba', '', 'coba@gmail.com', '202cb962ac59075b964b07152d234b70', NULL, '2021-04-07 08:49:14'),
(14, 'fafiki', '', 'coba677@gmail.com', '202cb962ac59075b964b07152d234b70', NULL, '2021-04-12 08:03:58'),
(15, 'Faafikii', 'Maulaa', 'maulahikma112@gmail.com', '202cb962ac59075b964b07152d234b70', NULL, '2021-06-06 05:21:33'),
(16, 'Coba', 'Testing', 'cobatesting@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', NULL, '2021-06-12 01:12:49');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `file`
--
ALTER TABLE `file`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `file`
--
ALTER TABLE `file`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
