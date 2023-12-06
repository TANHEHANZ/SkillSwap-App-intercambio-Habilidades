-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Solicitud" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "detalles" TEXT NOT NULL,
    "comentarios" TEXT,

    CONSTRAINT "Solicitud_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trabajos" (
    "id" SERIAL NOT NULL,
    "imagen" TEXT,
    "recurso" TEXT,
    "descripcion" TEXT NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'false',
    "usuarioId" INTEGER NOT NULL,

    CONSTRAINT "Trabajos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comentarios" (
    "id" SERIAL NOT NULL,
    "comentario" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "trabajoId" INTEGER NOT NULL,

    CONSTRAINT "Comentarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Habilidad" (
    "id" SERIAL NOT NULL,
    "habilidad" TEXT NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'false',
    "usuarioId" INTEGER NOT NULL,

    CONSTRAINT "Habilidad_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_correo_key" ON "Usuario"("correo");

-- AddForeignKey
ALTER TABLE "Solicitud" ADD CONSTRAINT "Solicitud_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trabajos" ADD CONSTRAINT "Trabajos_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comentarios" ADD CONSTRAINT "Comentarios_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comentarios" ADD CONSTRAINT "Comentarios_trabajoId_fkey" FOREIGN KEY ("trabajoId") REFERENCES "Trabajos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Habilidad" ADD CONSTRAINT "Habilidad_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
