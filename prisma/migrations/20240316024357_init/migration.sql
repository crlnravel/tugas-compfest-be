-- CreateTable
CREATE TABLE "Makanan" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "harga" DOUBLE PRECISION NOT NULL,
    "stok" INTEGER NOT NULL,
    "deskripsi" TEXT NOT NULL,

    CONSTRAINT "Makanan_pkey" PRIMARY KEY ("id")
);
