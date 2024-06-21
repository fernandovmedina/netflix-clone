# Usa una imagen base de Go para construir la aplicación
FROM golang:latest AS builder

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el código fuente de la aplicación al contenedor
COPY . .

# Compila la aplicación
RUN go build -o app .

# Usa una imagen base más pequeña para ejecutar la aplicación
FROM alpine:latest

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /root/

# Copia el ejecutable de la imagen de construcción al contenedor final
COPY --from=builder /app/app .

# Expone el puerto en el que correrá la aplicación
EXPOSE 8080

# Comando para ejecutar la aplicación
CMD ["./app"]
