CREATE TABLE public.brinquedos
(
)

WITH (
    OIDS = FALSE
);

ALTER TABLE public.brinquedos
    OWNER to postgres;
	
ALTER TABLE public.brinquedos ADD COLUMN id serial
ALTER TABLE public.brinquedos ADD COLUMN brinquedo character varying(50)

INSERT INTO brinquedos (brinquedo)
VALUES ('StarMountain'),
('raskapuska'),
('BigTower'),
('FireWhip')

CREATE TABLE public.brinquedo_e_visitante
(
)

WITH (
    OIDS = FALSE
);

ALTER TABLE public.brinquedos
    OWNER to postgres;
	
	ALTER TABLE public.brinquedo_e_visitante
    ADD COLUMN id serial;
	
	ALTER TABLE public.brinquedo_e_visitante
    ADD COLUMN id_ingresso integer;
	
	ALTER TABLE public.brinquedo_e_visitante
    ADD COLUMN id_visitante integer;
	
	ALTER TABLE public.brinquedo_e_visitante
    ADD COLUMN id_brinquedo integer;
	
	INSERT INTO brinquedo_e_visitante (id_visitante, id_ingresso, id_brinquedo)
values 
    (1, 1, 1),
	(1, 2, 4),
	(2, 3, 2),
	(3, 1, 3),
	(2, 3, 1),
	(3, 2, 4),
	(4, 1, 3),
	(5, 2, 3),
	(4, 2, 1)
	select
	visitante.nome,
	brinquedos.brinquedo,
	ingresso.data_visita
	from brinquedo_e_visitante
	
	join visitante on visitante.id = id_visitante
	join brinquedos on brinquedos.id = brinquedo_e_visitante.id_brinquedo
	join ingresso on ingresso.id = brinquedo_e_visitante.id_ingresso

