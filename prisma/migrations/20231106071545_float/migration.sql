/*
  Warnings:

  - You are about to alter the column `temperature` on the `AIConfig` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `top_p` on the `AIConfig` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `frequency_penalty` on the `AIConfig` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `presence_penalty` on the `AIConfig` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `AIConfig` MODIFY `temperature` DOUBLE NOT NULL,
    MODIFY `top_p` DOUBLE NOT NULL,
    MODIFY `frequency_penalty` DOUBLE NOT NULL,
    MODIFY `presence_penalty` DOUBLE NOT NULL;
