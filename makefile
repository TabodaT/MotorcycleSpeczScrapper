SHL:=$(shell uname -s)
IS_MAC :=$(filter Darwin,$(SHL))
U_ID:=$(if $(IS_MAC),1000 ,$(shell id -u))
G_ID:=$(if $(IS_MAC),1000 ,$(shell id -g))

start:
	HOST_UID=${U_ID} HOST_GID=${G_ID} docker-compose up -d --build --force-recreate

start:
	HOST_UID=${U_ID} HOST_GID=${G_ID} docker-compose down
